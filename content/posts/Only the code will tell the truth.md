+++
title='Only the code will tell the truth'
date=2024-05-20T00:00:00-07:00
draft=false
categories=[]
tags=["code", "comments", "program", "source", "description"]
cover_image='/images/cover/knoxwelle__2020-04-22T172141.000Z.jpg'
+++
In the end, the semantics of a program are defined by the working code. If you only have it in the form of a binary file, it will be difficult to read! However, the source code is usually available if it is your own program, a typical commercial development, an open-source project, or a program in a dynamically interpreted language. When reading the source code, the meaning of the program should be obvious. You can confidently know what the program does just by looking at the source code. Even the most precise description of technical requirements will not tell the whole truth: it contains not a detailed description of what the program actually does, but general wishes of the requirements compiler. An architecture document may contain a description of the planned architecture, but it will not describe the necessary implementation details. These documents may be outdated compared to the current implementation... or simply lost. Perhaps they were never even written. The only thing that might remain is the source code.

Considering all of the above, ask yourself how clearly your code can explain to you or another programmer what it does.

You might say, "Oh, so my comments have everything you need to know." But keep in mind that comments are not working code. They can be just as misleading as any other documentation. It has traditionally been considered that comments are an unequivocally good practice, so some programmers write extensive comments without any thought, even repeating and clarifying facts that are already obvious from the code itself. This is a bad way to make code understandable.

If your code needs comments, try refactoring it so that they are not necessary. Lengthy comments clutter the screen, and your IDE might automatically hide them. If you need to explain a change, do it not in the code, but with a message when saving the code in the version control system.

What can be done to make your code truly truthful and as clear as possible? Try to choose good names. Structure the code with cohesive functionality in mind, which also makes naming easier. Reduce the coupling of the code to achieve orthogonality. Write automated tests that reveal the intended behavior and check the interfaces. Ruthlessly refactor the code if you find a way to write it simpler and better. Make sure your code is as easy to read and understand as possible.

Treat your code like any other creative text—a poem, an essay, a post on an open blog, or an important email. Carefully articulate what you want to express so that the code does what it is intended to do and communicates as simply as possible what it does—so that your intentions are clear when they can no longer be known by you.

Remember that useful code is used much longer than its authors anticipate. Those who will maintain your code will be grateful to you. And if you are the one maintaining it, and the code you are working with is not eager to reveal its secrets, start applying the aforementioned principles as early as possible. Give common sense to the code to preserve your own sanity.