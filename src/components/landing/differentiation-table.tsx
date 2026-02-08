"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Data Privacy & Control",
    chatgpt: { status: "no", text: "Data shared with LLM providers" },
    nocode: { status: "partial", text: "Third-party server storage" },
    custom: { status: "yes", text: "Self-hosted or private cloud" },
    details:
      "Most 'AI agencies' use tools that feed your sensitive company data back into LLM training loops. We build systems using self-hosted n8n or private scripts, ensuring your data never leaves your controlled environment unless you want it to.",
  },
  {
    feature: "System Ownership",
    chatgpt: { status: "no", text: "Subscription-locked" },
    nocode: { status: "no", text: "Platform-locked" },
    custom: { status: "yes", text: "You own 100% of the code" },
    details:
      "Stop paying per-task fees. When we build a system, it's yours. We deliver the source code and workflow files. If we part ways, your automation keeps running exactly as it was, with no dependencies on our billing.",
  },
  {
    feature: "Technical Depth",
    chatgpt: { status: "no", text: "Prompt-based only" },
    nocode: { status: "partial", text: "Drag-and-drop limits" },
    custom: { status: "yes", text: "Full custom logic & scripts" },
    details:
      "Templates break. We use real software development practices—Node.js, Python, and advanced n8n logic—to handle edge cases, complex data transformations, and legacy system integrations that 'no-code' tools can't touch.",
  },
  {
    feature: "Security Certification",
    chatgpt: { status: "no", text: "None" },
    nocode: { status: "partial", text: "Standard SaaS terms" },
    custom: { status: "yes", text: "Built by Security+ Engineers" },
    details:
      "We aren't just 'AI enthusiasts'. We are certified software and cybersecurity professionals. Every line of code is written with threat modeling, encryption, and the principle of least privilege in mind.",
  },
];

const StatusIcon = ({ status }: { status: "yes" | "no" | "partial" }) => {
  if (status === "yes")
    return <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />;
  if (status === "no")
    return <XCircle className="w-6 h-6 text-red-600 mx-auto" />;
  return <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto" />;
};

export default function DifferentiationTable() {
  return (
    <section id="why-custom" className="bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Automation Built for Professionals
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Don't trust your business data to &apos;prompt wrappers&apos;. See how our engineering approach protects your bottom line and your privacy.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto bg-card/50 backdrop-blur-md rounded-lg border shadow-sm"
        >
          <div className="hidden md:grid md:grid-cols-5 p-4 border-b font-bold text-center">
            <div className="text-left font-headline text-lg col-span-2">Critical Business Need</div>
            <div>AI Wrappers</div>
            <div>No-Code Apps</div>
            <div>SecureCustom Build</div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {comparisonData.map((row, idx) => (
              <AccordionItem value={`item-${idx}`} key={idx} className="border-border/50">
                <AccordionTrigger className="grid md:grid-cols-5 w-full p-4 hover:bg-muted/30 transition-colors text-left md:text-center group">
                  <span className="col-span-2 text-left font-semibold text-foreground">
                    {row.feature}
                  </span>
                  <div className="hidden md:block">
                    <StatusIcon status={row.chatgpt.status} />
                  </div>
                  <div className="hidden md:block">
                    <StatusIcon status={row.nocode.status} />
                  </div>
                  <div className="hidden md:block">
                    <StatusIcon status={row.custom.status} />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-6 bg-primary/5 border-t border-border/50">
                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                      <div className="md:hidden grid grid-cols-2 gap-y-2 text-sm mb-4 border-b pb-4">
                        <span className="font-semibold">AI Wrappers:</span> <StatusIcon status={row.chatgpt.status} />
                        <span className="font-semibold">No-Code:</span> <StatusIcon status={row.nocode.status} />
                        <span className="font-semibold">Custom:</span> <StatusIcon status={row.custom.status} />
                      </div>
                      <div className="md:hidden">
                        <p className="text-foreground">{row.details}</p>
                      </div>
                      <div className="hidden md:block">
                        <h4 className="font-bold mb-2">AI Wrappers</h4>
                        <p className="text-muted-foreground">{row.chatgpt.text}</p>
                      </div>
                      <div className="hidden md:block">
                        <h4 className="font-bold mb-2">No-Code Tools</h4>
                        <p className="text-muted-foreground">{row.nocode.text}</p>
                      </div>
                      <div className="hidden md:block">
                        <h4 className="font-bold mb-2">Secure Custom Build</h4>
                        <p className="text-muted-foreground">{row.custom.text}</p>
                      </div>
                    </div>
                     <p className="hidden md:block text-muted-foreground mt-4 pt-4 border-t border-border/50">{row.details}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
