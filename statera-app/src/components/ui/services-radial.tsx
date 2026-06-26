import type { LucideIcon } from "lucide-react";
import {
  Compass,
  FileCheck2,
  ScanSearch,
  FolderCheck,
  ShieldCheck,
  Tag,
  Globe,
  GraduationCap,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Service = { title: string; icon: LucideIcon };

const SERVICES: Service[] = [
  { icon: Compass, title: "Regulatory Strategy Development" },
  { icon: FileCheck2, title: "Submission Preparation & Filing" },
  { icon: ScanSearch, title: "Regulatory Gap Assessments" },
  { icon: ShieldCheck, title: "Post-Market Support" },
  { icon: Tag, title: "Labeling Development & Review" },
  { icon: Globe, title: "U.S. Agent for Foreign Establishments" },
  { icon: FolderCheck, title: "Submission Documentation Support" },
  { icon: GraduationCap, title: "Training & Education" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal fade>
          <div className="mb-12 text-center">
            <h2 className="font-display text-5xl italic text-white md:text-6xl">What We Offer</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div className="service-pop group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-300 hover:border-white/25 hover:bg-white/10">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-white/10 text-white/80 transition-colors duration-300 group-hover:bg-accent/20 group-hover:text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-lg font-medium text-white md:text-xl">
                    {s.title}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
