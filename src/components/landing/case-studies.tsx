"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";

const staticCaseStudies = [
  {
    id: "1",
    clientType: "Automate Lead Generation",
    industry: "Sales & Real Estate",
    problemStatement: "How to automate email follow-ups and respond to DMs before leads go cold.",
    solutionOverview: "A private n8n lead engine that answers customers instantly, books meetings, and updates your CRM automatically.",
    imageId: "case-leads",
    timeSavedMetric: "20",
    timeUnit: "hrs/week",
    roiTimelineMetric: "2",
    roiUnit: "weeks",
    errorReductionMetric: "95",
    improvementLabel: "Faster Replies ↑",
    fullStoryTechStack: ["n8n", "Private AI", "Email Sync"],
    fullStoryTimeline: "2 weeks",
    fullStoryTestimonial: "It's so fast that clients think they are talking to a human. It's booked 15 meetings this week without us doing anything.",
  },
  {
    id: "2",
    clientType: "Social Media Machine",
    industry: "Marketing & Creative",
    problemStatement: "Writing and designing posts for 3 different social platforms every day was a full-time job.",
    solutionOverview: "A system that reads your latest news and creates draft posts for LinkedIn, Twitter, and Instagram in your voice.",
    imageId: "case-marketing",
    timeSavedMetric: "15",
    timeUnit: "hrs/week",
    roiTimelineMetric: "3",
    roiUnit: "weeks",
    errorReductionMetric: "300",
    improvementLabel: "More Posts ↑",
    fullStoryTechStack: ["Image AI", "Writing AI", "Content Calendar"],
    fullStoryTimeline: "3 weeks",
    fullStoryTestimonial: "I used to spend my whole Sunday planning content. Now I just click 'Approve' and the system handles the rest.",
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<any | null>(null);
  const firestore = useFirestore();
  const studiesRef = useMemoFirebase(() => query(collection(firestore, 'case_studies'), orderBy('order', 'asc')), [firestore]);
  const { data: dbStudies } = useCollection(studiesRef);

  const studies = useMemo(() => {
    return dbStudies && dbStudies.length > 0 ? dbStudies : staticCaseStudies;
  }, [dbStudies]);

  const getImg = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="case-studies" className="bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            How to Save Time in My Business with Automation
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Real-world examples of how AImatic helps San Diego businesses automate lead generation and follow-ups.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {studies.map((study) => {
                const studyImg = getImg(study.imageId || study.beforeImageUrl);
                return (
                  <CarouselItem key={study.id} className="pl-6 md:basis-1/2 lg:basis-1/3 py-4">
                    <Card
                      className="h-full overflow-hidden bg-card/40 backdrop-blur-md cursor-pointer group flex flex-col border-border/50"
                      onClick={() => setSelectedCase(study)}
                    >
                      <div className="relative h-48 bg-muted/20">
                        {studyImg && (
                          <Image
                            src={studyImg.imageUrl}
                            alt={study.clientType}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={studyImg.imageHint}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge variant="secondary" className="absolute bottom-2 left-2">{study.industry}</Badge>
                      </div>

                      <CardContent className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {study.clientType}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {study.problemStatement}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-2 py-4 border-t border-b bg-muted/10 -mx-6 px-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">
                              <CountUp end={parseFloat(study.timeSavedMetric)} duration={2} />{parseFloat(study.timeSavedMetric) % 1 !== 0 ? '' : '+'}
                            </div>
                            <div className="text-[9px] uppercase font-bold text-muted-foreground whitespace-nowrap">
                              {study.timeUnit || "hrs/week"}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">
                              <CountUp end={parseFloat(study.roiTimelineMetric)} duration={2} />
                            </div>
                            <div className="text-[9px] uppercase font-bold text-muted-foreground">
                              ROI in {study.roiUnit || "weeks"}
                            </div>
                          </div>
                          <div className="text-center">
                             <div className="text-lg font-bold text-primary">
                              <CountUp end={parseFloat(study.errorReductionMetric)} duration={2} suffix="%" />
                            </div>
                            <div className="text-[9px] uppercase font-bold text-muted-foreground leading-tight">
                              {study.improvementLabel || "Improved ↑"}
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="link" className="mt-4 self-start p-0 h-auto text-primary group-hover:underline text-xs shadow-none">
                          See Implementation <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="flex items-center justify-end gap-3 mt-4 md:mt-0">
              <CarouselPrevious className="static md:absolute md:-left-12 left-auto top-auto md:top-1/2 translate-y-0 md:-translate-y-1/2 h-10 w-10" />
              <CarouselNext className="static md:absolute md:-right-12 right-auto top-auto md:top-1/2 translate-y-0 md:-translate-y-1/2 h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>

      <Dialog open={selectedCase !== null} onOpenChange={(isOpen) => !isOpen && setSelectedCase(null)}>
        <DialogContent className="sm:max-w-2xl bg-background/95 backdrop-blur-xl">
          <DialogHeader>
            <Badge variant="secondary" className="mb-2 w-fit">{selectedCase?.industry}</Badge>
            <DialogTitle className="text-2xl">{selectedCase?.clientType}</DialogTitle>
            <DialogDescription>{selectedCase?.problemStatement}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div>
              <h4 className="font-semibold mb-2">What We Built</h4>
              <p className="text-sm text-muted-foreground">{selectedCase?.solutionOverview}</p>
            </div>
             <div>
              <h4 className="font-semibold mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase?.fullStoryTechStack?.map((tech: string) => <Badge key={tech} variant="outline">{tech}</Badge>)}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Time to Build</h4>
              <p className="text-sm text-muted-foreground">{selectedCase?.fullStoryTimeline}</p>
            </div>
            {selectedCase?.fullStoryTestimonial && (
              <blockquote className="mt-2 border-l-2 pl-4 italic text-muted-foreground bg-muted/20 py-4 pr-4 rounded-r-lg">
                "{selectedCase.fullStoryTestimonial}"
              </blockquote>
            )}
            <Button size="lg" className="w-full mt-4" asChild>
              <a href="#contact">Build This System for My Team</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
