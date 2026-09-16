import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { animalGroups, animals, groupIcon, totalAnimals, type AnimalGroup } from "@/lib/redbook-data";

export const Route = createFileRoute("/qizil-kitob")({
  head: () => ({ meta: [
    { title: "Qizil kitob hayvonlari — Ekologiyani asraymiz" },
    { name: "description", content: "O‘zbekiston Qizil kitobiga kiritilgan 100 dan ortiq hayvon: sut emizuvchilar, qushlar, baliqlar va boshqalar." },
    { property: "og:title", content: "Qizil kitobdagi hayvonlar ro‘yxati" },
    { property: "og:description", content: "Noyob hayvonlar, yashash joylari va qiziqarli faktlar — qidiruv va guruh bo‘yicha filtr bilan." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: RedBookPage,
});

function RedBookPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<AnimalGroup | "Barchasi">("Barchasi");

  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase();
    return animals.filter((animal) => {
      const matchGroup = group === "Barchasi" || animal.group === group;
      const matchText = !text || `${animal.name} ${animal.latin} ${animal.habitat}`.toLowerCase().includes(text);
      return matchGroup && matchText;
    });
  }, [query, group]);

  return (
    <div>
      <section className="redbook-band">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mb-4 flex items-center gap-3 font-bold"><ShieldCheck />Muhofaza — umumiy burchimiz</div>
          <h1 className="max-w-3xl font-display text-5xl font-black sm:text-6xl">Qizil kitobdagi hayvonlar</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 opacity-85">O‘zbekiston Qizil kitobiga kiritilgan {totalAnimals} ta hayvon: tog‘ yirtqichlaridan noyob baliq va kapalaklargacha.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-6 grid gap-4">
          <label className="search-field">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hayvon nomini yozing (masalan: qor barsi)" aria-label="Hayvon qidirish" />
          </label>
          <div className="flex flex-wrap gap-2">
            {(["Barchasi", ...animalGroups] as const).map((option) => (
              <button key={option} type="button" onClick={() => setGroup(option)} className={`filter-chip ${group === option ? "filter-chip-active" : ""}`}>
                <span aria-hidden="true">{option === "Barchasi" ? "✨" : groupIcon[option]}</span>
                {option}
                <b>{option === "Barchasi" ? animals.length : animals.filter((animal) => animal.group === option).length}</b>
              </button>
            ))}
          </div>
        </div>

        <p className="mb-6 text-sm font-bold text-muted-foreground">Topildi: {filtered.length} ta hayvon</p>

        {filtered.length === 0 ? (
          <p className="rounded-lg border border-border bg-card p-8 text-center font-bold">Bunday hayvon topilmadi. Boshqa nom bilan qidirib ko‘ring.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((animal, index) => (
              <article key={animal.latin} className="animal-card">
                <div className="flex items-start justify-between">
                  <span className="text-5xl" aria-hidden="true">{animal.icon}</span>
                  <span className="animal-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <span className="group-tag">{animal.group}</span>
                <h2 className="mt-3 font-display text-xl font-black">{animal.name}</h2>
                <p className="mt-1 text-xs italic text-muted-foreground">{animal.latin}</p>
                <p className="mt-4 flex gap-2 text-sm font-bold"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{animal.habitat}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{animal.fact}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
