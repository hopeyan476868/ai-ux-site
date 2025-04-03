import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function AIUXTrendPage() {
  return (
    <div className="p-6 space-y-8">
      <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        AI 对 UX 体验设计师的影响与未来趋势
      </motion.h1>

      <Tabs defaultValue="impact" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="impact">AI 如何影响 UX</TabsTrigger>
          <TabsTrigger value="strategies">设计师如何应对</TabsTrigger>
          <TabsTrigger value="future">未来 5~10 年趋势</TabsTrigger>
        </TabsList>

        <TabsContent value="impact">
          <ScrollArea className="h-[600px] p-4">
            <Section title="1. 生成式 AI 助力设计">
              文本生成、图像生成、原型自动化，大幅提高创意效率。
            </Section>
            <Section title="2. 用户行为分析 AI">
              数据洞察支持用户研究与产品优化。
            </Section>
            <Section title="3. 智能推荐与个性化">
              支持千人千面的体验，打造动态界面。
            </Section>
            <Section title="4. 对话式 UX">
              智能客服、语音交互成为新交互范式。
            </Section>
            <Section title="5. 工具智能化">
              设计系统自动调整、AI 插件一键生成样稿。
            </Section>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="strategies">
          <ScrollArea className="h-[600px] p-4">
            <Section title="1. 提升 AI 素养">
              学习使用生成式工具，如 ChatGPT、Midjourney、AI 插件等。
            </Section>
            <Section title="2. 聚焦战略设计">
              从产出型角色转向策略型角色。
            </Section>
            <Section title="3. 跨学科沟通协作">
              能与 PM、AI 工程、数据科学家合作无障碍。
            </Section>
            <Section title="4. 强化人文价值">
              关注伦理、公平与无障碍体验，AI 时代更需设计师守护用户。
            </Section>
            <Section title="5. 打造复合技能组合">
              数据分析、内容策略、服务设计等能力融合。
            </Section>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="future">
          <ScrollArea className="h-[600px] p-4">
            <Section title="未来 5 年">
              <ul className="list-disc pl-4 space-y-1">
                <li>人机协作成为新常态</li>
                <li>设计流程自动化显著增强</li>
                <li>界面高度个性化与动态生成</li>
                <li>EX 全旅程设计主导设计方向</li>
              </ul>
            </Section>
            <Section title="未来 10 年">
              <ul className="list-disc pl-4 space-y-1">
                <li>设计自动化成熟，AI 成为设计伙伴</li>
                <li>AI 成为 UX 团队智能协作成员</li>
                <li>体验跨越设备，情境感知成主流</li>
                <li>新岗位如 AI 训练师、AI 体验设计师出现</li>
                <li>以人为本的伦理设计成为设计核心</li>
              </ul>
            </Section>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <Card className="mb-6">
      <CardContent className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-base leading-relaxed">{children}</p>
      </CardContent>
    </Card>
  );
}
