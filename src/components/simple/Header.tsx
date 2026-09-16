import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV } from "../../data/journey";
import { Theme } from "../../hooks/hooks";

export function Header({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-shadow duration-300 ${
        scrolled ? "surface-blur border-b hairline" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-[17px] font-semibold tracking-tight text-[var(--ink)]">
            Moe Kyaw Aung
          </span>
          <span className="microlabel hidden sm:inline">full-stack</span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border hairline text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-[var(--ink)] px-4 py-2 text-[13px] font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            Let&apos;s talk
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border hairline text-[var(--ink)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="md:hidden surface-blur border-b hairline">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b hairline py-3.5 text-[15px] font-medium text-[var(--ink)] last:border-0"
              >
                {n.label}
                <span className="font-mono text-[11px] text-[var(--muted)]">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-3 text-[14px] font-medium text-[var(--bg)]"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
