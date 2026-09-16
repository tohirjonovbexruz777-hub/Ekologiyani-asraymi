import { createFileRoute } from "@tanstack/react-router";
import { MousePointer2, Rotate3D, Sparkles } from "lucide-react";
import { NatureBuilder } from "@/components/NatureBuilder";

export const Route = createFileRoute("/3d-tabiat")({
  ssr: false,
  head: () => ({ meta: [
    { title: "3D tabiat quruvchi — Ekologiyani asraymiz" },
    { name: "description", content: "O‘z 3D tabiat bog‘ingizni yarating: daraxt, gul, ko‘lcha, tosh va hayvonlarni joylashtiring." },
    { property: "og:title", content: "3D tabiat quruvchi" },
    { property: "og:description", content: "Daraxt, gul, ko‘lcha va hayvonlarni o‘zingiz joylashtiradigan interaktiv 3D bog‘." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: NaturePage,
});

function NaturePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Interaktiv tajriba</p>
          <h1 className="font-display text-4xl font-black sm:text-5xl">O‘z 3D tabiatingizni yarating</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Pastdagi ro‘yxatdan obyekt tanlang va yashil orolni bosib joylashtiring. Bog‘ingiz brauzeringizda saqlanadi.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
          <span className="flex items-center gap-2"><MousePointer2 className="size-4" />Bosib qo‘shing</span>
          <span className="flex items-center gap-2"><Rotate3D className="size-4" />Aylantiring</span>
          <span className="flex items-center gap-2"><Sparkles className="size-4" />Avtomatik saqlanadi</span>
        </div>
      </div>
      <NatureBuilder />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="fact-strip"><b>🌳 Daraxt</b><span>Havoni tozalaydi</span></div>
        <div className="fact-strip"><b>💧 Suv</b><span>Barcha hayot uchun zarur</span></div>
        <div className="fact-strip"><b>🦋 Hasharot</b><span>O‘simliklarni changlatadi</span></div>
      </div>
    </div>
  );
}
