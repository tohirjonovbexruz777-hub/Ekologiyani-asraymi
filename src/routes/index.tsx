import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Box, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lessons } from "@/lib/ecology-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ekologiyani asraymiz — 1–10-sinf darslari" },
    { name: "description", content: "Ekologiyani rangli darslar, testlar, Qizil kitob hayvonlari va 3D tabiat orqali o‘rganing." },
    { property: "og:title", content: "Ekologiyani asraymiz" },
    { property: "og:description", content: "1–10-sinf uchun qiziqarli ekologiya darslari." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-band relative overflow-hidden">
        <div className="nature-pattern" aria-hidden="true" />
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="relative z-10 animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-bold text-accent-foreground"><Sparkles className="size-4" /> Tabiat — bizning umumiy uyimiz</div>
            <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.05] text-hero-foreground sm:text-6xl lg:text-7xl">Ekologiyani <span className="text-sun">asraymiz!</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">1-sinfdan 10-sinfgacha ekologiyani o‘rganing, tabiat sirlarini kashf eting va sayyoramiz himoyachisiga aylaning.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-sun text-sun-foreground shadow-sun hover:bg-sun/90"><Link to="/sinf/$grade" params={{ grade: "1" }}>O‘rganishni boshlash <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-hero-muted bg-transparent text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><Link to="/3d-tabiat"><Box /> 3D tabiat</Link></Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-hero-muted"><span className="flex items-center gap-2"><CheckCircle2 className="size-5 text-sun" />10 bosqichli dars</span><span className="flex items-center gap-2"><CheckCircle2 className="size-5 text-sun" />Qiziqarli testlar</span><span className="flex items-center gap-2"><CheckCircle2 className="size-5 text-sun" />Bepul o‘rganish</span></div>
          </div>
          <div className="relative hidden min-h-[460px] lg:block" aria-hidden="true">
            <div className="planet"><span className="planet-leaf">🌿</span><span className="planet-tree">🌳</span><span className="planet-water">💧</span></div>
            <span className="float-icon left-[4%] top-[20%]">🦋</span><span className="float-icon right-[8%] top-[8%] delay-one">☀️</span><span className="float-icon bottom-[15%] right-[2%] delay-two">🐦</span>
          </div>
        </div>
        <div className="wave" aria-hidden="true" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="section-kicker">Sinfingizni tanlang</p><h2 className="font-display text-3xl font-black sm:text-4xl">Har yoshga mos ekologiya</h2></div>
          <p className="max-w-md text-muted-foreground">Darslar yoshga mos ravishda oddiy tushunchalardan haqiqiy ekologik loyihalargacha rivojlanadi.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {lessons.map((lesson) => (
            <Link key={lesson.grade} to="/sinf/$grade" params={{ grade: String(lesson.grade) }} className={`lesson-card lesson-${lesson.color}`}>
              <span className="text-4xl" aria-hidden="true">{lesson.icon}</span><span className="mt-5 text-xs font-extrabold uppercase text-muted-foreground">{lesson.grade}-sinf</span><h3 className="mt-1 font-display text-lg font-extrabold">{lesson.title}</h3><ArrowRight className="mt-5 size-5" />
            </Link>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 lg:px-8">
          <Link to="/qizil-kitob" className="feature-panel feature-coral"><BookOpen className="size-9" /><div><p className="text-sm font-extrabold uppercase">Muhofazadagi turlar</p><h2 className="mt-2 font-display text-3xl font-black">Qizil kitobdagi 100+ hayvon</h2><p className="mt-3 max-w-lg opacity-80">Noyob hayvonlar, ularning yashash joylari va qiziqarli faktlar bilan tanishing.</p></div><ArrowRight className="ml-auto size-7 self-end" /></Link>
          <Link to="/3d-tabiat" className="feature-panel feature-sky"><Box className="size-9" /><div><p className="text-sm font-extrabold uppercase">Jonli tajriba</p><h2 className="mt-2 font-display text-3xl font-black">3D tabiat olami</h2><p className="mt-3 max-w-lg opacity-80">Daraxtlar, suv va kapalaklar bilan yaratilgan rangli tabiat manzarasini aylantirib ko‘ring.</p></div><ArrowRight className="ml-auto size-7 self-end" /></Link>
        </div>
      </section>
    </>
  );
}
