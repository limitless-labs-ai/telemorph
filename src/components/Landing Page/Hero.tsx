"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardComponent, TitleComponent } from "@/config/landing/hero";

export function Hero() {
  return (
    <div className="overflow-hidden">
      <ContainerScroll titleComponent={TitleComponent}>
        {DashboardComponent}
      </ContainerScroll>
    </div>
  );
}
