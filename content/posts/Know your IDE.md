+++
title='Know your IDE'
date=2025-04-27T00:00:00-07:00
draft=false
categories=["method", "unix", "java", "c"]
tags=["code", "debuggers", "integrated development environment", "ide", "modern", "java", "unix", "ides", "time", "tools", "method"]
cover_image='/images/cover/knoxwelle__2021-02-21T174224.000Z.jpg'
+++
In the 1980s, the programming environment, as a rule, did not differ much from an advanced text editor – at best. Today, we take syntax highlighting for granted, but back then it was a luxury not available to everyone. Code formatting tools existed as external tools, the use of which corrected spacing. Debuggers also "lived" separately as programs for step-by-step code execution, and working with them required knowing a multitude of mysterious key combinations.

In the 1990s, companies began to realize the profit potential of more convenient and useful development tools. The Integrated Development Environment (IDE) combined previously offered editing features with a compiler, debugger, formatting tools, and other instruments. At that time, menus and mice became popular, which meant that developers no longer needed to memorize complex key combinations to work with their editor. It was enough to select a command from the menu.

In the twenty-first century, IDEs have become so widespread that some companies, targeting market shares in other areas, give them away for free. Modern IDEs offer a plethora of delightful features. I particularly like automatic refactoring, especially the Extract Method function, which allows you to highlight a fragment of code and turn it into a method. Refactoring tools will find all the parameters that need to be passed to the method, making it extremely easy to modify the code. My IDE will even find other code snippets that can be replaced with a call to this method and ask me if I should do it.

Another wonderful feature of modern IDEs is their ability to enforce adherence to the style adopted in the company. For example, in Java, some programmers have started declaring all parameters as "final" (in my opinion, this is a waste of time). Nevertheless, once such a rule is established, I just need to set it in the IDE settings, and I will start receiving warnings for all parameters that are not declared as "final." With the help of style rules, it is also possible to look for potential errors, such as checking the equality of autoboxed objects using reference semantics, as in the case of using the == operator for primitives wrapped in their corresponding objects.

Unfortunately, modern IDEs do not require us to make an effort to master these very IDEs. When I started programming in C under UNIX, I had to spend a considerable amount of time learning to use the vi editor, which was due to its learning curve. But the time spent at the beginning paid off many times over in the years to come. Even the draft of this article was typed in vi. In modern IDEs, the learning curve is such that we never go beyond the basic techniques of working with them.

The first thing I do when learning an IDE is memorize the control key combinations. When I type code, my fingers are on the keyboard, and pressing Ctrl+Shift+I allows me to inline a variable (Inline Variable refactoring operation) without breaking my workflow, whereas navigating the menu with the mouse pointer would distract me. Such distractions create unnecessary context switches and significantly reduce my productivity if I try to do everything the "lazy" way. The same applies to keyboard proficiency: master touch typing, and you won't regret the time spent.

Finally, programmers have time-tested UNIX pipeline utilities that allow them to manipulate code in various ways. For example, if during code review I notice that programmers have named many classes the same, I can easily detect these repetitions using the find, sed, sort, uniq, and grep utilities, for example: find . -name "*.java" | sed 's/.*\\///' | sort | uniq -c | grep -v "^ *1 " | sort -r

We expect the plumber who visits us to know how to use a blowtorch. Let's take some time to learn how to work more efficiently with our IDEs.