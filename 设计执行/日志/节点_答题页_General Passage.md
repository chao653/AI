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
