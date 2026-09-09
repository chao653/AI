# 节点 · [Student] Assessment / Answer Page - General Passage

> Figma 文件：`Assessment-2.5 - General Passage`（fileKey `m44q0l36tqh9l1PdggbGho`），页面 `🛝 EXPLORATION` → Section `Section 2`。
> 同组三个状态帧：`· highlighted`（3420:56555）、`· highlighted + note`（3420:56584）、`· highlighting + notes 3`（3423:57098）。

## 2026-09-09 · highlighted 帧走查修正（命名 / 编排 / 内容一致性）

- **任务来源**：用户指令「帮我优化一下这个页面」（链接指向 node 3420-56555）。
- **涉及节点**：
  - `3420:56555` — [Student] Assessment / Answer Page - General Passage · highlighted — https://www.figma.com/design/m44q0l36tqh9l1PdggbGho/Assessment-2.5---General-Passage?node-id=3420-56555
  - `3420:56577` — Question Card（实例，改内部文本覆盖）
  - `3420:56558` / `3420:56559` — Section Stepper Row / Section Stepper
  - `3420:56563` — Text Selection（原 Rectangle 9）
  - `3420:56567` `3420:56568` `3420:56569` — Text Highlight ×3
  - 已删除：`3420:56562`（原 Frame 2611425，选区包裹层）
- **操作摘要**：
  1. 题号同步：Question Card 题号 `1` → `2`，与底部 Question navigation 当前题（2）一致。
  2. 内容对齐：题干与四个选项由「King Cotton」历史题改为基于左侧文章（Elena / Abuela 叙事）的阅读理解题；选中项仍为第 2 项。原文案见下方「回退信息」。
  3. 高亮矩形按实测行宽收口：第 1 行 575→573，第 2 行 602→531（原本越过文字末尾 70px），第 3 行 84→85；选区 509 不变。测量方式：克隆正文 text 节点、设为 WIDTH_AND_HEIGHT 后取对应行字串的宽度。
  4. 分节 stepper 由绝对定位改为 auto layout 子项，父级 `Section Stepper Row` 主轴 / 交叉轴居中；行高 36→34，下方分栏区随之上移 2px（FILL 补齐）。
  5. 选区矩形从 `Frame 2611425`（x=-24、宽 693 的空壳）中提出，直接挂在 Passage Panel 下，位置 (0, 329)，宽 509；空壳删除。
  6. 图层重命名（依 `figma-layer-naming.md`，Title Case、语义化）：Frame 2612224→Content Card；Frame 2612225→Section Stepper Row；Steper→Section Stepper；Frame 2611467→Split Panes；Passage panel→Passage Panel；Group 1→Highlighter Cursor；Text highlight→Text Highlight；正文/标题 text→Passage Body / Passage Title（关闭 autoRename）；Frame 2611466→Divider；Question panel→Question Panel；Panel actions→Panel Actions；Button×3→Mark for Review Button / Prev Button / Next Button；previous + next→Pagination Actions；Rectangle 9→Text Selection。
- **未动（记录缺口）**：
  - `ACT/Notes Switch` 组件母版填充为未绑 token 的 `#FFFFFF`（远程库），实例未覆盖；需在库侧修。
  - 远程组件名 `Steper` 拼写错误（应为 Stepper），库侧问题。
  - Passage Panel 仍为非 auto layout（高亮 / 选区 / 工具栏 / 光标依赖绝对定位），本轮不转。
  - 正文在卡片底边被硬切（滚动容器真实表现），未加渐隐或底部留白，见走查报告 B 轨建议。
  - 另两个同组状态帧存在同样的题号 / 内容 / 默认命名问题，未同步（等用户确认）。
- **结果状态**：已完成（本帧）；同组帧同步 **待用户确认**。
- **截图**：`参考截图/2026-09-09-general-passage-highlighted-before.png`、`参考截图/2026-09-09-general-passage-highlighted-after.png`
- **回退信息**（Question Card 原文案）：题号 `1`；题干 `Which crop was known as "King Cotton" and dominated the Southern economy before the Civil War?`；选项 `Tobacco` / `Cotton`（选中）/ `Rice` / `Indigo`。

## 2026-09-09 · 改为独立设计稿：原帧全量回退，新建 `optimization 4`

- **任务来源**：用户指令「不是在原稿上面看，是另外做一个设计稿」。
- **涉及节点**：
  - 原帧 `3420:56555` — 已回退到修改前状态（题号 / 文案 / 高亮宽度 / stepper 绝对定位 / 选区包裹层 `Frame 2611425` 重建为 `3534:26904` / 全部图层名恢复）。回退后截图与修改前截图像素级一致（diff = 0）。
  - 新帧 `3534:23922` — `optimization 4` — https://www.figma.com/design/m44q0l36tqh9l1PdggbGho/Assessment-2.5---General-Passage?node-id=3534-23922 ，位于页面 `🛝 EXPLORATION` 顶层 (30700, 15736)，紧接用户既有的 `optimization 2 / 3` 一行。
  - 注释文本 `3537:38` — 帧上方 11px 说明，格式沿用页面既有 `Variant A — …` 注释。
  - 新帧内新增 `Scroll Fade` `3534:26905`（Passage Panel 底部 56px 渐隐）。
- **操作摘要**：
  1. 以已修正的帧克隆出 `optimization 4`（继承上一条全部修正：题号、题目内容、高亮收口、stepper 居中、选区清理、语义命名）。
  2. 原帧按上一条记录逐项逆向还原。
  3. `optimization 4` 追加：Notes 切换列文案 `Show` → `Notes`（实例文本覆盖）；Passage Panel 底部加 `Scroll Fade`（线性渐变，上端透明、下端绑 surface token `3092:772`，宽 606 不遮滚动条，约束 STRETCH / MAX）；Content Card 顶部内边距 32 → 24。
- **未动**：同组另两帧；库侧问题（Notes Switch 母版裸白、`Steper` 拼写）。
- **结果状态**：已完成。
- **截图**：`参考截图/2026-09-09-optimization-4.png`
