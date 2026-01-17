---
title: "Nanobanana Pro 使用案例"
date: 2025/12/11
description: "带你体验最有意思的🍌玩法"
image: https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/1d66e7a48640c07205eda2b06226f17f.png
isPublic: 1
---
# 1. 红色吐槽涂鸦

![image-20251211013120971](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/1d66e7a48640c07205eda2b06226f17f.png)

**Prompt:**

```
帮我生成图片：生成图片，把它打印出来，然后用红墨水疯狂地加上手写中文批注、涂鸦、乱画，（比如给他画小胡子/书呆子/恶魔造型，你可以增加更多造型），涂鸦的内容主要为吐槽他，还可以加点小剪贴画。原比例。
```

<br>

<br>

<br>

# 2. 无敌少侠 meme

![image-20251210184134479](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/125c85ef27ae54221616d93b38ded13e.png)
**Prompt:**

```
主题人物换成海绵宝宝和胖大星
```

**自定义Prompt**

```fillcard
主体人物换成[人物A]和[人物B]
```

`<fill-card text="主体人物换成[人物A]和[人物B]"></fill-card>`

<br>

<br>

<br>

# 3. 原图和ai图的对比图

![image-20251211020314715](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/5d278bdb3ecc155d7b5b12e4edc029f3.png)

**Prompt:**

```
现在做一个图，内容是用户输入的原图和模型输出ai图的对比图，根据图片的比例和大小采用合适的排列形式，比如上下排列、左右排列或者其他更加有趣的排列方式，内容基于之前的对话内容。不需要文字注释。尽量让两个拼图占满空间
```

<br>

<br>

<br>

# 4. 修复不清晰的中文

Gemini默认生成的是1k图片，乍一看写的还挺好，特别大标题基本没有错误。但是放大看细节，很多的小字都模糊不清。

<img src="https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/190517da4bbadf0ccc3ed8fb95091295.%28null%29" alt="img" style="zoom: 33%;" />

> **方法一**

点击下载按钮，Gemini会下载完整2k图，中文效果会好很多。

![img](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/ca1fd9e1e7ee0940ffc39039bbda0b69.%28null%29)

> **方法二**

如果下载的2k图还是不清晰，这时候我们可以采用直接vibe对话的方式让他修复不清晰的中文。

注意：仍然要点击下载按钮下载2k图

<img src="https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/5ce1375fe74bd8ec42d67b66d11023b8.%28null%29" alt="img"  />

修复效果对比

<img src="https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/271f6b4297bdafe9545b281194873390.%28null%29" alt="img" style="zoom:33%;" />

**Prompt:**

```Plain
修复不清晰的中文
```

# 漫画

```
根据[权利的游戏弥林龙妈解放无垢者大军]，粗犷的水墨漫画风格，黑白底色搭配有限的双色调调色板（根据内容调整），粗犷的锯齿状笔触，浓重的交叉阴影，高对比度的光影，爆发性的动作线条，速度线背景，动感的角度，强烈的视觉冲击，巨大的侵略性字体叠加效果，原始的素描纹理，粗糙的纸张背景，杰作，4K分辨率
```

# 5. 代码库蓝图生成 (generateInfographic)

这是将 GitHub 仓库转化为架构图的核心提示词。

**英文原文 (Template):**

```text
Create a highly detailed technical logical data flow diagram infographic for GitHub repository : "${repoName}".

STRICT VISUAL STYLE GUIDELINES:
${styleGuidelines}
- LAYOUT: Distinct Left-to-Right flow.
- CENTRAL CONTAINER: Group core logic inside a clearly defined central area.
- ICONS: Use relevant technical icons (databases, servers, code files, users).
- TYPOGRAPHY: Highly readable technical font. Text MUST be in ${language}.

${dimensionPrompt}

Repository Context: ${limitedTree}...

Diagram Content Requirements:
1. Title exactly: "${repoName} Data Flow" (Translated to ${language} if not English)
2. Visually map the likely data flow based on the provided file structure.
3. Ensure the "Input -> Processing -> Output" structure is clear.
4. Add short, clear text labels to connecting arrows indicating data type (e.g., "JSON", "Auth Token").
5. IMPORTANT: All text labels and explanations in the image must be written in ${language}.
```

**中文翻译:**

```text
为 GitHub 仓库 "${repoName}" 创建一个高度详细的技术逻辑数据流信息图。

严格的视觉风格指南：
${styleGuidelines}
- 布局：明显的从左到右流向。
- 中心容器：将核心逻辑分组在一个清晰定义的中心区域内。
- 图标：使用相关的技术图标（数据库、服务器、代码文件、用户）。
- 字体：高度可读的技术字体。文字必须使用 ${language}。

${dimensionPrompt} (维度提示，如 2D 平面或 3D 等轴测)

仓库上下文：${limitedTree}... (文件列表)

图表内容要求：
1. 标题务必为： "${repoName} Data Flow"（如果不是英文，请翻译成 ${language}）
2. 根据提供的文件结构，视觉化映射可能的数据流。
3. 确保“输入 -> 处理 -> 输出”的结构清晰。
4. 在连接箭头上添加简短清晰的文本标签，说明数据类型（例如：“JSON”、“Auth Token”）。
5. 重要：图像中的所有文本标签和解释必须使用 ${language} 编写。
```

<br>

# 6. 文章信息图 - 第一阶段：内容分析

此阶段使用 Google Search 能力对网页内容进行结构化提取。

**英文原文 (Template):**

```text
You are an expert Information Designer. Your goal is to extract the essential structure from a web page to create a clear, educational infographic.

Analyze the content at this URL: ${url}

TARGET LANGUAGE: ${language}.

Provide a structured breakdown specifically designed for visual representation in ${language}:
1. INFOGRAPHIC HEADLINE: The core topic in 5 words or less (in ${language}).
2. KEY TAKEAWAYS: The 3 to 5 most important distinct points, steps, or facts (in ${language}). THESE WILL BE THE MAIN SECTIONS OF THE IMAGE.
3. SUPPORTING DATA: Any specific numbers, percentages, or very short quotes that add credibility.
4. VISUAL METAPHOR IDEA: Suggest ONE simple visual concept that best fits this content (e.g., "a roadmap with milestones", "a funnel", "three contrasting pillars", "a circular flowchart").

Keep the output concise and focused purely on what should be ON the infographic. Ensure all content is in ${language}.
```

**中文翻译:**

```text
你是一位专家级的信息设计师。你的目标是从网页中提取核心结构，以创建一个清晰、具有教育意义的信息图。

分析此 URL 的内容：${url}

目标语言：${language}。

提供一个专门为视觉呈现设计的结构化分解（使用 ${language}）：
1. 信息图标题：5 个词以内的核心主题（使用 ${language}）。
2. 核心要点：3 到 5 个最重要的不同观点、步骤或事实（使用 ${language}）。这些将作为图像的主要板块。
3. 支持数据：任何增加可信度的具体数字、百分比或极短的引用。
4. 视觉隐喻创意：建议一个最适合此内容的简单视觉概念（例如：“带里程碑的路线图”、“漏斗”、“三个对比鲜明的支柱”、“圆形流程图”）。

保持输出简洁，纯粹专注于应该出现在信息图上的内容。确保所有内容均使用 ${language}。
```

<br>

# 7. 文章信息图 - 第二阶段：视觉渲染

将第一阶段的分析结果转化为最终图像。

**英文原文 (Template):**

```text
Create a professional, high-quality educational infographic based strictly on this structured content plan:

${structuralSummary} (来自第一阶段的输出)

VISUAL DESIGN RULES:
- ${styleGuidelines} (如：现代社论风、活泼风等)
- LANGUAGE: The text within the infographic MUST be written in ${language}.
- LAYOUT: MUST follow the "VISUAL METAPHOR IDEA" from the plan above if one was provided.
- TYPOGRAPHY: Clean, highly readable sans-serif fonts. The "INFOGRAPHIC HEADLINE" must be prominent at the top.
- CONTENT: Use the actual text from "KEY TAKEAWAYS" in the image. Do not use placeholder text like Lorem Ipsum.
- GOAL: The image must be informative and readable as a standalone graphic.
```

**中文翻译:**

```text
严格根据以下结构化内容计划，创建一张专业、高质量的教育信息图：

${structuralSummary}

视觉设计规则：
- ${styleGuidelines}
- 语言：信息图内的文本必须使用 ${language} 编写。
- 布局：必须遵循上述计划中的“视觉隐喻创意”（如果提供了）。
- 字体：整洁、高度可读的无衬线字体。“信息图标题”必须在顶部突出显示。
- 内容：在图像中使用“核心要点”的实际文本。不要使用 Lorem Ipsum 等占位符文本。
- 目标：图像必须具有信息量，且作为独立图表时具有可读性。
```

