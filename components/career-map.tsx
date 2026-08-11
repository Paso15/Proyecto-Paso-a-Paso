"use client"

import { useMemo, useState } from "react"
import { STEPS } from "@/lib/steps"
import { ProgressBar } from "@/components/progress-bar"
import { StepCard } from "@/components/step-card"

type Answers = Record<number, string>

export function CareerMap() {
  const [answers, setAnswers] = useState<Answers>(() =>
    Object.fromEntries(STEPS.map((s) => [s.num, ""])),
  )
  const [support, setSupport] = useState("")
  const [active, setActive] = useState(1)
  const [saved, setSaved] = useState<null | "avance" | "mapa">(null)

  const completed = useMemo(
    () => STEPS.filter((s) => (answers[s.num] ?? "").trim().length > 0).length,
    [answers],
  )
  const percent = Math.round((completed / STEPS.length) * 100)

  function updateAnswer(num: number, value: string) {
    setAnswers((prev) => ({ ...prev, [num]: value }))
    setSaved(null)
  }

  function guardar(final: boolean) {
    setSaved(final ? "mapa" : "avance")
  }

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <ProgressBar percent={percent} />

      <main className="w-full max-w-2xl rounded-2xl border border-border bg-surface/80 p-6 shadow-2xl backdrop-blur-md">
        {/* Escalera de niveles: el nivel 5 arriba, el 1 abajo */}
        <div className="flex flex-col-reverse gap-4">
          {STEPS.map((step) => (
            <StepCard
              key={step.num}
              step={step}
              value={answers[step.num] ?? ""}
              isActive={active === step.num}
              isDone={(answers[step.num] ?? "").trim().length > 0}
              indent={(step.num - 1) * 3}
              onActivate={() => setActive(step.num)}
              onChange={(value) => updateAnswer(step.num, value)}
            />
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <h2 className="mb-1 text-sm font-bold text-foreground">
            Red de Apoyo Familiar
          </h2>
          <label
            htmlFor="red-apoyo"
            className="mb-3 block text-xs text-muted-foreground"
          >
            ¿En qué aspectos te gustaría contar con orientación de tu familia?
          </label>
          <textarea
            id="red-apoyo"
            rows={2}
            value={support}
            onChange={(e) => {
              setSupport(e.target.value)
              setSaved(null)
            }}
            placeholder="Ej: Orientación financiera, contactos profesionales..."
            className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground outline-none focus:border-accent"
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => guardar(false)}
            className="flex-1 rounded-xl border border-border-muted bg-surface-muted px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-surface"
          >
            Guardar mi avance
          </button>
          <button
            type="button"
            onClick={() => guardar(true)}
            className="flex-1 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:from-cyan-500 hover:to-emerald-500"
          >
            Guardar mi mapa de carrera
          </button>
        </div>

        {saved && (
          <p
            role="status"
            className="mt-4 rounded-lg border border-accent-2/40 bg-accent-2/10 px-4 py-3 text-center text-sm font-semibold text-accent-2"
          >
            {saved === "mapa"
              ? "¡Mapa de carrera guardado exitosamente!"
              : "Avance guardado."}
          </p>
        )}
      </main>
    </div>
  )
}
