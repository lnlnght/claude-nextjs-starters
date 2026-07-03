import { Info } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ShowcaseSection() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          컴포넌트 미리보기
        </h2>
        <p className="mt-4 text-muted-foreground">
          shadcn/ui 컴포넌트를 바로 확인하고 재사용해 보세요.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-xl rounded-xl border p-6">
        <Tabs defaultValue="profile">
          <TabsList className="w-full">
            <TabsTrigger value="profile" className="flex-1">
              프로필
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex-1">
              연락처
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6 flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="아바타" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1.5 font-medium">
                Starter Kit
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="size-3.5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>예시로 표시된 프로필입니다</TooltipContent>
                </Tooltip>
              </div>
              <p className="text-sm text-muted-foreground">
                hello@nextstarter.dev
              </p>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="mt-6 space-y-4">
            <Input placeholder="이메일 주소" type="email" />
            <Button className="w-full">메시지 보내기</Button>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
