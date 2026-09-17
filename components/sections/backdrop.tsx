/** Fixed ambient backdrop: layered grid, radial glows, subtle scanline. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#0b1220_0%,#05070b_55%,#04060a_100%)]" />

      {/* layered grid, faded toward edges */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] mask-fade-b" />

      {/* accent glows */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,124,255,0.16),transparent)] blur-2xl" />
      <div className="absolute top-[40%] -right-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(34,176,245,0.10),transparent)] blur-2xl" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(59,91,219,0.12),transparent)] blur-2xl" />

      {/* faint moving scanline */}
      <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-[linear-gradient(to_bottom,transparent,rgba(122,160,255,0.06),transparent)]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_60%,rgba(0,0,0,0.6))]" />
    </div>
  );
}
