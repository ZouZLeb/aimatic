"use client";

import Image from "next/image";
import { Shield, Code, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSection() {
  const headshot = PlaceHolderImages.find((img) => img.id === "about-headshot");

  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Developers, Not Prompt Engineers
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            We focus on building high-quality, secure systems that solve problems while ensuring our clients own their technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-card/40 backdrop-blur-md border-border/50">
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2 p-6 md:p-8 bg-muted/30">
                <div className="relative aspect-square mb-6">
                  {headshot && (
                    <Image
                      src={headshot.imageUrl}
                      alt="Founder of SecureAutomate"
                      fill
                      className="rounded-lg object-cover shadow-lg"
                      data-ai-hint={headshot.imageHint}
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold font-headline">The Engineering Team</h3>
                <p className="text-primary mb-4">
                  Software Developers & Cybersecurity Experts
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span><strong>Security+ & AWS</strong> Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Specializing in <strong>n8n & Custom Scripts</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Focused on <strong>Data Sovereignty</strong></span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-8">
                <div className="prose prose-lg max-w-none text-foreground/90">
                  <p>
                    The AI space is crowded with agencies that simply wrap a few
                    ChatGPT prompts in a expensive SaaS subscription. They don't
                    know how your data is being used, and they don't provide you
                    with the tools to own your systems.
                  </p>

                  <p className="font-semibold text-foreground">
                    We're building something different. Our team consists of actual 
                    software developers with deep backgrounds in cybersecurity. We use
                    tools like n8n and custom-written code to build systems that
                    live on your servers and work with your existing tools.
                  </p>

                  <p>
                    When you work with us, your privacy comes first. We ensure you 
                    don't have to share sensitive trade secrets or customer info 
                    with opaque LLM providers. You keep complete control over who
                    and where your data goes.
                  </p>

                  <p>
                    We deliver the code, the workflows, and the documentation. 
                    You own the system. We provide ongoing support on your terms, 
                    not as a way to keep you locked into a subscription.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <Card className="bg-primary/5 p-4 border-border/50">
                    <h4 className="font-bold mb-1 text-primary">No Wrappers</h4>
                    <p className="text-sm text-foreground/80">
                      We build real logic, not just chat interfaces.
                    </p>
                  </Card>
                  <Card className="bg-primary/5 p-4 border-border/50">
                    <h4 className="font-bold mb-1 text-primary">Data Privacy</h4>
                    <p className="text-sm text-foreground/80">
                      Your data stays in your VPC, always.
                    </p>
                  </Card>
                   <Card className="bg-primary/5 p-4 border-border/50">
                    <h4 className="font-bold mb-1 text-primary">Full IP</h4>
                    <p className="text-sm text-foreground/80">
                      You own 100% of the automation we build.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
