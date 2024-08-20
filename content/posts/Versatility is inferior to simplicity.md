+++
title = 'Versatility is inferior to simplicity'
date = 2024-04-16T00:00:00-07:00
draft = false
categories = []
tags = ["software", "solution", "solutions", "universality", "generalization", "leads", "problem", "value", "turn"]
cover_image='/images/cover/knoxwelle__2017-08-06T105344.000Z.jpg'
+++
A typical problem with them is that a lot of frameworks, class libraries, fundamental services, and other infrastructure code are designed to be utilized anywhere and aren't specific to any one application. Since most developers are experts in specific systems, it rarely helps them to try to be as adaptable as possible. The best way to achieve universality isn't through universality based on conjecture, but rather through a careful understanding of well-known concrete examples and an analysis of their essence to find a fundamentally shared solution. Experience in the real world leads to simplicity.

Making an architectural design simpler rather than more feature-rich makes it simpler to decide between two solutions that are identical to each other. When there are two possibilities, go with the simpler, needs-based solution rather than the more flexible, complex one. Of course, it's not impossible—in fact, it's quite likely—that a simpler solution will end up working better in practice. Still, when you know exactly what you need, it's easier to tweak a simple solution than it is to adjust a "universal" solution that hasn't been shown to be sufficiently general.

Many general-purpose solutions turn out to be inadequate for a particular goal, even when the architect has the best of intentions. Software components must, above all, be appropriate for the purpose for which they were designed.Effective universality starts with understanding, and knowledge promotes simplification.

Sometimes, generalization makes a deeper analysis of the problem possible; the resulting solution is clear, simple, and well-founded, and it shares traits with other well-known cases. However, oversimplification itself turns into a problem that causes complications rather than reduces them. Often, the quest for abstract generalization leads to solutions that have nothing to do with the realities of actual advancement. These kinds of generalizations are based on assumptions that later turn out to be false, present options that later turn out to be unsatisfactory, and result in a ballast that is later difficult or impossible to remove. In the end, this will only lead to future complications for architects and developers.

Many architects value universality; however, this opinion shouldn't be taken at face value. Consumers are typically reluctant to pay for universal fattening because they have a very specific problem and value a specialized solution (or do not require it). Concrete solution creation can be flexible and versatile, but if we simultaneously let go of the concrete too soon, we will inevitably stumble into an unexplored world of endless interfaces, asymmetric abstractions, long (and bulky) parameter lists, and clever configurations.