'use client';

/**
 * Multi-layer security utilities for AImatic Chatbot.
 * Handles HMAC signing, fingerprinting, and persistent device identification.
 */

const STORAGE_KEY = 'aimatic_device_id';
const SECRET_KEY = process.env.NEXT_PUBLIC_CHAT_SECRET || 'dev_secret_only_for_local';

/**
 * Generates or retrieves a persistent UUID for the device/user.
 * This allows the AI agent to maintain context across sessions.
 */
export function getPersistentDeviceId(): string {
  if (typeof window === 'undefined') return 'server_side';

  let deviceId = localStorage.getItem(STORAGE_KEY);
  if (!deviceId) {
    deviceId = `aim_${crypto.randomUUID()}`;
    localStorage.setItem(STORAGE_KEY, deviceId);
  }
  return deviceId;
}

/**
 * Generates a robust browser fingerprint using multiple entropy sources
 * and canvas rendering characteristics to ensure device uniqueness.
 */
export function getBrowserFingerprint(): string {
  if (typeof window === 'undefined') return 'server';
  
  const nav = window.navigator;
  const screen = window.screen;
  
  const fingerprintParts = [
    nav.userAgent,
    nav.language,
    nav.platform,
    nav.vendor,
    screen.colorDepth,
    screen.width + 'x' + screen.height,
    screen.availWidth + 'x' + screen.availHeight,
    new Date().getTimezoneOffset(),
    nav.hardwareConcurrency || 'unknown',
    (nav as any).deviceMemory || 'unknown',
    nav.maxTouchPoints || 0,
    nav.webdriver ? 'bot' : 'human',
  ];

  // Canvas Fingerprinting: Leverages GPU/Driver rendering differences
  // This is highly effective at distinguishing between identical hardware models
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = 200;
      canvas.height = 40;
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125,1,62,20);
      ctx.fillStyle = "#069";
      ctx.fillText("AImatic-Sec-Check-123", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText("AImatic-Sec-Check-123", 4, 17);
      fingerprintParts.push(canvas.toDataURL());
    }
  } catch (e) {
    // Fail silently, fallback to hardware entropy
  }

  const rawString = fingerprintParts.join('|');
  
  // Generate a unique 32-bit hash (DJB2-style algorithm)
  let hash = 5381;
  for (let i = 0; i < rawString.length; i++) {
    hash = ((hash << 5) + hash) + rawString.charCodeAt(i);
  }
  
  // Return as a positive hex string for the header
  return (hash >>> 0).toString(16);
}

/**
 * Creates an HMAC-SHA256 signature for a message payload.
 * Validates request authenticity on the server.
 */
export async function signRequest(payload: any, timestamp: number, nonce: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyBuffer = encoder.encode(SECRET_KEY);
  
  const dataToSign = JSON.stringify({
    ...payload,
    timestamp,
    nonce
  });

  const key = await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(dataToSign)
  );

  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}
