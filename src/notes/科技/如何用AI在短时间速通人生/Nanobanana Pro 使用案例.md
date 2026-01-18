---
title: Nanobanana Pro 使用案例
date: 2025/12/11
description: 带你体验最有意思的🍌玩法
image: https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/1d66e7a48640c07205eda2b06226f17f.png
isPublic: 1
sticky: 1
---
# 1. 红色吐槽涂鸦

![image-20251211013120971](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/1d66e7a48640c07205eda2b06226f17f.png)

**Prompt:**

```fillcard
帮我生成图片：生成图片，把它打印出来，然后用红墨水疯狂地加上手写中文批注、涂鸦、乱画，（比如给他画[造型：小胡子/书呆子/恶魔等]，你可以增加更多造型），涂鸦的内容主要为吐槽他，还可以加点小剪贴画。原比例。
```



# 2. 无敌少侠 meme

![image-20251210184134479](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/125c85ef27ae54221616d93b38ded13e.png)

**Prompt:**
```fillcard
主体人物换成[人物A]和[人物B]
```



# 3. 原图和ai图的对比图

![image-20251211020314715](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/5d278bdb3ecc155d7b5b12e4edc029f3.png)

**Prompt:**

```fillcard
现在做一个图，内容是用户输入的原图和模型输出ai图的对比图，根据图片的比例和大小采用合适的排列形式，比如[排列方式：上下排列/左右排列/拼贴]，内容基于之前的对话内容。不需要文字注释。尽量让两个拼图占满空间
```

# 4. 修复不清晰的中文

Gemini 默认生成的是 1k 图片，乍一看写的还挺好，特别大标题基本没有错误。但是放大看细节，很多的小字都模糊不清。

<img src="https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/190517da4bbadf0ccc3ed8fb95091295.%28null%29" alt="img" style="zoom: 33%;" />

## 方法一：下载 2k 原图

点击下载按钮，Gemini 会下载完整 2k 图，中文效果会好很多。

![img](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/ca1fd9e1e7ee0940ffc39039bbda0b69.%28null%29)

<br>

## 方法二：使用 Vibe 对话修复

如果下载的 2k 图还是不清晰，这时候我们可以采用直接 vibe 对话的方式让他修复不清晰的中文。

**注意：** 仍然要点击下载按钮下载 2k 图。

<img src="https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/5ce1375fe74bd8ec42d67b66d11023b8.%28null%29" alt="img"  />

**修复效果对比：**

<img src="https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/271f6b4297bdafe9545b281194873390.%28null%29" alt="img" style="zoom:33%;" />

**Prompt:**

```fillcard
修复不清晰的中文
```









# 5. NotebookLM 幻灯片 Prompt

**英文原文 (Template):**

```fillcard
You are a world-class presentation designer and storyteller. You create visually stunning and highly polished slide decks that effectively communicate complex information. Think mastery over design with a flair for storytelling. 

The slide decks you produce adapt to the source material and intended audience. There is always a story and you find the best way to tell it. You combine the expertise of the best consultants with the creativity of the best designers.

Your core mission is to create a detailed outline for a slide deck. This outline will be provided to an expert designer to create the final visual slides. 

The slide deck will be primarily designed for reading and sharing. The structure should be self-explanatory and easy to follow without a presenter. The narrative and all the useful data should be contained within the text and visuals on the slides. The slides should contain enough context for any visuals to be understood on their own. Feel free to add certain slides with more dense information (extracted from the sources) if it will help with the narrative.

You are now writing an outline for this slide deck described below. We will supply this outline to an expert designer to make the actual final deck. The slide content should be in [Language]. The placeholders should be left in this specified language.

For this particular slide deck, we want the content to focus on: [High-level Outline/Style/Focus]

We have also attached some producer notes below for this slide deck which will help guide the overall structure and narrative of the deck.
```



**中文翻译:**

```fillcard
你是一位世界级的演示文稿设计师和故事讲述者。你擅长创作视觉惊艳、高度精致的幻灯片，能够有效地传达复杂的信息。请展现出大师级的设计水平和卓越的故事叙述天赋。

你制作的幻灯片会根据素材内容和目标受众进行调整。每一个作品背后都有一个故事，而你会找到讲述它的最佳方式。你结合了顶级顾问的专业知识和顶级设计师的创意。

你的核心任务是为一份幻灯片创建一个详细的大纲。该大纲将提供给专业设计师以创作最终的视觉幻灯片。

这份幻灯片将主要用于阅读和分享。其结构应当是自解释的，即便没有演讲者也能轻松理解。叙述逻辑和所有有用数据都应包含在幻灯片的文本和视觉元素中。幻灯片应提供足够的上下文，以便其中的视觉内容能被独立理解。如果对叙述有帮助，可以添加包含密集信息（从源资料中提取）的特定页面。

你现在正在为下面描述的这份幻灯片编写大纲。我们将把这份大纲交给专业设计师制作最终成片。幻灯片内容应使用 [语言]。占位符应保留为该语言。

对于这份特定的幻灯片，我们希望内容侧重于：[高层大纲/风格/重点]

我们在下方还附带了一些制作人笔记，这将有助于指导该幻灯片的整体结构和叙述逻辑。
```



# 6. NotebookLM 信息图 Prompt

**英文原文 (Template):**

```fillcard
You are A WORLD-CLASS INSTRUCTIONAL DESIGNER.

You are a master of creating clear, concise, and engaging learning materials. You are also an expert in visual design, and you know how to use visuals to communicate complex ideas in a way that is easy to understand. You are also a master of storytelling, and you know how to use stories to make learning more memorable and engaging.

Your task is to analyze the provided Source Context and User Steering Prompt and generate a structured Infographic Content that informs an expert infographic designer what has to be conveyed so that the viewer clearly understands the source context.

This will be passed to an expert infographic designer in the next step who will rely on it to create a high quality infographic. They will not have access to the Source Context, so ensure it is well represented. The infographic must be in the same language as [Input Language] or English.

You will also analyze the provided User Steering Prompt and extract only the [Instruction Type: design-related instructions (style, layout, color, etc.)] into a dedicated Design Instructions section at the end.

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



**中文翻译:**

```fillcard
你是一位世界级的教学设计师。

你是创作清晰、简洁且引人入胜的学习材料的大师。你也是视觉设计专家，深谙如何利用视觉元素将复杂的理念转化为易于理解的内容。同时，你还是讲故事的大师，知道如何通过故事让学习过程更加令人难忘且生动。

你的任务是分析提供的源上下文和用户指导提示词，并生成结构化的信息图内容。该内容将告知专业信息图设计师需要传达哪些核心信息，以确保观众能清晰理解源上下文。

这些内容将在下一步传递给专业的信息图设计师，他们将依据此内容创作高质量的信息图。他们无法接触到原始源上下文，因此请确保内容具有充分的代表性。信息图必须使用与输入相同的语言或 [目标语言]。

你还将分析提供的用户指导提示词，并将仅与[指令类型：设计相关的指令（风格、布局、颜色等）]提取到末尾的专用“设计说明”部分。

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



# 7. 画廊风
## 深邃画廊

**设计思路：** 使用极致的深色（深蓝黑或纯黑）背景，像舞台聚光灯一样打在鱼身上。这种强烈的明暗对比（Chiaroscuro）能让原本“花哨”的色彩瞬间变得像宝石一样珍贵和高级，非常有现代客厅艺术品的感觉。

**英文原文 (Prompt):**

```fillcard
[Oil painting] for a [living room]. The exact same group of [colorful fish] from the original image, maintaining their vibrant red, orange, silver, and blue colors and quantity. They are swimming against a completely completely solid, [deep velvet black] background. No rocks, gravel, or plants. Dramatic studio lighting highlights the vivid colors and scales of the fish, making them pop out of the darkness. Clean, minimalist, sophisticated, high contrast [gallery art style].
```

**中文翻译:**

```fillcard
[客厅油画]。原图中的同一组[多彩鱼群]，保持其鲜艳的红色、橙色、银色和蓝色色彩以及数量。它们在完全纯净的[深天鹅绒黑色]背景下游动。没有岩石、碎石或植物。戏剧性的摄影棚灯光突出了鱼的鲜艳色彩和鳞片，使它们从黑暗中跳脱出来。干净、极简、精致、高对比度的[画廊艺术风格]。
```

![img](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/82643f2f0c697ea6ca54bc2a554e5d8c.jpg)

![img](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/9b8863975fb4abf10856774fd8df5d46.jpeg)

<br>

## 柔和渐变水体画廊

**设计思路：** 如果你不喜欢太黑的背景，可以用一个非常干净、柔和的水体渐变色来代替。关键是“顺滑”，没有任何颗粒感和杂物，营造一种宁静深远的氛围，包容住前景热闹的鱼群。

**英文原文 (Prompt):**

```fillcard
[A large canvas oil painting]. The numerous [colorful fish] (red, orange, silver, blue) from the input remain vibrant and are the sole focus. The noisy background is replaced by a smooth, clean, soft gradient of [deep ocean blues], transitioning from dark indigo at the bottom to a lighter cerulean at the top. No distinct objects, rocks, or texture in the background. Soft, diffused underwater light. Calm, serene, spacious feeling.
```

**中文翻译:**

```fillcard
[大幅布面油画]。输入中众多的[多彩鱼]（红、橙、银、蓝）保持鲜艳，并且是唯一的焦点。嘈杂的背景被光滑、干净、柔和的[深海蓝色]渐变所取代，从底部的深靛蓝过渡到顶部的浅蔚蓝。背景中没有明显的物体、岩石或纹理。柔和的漫射水下光线。平静、宁静、宽敞的感觉。
```

![img](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/066ca83635a756c98802b2e03a2c1c17.jpg)

![img](https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/52795930b6d3cfd20a55fb495dee9060.jpeg)