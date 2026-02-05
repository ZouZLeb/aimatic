"use client";

import { motion } from "framer-motion";
import { Bot, Link2, MessageSquare, Code, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const services = [
  {
    id: 1,
    icon: Zap,
    title: "n8n Workflow Engineering",
    description: "Build robust, self-hosted automation workflows that integrate with 400+ apps without the high SaaS costs.",
    examples: [
      "Custom n8n nodes for proprietary tools",
      "End-to-end multi-app data pipelines",
      "Automated lead processing & enrichment",
      "Self-hosted privacy-focused scheduling",
    ],
    roi: "Own your infrastructure, 0 per-task fees",
    color: "text-blue-400",
  },
  {
    id: 2,
    icon: Code,
    title: "Custom Scripts & API Development",
    description: "When n8n isn't enough, we write production-ready Python or Node.js scripts for complex business logic.",
    examples: [
      "Secure data sync for legacy systems",
      "Custom internal tooling & dashboards",
      "Advanced PDF/Document parsing scripts",
      "HIPAA/SOC 2 compliant data handlers",
    ],
    roi: "100% ownership of source code",
    color: "text-purple-400",
  },
  {
    id: 3,
    icon: Link2,
    title: "Privacy-First System Integration",
    description: "Connect your tech stack through private APIs that don't leak metadata to third-party aggregators.",
    examples: [
      "Secure CRM ↔ ERP synchronization",
      "Private knowledge base integrations",
      "Inventory & Fulfillment automation",
      "Encrypted communication bridges",
    ],
    roi: "Total data sovereignty and security",
    color: "text-green-400",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-white dark:bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Production-Grade Solutions</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We don't sell &apos;AI templates&apos;. We build high-quality, custom systems that solve specific problems while keeping your data private.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:border-primary transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">
                     <service.icon className={`w-12 h-12 ${service.color}`} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3">
                      Core Offerings:
                    </h4>
                    <ul className="space-y-2">
                      {service.examples.map((example, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className={`${service.color} mt-1`}>•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t mt-auto">
                     <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                         {service.roi}
                     </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
