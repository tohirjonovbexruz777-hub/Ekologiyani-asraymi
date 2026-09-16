import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Lightbulb, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { lessons } from "@/lib/ecology-data";

export const Route = createFileRoute("/sinf/$grade")({
  loader: ({ params }) => {
    const grade = Number(params.grade);
    const lesson = lessons.find((item) => item.grade === grade);
    if (!lesson) throw notFound();
    return lesson;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.grade}-sinf: ${loaderData.title} — Ekologiyani asraymiz` },
    { name: "description", content: `${loaderData.grade}-sinf uchun ekologiya darsi: ${loaderData.title}.` },
    { property: "og:title", content: `${loaderData.grade}-sinf ekologiya darsi` },
    { property: "og:description", content: loaderData.text },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] : [] }),
  component: GradePage,
});

function GradePage() {
  const lesson = Route.useLoaderData();
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    setSelected(null);
    setCompleted(window.localStorage.getItem(`ekologiya-grade-${lesson.grade}`) === "done");
  }, [lesson.grade]);
  const correct = selected === lesson.answer;
  function finish() { window.localStorage.setItem(`ekologiya-grade-${lesson.grade}`, "done"); setCompleted(true); }
  const next = lesson.grade < 10 ? lesson.grade + 1 : 1;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
      <div className={`lesson-heading lesson-${lesson.color}`}><div className="text-7xl">{lesson.icon}</div><div><p className="section-kicker">{lesson.grade}-sinf darsi</p><h1 className="font-display text-4xl font-black sm:text-5xl">{lesson.title}</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{lesson.text}</p></div></div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <section className="content-panel"><div className="icon-title"><Lightbulb /><h2>Bugungi vazifa</h2></div><p className="mt-5 text-lg leading-8">{lesson.task}</p><div className="mt-8 rounded-md bg-muted p-5"><p className="font-bold">Eslab qoling</p><p className="mt-2 text-muted-foreground">Kichik odatlar har kuni takrorlansa, tabiat uchun katta natija beradi.</p></div></section>
        <section className="content-panel"><div className="icon-title"><Trophy /><h2>Mini-test</h2></div><p className="mt-5 font-bold">{lesson.question}</p><div className="mt-4 grid gap-3">{lesson.options.map((option, index) => <Button key={option} variant={selected === index ? (index === lesson.answer ? "default" : "destructive") : "outline"} className="h-auto justify-start whitespace-normal px-4 py-3 text-left" onClick={() => setSelected(index)}><Circle className="size-4" />{option}</Button>)}</div>{selected !== null && <div className={`mt-5 rounded-md p-4 font-bold ${correct ? "bg-success-soft text-success" : "bg-danger-soft text-destructive"}`}>{correct ? "To‘g‘ri! Ajoyib javob." : "Yana bir bor o‘ylab ko‘ring."}</div>}{correct && !completed && <Button className="mt-4 w-full" onClick={finish}><CheckCircle2 />Darsni yakunlash</Button>}{completed && <p className="mt-5 flex items-center gap-2 font-bold text-success"><CheckCircle2 />Bu dars yakunlangan</p>}</section>
      </div>
      <div className="mt-10 flex items-center justify-between"><Button asChild variant="outline">{lesson.grade === 1 ? <Link to="/"><ArrowLeft />Orqaga</Link> : <Link to="/sinf/$grade" params={{ grade: String(lesson.grade - 1) }}><ArrowLeft />Orqaga</Link>}</Button><Button asChild><Link to="/sinf/$grade" params={{ grade: String(next) }}>{lesson.grade === 10 ? "Boshidan" : "Keyingi dars"}<ArrowRight /></Link></Button></div>
    </div>
  );
}