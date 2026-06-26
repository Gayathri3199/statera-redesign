import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlowGradient from "@/components/ui/flow-gradient";
import StateraLogo from "@/components/ui/logo";
import melissaPhoto from "@/assets/melissa-hall.png";
import ServicesRadial from "@/components/ui/services-radial";
import { Reveal } from "@/components/ui/reveal";

const CONTACT_EMAIL = "Melissa.hall@staterareg.com";

function FoldLine() {
  return (
    <div className="pointer-events-none relative z-10 w-full overflow-hidden" aria-hidden="true">
      <svg className="w-full" height="2" preserveAspectRatio="none" viewBox="0 0 1200 2">
        <line
          x1="0" y1="1" x2="1200" y2="1"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
}

function CurveRoad() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* 3 parallel S-curves — same shape, offset left/right */}
        <path
          d="M35,0 C65,12 15,28 60,45 C88,56 12,68 45,100"
          stroke="rgba(255,255,255,0.50)"
          strokeWidth="1.2"
          strokeDasharray="2.5 5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M50,0 C80,12 30,28 75,45 C103,56 27,68 60,100"
          stroke="rgba(255,255,255,0.40)"
          strokeWidth="1.2"
          strokeDasharray="2.5 5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M20,0 C50,12 0,28 45,45 C73,56 -3,68 30,100"
          stroke="rgba(255,255,255,0.40)"
          strokeWidth="1.2"
          strokeDasharray="2.5 5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

const WHY_CARDS = [
  {
    label: "Specialized Focus",
    body: "Our services are designed with the specific needs of small companies in mind, ensuring that you receive tailored support that addresses your unique challenges and goals.",
    graphic: (
      <div className="w-full max-w-[200px] space-y-3 px-4">
        <div className="h-2.5 w-full rounded-full bg-accent" />
        <div className="h-2.5 w-3/4 rounded-full bg-[#e8a06b]" />
        <div className="h-2.5 w-1/2 rounded-full bg-white/30" />
        <div className="h-2.5 w-1/3 rounded-full bg-teal" />
      </div>
    ),
  },
  {
    label: "Experienced Professionals",
    body: "Our team consists of experienced professionals who have a deep understanding of the regulatory landscape, providing you with reliable guidance and support.",
    graphic: (
      <div className="flex items-end gap-6">
        {[
          { c: "bg-teal" },
          { c: "bg-accent" },
          { c: "bg-[#3f7a99]" },
        ].map((o, k) => (
          <div key={k} className="flex flex-col items-center gap-2">
            <span className={`h-12 w-12 rounded-full ${o.c}`} />
            <span className="h-1 w-8 rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Simplified Process",
    body: "We streamline the regulatory process for you, taking the complexity out of compliance and allowing you to focus on driving your business forward.",
    graphic: (
      <div className="flex h-24 items-end gap-2.5">
        {[40, 62, 48, 78, 60, 90].map((h, k) => (
          <span
            key={k}
            className="w-3.5 rounded-t bg-gradient-to-t from-teal to-accent"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
];

const CONVEYOR_DURATION = 12; // seconds for one full pass

function WhyCards() {
  return (
    <div className="relative mt-16 overflow-hidden" style={{ height: 460 }}>
      {WHY_CARDS.map((card, i) => (
        <div
          key={card.label}
          className="absolute top-0 rounded-2xl border border-white/15 bg-white/8 p-8 shadow-xl backdrop-blur-sm"
          style={{
            width: "calc(33.333% - 1rem)",
            height: 460,
            animation: `conveyor ${CONVEYOR_DURATION}s linear infinite`,
            animationDelay: `-${(CONVEYOR_DURATION / WHY_CARDS.length) * i}s`,
          }}
        >
          <div className="mb-8 flex h-44 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            {card.graphic}
          </div>
          <h3 className="mb-3 font-display text-2xl font-medium text-white">{card.label}</h3>
          <p className="text-left text-white/60">{card.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen text-white">
      {/* Full-page flowing WebGL gradient — fixed behind everything */}
      <FlowGradient className="fixed inset-0 z-0 h-full w-full" />

      {/* ===================== HERO ===================== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* no per-section gradient needed — global FlowGradient shows through */}

        {/* readability veil: lighter now so the pastel palette stays airy; text gets a soft shadow for contrast */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/30 via-black/8 to-transparent" />

        {/* nav */}
        <header className="relative z-20 mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" aria-label="Statera Regulatory Consulting — home">
            <StateraLogo />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#approach" className="nav-pop inline-block hover:text-white">Our Approach</a>
            <a href="#why" className="nav-pop inline-block hover:text-white">Why Choose Us</a>
            <a href="#services" className="nav-pop inline-block hover:text-white">Services</a>
            <a href="#about" className="nav-pop inline-block hover:text-white">About</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="nav-pop inline-block">
              <Button variant="onDark" size="sm">Book a consultation</Button>
            </a>
          </nav>
        </header>

        {/* hero copy */}
        <div id="top" className="relative z-20 mx-auto flex max-w-6xl flex-col items-start px-6 pt-[14vh] md:pt-[20vh]">
          <h1
            className="max-w-4xl font-display text-4xl font-semibold italic leading-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] md:text-6xl"
            style={{ animation: "hero-fade 3s ease forwards" }}
          >
            Navigating Compliance, Ensuring Success
          </h1>
          <p
            className="mt-6 max-w-2xl text-left text-lg text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]"
            style={{ animation: "hero-fade 3s ease 0.4s forwards", opacity: 0 }}
          >
            Let us be your trusted partner in navigating the regulatory challenges of the
            medical device industry.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Button variant="onDark" size="lg">Book a consultation</Button>
            </a>
            <a href="#services">
              <Button
                variant="secondary"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-primary"
              >
                View our services <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Subtle dark veil over gradient for readability in lower sections */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-black/20" />
      <div className="relative z-10">
      {/* zig-zag "road" spanning Our Approach → What we offer */}
      <div className="relative">
        <CurveRoad />
        <div className="relative z-10">
      {/* ===================== OUR APPROACH ===================== */}
      <section id="approach" className="py-24">
        <Reveal>
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Reveal fade>
                <h2 className="mb-3 font-display text-5xl italic text-white md:text-6xl">Our Approach</h2>
              </Reveal>
            </div>
            <p className="text-lg leading-relaxed text-white/80 md:pt-2">
              We understand the critical nature of adhering to regulatory standards within
              the medical device industry. With an ever-evolving regulatory landscape,
              ensuring compliance and navigating the regulatory process can be complex and
              time-consuming. We are here to provide comprehensive and expert regulatory
              consulting services, tailored to meet your unique needs. Our team of seasoned
              professionals brings extensive knowledge and experience in navigating the
              intricate regulatory requirements, helping you streamline the process and
              bring your products to market with confidence.
            </p>
          </div>
        </Reveal>
      </section>

      <FoldLine />
      {/* ===================== WHY CHOOSE US (dark, "Built for speed" style) ===================== */}
      <section id="why" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal fade>
            <h2 className="font-display text-5xl italic text-white md:text-6xl">Why Choose Us</h2>
          </Reveal>

          <WhyCards />
        </div>
      </section>

      <FoldLine />
      {/* ===================== SERVICES (dark accordion) ===================== */}
      <ServicesRadial />
        </div>{/* /z-10 content */}
      </div>{/* /zig-zag relative */}

      <FoldLine />
      {/* ===================== WHO WE ARE (shares the warm gradient) ===================== */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="mb-3 font-display text-5xl italic text-white md:text-6xl">Who We Are</h2>
            </div>
          </Reveal>
          <div className="grid items-start gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div className="flex flex-col items-center md:sticky md:top-24">
                <img
                  src={melissaPhoto}
                  alt="Melissa Hall, MS BME"
                  className="aspect-square w-full max-w-[320px] rounded-full object-cover shadow-xl ring-1 ring-white/20"
                />
                <p className="mt-5 font-display text-xl text-white">
                  Melissa Hall, MS BME
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 text-lg text-white/90">
                <p>
                  Melissa Hall is a seasoned regulatory affairs professional with an
                  extensive 10-year tenure at the U.S. Food and Drug Administration (FDA).
                  Throughout her illustrious career, Melissa has made significant
                  contributions in various leadership roles, demonstrating exceptional
                  expertise in regulatory review, policy analysis, and industry education.
                </p>
                <p>
                  In her capacity as a lead reviewer at the FDA, Melissa displayed a
                  remarkable aptitude for scrutinizing complex orthopedic regulatory
                  submissions, ensuring adherence to stringent safety and efficacy
                  standards. Her meticulous approach and astute attention to detail
                  consistently guaranteed the thorough evaluation of medical device
                  applications, underscoring her unwavering commitment to public health and
                  safety.
                </p>
                <p>
                  Continuing to excel, Melissa ascended to the role of Assistant Director,
                  where her leadership and strategic vision were instrumental in
                  streamlining internal processes and fostering a culture of excellence
                  within the Spine Division in the Office for Orthopedic Devices.
                </p>
                <p>
                  In her subsequent position as an Industry Education Lead, Melissa
                  spearheaded numerous initiatives aimed at cultivating a comprehensive
                  understanding of FDA medical device regulations among industry
                  stakeholders, with specific focus in the premarket space.
                </p>
                <p>
                  As a distinguished Premarket Policy Analyst, Melissa leveraged her
                  comprehensive knowledge of regulatory policies to develop and implement
                  forward-thinking strategies that influenced critical decision-making
                  processes within the FDA. Her adeptness at interpreting complex regulatory
                  guidelines and her innovative problem-solving abilities significantly
                  contributed to the enhancement of premarket review procedures, ensuring
                  laws, regulations, and guidances were applied consistently across the
                  center.
                </p>
                <p>
                  Melissa Hall's remarkable career trajectory at the FDA underscores her
                  unwavering dedication to advancing public health and her unparalleled
                  expertise in regulatory affairs.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <FoldLine />
      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="relative py-24">
        {/* warm orange glow pulling the gradient palette into this section */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#e97132]/10 to-[#e97132]/18" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </p>
            <h2 className="mb-6 font-display text-3xl font-semibold text-white">
              Ready to navigate your path to market?
            </h2>
            <p className="mb-10 text-lg text-white/75">
              Reach out to discuss your device and how Statera can help.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-3 text-white hover:text-white/70">
                <Mail className="h-5 w-5 text-accent" /> {CONTACT_EMAIL}
              </a>
              <a href="tel:+14439952855" className="inline-flex items-center gap-3 text-white hover:text-white/70">
                <Phone className="h-5 w-5 text-accent" /> (443) 995-2855
              </a>
              <a href="https://www.linkedin.com/company/statera-regulatory-consulting-llc/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white hover:text-white/70">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
              </a>
            </div>
            <div className="mt-12">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Button variant="onDark" size="lg">Book a consultation</Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SITE FOOTER ===================== */}
      <footer className="py-8 text-sm text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 md:flex-row">
          <span>© 2026 Statera Regulatory Consulting, LLC</span>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/statera-regulatory-consulting-llc/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact us</a>
          </div>
        </div>
      </footer>
      </div>{/* /full gradient block */}
    </main>
  );
}
