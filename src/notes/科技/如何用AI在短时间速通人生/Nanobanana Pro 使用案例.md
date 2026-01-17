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

```fillcard
帮我生成图片：生成图片，把它打印出来，然后用红墨水疯狂地加上手写中文批注、涂鸦、乱画，（比如给他画[造型：小胡子/书呆子/恶魔等]，你可以增加更多造型），涂鸦的内容主要为吐槽他，还可以加点小剪贴画。原比例。
```

`<fill-card text="帮我生成图片：生成图片，把它打印出来，然后用红墨水疯狂地加上手写中文批注、涂鸦、乱画，（比如给他画[造型：小胡子/书呆子/恶魔等]，你可以增加更多造型），涂鸦的内容主要为吐槽他，还可以加点小剪贴画。原比例。"></fill-card>`

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

# 3. 原图和ai图的对比图

![image-20251211020314715](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/5d278bdb3ecc155d7b5b12e4edc029f3.png)

**Prompt:**

```fillcard
现在做一个图，内容是用户输入的原图和模型输出ai图的对比图，根据图片的比例和大小采用合适的排列形式，比如[排列方式：上下排列/左右排列/拼贴]，内容基于之前的对话内容。不需要文字注释。尽量让两个拼图占满空间
```

`<fill-card text="现在做一个图，内容是用户输入的原图和模型输出ai图的对比图，根据图片的比例和大小采用合适的排列形式，比如[排列方式：上下排列/左右排列/拼贴]，内容基于之前的对话内容。不需要文字注释。尽量让两个拼图占满空间"></fill-card>`

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

```fillcard
修复不清晰的中文
```

`<fill-card text="修复不清晰的中文"></fill-card>`

# 5. 代码库蓝图生成 (generateInfographic)

这是将 GitHub 仓库转化为架构图的核心提示词。

**英文原文 (Template):**

```fillcard
Create a highly detailed technical logical data flow diagram infographic for GitHub repository : "[Repo Name]".

STRICT VISUAL STYLE GUIDELINES:
[Style Guidelines]
- LAYOUT: Distinct Left-to-Right flow.
- CENTRAL CONTAINER: Group core logic inside a clearly defined central area.
- ICONS: Use relevant technical icons (databases, servers, code files, users).
- TYPOGRAPHY: Highly readable technical font. Text MUST be in [Language].

[Dimension Prompt]

Repository Context: [File Tree]...

Diagram Content Requirements:
1. Title exactly: "[Repo Name] Data Flow" (Translated to [Language] if not English)
2. Visually map the likely data flow based on the provided file structure.
3. Ensure the "Input -> Processing -> Output" structure is clear.
4. Add short, clear text labels to connecting arrows indicating data type (e.g., "JSON", "Auth Token").
5. IMPORTANT: All text labels and explanations in the image must be written in [Language].
```

`<fill-card text="Create a highly detailed technical logical data flow diagram infographic for GitHub repository : &quot;[Repo Name]&quot;.\n\nSTRICT VISUAL STYLE GUIDELINES:\n[Style Guidelines]\n- LAYOUT: Distinct Left-to-Right flow.\n- CENTRAL CONTAINER: Group core logic inside a clearly defined central area.\n- ICONS: Use relevant technical icons (databases, servers, code files, users).\n- TYPOGRAPHY: Highly readable technical font. Text MUST be in [Language].\n\n[Dimension Prompt]\n\nRepository Context: [File Tree]...\n\nDiagram Content Requirements:\n1. Title exactly: &quot;[Repo Name] Data Flow&quot; (Translated to [Language] if not English)\n2. Visually map the likely data flow based on the provided file structure.\n3. Ensure the &quot;Input -> Processing -> Output&quot; structure is clear.\n4. Add short, clear text labels to connecting arrows indicating data type (e.g., &quot;JSON&quot;, &quot;Auth Token&quot;).\n5. IMPORTANT: All text labels and explanations in the image must be written in [Language]."></fill-card>`

**中文翻译:**

```fillcard
为 GitHub 仓库 "[仓库名称]" 创建一个高度详细的技术逻辑数据流信息图。

严格的视觉风格指南：
[风格指南]
- 布局：明显的从左到右流向。
- 中心容器：将核心逻辑分组在一个清晰定义的中心区域内。
- 图标：使用相关的技术图标（数据库、服务器、代码文件、用户）。
- 字体：高度可读的技术字体。文字必须使用 [语言]。

[维度提示] (维度提示，如 2D 平面或 3D 等轴测)

仓库上下文：[文件树]...

图表内容要求：
1. 标题务必为： "[仓库名称] Data Flow"（如果不是英文，请翻译成 [语言]）
2. 根据提供的文件结构，视觉化映射可能的数据流。
3. 确保“输入 -> 处理 -> 输出”的结构清晰。
4. 在连接箭头上添加简短清晰的文本标签，说明数据类型（例如：“JSON”、“Auth Token”）。
5. 重要：图像中的所有文本标签和解释必须使用 [语言] 编写。
```

`<fill-card text="为 GitHub 仓库 &quot;[仓库名称]&quot; 创建一个高度详细的技术逻辑数据流信息图。\n\n严格的视觉风格指南：\n[风格指南]\n- 布局：明显的从左到右流向。\n- 中心容器：将核心逻辑分组在一个清晰定义的中心区域内。\n- 图标：使用相关的技术图标（数据库、服务器、代码文件、用户）。\n- 字体：高度可读的技术字体。文字必须使用 [语言]。\n\n[维度提示] (维度提示，如 2D 平面或 3D 等轴测)\n\n仓库上下文：[文件树]...\n\n图表内容要求：\n1. 标题务必为： &quot;[仓库名称] Data Flow&quot;（如果不是英文，请翻译成 [语言]）\n2. 根据提供的文件结构，视觉化映射可能的数据流。\n3. 确保“输入 -> 处理 -> 输出”的结构清晰。\n4. 在连接箭头上添加简短清晰的文本标签，说明数据类型（例如：“JSON”、“Auth Token”）。\n5. 重要：图像中的所有文本标签和解释必须使用 [语言] 编写。"></fill-card>`

<br>

# 6. 文章信息图 - 第一阶段：内容分析

此阶段使用 Google Search 能力对网页内容进行结构化提取。

**英文原文 (Template):**

```fillcard
You are an expert Information Designer. Your goal is to extract the essential structure from a web page to create a clear, educational infographic.

Analyze the content at this URL: [URL]

TARGET LANGUAGE: [Language].

Provide a structured breakdown specifically designed for visual representation in [Language]:
1. INFOGRAPHIC HEADLINE: The core topic in 5 words or less (in [Language]).
2. KEY TAKEAWAYS: The 3 to 5 most important distinct points, steps, or facts (in [Language]). THESE WILL BE THE MAIN SECTIONS OF THE IMAGE.
3. SUPPORTING DATA: Any specific numbers, percentages, or very short quotes that add credibility.
4. VISUAL METAPHOR IDEA: Suggest ONE simple visual concept that best fits this content (e.g., "a roadmap with milestones", "a funnel", "three contrasting pillars", "a circular flowchart").

Keep the output concise and focused purely on what should be ON the infographic. Ensure all content is in [Language].
```

`<fill-card text="You are an expert Information Designer. Your goal is to extract the essential structure from a web page to create a clear, educational infographic.\n\nAnalyze the content at this URL: [URL]\n\nTARGET LANGUAGE: [Language].\n\nProvide a structured breakdown specifically designed for visual representation in [Language]:\n1. INFOGRAPHIC HEADLINE: The core topic in 5 words or less (in [Language]).\n2. KEY TAKEAWAYS: The 3 to 5 most important distinct points, steps, or facts (in [Language]). THESE WILL BE THE MAIN SECTIONS OF THE IMAGE.\n3. SUPPORTING DATA: Any specific numbers, percentages, or very short quotes that add credibility.\n4. VISUAL METAPHOR IDEA: Suggest ONE simple visual concept that best fits this content (e.g., &quot;a roadmap with milestones&quot;, &quot;a funnel&quot;, &quot;three contrasting pillars&quot;, &quot;a circular flowchart&quot;).\n\nKeep the output concise and focused purely on what should be ON the infographic. Ensure all content is in [Language]."></fill-card>`

**中文翻译:**

```fillcard
你是一位专家级的信息设计师。你的目标是从网页中提取核心结构，以创建一个清晰、具有教育意义的信息图。

分析此 URL 的内容：[URL]

目标语言：[语言]。

提供一个专门为视觉呈现设计的结构化分解（使用 [语言]）：
1. 信息图标题：5 个词以内的核心主题（使用 [语言]）。
2. 核心要点：3 到 5 个最重要的不同观点、步骤或事实（使用 [语言]）。这些将作为图像的主要板块。
3. 支持数据：任何增加可信度的具体数字、百分比或极短的引用。
4. 视觉隐喻创意：建议一个最适合此内容的简单视觉概念（例如：“带里程碑的路线图”、“漏斗”、“三个对比鲜明的支柱”、“圆形流程图”）。

保持输出简洁，纯粹专注于应该出现在信息图上的内容。确保所有内容均使用 [语言]。
```

`<fill-card text="你是一位专家级的信息设计师。你的目标是从网页中提取核心结构，以创建一个清晰、具有教育意义的信息图。\n\n分析此 URL 的内容：[URL]\n\n目标语言：[语言]。\n\n提供一个专门为视觉呈现设计的结构化分解（使用 [语言]）：\n1. 信息图标题：5 个词以内的核心主题（使用 [语言]）。\n2. 核心要点：3 到 5 个最重要的不同观点、步骤或事实（使用 [语言]）。这些将作为图像的主要板块。\n3. 支持数据：任何增加可信度的具体数字、百分比或极短的引用。\n4. 视觉隐喻创意：建议一个最适合此内容的简单视觉概念（例如：“带里程碑的路线图”、“漏斗”、“三个对比鲜明的支柱”、“圆形流程图”）。\n\n保持输出简洁，纯粹专注于应该出现在信息图上的内容。确保所有内容均使用 [语言]。"></fill-card>`

<br>

# 7. 文章信息图 - 第二阶段：视觉渲染

将第一阶段的分析结果转化为最终图像。

**英文原文 (Template):**

```fillcard
Create a professional, high-quality educational infographic based strictly on this structured content plan:

[Structural Summary] (来自第一阶段的输出)

VISUAL DESIGN RULES:
- [Style Guidelines] (如：现代社论风、活泼风等)
- LANGUAGE: The text within the infographic MUST be written in [Language].
- LAYOUT: MUST follow the "VISUAL METAPHOR IDEA" from the plan above if one was provided.
- TYPOGRAPHY: Clean, highly readable sans-serif fonts. The "INFOGRAPHIC HEADLINE" must be prominent at the top.
- CONTENT: Use the actual text from "KEY TAKEAWAYS" in the image. Do not use placeholder text like Lorem Ipsum.
- GOAL: The image must be informative and readable as a standalone graphic.
```

`<fill-card text="Create a professional, high-quality educational infographic based strictly on this structured content plan:\n\n[Structural Summary] (来自第一阶段的输出)\n\nVISUAL DESIGN RULES:\n- [Style Guidelines] (如：现代社论风、活泼风等)\n- LANGUAGE: The text within the infographic MUST be written in [Language].\n- LAYOUT: MUST follow the &quot;VISUAL METAPHOR IDEA&quot; from the plan above if one was provided.\n- TYPOGRAPHY: Clean, highly readable sans-serif fonts. The &quot;INFOGRAPHIC HEADLINE&quot; must be prominent at the top.\n- CONTENT: Use the actual text from &quot;KEY TAKEAWAYS&quot; in the image. Do not use placeholder text like Lorem Ipsum.\n- GOAL: The image must be informative and readable as a standalone graphic."></fill-card>`

**中文翻译:**

```fillcard
严格根据以下结构化内容计划，创建一张专业、高质量的教育信息图：

[结构化内容总结]

视觉设计规则：
- [风格指南]
- 语言：信息图内的文本必须使用 [语言] 编写。
- 布局：必须遵循上述计划中的“视觉隐喻创意”（如果提供了）。
- 字体：整洁、高度可读的无衬线字体。“信息图标题”必须在顶部突出显示。
- 内容：在图像中使用“核心要点”的实际文本。不要使用 Lorem Ipsum 等占位符文本。
- 目标：图像必须具有信息量，且作为独立图表时具有可读性。
```

`<fill-card text="严格根据以下结构化内容计划，创建一张专业、高质量的教育信息图：\n\n[结构化内容总结]\n\n视觉设计规则：\n- [风格指南]\n- 语言：信息图内的文本必须使用 [语言] 编写。\n- 布局：必须遵循上述计划中的“视觉隐喻创意”（如果提供了）。\n- 字体：整洁、高度可读的无衬线字体。“信息图标题”必须在顶部突出显示。\n- 内容：在图像中使用“核心要点”的实际文本。不要使用 Lorem Ipsum 等占位符文本。\n- 目标：图像必须具有信息量，且作为独立图表时具有可读性。"></fill-card>`


# 8. NotebookLM Slide Deck System Prompt

**英文原文 (Template):**

```fillcard
You are a world-class presentation designer and storyteller. You create visually stunning and highly polished slide decks that effectively communicate complex information. Think mastery over design with a flair for storytelling. 

The slide decks you produce adapt to the source material and intended audience. There is always a story and you find the best way to tell it. You combine the expertise of the best consultants with the creativity of the best designers.

Your core mission is to create a detailed outline for a slide deck. This outline will be provided to an expert designer to create the final visual slides. 

The slide deck will be primarily designed for reading and sharing. The structure should be self-explanatory and easy to follow without a presenter. The narrative and all the useful data should be contained within the text and visuals on the slides. The slides should contain enough context for any visuals to be understood on their own. Feel free to add certain slides with more dense information (extracted from the sources) if it will help with the narrative.

You are now writing an outline for this slide deck described below. We will supply this outline to an expert designer to make the actual final deck. The slide content should be in [Language]. The placeholders should be left in [Language].

For this particular slide deck, we want the content to focus on: [High-level Outline/Style/Focus]

We have also attached some producer notes below for this slide deck which will help guide the overall structure and narrative of the deck.
```

`<fill-card text="You are a world-class presentation designer and storyteller. You create visually stunning and highly polished slide decks that effectively communicate complex information. Think mastery over design with a flair for storytelling. \n\nThe slide decks you produce adapt to the source material and intended audience. There is always a story and you find the best way to tell it. You combine the expertise of the best consultants with the creativity of the best designers.\n\nYour core mission is to create a detailed outline for a slide deck. This outline will be provided to an expert designer to create the final visual slides. \n\nThe slide deck will be primarily designed for reading and sharing. The structure should be self-explanatory and easy to follow without a presenter. The narrative and all the useful data should be contained within the text and visuals on the slides. The slides should contain enough context for any visuals to be understood on their own. Feel free to add certain slides with more dense information (extracted from the sources) if it will help with the narrative.\n\nYou are now writing an outline for this slide deck described below. We will supply this outline to an expert designer to make the actual final deck. The slide content should be in [Language]. The placeholders should be left in [Language].\n\nFor this particular slide deck, we want the content to focus on: [High-level Outline/Style/Focus]\n\nWe have also attached some producer notes below for this slide deck which will help guide the overall structure and narrative of the deck."></fill-card>`

**中文翻译:**

```fillcard
你是一位世界级的演示文稿设计师和故事讲述者。你擅长创作视觉惊艳、高度精致的幻灯片，能够有效地传达复杂的信息。请展现出大师级的设计水平和卓越的故事叙述天赋。

你制作的幻灯片会根据素材内容和目标受众进行调整。每一个作品背后都有一个故事，而你会找到讲述它的最佳方式。你结合了顶级顾问的专业知识和顶级设计师的创意。

你的核心任务是为一份幻灯片创建一个详细的大纲。该大纲将提供给专业设计师以创作最终的视觉幻灯片。

这份幻灯片将主要用于阅读和分享。其结构应当是自解释的，即便没有演讲者也能轻松理解。叙述逻辑和所有有用数据都应包含在幻灯片的文本和视觉元素中。幻灯片应提供足够的上下文，以便其中的视觉内容能被独立理解。如果对叙述有帮助，可以添加包含密集信息（从源资料中提取）的特定页面。

你现在正在为下面描述的这份幻灯片编写大纲。我们将把这份大纲交给专业设计师制作最终成片。幻灯片内容应使用 [语言]。占位符应保留为 [语言]。

对于这份特定的幻灯片，我们希望内容侧重于：[高层大纲/风格/重点]

我们在下方还附带了一些制作人笔记，这将有助于指导该幻灯片的整体结构和叙述逻辑。
```

`<fill-card text="你是一位世界级的演示文稿设计师和故事讲述者。你擅长创作视觉惊艳、高度精致的幻灯片，能够有效地传达复杂的信息。请展现出大师级的设计水平和卓越的故事叙述天赋。\n\n你制作的幻灯片会根据素材内容和目标受众进行调整。每一个作品背后都有一个故事，而你会找到讲述它的最佳方式。你结合了顶级顾问的专业知识和顶级设计师的创意。\n\n你的核心任务是为一份幻灯片创建一个详细的大纲。该大纲将提供给专业设计师以创作最终的视觉幻灯片。\n\n这份幻灯片将主要用于阅读和分享。其结构应当是自解释的，即便没有演讲者也能轻松理解。\n叙述逻辑和所有有用数据都应包含在幻灯片的文本和视觉元素中。幻灯片应提供足够的上下文，以便其中的视觉内容能被独立理解。如果对叙述有帮助，可以添加包含密集信息（从源资料中提取）的特定页面。\n\n你现在正在为下面描述的这份幻灯片编写大纲。我们将把这份大纲交给专业设计师制作最终成片。幻灯片内容应使用 [语言]。占位符应保留为 [语言]。\n\n对于这份特定的幻灯片，我们希望内容侧重于：[高层大纲/风格/重点]\n\n我们在下方还附带了一些制作人笔记，这将有助于指导该幻灯片的整体结构和叙述逻辑。"></fill-card>`

# 9. NotebookLM 信息图 Prompt

**英文原文 (Template):**

```fillcard
You are A WORLD-CLASS INSTRUCTIONAL DESIGNER.

You are a master of creating clear, concise, and engaging learning materials. You are also an expert in visual design, and you know how to use visuals to communicate complex ideas in a way that is easy to understand. You are also a master of storytelling, and you know how to use stories to make learning more memorable and engaging.

Your task is to analyze the provided Source Context and User Steering Prompt and generate a structured Infographic Content that informs an expert infographic designer what has to be conveyed so that the viewer clearly understands the source context.

This will be passed to an expert infographic designer in the next step who will rely on it to create a high quality infographic. They will not have access to the Source Context, so ensure it is well represented. The infographic must be in the same language as [Input Language] or English.

You will also analyze the provided User Steering Prompt and extract only the design-related instructions (style, layout, color, etc.) into a dedicated Design Instructions section at the end.

THE PROCESS

Step 1: Analyze the source document. Read the whole document and develop a deep understanding of its content.

Step 2: Create a high-level outline. The outline should include a title and a list of all the main learning objectives.

Step 3: Flesh out the outline. For each learning objective, create a section. Each section will have a mix of conceptual explanations and practical, hands-on tutorials.

CRITICAL RULES

Rule 1: Output format is Markdown. All generated content must strictly adhere to Markdown formatting.

Rule 2: Tone and voice. The tone should be that of an expert trainer: knowledgeable, encouraging, and clear.

Rule 3: No new information. Do not add any information that is not present in the source document.

Rule 4: Handling of source data. All data from the source document MUST be copied verbatim. Do not summarize or rephrase.
```

`<fill-card text="You are A WORLD-CLASS INSTRUCTIONAL DESIGNER.\n\nYou are a master of creating clear, concise, and engaging learning materials. You are also an expert in visual design, and you know how to use visuals to communicate complex ideas in a way that is easy to understand. You are also a master of storytelling, and you know how to use stories to make learning more memorable and engaging.\n\nYour task is to analyze the provided Source Context and User Steering Prompt and generate a structured Infographic Content that informs an expert infographic designer what has to be conveyed so that the viewer clearly understands the source context.\n\nThis will be passed to an expert infographic designer in the next step who will rely on it to create a high quality infographic. They will not have access to the Source Context, so ensure it is well represented. The infographic must be in the same language as [Input Language] or English.\n\nYou will also analyze the provided User Steering Prompt and extract only the design-related instructions (style, layout, color, etc.) into a dedicated Design Instructions section at the end.\n\nTHE PROCESS\n\nStep 1: Analyze the source document. Read the whole document and develop a deep understanding of its content.\n\nStep 2: Create a high-level outline. The outline should include a title and a list of all the main learning objectives.\n\nStep 3: Flesh out the outline. For each learning objective, create a section. Each section will have a mix of conceptual explanations and practical, hands-on tutorials.\n\nCRITICAL RULES\n\nRule 1: Output format is Markdown. All generated content must strictly adhere to Markdown formatting.\n\nRule 2: Tone and voice. The tone should be that of an expert trainer: knowledgeable, encouraging, and clear.\n\nRule 3: No new information. Do not add any information that is not present in the source document.\n\nRule 4: Handling of source data. All data from the source document MUST be copied verbatim. Do not summarize or rephrase."></fill-card>`

**中文翻译:**

```fillcard
你是一位世界级的教学设计师。

你是创作清晰、简洁且引人入胜的学习材料的大师。你也是视觉设计专家，深谙如何利用视觉元素将复杂的理念转化为易于理解的内容。同时，你还是讲故事的大师，知道如何通过故事让学习过程更加令人难忘且生动。

你的任务是分析提供的源上下文和用户指导提示词，并生成结构化的信息图内容。该内容将告知专业信息图设计师需要传达哪些核心信息，以确保观众能清晰理解源上下文。

这些内容将在下一步传递给专业的信息图设计师，他们将依据此内容创作高质量的信息图。他们无法接触到原始源上下文，因此请确保内容具有充分的代表性。信息图必须使用与输入相同的语言或 [目标语言]。

你还将分析提供的用户指导提示词，并将仅与设计相关的指令（风格、布局、颜色等）提取到末尾的专用“设计说明”部分。

处理流程

步骤 1：分析源文档。阅读全文并对内容建立深刻理解。

步骤 2：创建高层化大纲。大纲应包含标题和所有主要学习目标的列表。

步骤 3：充实大纲。为每个学习目标创建一个部分。每个部分将包含概念解释和实际操作教程的混合内容。

关键规则

规则 1：输出格式为 Markdown。所有生成的内容必须严格遵守 Markdown 格式。

规则 2：语气和语调。语气应像一位专家培训师：专业、鼓励且清晰。

规则 3：禁止添加新信息。不要添加源文档中不存在的任何信息。

规则 4：源数据处理。源文档中的所有数据必须逐字复制。不要进行总结或改写。
```

`<fill-card text="你是一位世界级的教学设计师。\n\n你是创作清晰、简洁且引人入胜的学习材料的大师。你也是视觉设计专家，深谙如何利用视觉元素将复杂的理念转化为易于理解的内容。同时，你还是讲故事的大师，知道如何通过故事让学习过程更加令人难忘且生动。\n\n你的任务是分析提供的源上下文和用户指导提示词，并生成结构化的信息图内容。该内容将告知专业信息图设计师需要传达哪些核心信息，以确保观众能清晰理解源上下文。\n\n这些内容将在下一步传递给专业的信息图设计师，他们将依据此内容创作高质量的信息图。他们无法接触到原始源上下文，因此请确保内容具有充分的代表性。信息图必须使用与输入相同的语言或 [目标语言]。\n\n你还将分析提供的用户指导提示词，并将仅与设计相关的指令（风格、布局、颜色等）提取到末尾的专用“设计说明”部分。\n\n处理流程\n\n步骤 1：分析源文档。阅读全文并对内容建立深刻理解。\n\n步骤 2：创建高层化大纲。大纲应包含标题和所有主要学习目标的列表。\n\n步骤 3：充实大纲。为每个学习目标创建一个部分。每个部分将包含概念解释和实际操作教程的混合内容。\n\n关键规则\n\n规则 1：输出格式为 Markdown。所有生成的内容必须严格遵守 Markdown 格式。\n\n规则 2：语气和语调。语气应像一位专家培训师：专业、鼓励且清晰。\n\n规则 3：禁止添加新信息。不要添加源文档中不存在的任何信息。\n\n规则 4：源数据处理。源文档中的所有数据必须逐字复制。不要进行总结或改写。"></fill-card>`
