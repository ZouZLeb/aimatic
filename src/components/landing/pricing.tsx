"use client";

import { Check, ShieldCheck, Zap, Code, Database, UserCheck, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const valuePropositions = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Certified",
    description: "Every workflow is built by Security+ and AWS certified engineers, ensuring zero vulnerabilities in your data path."
  },
  {
    icon: Code,
    title: "100% IP Ownership",
    description: "You own the source code, the n8n workflows, and the custom scripts. No vendor lock-in, no recurring licensing fees."
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description: "We deploy to your private VPC or self-hosted servers. Your sensitive data never touches our infrastructure."
  },
  {
    icon: Zap,
    title: "No Per-Task Fees",
    description: "Stop paying SaaS taxes. Once built, you can run millions of tasks without the costs associated with Zapier or Make."
  },
  {
    icon: UserCheck,
    title: "Custom n8n Nodes",
    description: "We build proprietary nodes for your internal tools, providing deep integration that generic platforms can't offer."
  },
  {
    icon: FileText,
    title: "Full Documentation",
    description: "Every system comes with comprehensive technical docs and training for your internal team to maintain control."
  }
];

const buildTiers = [
  {
    name: "Standard Optimization",
    scope: "Single Core Process",
    features: [
      "Custom n8n workflow engineering",
      "Deep-system API integrations",
      "Custom data transformation logic",
      "Basic security hardening",
      "14-day post-launch support"
    ],
    bestFor: "Eliminating one major manual bottleneck."
  },
  {
    name: "Enterprise Architecture",
    scope: "Multi-Department Infrastructure",
    features: [
      "High-availability n8n deployment",
      "Advanced Python/Node.js scripting",
      "Encrypted secret management",
      "Legacy system synchronization",
      "Full architecture audit & documentation",
      "30-day post-launch engineering support"
    ],
    bestFor: "Replacing fragmented SaaS tools with a unified core.",
    highlighted: true
  },
  {
    name: "Custom R&D Lab",
    scope: "Continuous Innovation",
    features: [
      "Dedicated senior engineer resource",
      "Unlimited system adjustments",
      "New feature prototyping",
      "Monthly security patching",
      "Emergency incident response (4hr SLA)"
    ],
    bestFor: "Companies needing an external engineering arm."
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-headline mb-4">
            The SecureAutomate Standard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build automations; we engineer private, production-grade systems that your business owns completely.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {valuePropositions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex gap-4 p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Flexible Engagement Models</h3>
          <p className="text-muted-foreground">Tailored to your architectural needs and business scale.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 items-start">
          {buildTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(tier.highlighted && "transform lg:scale-105 z-10")}
            >
              <Card
                className={cn(
                  "h-full flex flex-col transition-all duration-500",
                  tier.highlighted
                    ? "bg-primary text-primary-foreground border-2 border-primary shadow-2xl"
                    : "bg-card border-border shadow-sm"
                )}
              >
                <div className="p-8">
                  {tier.highlighted && (
                    <div className="bg-yellow-400 text-blue-950 text-[10px] font-black py-1 px-4 rounded-full inline-block mb-4 absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg tracking-widest uppercase">
                      Most Requested
                    </div>
                  )}
                  <h3 className="text-2xl font-black mb-1">{tier.name}</h3>
                  <div className={cn("text-xs font-bold uppercase tracking-widest mb-4", tier.highlighted ? "text-primary-foreground/80" : "text-primary")}>
                    {tier.scope}
                  </div>
                  <p className={cn("mb-6 text-sm", tier.highlighted ? "text-primary-foreground/90" : "text-muted-foreground")}>
                    {tier.bestFor}
                  </p>
                  
                  <Button asChild className={cn("w-full font-bold h-12", tier.highlighted ? "bg-white text-primary hover:bg-slate-100" : "bg-primary text-white")} size="lg">
                    <Link href="#contact">Consult with an Engineer</Link>
                  </Button>
                </div>
                
                <div className="p-8 bg-black/5 dark:bg-white/5 flex-grow">
                   <h4 className="font-bold text-[10px] mb-6 uppercase tracking-[0.2em] opacity-60">Deliverables include:</h4>
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={cn("w-4 h-4 mt-0.5 flex-shrink-0", tier.highlighted ? "text-green-300" : "text-green-600")}
                        />
                        <span className="text-sm font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <Globe className="text-primary w-6 h-6" /> Ready for a Private Build?
              </h3>
              <p className="text-gray-400 max-w-md">
                Get an accurate quote based on your specific complexity using our calculator or book a strategy session.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-8">
                <Link href="#roi-calculator">Use Cost Calculator</Link>
              </Button>
              <Button asChild className="bg-primary text-white hover:bg-primary/90 h-12 px-8 font-bold">
                <Link href="#contact">Book Architecture Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
