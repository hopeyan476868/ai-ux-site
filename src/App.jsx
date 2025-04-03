import React from "react";
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';

const sections = [
  {
    title: "AI对UX设计流程的影响",
    items: [
      "生成式AI加速创意产出（文生图、界面原型生成）",
      "用户行为分析AI推动数据驱动设计",
      "智能推荐系统实现高度个性化体验",
      "对话式UX与语音交互扩展设计边界",
      "设计工具智能化提升效率"
    ]
  },
  {
    title: "UX设计师如何利用AI提升职场竞争力",
    items: [
      "自动化繁琐事务，节省时间投入战略工作",
      "借助AI激发灵感，拓展创意维度",
      "数据驱动决策，提升设计说服力",
      "跨学科协作，扩大个人技能边界"
    ]
  },
  {
    title: "AI可替代与难以替代的部分",
    items: [
      "✅ 可替代：重复性制作任务、基础数据分析、模板化UI生成",
      "❌ 难以替代：战略洞察、创造力、情感共鸣、伦理判断与团队沟通"
    ]
  },
  {
    title: "未来5年趋势（至2030年）",
    items: [
      "人机协作成为设计新常态",
      "工具全面智能化，流程高度自动化",
      "体验范围扩展至服务与全旅程（EX）",
      "个性化与无界面交互加速发展",
      "新型岗位如AI体验设计师涌现"
    ]
  },
  {
    title: "未来10年趋势（至2035年）",
    items: [
      "AI成为设计过程的主力执行者，设计师转为策展与监督角色",
      "AI嵌入团队决策，成为虚拟协作者",
      "用户体验实时个性化与情境感知",
      "行业重构，策略型与技术型设计师主导",
      "设计伦理成为核心价值"
    ]
  }
];

export default function App() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">AI 时代的 UX 设计趋势</h1>
      <p className="text-center text-gray-500 text-lg">
        洞察人工智能如何影响 UX 设计职业与未来发展
      </p>

      {sections.map((section, idx) => (
        <div key={idx} className="bg-white p-4 rounded-2xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Badge>{idx + 1}</Badge>
            {section.title}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-center pt-10">
        <Button size="lg">立即学习 AI 工具</Button>
      </div>
    </div>
  );
}
