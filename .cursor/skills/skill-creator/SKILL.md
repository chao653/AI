---
name: skill-creator
description: 在本仓库中创建或修改 Agent Skill(SKILL.md)。当用户要求"添加 skill"、"新建技能"、"写一个 skill"、或需要调整已有 skill 的触发条件与说明时使用。
---

# Skill Creator

本 skill 说明如何在本仓库中新增一个符合 Agent Skills 规范的 skill。

## 目录约定

所有 skill 放在 `.cursor/skills/<skill-name>/` 目录下,每个 skill 一个目录,目录内必须有一个 `SKILL.md`:

```
.cursor/skills/
  <skill-name>/
    SKILL.md          # 必需:frontmatter + 使用说明
    scripts/          # 可选:可执行脚本
    references/       # 可选:补充文档,按需加载
    assets/           # 可选:模板、示例文件
```

`<skill-name>` 只能包含小写字母、数字和连字符,例如 `pdf-extract`、`api-client`。

## SKILL.md 结构

```markdown
---
name: <skill-name>
description: <一句话说明这个 skill 做什么,以及什么时候应该使用它>
---

# <标题>

## 何时使用
列出触发场景与关键词。

## 步骤
按顺序给出可执行的操作步骤。

## 注意事项
列出常见错误、边界条件与禁止事项。
```

### frontmatter 要求

- `name`:必须与目录名一致。
- `description`:这是 Agent 判断是否加载该 skill 的唯一依据,要同时写清"做什么"和"何时用",并包含用户可能使用的关键词(中英文都可以)。避免只写功能不写触发条件。
- 不要在 frontmatter 中放多余字段。

## 编写步骤

1. 确认 skill 名称,检查 `.cursor/skills/` 下是否已存在同名目录;若存在则改为修改而不是新建。
2. 创建 `.cursor/skills/<skill-name>/SKILL.md`,先写好 frontmatter。
3. 正文遵循"渐进式披露":SKILL.md 保持简短(建议 500 行以内),只放核心流程;细节、长示例、API 文档放到 `references/` 中,并在 SKILL.md 中用相对路径引用。
4. 如果 skill 需要重复执行的确定性操作(转换、校验、生成),把逻辑写进 `scripts/` 下的脚本,并在 SKILL.md 中给出调用方式,而不是让 Agent 每次重新推导。
5. 在仓库根目录 `README.md` 的 skill 列表中登记新 skill。
6. 用一条符合 description 的自然语言请求做一次自测,确认 skill 会被触发且步骤可以走通。

## 编写原则

- 用命令式、无歧义的句子,直接告诉 Agent 做什么。
- 只写 Agent 不知道的东西:项目约定、工具用法、边界条件。不要复述通用常识。
- 每个步骤应可验证,尽量给出检查命令或预期结果。
- 不要在 skill 中硬编码密钥、账号等敏感信息。
- 中文用户为主的仓库,正文使用中文;`name` 始终使用英文。
