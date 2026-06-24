---
layout: post
title: "Prompt Injection as Role Confusion"
date: 2026-06-22 23:59:53 +0000
categories: blog
source_url: https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything
---

Models often struggle to distinguish between official system instructions and user input.

New research shows that AI models prioritize the style of text over its actual content. If a user provides a prompt that mimics the format of a system instruction—such as an internal "thinking" block—the model may follow it instead of its original safety rules. Even minor changes in formatting can trick the model into ignoring its primary instructions.

For public sector organizations, this highlights a significant security challenge. It suggests that prompt injection is a structural issue rather than a simple bug. Securing public-facing AI tools will require more than just basic filters; it requires a deeper understanding of how models perceive roles and boundaries.

How are you planning to secure your AI prompts against these style-based attacks?

#AI #CyberSecurity #PublicSector #LLMs #PromptEngineering

https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything
