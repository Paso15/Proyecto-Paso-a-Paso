"use client"

import type { Step } from "@/lib/steps"

type StepCardProps = {
  step: Step
  value: string
  isActive: boolean
  isDone: boolean
  indent: number
  onActivate: () => void
  onChange: (value: string) => void
}

export function StepCard({
  step,
  value,
  isActive,
  isDone,
  indent,
  onActivate,
  onChange,
}: StepCardProps) {
  return (
    <div
      style={{ marginLeft: `${indent}%` }}
      className={`rounded-xl border p-4 transition-all duration-300 ${
        isActive
          ? "border-accent bg-surface shadow-lg"
          : isDone
            ? "border-accent-2/40 bg-surface/60"
            : "border-border bg-surface-muted/40"
      }`}
    >
      <button
        type="button"
        onClick={onActivate}
        aria-expanded={isActive}
        className="flex w-full items-center justify-between gap-2 text-left"
      >
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${
            isDone
              ? `bg-gradient-to-r ${step.gradient} text-white`
              : "bg-surface text-muted-foreground"
          }`}
        >
          {`NIVEL ${step.num}`}
        </span>
        {isActive && (
          <span className="animate-pulse text-xs font-semibold text-accent">
            Te encuentras aquí
          </span>
        )}
      </button>

      <h3 className="mt-2 text-sm font-bold text-foreground text-balance">
        {step.titulo}
      </h3>
      <p className="mt-0.5 mb-2 text-xs text-muted-foreground text-pretty">
        {step.subtitulo}
      </p>

      {isActive ? (
        <textarea
          autoFocus
          rows={2}
          value={value}
          placeholder={step.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border-muted bg-background p-2 text-sm text-foreground outline-none focus:border-accent"
        />
      ) : (
        <button
          type="button"
          onClick={onActivate}
          className="block w-full truncate text-left text-sm italic text-muted-foreground"
        >
          {value.trim() ? value : "Haz clic para escribir..."}
        </button>
      )}
    </div>
  )
}
