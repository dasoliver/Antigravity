'use client'

import { useEffect, useRef, useState } from 'react'

const DATASETS = [
  { label: 'Oil Reserves', color: '#f59e0b' },
  { label: 'Gold Reserves', color: '#fbbf24' },
  { label: 'Manufacturing Density', color: '#34d399' },
  { label: 'GDP by Country', color: '#60a5fa' },
  { label: 'Nearshoring Flows', color: '#a78bfa' },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dataset, setDataset] = useState(DATASETS[Math.floor(Math.random() * DATASETS.length)])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let angle = 0
    let animId: number

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const r = Math.min(width, height) * 0.38

      // Globe latitudes
      for (let lat = -80; lat <= 80; lat += 20) {
        const y = cy + r * Math.sin((lat * Math.PI) / 180)
        const rx = r * Math.cos((lat * Math.PI) / 180)
        ctx.beginPath()
        ctx.ellipse(cx, y, rx, rx * 0.18, 0, 0, Math.PI * 2)
        ctx.strokeStyle = dataset.color + '33'
        ctx.lineWidth = 0.6
        ctx.stroke()
      }

      // Globe longitudes
      for (let lon = 0; lon < 360; lon += 20) {
        const a = ((lon + angle) * Math.PI) / 180
        ctx.beginPath()
        for (let lat = -90; lat <= 90; lat += 2) {
          const phi = (lat * Math.PI) / 180
          const x = cx + r * Math.cos(phi) * Math.cos(a)
          const y = cy + r * Math.sin(phi)
          if (lat === -90) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = dataset.color + '22'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Outer circle
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.strokeStyle = dataset.color + '55'
      ctx.lineWidth = 1
      ctx.stroke()

      // Border glow node (Tijuana/Baja)
      const bx = cx + r * 0.18
      const by = cy - r * 0.12
      ctx.beginPath()
      ctx.arc(bx, by, 6, 0, Math.PI * 2)
      ctx.fillStyle = dataset.color
      ctx.fill()
      ctx.beginPath()
      ctx.arc(bx, by, 14, 0, Math.PI * 2)
      ctx.strokeStyle = dataset.color + '66'
      ctx.lineWidth = 1
      ctx.stroke()

      angle += 0.08
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [dataset])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#030712] text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Dataset label */}
      <div className="absolute top-6 right-6 flex gap-2">
        {DATASETS.map((d) => (
          <button
            key={d.label}
            onClick={() => setDataset(d)}
            className="text-xs px-3 py-1 rounded-full border transition"
            style={{
              borderColor: d.color + '88',
              color: dataset.label === d.label ? '#030712' : d.color,
              background: dataset.label === d.label ? d.color : 'transparent',
            }}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Center overlay */}
      <div className="relative z-10 max-w-2xl text-center px-6 space-y-6">
        <p className="text-xs tracking-[0.3em] uppercase" style={{ color: dataset.color }}>
          NPG — Private Access
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Antigravity OS
        </h1>
        <p className="text-base md:text-lg text-slate-400 leading-relaxed">
          A living map of the world to bring order to real estate and capital.
          Starting at the USA–Mexico border.
        </p>
        <p className="text-sm text-slate-500">
          Partners, brokers and builders — no politics, no corruption.
          Ethics, friendship and shared wealth.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            className="rounded-full px-7 py-3 text-sm font-semibold text-[#030712] transition hover:opacity-90"
            style={{ background: dataset.color }}
          >
            Request Private Access
          </button>
          <button className="rounded-full border border-slate-700 px-7 py-3 text-sm font-semibold text-slate-300 hover:border-slate-400 transition">
            View Investor Brief
          </button>
        </div>
      </div>

      {/* Manifesto */}
      <div className="absolute bottom-6 left-0 right-0 text-center px-4">
        <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
          We start where chaos is loudest — Tijuana, the border, Mexico.
          Industrial, logistics, energy, housing. One system. Clean numbers. Long-term value.
        </p>
      </div>

      {/* Active dataset indicator */}
      <div className="absolute bottom-6 right-6 text-xs" style={{ color: dataset.color + 'aa' }}>
        Viewing: {dataset.label}
      </div>
    </main>
  )
}
