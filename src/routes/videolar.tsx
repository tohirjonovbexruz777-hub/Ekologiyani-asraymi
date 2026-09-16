import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Film, Play, Search, Video } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ecologyVideos, videoCategories, type VideoCategory } from "@/lib/video-data";

export const Route = createFileRoute("/videolar")({
  head: () => ({
    meta: [
      { title: "25 ta ekologik video — Ekologiyani asraymiz" },
      { name: "description", content: "Suv, tabiat, iqlim, chiqindi va hayvonlar haqida 25 ta o‘zbekcha ekologik video." },
      { property: "og:title", content: "Ekologiya haqida 25 ta o‘zbekcha video" },
      { property: "og:description", content: "1–10-sinf o‘quvchilari uchun tanlangan ekologik videolar to‘plami." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<VideoCategory | "Barchasi">("Barchasi");
  const [activeId, setActiveId] = useState<number>(1);

  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("uz");
    return ecologyVideos.filter((video) => {
      const matchesCategory = category === "Barchasi" || video.category === category;
      const matchesSearch = !search || `${video.title} ${video.description} ${video.source}`.toLocaleLowerCase("uz").includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const activeVideo = ecologyVideos.find((video) => video.id === activeId) ?? ecologyVideos[0];

  if (!activeVideo) return null;

  return (
    <div>
      <section className="video-band">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="mb-4 flex items-center gap-3 font-bold"><Film />O‘zbek tilida tomosha qiling</div>
          <h1 className="max-w-4xl font-display text-4xl font-black sm:text-6xl">Ekologiya haqida 25 ta video</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 opacity-90">Suvni tejashdan bioxilma-xillikkacha — o‘quvchilar uchun tushunarli va qiziqarli videolar.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        {activeVideo.youtubeId ? (
          <div className="video-player-wrap">
            <iframe
              key={activeVideo.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="video-player-copy">
              <span className="group-tag">{activeVideo.category}</span>
              <h2 className="mt-3 font-display text-2xl font-black">{activeVideo.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{activeVideo.description}</p>
              <p className="mt-3 text-xs font-extrabold uppercase text-primary">Manba: {activeVideo.source}</p>
            </div>
          </div>
        ) : (
          <div className="video-external-panel">
            <Video className="size-10 text-primary" />
            <div><h2 className="font-display text-2xl font-black">{activeVideo.title}</h2><p className="mt-1 text-muted-foreground">Ushbu video manba sahifasida ochiladi.</p></div>
            <Button asChild><a href={activeVideo.url} target="_blank" rel="noreferrer">Videoni ochish <ExternalLink /></a></Button>
          </div>
        )}

        <div className="mt-10 grid gap-4">
          <label className="search-field">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Video mavzusini qidiring" aria-label="Video qidirish" />
          </label>
          <div className="flex flex-wrap gap-2" aria-label="Video mavzulari">
            {videoCategories.map((option) => (
              <Button key={option} type="button" size="sm" variant={category === option ? "default" : "outline"} onClick={() => setCategory(option)}>
                {option}
              </Button>
            ))}
          </div>
        </div>

        <p className="my-6 text-sm font-bold text-muted-foreground">Topildi: {filtered.length} ta video</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video) => (
            <article key={video.id} className={`video-card ${activeVideo.id === video.id ? "video-card-active" : ""}`}>
              <Button type="button" variant="ghost" className="video-card-cover" onClick={() => { setActiveId(video.id); window.scrollTo({ top: 170, behavior: "smooth" }); }} aria-label={`${video.title} videosini ko‘rish`}>
                <span className="video-index">{String(video.id).padStart(2, "0")}</span>
                <span className="video-play"><Play className="size-6" fill="currentColor" /></span>
                <span className="video-topic">{video.category}</span>
              </Button>
              <div className="p-5">
                <h2 className="font-display text-lg font-black">{video.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{video.description}</p>
                <p className="mt-4 text-xs font-extrabold text-primary">{video.source}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}