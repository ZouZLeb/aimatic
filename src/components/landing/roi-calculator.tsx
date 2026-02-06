"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import Link from "next/link";
import { motion } from "framer-motion";
import { Info, Layers, Workflow } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const COMPLEXITY_LEVELS = [
  { label: "Standard", multiplier: 1, description: "Standard n8n nodes." },
  { label: "Advanced", multiplier: 1.8, description: "Custom JS/Python logic." },
  { label: "Enterprise", multiplier: 3.5, description: "Massive throughput & security." },
];

export default function RoiCalculator() {
  const [hourlyRate, setHourlyRate] = useState(65);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [employees, setEmployees] = useState(3);
  const [integrations, setIntegrations] = useState(2);
  const [complexityIdx, setComplexityIdx] = useState(0);

  const [buildCost, setBuildCost] = useState(0);
  const [monthlyMaintenance, setMonthlyMaintenance] = useState(0);
  const [annualManualCost, setAnnualManualCost] = useState(0);
  const [firstYearSavings, setFirstYearSavings] = useState(0);
  const [roiDays, setRoiDays] = useState(0);

  useEffect(() => {
    const baseRatePerIntegration = 1250;
    const complexityMultiplier = COMPLEXITY_LEVELS[complexityIdx].multiplier;
    const calculatedBuild = Math.round(baseRatePerIntegration * integrations * complexityMultiplier);
    const calculatedMonthly = Math.round(calculatedBuild * 0.05);

    setBuildCost(calculatedBuild);
    setMonthlyMaintenance(calculatedMonthly);

    const weeklyManualCost = hourlyRate * hoursPerWeek * employees;
    const yearlyManualCost = weeklyManualCost * 52;
    setAnnualManualCost(yearlyManualCost);

    const totalInvestment = calculatedBuild + (calculatedMonthly * 12) + (calculatedBuild * 0.15);
    setFirstYearSavings(Math.max(0, yearlyManualCost - totalInvestment));

    const netWeeklyBenefit = (yearlyManualCost / 52) - (calculatedMonthly * 12 / 52);
    if (netWeeklyBenefit > 0) {
      setRoiDays(Math.ceil((calculatedBuild / netWeeklyBenefit) * 7));
    } else {
      setRoiDays(0);
    }
  }, [hourlyRate, hoursPerWeek, employees, integrations, complexityIdx]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="bg-slate-50/50 dark:bg-slate-950/40 border-y dark:border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-headline">System ROI Calculator</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Calculate the impact of replacing manual overhead with engineered n8n systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Card className="p-5 border-border shadow-sm bg-white dark:bg-slate-900/50">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-5">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Workflow className="w-3 h-3" /> Labor Burden
                  </h3>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase">Rate: ${hourlyRate}</Label>
                    </div>
                    <Slider value={[hourlyRate]} onValueChange={(val) => setHourlyRate(val[0])} min={20} max={250} step={5} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase">Hours: {hoursPerWeek}h</Label>
                    </div>
                    <Slider value={[hoursPerWeek]} onValueChange={(val) => setHoursPerWeek(val[0])} min={1} max={40} step={1} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase">Team: {employees}</Label>
                    </div>
                    <Slider value={[employees]} onValueChange={(val) => setEmployees(val[0])} min={1} max={50} step={1} />
                  </div>
                </div>

                <div className="space-y-5 border-t sm:border-t-0 sm:border-l sm:pl-8 pt-6 sm:pt-0">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Layers className="w-3 h-3" /> Architecture
                  </h3>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase">Integrations: {integrations}</Label>
                    </div>
                    <Slider value={[integrations]} onValueChange={(val) => setIntegrations(val[0])} min={1} max={12} step={1} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-[10px] font-bold text-muted-foreground uppercase">Complexity</Label>
                      <span className="text-[10px] font-bold text-primary">{COMPLEXITY_LEVELS[complexityIdx].label}</span>
                    </div>
                    <Slider value={[complexityIdx]} onValueChange={(val) => setComplexityIdx(val[0])} min={0} max={2} step={1} />
                  </div>
                  <div className="pt-4 border-t border-dashed space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-muted-foreground">Est. Build:</span>
                      <span className="font-bold">{formatCurrency(buildCost)}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-muted-foreground">Support:</span>
                      <span className="font-bold">{formatCurrency(monthlyMaintenance)}/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900 text-white p-6 shadow-xl h-full flex flex-col justify-between relative overflow-hidden border border-primary/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Projections</span>
                    <h3 className="text-xl font-black">Financial Summary</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase opacity-40">Breakeven</span>
                    <div className="text-xl font-black text-white">{roiDays} <span className="text-xs opacity-60">days</span></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-[10px] uppercase font-bold opacity-50 block mb-1">Manual Labor (Year)</span>
                    <div className="text-lg font-black text-red-400">
                      <CountUp start={0} end={annualManualCost} duration={1} formattingFn={formatCurrency} />
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-[10px] uppercase font-bold opacity-50 block mb-1">Net Savings (Yr 1)</span>
                    <div className="text-lg font-black text-accent">
                      <CountUp start={0} end={firstYearSavings} duration={1} formattingFn={formatCurrency} />
                    </div>
                  </div>
                </div>

                <div className="relative pt-2">
                  <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 font-black text-base h-12 shadow-lg">
                    <Link href="#contact">Get Quote for this Architecture</Link>
                  </Button>
                </div>

                <div className="flex justify-around text-[9px] uppercase font-bold tracking-widest opacity-40">
                  <span>Full IP Ownership</span>
                  <span>No Per-Task Fees</span>
                  <span>Data Sovereignty</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
