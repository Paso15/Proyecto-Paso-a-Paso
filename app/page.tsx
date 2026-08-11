import { CareerMap } from "@/components/career-map"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 sm:p-8">
      <header className="mb-6 max-w-xl text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent text-balance">
          PROYECTO PASO A PASO
        </h1>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">
          Mapeando horizontes, fortalezas y próximos pasos al salir del colegio.
        </p>
      </header>

      <CareerMap />

      <footer className="mt-10 text-center text-xs text-muted-foreground">
        Mi Mapa de Carrera
      </footer>
    </div>
  )
}
