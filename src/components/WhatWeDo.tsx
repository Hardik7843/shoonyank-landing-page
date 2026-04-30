"use client";

import { Icon } from "@iconify/react";
import { whatWeDoContent } from "../content";

export function WhatWeDo() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            {whatWeDoContent.headline}
          </h2>
          <p className="text-[15px] text-muted">
            {whatWeDoContent.subtext}
          </p>
        </div>
        
        <div className="mx-auto max-w-[1000px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whatWeDoContent.items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all hover:bg-muted-background hover:border-border/80"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 bg-transparent text-foreground shadow-sm">
                <Icon icon={item.icon} className="text-lg opacity-80" />
              </div>
              <h3 className="mb-2 text-[14px] font-semibold text-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

