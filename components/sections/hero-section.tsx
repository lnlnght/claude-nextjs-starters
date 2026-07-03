import { ArrowRight, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 sm:py-32">
      <Badge variant="secondary" className="rounded-full px-3 py-1">
        Next.js 16 · TypeScript · Tailwind v4 · shadcn/ui
      </Badge>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
        빠르게 시작하는 모던 웹 스타터킷
      </h1>

      <p className="max-w-2xl text-lg text-muted-foreground text-balance">
        App Router, TypeScript, TailwindCSS, shadcn/ui, lucide-react가 미리
        구성되어 있어 바로 개발을 시작할 수 있습니다.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg">
          시작하기
          <ArrowRight className="size-4" />
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}
