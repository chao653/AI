# 节点 · [Student] Assessment / Directions - General Passage

> Figma 文件：`Assessment-2.5 - General Passage`（fileKey `m44q0l36tqh9l1PdggbGho`），页面 `🛝 EXPLORATION` → 新建 Section `Directions 页面`（`3545:24161`，位于 `步骤条` Section 右侧）。

## 2026-09-09 · 新建考试前 Directions 页（内容智能填充）

- **任务来源**：用户指令「根据这个页面（方案3，`3439:22517`）设计一个考试前的 directions 页面，内容由你智能填充」。
- **涉及节点**：
  - `3545:24162` — [Student] Assessment / Directions - General Passage — https://www.figma.com/design/m44q0l36tqh9l1PdggbGho/Assessment-2.5---General-Passage?node-id=3545-24162
  - `3545:24163` Assessment Top Bar（克隆自方案3，计时改 `00 : 35 : 00`）
  - `3545:24211` Content Card → `3546:38` Directions Column / `3547:38` Overview Column（`3547:39` Section Overview、`3547:118` Timer Callout、`3547:122` Acknowledge）
  - `3545:24212` Bottom Bar（克隆自方案3，去掉 Question navigation 与分隔线，右侧 `3549:127` Actions：Back to overview / Begin Section 2）
  - `3549:154` 帧上方设计说明文本
- **操作摘要**：
  1. 壳层复用方案3：顶栏、1344×636 内容卡（brand/white + border/primary，radius 16）、底栏（surface/layer/primary，左侧 Section Progress 保留 Segment 1 Done / Segment 2 Current）。
  2. 内容卡改为左右两栏（gap 48，pad 40）。左栏：eyebrow `Section 2 of 4 · Directions`（text/sm/medium, text/tertiary）→ 标题 `Reading: General Passage`（text/2xl/semibold）→ 引导语 → 分隔线 → `How this section works` + 6 条编号说明（编号 24px 圆形 brand/periwinkle/100 + fill/brand/primary/default 数字）。
  3. 右栏 360px：`Section overview` 面板（Passages 1 / Questions 18 multiple choice / Time limit 35 minutes / Scoring 2 points per question，Phosphor Regular 图标）+ `Tools available in this section` 三个 chip（Highlighter / Notes / Mark for Review）→ 计时提示 callout（brand/periwinkle/100）→ ShadCN `Checkbox`（Status=Active，Label `I have read the directions.`，Description 关闭）。
  4. 底栏动作：库 `Button` 实例，`Back to overview`（Variant=Ghost，左 Chevron）+ `Begin Section 2`（Variant=Default，右 Chevron）。
  5. 组件与 token 来源：ShadCN-Default（Button / Checkbox）、Design System 2.0 Foundations（text styles、颜色变量）、Design System 2.0 Icons（Clock / ListChecks / BookOpenText / CheckSquare / NotePencil / Highlighter，均取 Weight=Regular 变体）。全部文字、填充、描边绑变量或 text style，无裸值。
- **内容口径（占位，待 PRD 校正）**：题数 18、时长 35 分钟、每题 2 分、Section 2 of 4；六条说明覆盖：左读右答 / 单选可改 / Highlighter & Notes 自动保存 / Mark for Review / 计时与自动提交 / 提交后不可返回。
- **未动 / 缺口**：
  - 图标着色为对实例内部 vector 逐个改填充（绑 text/tertiary 等），若图标库更新可能被覆盖；库若提供颜色属性应改用属性。
  - Checkbox 显示为已勾选态 + Begin 可用；未勾选时 Begin 是否置灰需产品确认。
  - Section Progress 段数硬编码 4 段，沿用方案3。
- **结果状态**：已完成（设计判断）；内容数字与规则 **需用户 / PRD 确认**。
- **截图**：`参考截图/2026-09-09-directions-general-passage.png`
