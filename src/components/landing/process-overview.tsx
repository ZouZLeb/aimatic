"use client";

import { motion } from "framer-motion";
import { 
  PhoneCall, 
  FileText, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  RefreshCcw
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Free consultation Call",
    description: "A 15-minute technical review of your manual bottlenecks.",
    icon: PhoneCall,
    badge: "Phase 01",
    color: "text-blue-500",
  },
  {
    title: "Fixed-Fee Blueprint",
    description: "Complete system scope with transparent, guaranteed pricing.",
    icon: FileText,
    badge: "Phase 02",
    color: "text-amber-500",
  },
  {
    title: "Secure Custom Build",
    description: "n8n workflows & custom scripts built for your private VPC.",
    icon: Code2,
    badge: "Phase 03",
    color: "text-purple-500",
  },
  {
    title: "Security Validation",
    description: "Rigorous testing to ensure 0% data leakage to third-parties.",
    icon: ShieldCheck,
    badge: "Phase 04",
    color: "text-green-500",
  },
  {
    title: "System Handover",
    description: "You receive the source code. 100% IP ownership. No vendor lock-in.",
    icon: Rocket,
    badge: "Phase 05",
    color: "text-red-500",
  },
  {
    title: "Optional Ongoing Support",
    description: "Optional ongoing priority updates and lifecycle monitoring.",
    icon: RefreshCcw,
    badge: "Phase 06",
    color: "text-cyan-500",
  },
];

export default function ProcessOverview() {
  return (
    <section id="services" className="bg-transparent py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black font-headline mb-4 tracking-tight">
            The Engineering Lifecycle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, security-first process designed to transition your team from manual work to complete automation ownership.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central spine line - hidden on very small screens, responsive for others */}
          <div className="absolute left-8 md:left-1/2 top-[40px] bottom-[40px] w-px bg-gradient-to-b from-primary via-border to-primary -translate-x-1/2 hidden sm:block opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center justify-between",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-[42%] ml-16 sm:ml-0",
                  idx % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <Card className="border-border/50 bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 group shadow-none hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className={cn(
                        "flex items-center gap-2 mb-3",
                        idx % 2 === 0 ? "md:flex-row-reverse" : "flex-row"
                      )}>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[9px] uppercase font-bold tracking-[0.2em] px-2 py-0.5">
                          {step.badge}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full border-4 border-background bg-card flex items-center justify-center shadow-xl ring-1 ring-border",
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <step.icon size={20} className={step.color} />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing summary bar */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center border-t border-border/30 pt-12">
            <div className="space-y-1">
               <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Zero Task Fees</h4>
               <p className="text-[11px] text-muted-foreground">Run unlimited tasks on your own infrastructure.</p>
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Complete IP</h4>
               <p className="text-[11px] text-muted-foreground">Receive full source code and documentation at handover.</p>
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Data Sovereignty</h4>
               <p className="text-[11px] text-muted-foreground">Your proprietary business data never touches our servers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
