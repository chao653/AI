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

## 2026-09-09 · Variant B（split layout，参考 Assessment 2.0 草稿布局）

- **任务来源**：用户指令「参考 Assessment 2.0 - Design Draft `9560:56992` 的布局和结构，忽略其 UI 样式，再做一版放在旁边」。
- **涉及节点**：
  - `3556:24231` — [Student] Assessment / Directions - Assessment Overview (split layout) — https://www.figma.com/design/m44q0l36tqh9l1PdggbGho/Assessment-2.5---General-Passage?node-id=3556-24231 ，位于 Section `Directions 页面`（已扩宽到 3832），Variant A 右侧 120px。
  - `3556:24281` Intro Pane / `3556:24283` Structure Pane / `3556:24282` Divider / `3558:150` 帧上方设计说明。
- **操作摘要**：
  1. 结构照搬参考稿：整页白底、左右分栏 + 竖分隔线，无内容卡、无底栏，CTA 内联在左栏。层级为**整卷级** directions（参考稿即 test-level：结构表列出各 section）。
  2. 左栏（pad L136 / R96 / T64，gap 36）：eyebrow `Practice assessment`（text/sm/medium, text/tertiary）→ 标题 `Reading Practice Assessment`（text/3xl/semibold）→ 说明段（text/base/regular, 400 宽）→ 大字总时长 `2 hr 5 min`（数字 text/5xl/semibold + 单位 text/base/regular，BASELINE 对齐）→ `4 sections · 72 questions` → `Start assessment`（Button Variant=Default，无图标）→ 说明 caption（text/xs/regular）。
  3. 右栏（pad L64 / R128 / T64，gap 28）三块，小节标签统一 text/xxs/semibold + text/tertiary、Sentence case（参考稿的 ALL CAPS 按写作规范转换）：
     - `Test structure` 表：4 行 section（序号 / 名称 / 题数 / 时长，行底 1px gray/200）+ Total 行（72 questions · 2 hr 5 min）。
     - `Scores`：完成后可见分数估计与分节明细。
     - `Before you start`：3 条 bullet（稳定网络 / 不刷新关页 / 剩余时间不结转），bullet 点为 4px ellipse 绑 text/tertiary，非键盘字符。
  4. 顶栏沿用产品壳（参考稿没有，保留以贴产品语境）：标题改 `[Assessment Name]`，计时 `02 : 05 : 00`（整卷总时长）。
  5. Section 数据与 Variant A 口径对齐：Section 2 = General Passage / 18 题 / 35 min；其余三节为智能填充占位。
- **与参考稿的差异（有意）**：保留 Assessment Top Bar；标签不用 ALL CAPS；主按钮用库 Button（brand primary）而非参考稿蓝色；bullet 用 vector 圆点。
- **结果状态**：已完成（设计判断）；四节名称 / 题数 / 时长、Scores 文案 **需用户 / PRD 确认**。
- **截图**：`参考截图/2026-09-09-directions-variant-b-split.png`（成稿）、`参考截图/2026-09-09-directions-variant-b-reference.png`（参考稿）
