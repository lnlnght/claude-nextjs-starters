import {
  Blocks,
  Layers,
  Moon,
  Paintbrush,
  SquareCode,
  Zap,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: Layers,
    title: "Next.js 16 App Router",
    description: "Turbopack 기반의 최신 App Router로 빠른 개발 경험을 제공합니다.",
  },
  {
    icon: SquareCode,
    title: "TypeScript",
    description: "엄격한 타입 검사로 안정적인 코드를 작성할 수 있습니다.",
  },
  {
    icon: Paintbrush,
    title: "Tailwind CSS v4",
    description: "CSS 변수 기반의 새로운 Tailwind v4 테마 시스템을 사용합니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui",
    description: "복사해서 바로 쓰는 컴포넌트로 원하는 대로 커스터마이징하세요.",
  },
  {
    icon: Zap,
    title: "lucide-react",
    description: "가볍고 일관된 디자인의 아이콘 세트를 기본 제공합니다.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "라이트/다크 테마 전환이 기본으로 구성되어 있습니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          필요한 모든 것이 준비되어 있습니다
        </h2>
        <p className="mt-4 text-muted-foreground">
          설정 없이 바로 기능 개발에 집중할 수 있도록 구성했습니다.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
