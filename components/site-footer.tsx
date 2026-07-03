import Link from "next/link"
import { ExternalLink, Globe, Rocket } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Rocket className="size-5" />
            <span>Next Starter</span>
          </Link>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="transition-colors hover:text-foreground"
            >
              <Globe className="size-5" />
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-sm text-muted-foreground">
          Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui 로 만든
          스타터킷입니다.
        </p>
      </div>
    </footer>
  )
}
