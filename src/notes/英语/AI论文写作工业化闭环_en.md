# Beyond Teriki from Timelab: Building an Industrialized Closed-Loop for Thesis Writing with NotebookLM + Deep Think

**Timelab revealed the "essay mill" underworld in Kenya, but 99% of people missed the high-end writer Teriki who lives in a sea-view house.** He inadvertently revealed the ultimate secret of AI writing: **The quality of AI output is strictly proportional to the density of the information you feed it.** **Treat AI as a generator, and it produces trash; treat it as a processor of high-density information, and it is gold.**

Inspired by this, **I have built a truly "hallucination-free" industrialized closed-loop for thesis writing using NotebookLM + Deep Think.**

---

# Introduction

In the past few days, Timelab's video "*Taking 1 Million... We Went to the Thesis Ghostwriting Hub*" has gone viral. Most people were attracted by the vast "essay mill industry" in Kenyan slums, the $2.50 cheap labor, and the assembly-line academic fraud. But while everyone was staring at the sensational industry chain, I stopped at one detail.

In the video, there is a high-end writer named Teriki who lives in a sea-view apartment and has direct clients. He is completely different from those cheap writers struggling in small workshops. When asked how he uses AI to assist in thesis writing, his workflow coincided perfectly with what I have always advocated:

> "**First, I never use AI directly to generate articles. I only let AI recommend topics and relevant, academically credible materials. I read the important materials word by word... Only when I ensure I understand the topic do I start writing.**"

At that moment, I realized: this Kenyan writer **understands the essence of AI better than 90% of AI enthusiasts around us.** He inadvertently revealed the supreme mantra of AI thesis writing: **The quality of AI output is strictly proportional to the density of the information you feed it.** **If you only treat AI as a generator, it is a cheap ghostwriter producing trash; if you treat it as a processor for organizing high-density information, it is the strongest research assistant producing gold.**

Today, **combining my experience of writing dozens of legal documents and viral long-form articles using Gemini / ChatGPT**, I want to use Timelab's video to deconstruct a truly applicable "high-density information workflow" for deep thesis writing. The core of this method is not to teach you how to be lazy, but to teach you how to perform "**Manual RAG (Retrieval-Augmented Generation)**."

---

# **Phase 1: Collection and Preparation – Reject the "General Corpus" Fabrications**

The biggest mistake most people make when using AI to write a thesis is directly asking Gemini / ChatGPT: "**Help me write a literature review on XXX.**"

At this point, the AI calls upon the "general corpus" stored in its belly, which is highly likely to fabricate non-existent authors and papers (AI hallucinations).

Just like real thesis writing, the first step must be "high-density information collection." I have two main tools here:

## **1. Scanning and Clue Discovery: Google Search AI Mode**

For publicly available papers, policy documents, or news reports, the Google Search AI mode is the best entry point. Its core advantage is "**What You See Is What You Get (WYSIWYG)**." Click on the citation link, and it jumps directly to the highlighted original text. This helps you quickly filter out trash information from marketing accounts and find truly valuable journals or official reports.

## **2. Deep Academic Retrieval: NotebookLM’s "Source Search" Feature**

Many people only know NotebookLM as a learning tool or a PPT generator, but they don't know it's also a **thesis literature retrieval powerhouse**. In the source section, you can directly use its underlying search capabilities (even enabling the **Deep Research** mode). Its data sources cover high-quality academic databases like Arxiv and Google Scholar. This means you don't need to visit paper websites one by one, filter, and download; you can pull relevant academic resources directly within NotebookLM.

Using Deep Research mode, it not only generates a report but also provides references (e.g., 15 papers), which you can add as corpus with a single click.

## **3. The Final Trump Card: Manual RAG**

If the above tools cannot find the specific documents you need (such as paid papers from CNKI or internal data from specific years), **be sure to do it yourself**. Go to CNKI, Arxiv, or major journal websites, download the PDFs manually, and import them into NotebookLM to let it assist you in reading and understanding.

**At this point, never find it troublesome.** Just like Teriki in the video, only the high-credibility documents that you have personally screened (strongly and weakly related), downloaded, and confirmed are the **special organic ingredients** fed to the AI.

If you are lazy at this step, the subsequent AI output will inevitably be a "**mountain of garbage**."

---

# **Phase 2: Cleaning and Internalization – Only When You Understand Can You Ask Right**

This is the most critical and often overlooked step. Teriki said he would "**read important materials word by word to ensure understanding of the topic.**" Why? As the saying goes: "**AI is a powerful leverage, but the fulcrum of the leverage must be your own growing depth of cognition.**"

## **1. Fully Utilize the Learning Tool: NotebookLM**

You can throw several PDF papers into NotebookLM. It can generate summaries, mind maps, and even audio overviews. But this doesn't mean you can stop reading.

**It serves as your private knowledge base.** You don't need to manually transcribe everything like Teriki; instead, **use NotebookLM to transform messy web pages and PDFs into structured "learning guides" or "key outlines."**

This constitutes the "high-density seed material" fed to the writing AI. You need to use NotebookLM to quickly digest these literatures and form your own "**cognitive map**."

When you click on each document, NotebookLM generates a **Source Guide (summary)** and **keywords** for quick reading. Furthermore, when chatting with NotebookLM, its output respects the documents—every sentence corresponds to the source. Its **WYSIWYG** capability allows you to click citation numbers to jump directly to the highlighted original text, helping you master the literature extremely fast.

Finally, you can import NotebookLM notes into Gemini for analysis. Gemini recently updated to support adding NotebookLM notes, allowing it to see the list of all source documents and read their full content.

*Note: Currently, Gemini cannot recognize the chat history between the user and NotebookLM, which is a bit disappointing as NotebookLM adheres to the original text much more strictly than Gemini. I might write a suggestion letter to the official team later.*

## **2. Only with Mastery Can You Ask "Heuristic Questions"**

I mentioned in a previous article a concept: **Users play the greatest role when using AI in fields they are familiar with.**

- **Expert Mode (Familiar):** You know exactly what you want (e.g., "I want to use a specific research method"). AI acts as a **super assistant**—it strikes wherever you point, and efficiency skyrockets.
- **Novice Mode (Unfamiliar):** AI can only act as a **teacher** and is limited by your cognition. You might not even define the **problem** clearly, and AI can only lead you in or even be misled by your incorrect instructions.

Therefore, when writing academic papers, if you haven't understood the literature yourself, you cannot judge whether the AI's analysis and summaries are correct. Only when you have mastered the topic through reading can you design precise prompts to guide the AI in summarizing and processing according to your logic.

---

# **Phase 3: Reasoning and Generation**

Once you have high-density information (cleaned literature notes) and clear cognition (your perspective), the final step is generation.

Do not directly tell the AI: "Write a thesis for me." Use the "**Step-Back Prompting**" technique. Try putting in a draft and asking the AI: "Based on these documents, where are the current research gaps? What are the logical contradictions?" Boldly propose your writing direction, methodology, and ideas (using the notes you took while reading).

Here, fully expose our ignorance. Let the AI act as a senior mentor in a specific field, evaluating the paper objectively and critically to identify missing links and obtain heuristic questions. This is the process from 0 to 0.5.

Then, ask the AI to output a paper based on the above. As I always emphasize: **As long as the "context" is rich enough and the "logic chain" is clear enough (guaranteed by the thinking process of Deep Think), the AI-generated paper or article is no longer a simple pile of words, but a high-quality work with rigorous logic and detailed data.**

Such a paper has the efficiency of AI and your soul, and every citation is verified by you personally, making it absolutely robust.

I recommend using **Gemini Deep Think**. It is born for academia, introducing a revolutionary **parallel thinking architecture** that can explore **16 reasoning paths** simultaneously. It's not just for piling up information; it's for **verifying logic, solving problems, and discovering blind spots.**

---

# **Conclusion**

Returning to the Timelab video: Teriki can live in a sea-view house because he refuses to be a **compiler** on an assembly line. He chose to be the "**Lions' Historian**" from the African proverb.

> "**Until the lion has his or her own storyteller, the hunter will always be the hero.**"

Teriki is a respectable "**craftsman**"—he uses AI to find the mine and then polishes the gems himself. As a new generation of AI users, we should be "**Modern Industrial Designers**":

We use Google Search AI and NotebookLM to efficiently explore and refine ore (extracting high-density information), then hand these high-purity materials to the precision machine tool that is Deep Think, directing the processing via Prompts (our own cognition).

In the AI era, the barrier to entry for thesis writing seems lower, but in reality, the "**barrier to truth**" has become higher.

Those who try to fabricate with a **general corpus** will eventually be drowned by AI-produced trash.

But those who are willing to spend time on **"Manual RAG,"** willing to read with their brains, and willing to feed high-quality data will turn AI into the sharpest sword in their hands, thereby mastering the right to define the truth.

---

**Note:** I have upgraded to Premium+ and am gradually transcribing articles for a better reading experience for followers on the X platform.

**OK, that's all for today's sharing. A like and a follow are my greatest encouragement.**

**I never moderate comments; I welcome criticism and advice. See you in the comments section.**
