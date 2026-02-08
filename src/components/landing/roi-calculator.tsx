"use client";

import { useState, useMemo } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import Link from "next/link";
import { ShieldCheck, Database, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPLEXITY_LEVELS = [
  { label: "Standard", multiplier: 1, description: "n8n + Standard Nodes" },
  { label: "Advanced", multiplier: 2.5, description: "Custom JS & API Hooks" },
  { label: "Enterprise", multiplier: 6, description: "High-Security / Scale" },
];

export default function RoiCalculator() {
  const [integrations, setIntegrations] = useState(1);
  const [complexityIdx, setComplexityIdx] = useState(0);
  const [weeklyLabor, setWeeklyLabor] = useState(1500);

  const calculations = useMemo(() => {
    const basePrice = 499;
    const pricePerIntegration = 750;
    const complexityMultiplier = COMPLEXITY_LEVELS[complexityIdx].multiplier;
    const build = Math.round((basePrice + (integrations - 1) * pricePerIntegration) * complexityMultiplier);
    const annualLabor = weeklyLabor * 52;
    const savings = Math.max(0, annualLabor - build);
    return { build, annualLabor, savings };
  }, [integrations, complexityIdx, weeklyLabor]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="bg-transparent py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black font-headline tracking-tight">Estimate Your Investment</h2>
          <p className="text-muted-foreground mt-2">See how an engineered system pays for itself in weeks.</p>
        </div>

        <Card className="overflow-hidden border border-border/50 shadow-2xl flex flex-col md:flex-row bg-card/40 backdrop-blur-lg">
          <div className="md:w-3/5 p-8 lg:p-10 space-y-10">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Integrations</Label>
                <span className="text-2xl font-black text-primary">{integrations}</span>
              </div>
              <Slider 
                value={[integrations]} 
                onValueChange={(val) => setIntegrations(val[0])} 
                min={1} 
                max={12} 
                step={1} 
                className="py-2"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">System Complexity</Label>
              <div className="grid grid-cols-3 gap-2">
                {COMPLEXITY_LEVELS.map((level, idx) => (
                  <button
                    key={level.label}
                    onClick={() => setComplexityIdx(idx)}
                    className={cn(
                      "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all text-center",
                      complexityIdx === idx 
                        ? "border-primary bg-primary/10 text-primary" 
                        : "border-border/50 hover:border-primary/30 text-muted-foreground"
                    )}
                  >
                    <span className="font-bold text-xs">{level.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Weekly Labor Costs</Label>
                <span className="text-xl font-black">{formatCurrency(weeklyLabor)}</span>
              </div>
              <Slider 
                value={[weeklyLabor]} 
                onValueChange={(val) => setWeeklyLabor(val[0])} 
                min={200} 
                max={10000} 
                step={100} 
                className="py-2"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/30 border-dashed">
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                <ShieldCheck className="w-3 h-3 text-primary" /> Privacy
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                <Database className="w-3 h-3 text-primary" /> Ownership
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                <Zap className="w-3 h-3 text-primary" /> n8n Power
              </div>
            </div>
          </div>

          <div className="md:w-2/5 bg-primary/10 p-8 lg:p-10 flex flex-col justify-between border-l border-border/50">
            <div className="space-y-8">
              <div className="space-y-1">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Build Investment</span>
                <div className="text-4xl lg:text-5xl font-black tracking-tighter text-primary">
                  {formatCurrency(calculations.build)}
                </div>
                <div className="text-xs opacity-70 font-medium">One-time engineering fee</div>
              </div>

              <div className="space-y-4 pt-8 border-t border-border/50">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase opacity-60">Current Labor</span>
                  <span className="font-bold">{formatCurrency(calculations.annualLabor)}<span className="text-[10px] opacity-60">/yr</span></span>
                </div>
                <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                  <span className="text-xs font-bold uppercase opacity-60">1st Year Savings</span>
                  <span className="font-bold">{formatCurrency(calculations.savings)}</span>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <Link href="#contact" className="btn-custom-glass w-full">
                <div className="btn-custom-glass-inner">
                  <div className="btn-custom-glass-text flex items-center justify-center gap-2">
                    Get Architecture Audit
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}