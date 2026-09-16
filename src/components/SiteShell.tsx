import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Box, Leaf, PlaySquare } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeButton } from "./ThemeButton";

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2 font-display text-lg font-extrabold text-primary" aria-label="Bosh sahifa">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"><Leaf className="size-5" /></span>
            <span className="hidden sm:inline">Ekologiyani asraymiz</span>
          </Link>
          <nav className="ml-auto flex items-center gap-1 overflow-x-auto" aria-label="Asosiy menyu">
            <Link to="/" className={`nav-link ${path === "/" ? "nav-active" : ""}`}>Bosh sahifa</Link>
            <Link to="/qizil-kitob" className={`nav-link ${path === "/qizil-kitob" ? "nav-active" : ""}`}><BookOpen className="size-4" /><span>Qizil kitob</span></Link>
            <Link to="/videolar" className={`nav-link ${path === "/videolar" ? "nav-active" : ""}`}><PlaySquare className="size-4" /><span>Videolar</span></Link>
            <Link to="/3d-tabiat" className={`nav-link ${path === "/3d-tabiat" ? "nav-active" : ""}`}><Box className="size-4" /><span>3D tabiat</span></Link>
          </nav>
          <ThemeButton />
        </div>
        <div className="grade-strip">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 lg:px-8">
            {Array.from({ length: 10 }, (_, index) => index + 1).map((grade) => (
              <Link key={grade} to="/sinf/$grade" params={{ grade: String(grade) }} className={`grade-pill ${path === `/sinf/${grade}` ? "grade-pill-active" : ""}`}>{grade}-sinf</Link>
            ))}
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-semibold text-foreground">Ekologiyani asraymiz 🌿</p>
          <p>Tabiatni bilish — uni asrashning birinchi qadami.</p>
        </div>
      </footer>
    </div>
  );
}