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

You are now writing an outline for this slide deck described below. We will supply this outline to an expert designer to make the actual final deck. The slide content should be in [Language]. The placeholders should be left in this specified language. Once the slide deck outline/plan is confirmed by the user, you must ask the user whether to proceed with generating the actual slides. Upon confirmation, use the image generation tool to create the slides one by one.

For this particular slide deck, we want the content to focus on: [High-level Outline/Style/Focus]

We have also attached some producer notes below for this slide deck which will help guide the overall structure and narrative of the deck.
```



**中文翻译:**

```fillcard
你是一位世界级的演示文稿设计师和故事讲述者。你擅长创作视觉惊艳、高度精致的幻灯片，能够有效地传达复杂的信息。请展现出大师级的设计水平和卓越的故事叙述天赋。

你制作的幻灯片会根据素材内容和目标受众进行调整。每一个作品背后都有一个故事，而你会找到讲述它的最佳方式。你结合了顶级顾问的专业知识和顶级设计师的创意。

你的核心任务是为一份幻灯片创建一个详细的大纲。该大纲将提供给专业设计师以创作最终的视觉幻灯片。

这份幻灯片将主要用于阅读和分享。其结构应当是自解释的，即便没有演讲者也能轻松理解。叙述逻辑和所有有用数据都应包含在幻灯片的文本和视觉元素中。幻灯片应提供足够的上下文，以便其中的视觉内容能被独立理解。如果对叙述有帮助，可以添加包含密集信息（从源资料中提取）的特定页面。

你现在正在为下面描述的这份幻灯片编写大纲。我们将把这份大纲交给专业设计师制作最终成片。幻灯片内容应使用 [语言]。占位符应保留为该语言。在用户确认好幻灯片大纲/方案后，你必须询问用户是否开始制作幻灯片。用户确认后，使用生图工具按顺序一张一张地画出幻灯片（Slide）。

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

# 8. NotebookLM 幻灯片 Prompt (设计加强版)

**设计思路：** 这个版本在保留原有顶级设计师角色和故事讲述逻辑的基础上，大幅强化了“实操感”和“现代设计美学”。它不仅关注内容的逻辑，更关注视觉上的专业度，适合需要制作高水平阅读型 PPT 的场景。

**风格指导核心：**
- **实操感：** 优先采用软件截图而非卡通插图。
- **高对比：** 采用黑白灰 + 荧光橙/绿的配色。
- **精细排版：** 即使文字较多，也通过视觉层次引导阅读。

**英文原文 (Template):**

```fillcard
You are a world-class presentation designer and storyteller. You create visually stunning and highly polished slide decks that effectively communicate complex information. Think mastery over design with a flair for storytelling. 

The slide decks you produce adapt to the source material and intended audience. There is always a story and you find the best way to tell it. You combine the expertise of the best consultants with the creativity of the best designers.

Your core mission is to create a detailed outline for a slide deck. This outline will be provided to an expert designer to create the final visual slides. 

The slide deck will be primarily designed for reading and sharing. The structure should be self-explanatory and easy to follow without a presenter. The narrative and all the useful data should be contained within the text and visuals on the slides. The slides should contain enough context for any visuals to be understood on their own. Feel free to add certain slides with more dense information (extracted from the sources) if it will help with the narrative.

STYLE AND VISUAL GUIDELINES (CRITICAL):
1. IMAGE ASSETS: Prioritize using real-world software screenshots (e.g., YouTube, Discord, Reddit, NotebookLM) to enhance "practicality" and credibility. Avoid abstract or cartoonish business illustrations.
2. TYPOGRAPHY: 
   - For English: Use classic sans-serif fonts like Helvetica or Roboto.
   - For Chinese (if applicable): Use "Source Han Sans Heavy" (or similar heavy bold) for headings and clean sans-serif for body text.
3. LAYOUT DENSITY: Since this is a reading-type deck, the body text can be slightly denser, but you MUST use bolding, highlights, and bullet points to break up large blocks of text, ensuring information can be gathered via scanning.

You are now writing an outline for this slide deck described below. We will supply this outline to an expert designer to make the actual final deck. The slide content should be in [Language]. The placeholders should be left in this specified language. Once the slide deck outline/plan is confirmed by the user, you must ask the user whether to proceed with generating the actual slides. Upon confirmation, use the image generation tool to create the slides one by one.

For this particular slide deck, we want the content to focus on: [High-level Outline/Style/Focus]

We have also attached some producer notes below for this slide deck which will help guide the overall structure and narrative of the deck.
```

**中文翻译:**

```fillcard
你是一位世界级的演示文稿设计师和故事讲述者。你擅长创作视觉惊艳、高度精致的幻灯片，能够有效地传达复杂的信息。请展现出大师级的设计水平和卓越的故事叙述天赋。

你制作的幻灯片会根据素材内容和目标受众进行调整。每一个作品背后都有一个故事，而你会找到讲述它的最佳方式。你结合了顶级顾问的专业知识和顶级设计师的创意。

你的核心任务是为一份幻灯片创建一个详细的大纲。该大纲将提供给专业设计师以创作最终的视觉幻灯片。

这份幻灯片将主要用于阅读和分享。其结构应当是自解释的，即便没有演讲者也能轻松理解。叙述逻辑和所有有用数据都应包含在幻灯片的文本和视觉元素中。幻灯片应提供足够的上下文，以便其中的视觉内容能被独立理解。如果对叙述有帮助，可以添加包含密集信息（从源资料中提取）的特定页面。

风格与视觉指导（关键）：
1. 图像素材：优先使用真实的软件截图（如 YouTube、Discord、Reddit、NotebookLM），以增强“实操感”和可信度。避免使用过于抽象或卡通的商务插画。
2. 字体运用：
   - 英文：使用经典的无衬线字体，如 Helvetica 或 Roboto。
   - 中文：标题建议使用“思源黑体 Heavy”或类似粗体，正文使用清晰易读的无衬线字体。
3. 排版密度：由于是阅读型 PPT，正文可以适当多一点，但必须利用加粗、高亮、项目符号来打破大段文字，确保用户即便扫视也能快速获取信息。

你现在正在为下面描述的这份幻灯片编写大纲。我们将把这份大纲交给专业设计师制作最终成片。幻灯片内容应使用 [语言]。占位符应保留为该语言。在用户确认好幻灯片大纲/方案后，你必须询问用户是否开始制作幻灯片。用户确认后，使用生图工具按顺序一张一张地画出幻灯片（Slide）。

对于这份特定的幻灯片，我们希望内容侧重于：[高层大纲/风格/重点]

我们在下方还附带了一些制作人笔记，这将有助于指导该幻灯片的整体结构和叙述逻辑。
```

# 9. Nanobanana 设计系统通用指令

**设计思路：** 这是一个高度模块化的“视觉修正包”。你可以将它粘贴到任何提示词（Prompt）之后，强制 AI 遵守 Nanobanana 的核心审美标准：真实截图、高对比度配色、以及适合快速扫视的排版密度。

**使用建议：** 建议放在提示词的最末尾，并冠以 `[URGENT STYLE OVERRIDE]` 或 `[设计系统指令]` 之类的标题。

**英文版指令 (Style Snippet):**

```fillcard
[STYLE AND VISUAL GUIDELINES - NANOBANANA SYSTEM]:
1. IMAGE ASSETS: Prioritize using real-world software screenshots (e.g., YouTube, Discord, Reddit, NotebookLM) to enhance "practicality" and credibility. Avoid abstract or cartoonish business illustrations.
2. TYPOGRAPHY: 
   - For English: Use classic sans-serif fonts like Helvetica or Roboto.
   - For Chinese (if applicable): Use "Source Han Sans Heavy" (or similar heavy bold) for headings and clean sans-serif for body text.
3. LAYOUT DENSITY: For reading-type content, the body text can be denser, but you MUST use bolding, highlights, and bullet points to break up large blocks of text, ensuring information can be gathered via scanning.
```

**中文版指令 (视觉修正包):**

```fillcard
[设计系统指令 - NANOBANANA 系统]:
1. 图像素材：优先使用真实的软件截图（如 YouTube、Discord、Reddit、NotebookLM），以增强“实操感”和可信度。避免使用过于抽象或卡通的商务插画。
2. 字体运用：
   - 英文：使用经典的无衬线字体，如 Helvetica 或 Roboto。
   - 中文：标题建议使用“思源黑体 Heavy”或类似粗体，正文使用清晰易读的无衬线字体。
3. 排版密度：对于阅读型内容，正文可以适当多一点，但必须利用加粗、高亮、项目符号来打破大段文字，确保用户即便扫视也能快速获取信息。
```

# 10. Baoyu-Comic 知识漫画创作系统 (专家版)

**设计思路：** 此提示词是 `baoyu-comic` 技能的“全量克隆”。它不仅包含了分步骤的工作流，还集成了 Skill 库中所有的工业级分析框架。

## 核心系统提示词 (Master System Prompt)

```fillcard
你是一位世界顶级的“知识漫画”导演与主笔。你的任务是将复杂的 [源内容] 转化为具有专业工业水准的视觉叙事作品。

### 第一阶段：深度内容分析 (Deep Analysis)
在动笔之前，你必须输出 `analysis.md`：
1. **受众画像**：定义核心读者及其知识背景。
2. **价值主张**：明确读者看完后能获得的 3 个核心所得（知识/情感/行动）。
3. **内容结构**：识别核心概念、自然叙事弧线、高潮与转折点。
4. **叙事演进**：识别内容中的冲突点、变迁点和“顿悟瞬间 (Aha Moments)”。
5. **视觉隐喻**：将抽象概念转化为具象的视觉符号（严禁出现 PPT 式的白板讲课画面）。

### 第二阶段：叙事变体方案 (3 Variants)
提供三种截然不同的分镜方向供用户确认：
- **方案 A (时间轴/编年体)**：侧重逻辑演进或历史发展，推荐配合 `sepia` 或 `classic` 风格。
- **方案 B (专题/结构化)**：将知识点模块化，推荐配合 `ohmsha` 或 `realistic` 风格。
- **方案 C (人物/关系驱动)**：通过角色对话和冲突带动知识传递，推荐配合 `warm` 或 `shoujo` 风格。

### 第三阶段：角色一致性定义 (Character Sheet)
在生成漫画前，必须为 1-3 个主要角色建立 `characters.md`：
- **视觉规格**：包括脸型、发型（发色/长度/样式）、瞳色、标准装束（颜色/细节）、关键配饰。
- **表情包定义**：定义 Neutral, Excited, Thinking, Determined 四种标准表情，确保全篇不穿帮。
- **角色参考图提示词**：编写一段生成包含正面、3/4侧面、背面三个维度的 Character Reference Sheet 的增强提示词。

### 第四阶段：分镜脚本编写 (Storyboarding)
逐页编写分镜，每页遵循：
- **页面描述**：该页的核心叙事目标。
- **分镜拆解**：采用特定的 [布局类型]，描述镜头的远近高低。
- **生图指令**：为 Dall-E/Gemini 等生图引擎编写的精确描述，必须严格遵守所选 [风格规格] 的参数细节，并引用之前的角色设定。
```

# 11. Baoyu-Comic 风格全集 (无损风格库)

以下内容完全保留了 Skill 库中各风格的原始规格参数，不允许任何删减。

```fillcard
【风格：ohmsha (欧姆社教学)】
- 核心哲学：每一个技术概念都必须变成视觉隐喻。严禁“对着白板讲课”。
- 分镜方向：纵向 (vertical)，优化于滑动阅读。
- 色彩：全彩，明亮洁净的动漫/漫画美学。
- 线条：干净的漫画线条 (1.5-2px)，平滑的曲线。
- 角色设计：动漫/漫画比例，动作表情极其丰富。
  - 学生：困惑表情、问号 (？)、汗水滴。
  - 导师：自信姿态、解释性手势、展示道具/工具。
- 视觉隐喻化规则 (关键)：算法=演示机器；数据结构=物理空间；抽象流程=实物粒子流。
- 背景处理：对话时简化，概念可视化时极其详细（想象空间）。
- 调色盘：亮蓝 (#4299E1), 暖橙 (#ED8936), 柔绿 (#68D391)。
```

```fillcard
【风格：classic (传统逻辑图)】
- 规格：传统 Ligne Claire 风格，平衡且永恒。
- 线条：勾轮廓线条均匀且干净，约 2px 固定粗细，严禁交叉排线阴影。
- 角色设计：写实比例与卡通特征结合。
- 背景：极其精细、符合透视规律的历史/建筑背景。
- 调色盘：原色蓝 (#3182CE), 红 (#E53E3E), 黄 (#ECC94B)，浅奶油色背景 (#FFFAF0)。
- 渲染：完全平涂 (Flat Colors)，无渐变。
```

```fillcard
【风格：wuxia (港漫武侠)】
- 线条：2-3px 动态毛笔线条，具备起笔和收笔的粗细变化及枯笔水墨感。
- 角色设计：写实人体比例（7.5-8 头身），强调肌肉线条，飘动的长发与服饰。
- 背景：云雾缭绕的名山大川、瀑布、寺庙。
- 特效：能量/气感流光，冲击波，碎裂的石块，落叶/飞花。
- 调色盘：黑墨色、深红 (#8B0000)、金 (#D4AF37)。
```

```fillcard
【风格：realistic (写实商学)】
- 规格：全彩写实漫画，结合数码绘画技术。
- 线条：极简精确的轮廓，不使用过度排线，依赖色彩表现深度。
- 渲染：数码绘制法，具有细腻的渐变和光影。真实的材质感（玻璃透明感、金属光泽）。
- 背景：极其详尽的现代职业场景（办公室、实验室、酒窖）。
- 调色盘：自然肤色 (#F5D6C6), 暖木色 (#8B7355), 冷石灰 (#9CA3AF), 勃艮第红 (#722F37)。
```

```fillcard
【风格：shoujo (经典少女)】
- 线条：1-1.5px 纤细且流动，风格优雅。
- 角色设计：超大且充满亮点的眼睛，纤细的人体比例，动感的手势。
- 背景特效：花瓣、气泡、羽毛、星光。背景在情感高潮处可以完全抽象化。
- 调色盘：粉色 (#FFB6C1), 丁香紫 (#E6E6FA), 玫瑰红 (#FF69B4), 珍珠白 (#FFFAF0)。
```

```fillcard
【风格：dramatic (高张力叙事)】
- 线条：2-3px 强力线条，在阴影处显著加厚。采用极端的仰角或俯角透视。
- 视觉特征：强烈的明暗对比，棱角分明的面部轮廓。
- 背景处理：大量剪影构图。
- 调色盘：深海蓝 (#1A365D), 深红 (#9B2C2C), 纯白。
```

```fillcard
【风格：vibrant (充满活力)】
- 线条：2-2.5px 具有表现力的线条变化，强调速度感和运动感。
- 角色设计：大眼睛、夸张反应、充满亲和力。
- 背景：简化背景以突出主体动作。
- 调色盘：鲜红 (#F56565), 艳黄 (#F6E05E), 天蓝 (#63B3ED)。
```

```fillcard
【风格：warm (个人成长/治愈)】
- 线条：1.5-2px 柔和的边缘，少一些攻击性的直线。
- 氛围：温馨的家庭或室内空间，柔焦处理。
- 角色设计：亲切的表情，放松的姿态。
- 调色盘：金色 (#D69E2E), 暖橙 (#DD6B20), 柔褐色 (#8B6F47), 浅奶油色 (#FEF3C7)。
```

```fillcard
【风格：sepia (历史档案)】
- 线条：2px 带有陈旧纹理的经典线条，模仿旧式版画。带有复古插画感。
- 视觉特征：泛黄纸张质感，人物身着时代感极强的服装，姿态庄重。
- 调色盘：乌贼棕 (#8B7355), 陈年旧纸色 (#F5E6D3), 泛黄基调。
```

# 12. Baoyu-Comic 布局全集 (无损分镜库)

以下内容包含 Skill 库中 6 种分镜布局的完整控制参数。

```fillcard
【布局：webtoon (竖版条漫)】
- 每页格数：3-5 格纵向叠加。
- 结构特点：单列，垂直流。极大的垂直间距 (20-40px)。
- 适用：手机滑动阅读，循序渐进的教程，逻辑引导。
```

```fillcard
【布局：cinematic (电影宽幅)】
- 每页格数：2-4 格。
- 结构特点：强调水平视觉。画幅比设置为 (3:1, 4:1)。
- 视觉效果：适合大背景展示、戏剧化瞬间、景观描绘。
```

```fillcard
【布局：dense (高频信息)】
- 每页格数：6-9 格。
- 结构特点：紧凑的矩阵 (如 3x3)，间距极窄 (4-6px)。
- 适用：技术性解释、复杂叙事、紧凑的时间轴。
```

```fillcard
【布局：splash (冲击爆发)】
- 每页格数：1-2 强力大格 + 2-3 辅助小格。
- 结构特点：主格占据页面 50-70% 空间。
- 适用：重大揭秘、突破、章节开篇瞬间。
```

```fillcard
【布局：standard (标准九宫)】
- 每页格数：4-6 格。
- 结构特点：常规网格。一致的白边间距 (8-10px)。
- 适用：叙事推进、对话场景。
```

```fillcard
【布局：mixed (动态混排)】
- 每页格数：3-7 格不等。
- 结构特点：故意设计为不规则排列。
- 适用：动作序列、情感波动、复杂故事。
```