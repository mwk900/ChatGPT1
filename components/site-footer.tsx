export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-brand-muted md:px-8">
        © {new Date().getFullYear()} [YOUR_NAME]. Built with Next.js + Tailwind CSS.
      </div>
    </footer>
  );
}
