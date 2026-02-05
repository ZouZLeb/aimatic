'use server';
/**
 * @fileOverview An AI chatbot that qualifies leads based on privacy needs and engineering scope.
 *
 * - leadQualifyingChatbot - A function that handles the chatbot interaction and lead qualification process.
 * - LeadQualifyingChatbotInput - The input type for the leadQualifyingChatbot function.
 * - LeadQualifyingChatbotOutput - The return type for the leadQualifyingChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LeadQualifyingChatbotInputSchema = z.object({
  message: z.string().describe('The user message to the chatbot.'),
});
export type LeadQualifyingChatbotInput = z.infer<typeof LeadQualifyingChatbotInputSchema>;

const LeadQualifyingChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
  isQualified: z.boolean().describe('Whether the user is qualified as a lead.'),
  nextStep: z.string().optional().describe('The next step for the user, e.g., schedule an architecture review.'),
});
export type LeadQualifyingChatbotOutput = z.infer<typeof LeadQualifyingChatbotOutputSchema>;

export async function leadQualifyingChatbot(input: LeadQualifyingChatbotInput): Promise<LeadQualifyingChatbotOutput> {
  return leadQualifyingChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'leadQualifyingChatbotPrompt',
  input: {schema: LeadQualifyingChatbotInputSchema},
  output: {schema: LeadQualifyingChatbotOutputSchema},
  prompt: `You are an AI assistant for SecureAutomate, a specialized automation engineering firm.
  Your goal is to qualify leads for custom automation builds using n8n and custom scripts.
  
  IMPORTANT DIFFERENTIATORS:
  - We are NOT a 'chatgpt prompt' agency. We build custom code and workflows.
  - We focus on PRIVACY and DATA SOVEREIGNTY.
  - We build systems that the client OWNS.
  
  QUALIFICATION CRITERIA:
  - Does the client have privacy concerns (e.g., they don't want to share data with open LLMs)?
  - Is the project technically complex (e.g., legacy system sync, multi-app n8n workflows)?
  - Are they looking for professional software engineering, not just simple templates?

  Engage the user, ask about their industry and their biggest manual bottleneck.
  If they mention privacy, security, or "owning" their tech, they are highly qualified.

  If the user is a qualified lead, set isQualified to true and suggest an "Architecture Review".
  If they are looking for a simple $20 Zapier fix, politely inform them we focus on larger engineering builds.

  User Message: {{{message}}}
  `,
});

const leadQualifyingChatbotFlow = ai.defineFlow(
  {
    name: 'leadQualifyingChatbotFlow',
    inputSchema: LeadQualifyingChatbotInputSchema,
    outputSchema: LeadQualifyingChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
