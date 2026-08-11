type ProgressBarProps = {
  percent: number
}

export function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <section
      aria-label="Avance del mapa de carrera"
      className="w-full max-w-2xl rounded-2xl border border-border bg-surface p-5 shadow-2xl"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Avance del Mapa
        </span>
        <span
          className="text-sm font-extrabold text-accent-2"
          aria-live="polite"
        >
          {percent}% Completado
        </span>
      </div>
      <div
        className="h-3 w-full overflow-hidden rounded-full border border-border-muted bg-surface-muted"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  )
}
