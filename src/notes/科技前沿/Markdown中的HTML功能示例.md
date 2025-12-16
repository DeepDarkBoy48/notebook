---
title: Markdown中的HTML功能示例
date: 2025-12-15
description: 展示在Markdown文件中可以使用的各种HTML功能和技巧
image: https://img.nanopixel.uk/cdn-cgi/image/format=webp,quality=85/https://img.nanopixel.uk/picgo/324ad336440e0791d3984c1f36a7756f.png
---

## 1. 文字样式

### 彩色文字
<span style="color: #e74c3c;">红色文字</span> · 
<span style="color: #3498db;">蓝色文字</span> · 
<span style="color: #2ecc71;">绿色文字</span> · 
<span style="color: #9b59b6;">紫色文字</span>

### 渐变文字

<span style="background: linear-gradient(120deg, #f093fb 0%, #f5576c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; font-size: 1.5em;">
这是渐变色文字效果
</span>

### 高亮标注
这是普通文字，<mark>这是高亮标注的重点内容</mark>，后面继续普通文字。

<mark style="background: #ffeaa7; padding: 2px 6px; border-radius: 4px;">黄色高亮</mark>
<mark style="background: #81ecec; padding: 2px 6px; border-radius: 4px;">青色高亮</mark>
<mark style="background: #fab1a0; padding: 2px 6px; border-radius: 4px;">粉色高亮</mark>

---

## 2. 折叠

内容

<details>
<summary style="cursor: pointer; font-weight: bold; color: #3498db;">📦 点击展开：什么是折叠内容？</summary>

折叠内容使用 `<details>` 和 `<summary>` 标签实现。

- 默认情况下内容是隐藏的
- 点击标题可以展开/收起
- 适合放置补充说明、代码示例等

```javascript
// 这是隐藏在折叠区域的代码
const greeting = "Hello, World!";
console.log(greeting);
```

</details>

<details open>
<summary style="cursor: pointer; font-weight: bold; color: #e74c3c;">⚠️ 默认展开的折叠区域</summary>

添加 `open` 属性可以让折叠区域默认展开。

</details>

---

## 3. 信息提示框

<div style="background: #d4edda; border-left: 4px solid #28a745; padding: 16px; margin: 16px 0; border-radius: 4px;">
<strong>✅ 成功提示</strong><br>
操作已成功完成！这是一个成功提示框的样式。
</div>

<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 16px; margin: 16px 0; border-radius: 4px;">
<strong>⚠️ 警告提示</strong><br>
请注意！这是一个警告提示框，用于提醒用户注意某些事项。
</div>

<div style="background: #f8d7da; border-left: 4px solid #dc3545; padding: 16px; margin: 16px 0; border-radius: 4px;">
<strong>❌ 错误提示</strong><br>
出错了！这是一个错误提示框的样式。
</div>

<div style="background: #cce5ff; border-left: 4px solid #007bff; padding: 16px; margin: 16px 0; border-radius: 4px;">
<strong>💡 信息提示</strong><br>
这是一条有用的信息！可以用来展示提示或说明。
</div>

---

## 4. 键盘按键

按下 <kbd style="background: #eee; padding: 3px 8px; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 0 #999; font-family: monospace;">Ctrl</kbd> + <kbd style="background: #eee; padding: 3px 8px; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 0 #999; font-family: monospace;">C</kbd> 复制

按下 <kbd style="background: #eee; padding: 3px 8px; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 0 #999; font-family: monospace;">⌘</kbd> + <kbd style="background: #eee; padding: 3px 8px; border: 1px solid #ccc; border-radius: 4px; box-shadow: 0 2px 0 #999; font-family: monospace;">V</kbd> 粘贴

---

## 5. 两栏布局

<div style="display: flex; gap: 20px; margin: 20px 0;">
<div style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white;">
<h3 style="margin-top: 0;">🚀 GPT-5.2</h3>
<ul>
<li>逻辑推理强</li>
<li>数学满分</li>
<li>代码严谨</li>
</ul>
</div>
<div style="flex: 1; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 20px; border-radius: 12px; color: white;">
<h3 style="margin-top: 0;">✨ Gemini 3 Pro</h3>
<ul>
<li>百万Token上下文</li>
<li>多模态原生</li>
<li>创意写作好</li>
</ul>
</div>
</div>

---

## 6. 进度条

<div style="margin: 20px 0;">
<p><strong>GPT-5.2 逻辑推理：</strong></p>
<div style="background: #eee; border-radius: 10px; overflow: hidden; height: 24px;">
<div style="background: linear-gradient(90deg, #667eea, #764ba2); width: 95%; height: 100%; display: flex; align-items: center; justify-content: flex-end; padding-right: 10px; color: white; font-weight: bold;">95%</div>
</div>
</div>

<div style="margin: 20px 0;">
<p><strong>Gemini 3 创意写作：</strong></p>
<div style="background: #eee; border-radius: 10px; overflow: hidden; height: 24px;">
<div style="background: linear-gradient(90deg, #11998e, #38ef7d); width: 88%; height: 100%; display: flex; align-items: center; justify-content: flex-end; padding-right: 10px; color: white; font-weight: bold;">88%</div>
</div>
</div>

---

## 7. 徽章标签

<span style="background: #e74c3c; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">HOT</span>
<span style="background: #3498db; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">NEW</span>
<span style="background: #2ecc71; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">推荐</span>
<span style="background: #9b59b6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">AI</span>
<span style="background: #f39c12; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">重要</span>

---

## 8. 引用卡片

<blockquote style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-left: 5px solid #667eea; padding: 20px 24px; margin: 20px 0; border-radius: 0 12px 12px 0; font-style: italic;">
<p style="margin: 0; font-size: 1.1em;">"AI霸权时代结束了，AI战国时代刚刚开始。"</p>
<footer style="margin-top: 12px; color: #666; font-size: 0.9em;">— 2025年AI发展趋势报告</footer>
</blockquote>

---

## 9. 图片并排显示

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0;">
<div style="text-align: center;">
<div style="background: #667eea; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2em;">🤖</div>
<p style="margin-top: 8px; font-weight: bold;">GPT-5.2</p>
</div>
<div style="text-align: center;">
<div style="background: #11998e; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2em;">✨</div>
<p style="margin-top: 8px; font-weight: bold;">Gemini 3</p>
</div>
<div style="text-align: center;">
<div style="background: #f39c12; height: 120px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2em;">🎯</div>
<p style="margin-top: 8px; font-weight: bold;">Claude</p>
</div>
</div>

---

## 10. 时间线

<div style="position: relative; padding-left: 30px; border-left: 3px solid #667eea; margin: 20px 0;">

<div style="position: relative; margin-bottom: 30px;">
<div style="position: absolute; left: -39px; width: 20px; height: 20px; background: #667eea; border-radius: 50%; border: 3px solid white;"></div>
<div style="background: #f8f9fa; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
<strong style="color: #667eea;">2025年11月</strong>
<p style="margin: 8px 0 0 0;">Google发布Gemini 3 Pro，超越GPT-5.1</p>
</div>
</div>

<div style="position: relative; margin-bottom: 30px;">
<div style="position: absolute; left: -39px; width: 20px; height: 20px; background: #e74c3c; border-radius: 50%; border: 3px solid white;"></div>
<div style="background: #f8f9fa; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
<strong style="color: #e74c3c;">2025年12月</strong>
<p style="margin: 8px 0 0 0;">OpenAI发布"Code Red"，紧急推出GPT-5.2</p>
</div>
</div>

<div style="position: relative;">
<div style="position: absolute; left: -39px; width: 20px; height: 20px; background: #2ecc71; border-radius: 50%; border: 3px solid white;"></div>
<div style="background: #f8f9fa; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
<strong style="color: #2ecc71;">2026年展望</strong>
<p style="margin: 8px 0 0 0;">AI战国时代正式开启</p>
</div>
</div>

</div>

---

## 使用说明

以上所有HTML代码都可以直接复制到任何Markdown笔记中使用。只需要将代码粘贴到你的`.md`文件中即可。

<div style="background: #f0f0f0; padding: 20px; border-radius: 12px; text-align: center; margin-top: 30px;">
<p style="margin: 0; font-size: 1.2em;">✨ 尽情发挥你的创意吧！</p>
</div>
