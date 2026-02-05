"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Bug, Activity, Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Privacy Audit & Modeling",
    description: "Map your data to ensure 0% leakage to third-parties.",
    details: [
      "Identification of sensitive PII and trade secrets",
      "Analysis of data destinations to prevent AI-training leakage",
      "Regulatory compliance mapping (GDPR, CCPA, HIPAA)",
      "Strict vetting of all workflow dependencies",
    ],
  },
  {
    id: 2,
    icon: Lock,
    title: "Secure n8n/Code Architecture",
    description: "Self-hosted, encrypted, and production-grade.",
    details: [
      "Deployment to your private VPC or self-hosted server",
      "Encryption of secrets using enterprise-grade vaults",
      "Custom authentication protocols (OAuth2/SAML)",
      "System isolation to prevent lateral movement threats",
    ],
  },
  {
    id: 3,
    icon: Bug,
    title: "Verification & Hardening",
    description: "Rigorous testing by security-certified engineers.",
    details: [
      "Penetration testing of all custom API endpoints",
      "Static and dynamic code analysis for vulnerabilities",
      "Stress testing for reliability and error-resilience",
      "Input validation to prevent prompt-injection and SQLi",
    ],
  },
  {
    id: 4,
    icon: Activity,
    title: "Lifecycle Support",
    description: "Continuous monitoring and priority updates.",
    details: [
      "Proactive patching of all script dependencies",
      "Real-time monitoring of workflow health and performance",
      "Ongoing security audits as your business scales",
      "Direct engineer access for support and maintenance",
    ],
  },
];

export default function SecurityProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="security" className="bg-slate-900 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Certified Security First. No Compromises.
          </h2>
          <p className="text-lg text-primary-foreground/70 mt-4 max-w-3xl mx-auto">
            We don't just build automations; we engineer secure systems. Our 4-stage lifecycle ensures your proprietary data stays proprietary.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-x-8 gap-y-4 mb-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 hidden md:block" />
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                className="cursor-pointer text-center relative z-10"
                onClick={() => setActiveStep(step.id)}
                whileHover={{ scale: 1.05 }}
              >
                <div className={cn("mx-auto w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                activeStep === step.id ? 'bg-primary border-blue-300' : 'bg-gray-700 border-gray-600 hover:border-primary'
                )}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mt-4 mb-1">{step.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <AnimatePresence mode="wait">
              {activeStep && (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent className="p-8">
                     <h3 className="text-xl font-bold mb-4 font-headline">{processSteps.find(s => s.id === activeStep)?.title} Specifications</h3>
                    <ul className="space-y-3">
                        {processSteps
                        .find((s) => s.id === activeStep)
                        ?.details.map((detail, idx) => (
                            <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3"
                            >
                            <Check className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                            <span>{detail}</span>
                            </motion.li>
                        ))}
                    </ul>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
    </section>
  );
}
