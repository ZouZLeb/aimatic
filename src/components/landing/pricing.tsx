"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Standard Build",
    price: "$2,500+",
    priceDetail: "fixed project fee",
    bestFor: "Optimizing a core business process",
    features: [
      "Custom n8n workflow engineering",
      "Up to 3 deep-system integrations",
      "Full source code delivery",
      "Security audit & threat model",
    ],
    timeline: "2 weeks",
    cta: "Start Your Build",
    ctaLink: "#contact",
    highlighted: false,
  },
  {
    name: "Enterprise Architecture",
    price: "$7,500+",
    priceDetail: "custom scope",
    bestFor: "Cross-departmental infrastructure",
    features: [
      "Self-hosted n8n infrastructure",
      "Advanced custom Node/Python scripts",
      "Complex API development",
      "Staff training & documentation",
      "Priority security monitoring",
    ],
    timeline: "4-6 weeks",
    cta: "Request Architecture Review",
    ctaLink: "#contact",
    highlighted: true,
  },
  {
    name: "Ongoing Engineering",
    price: "Custom",
    priceDetail: "monthly retainer",
    bestFor: "Businesses requiring continuous R&D",
    features: [
      "Dedicated senior engineer",
      "Unlimited workflow adjustments",
      "Regular security patching",
      "Emergency incident response",
    ],
    timeline: "Ongoing",
    cta: "Contact Us",
    ctaLink: "#contact",
    highlighted: false,
  },
];

const includedFeatures = [
    "Full IP Ownership",
    "Self-Hosted Support",
    "Security-Certified Build",
    "30-Day Support Post-Launch",
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Transparent Engineering Rates.
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We don't charge per-task fees. Pay for the engineering once, own your automation forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 items-start">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(tier.highlighted && "transform lg:scale-105 z-10")}
            >
              <Card
                className={cn(
                  "h-full flex flex-col transition-all duration-300",
                  tier.highlighted
                    ? "bg-primary text-primary-foreground border-2 border-primary shadow-2xl"
                    : "bg-card border-border shadow-sm"
                )}
              >
                <div className="p-8">
                  {tier.highlighted && (
                    <div className="bg-yellow-400 text-blue-950 text-xs font-black py-1 px-4 rounded-full inline-block mb-4 absolute -top-4 left-1/2 -translate-x-1/2 shadow-md">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className={cn("mb-4 text-sm", tier.highlighted ? "text-primary-foreground/90" : "text-muted-foreground")}>
                    {tier.bestFor}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-black">{tier.price}</span>
                    <span className={cn("text-sm ml-2 font-medium", tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
                      {tier.priceDetail}
                    </span>
                  </div>
                  
                  <Button asChild className={cn("w-full font-bold", tier.highlighted ? "bg-white text-primary hover:bg-slate-100" : "bg-primary text-white")} size="lg">
                    <Link href={tier.ctaLink}>{tier.cta}</Link>
                  </Button>
                </div>
                
                <div className="p-8 bg-black/5 dark:bg-white/5 flex-grow">
                   <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Project inclusions:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={cn("w-5 h-5 mt-0.5 flex-shrink-0", tier.highlighted ? "text-green-300" : "text-green-600")}
                        />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div className="p-8 border-t dark:border-white/10">
                    <span className="text-xs font-bold uppercase text-muted-foreground tracking-widest mr-2">Est. Timeline: </span>
                    <span className="text-sm font-semibold">{tier.timeline}</span>
                  </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-card rounded-xl p-8 max-w-4xl mx-auto border shadow-sm">
          <h3 className="text-lg font-bold mb-6">Every Project Features:</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {includedFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                </div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-8 border-t pt-4">
            * We specialize in n8n, Python, Node.js, and SQL. No platform lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}
