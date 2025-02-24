+++
title='Warning - Common code ownership'
date=2025-01-20T00:00:00-07:00
draft=false
categories=[]
tags=["study", "code", "context", "dependencies", "parts", "number"]
cover_image='/images/cover/knoxwelle__2022-05-18T193358.000Z.jpg'
+++
My first project in the company. I just defended my thesis, and I'm eager to prove myself, so I stay late at work and thoroughly study the existing code. Working on my first task, I apply everything I've been taught: comments, event logs, extracting common code into libraries (where possible), all that stuff. I feel completely ready for code review, but my colleagues seem to pour cold water on me: I get criticized for code reuse!

How so? During my university studies, code reuse was hailed as one of the best practices in software development. All the articles and textbooks I read, guided by experienced professional programmers—were they all wrong?

It turns out, I overlooked something very important. Context.

The fact that two directly unrelated parts of the system use the same logic means less than I thought. Before I put the shared code into one library, these parts worked independently of each other. They could evolve independently. The logic of each could change according to the changing business environment. Those four lines of similar code appeared by chance—a temporary anomaly, a coincidence. Well, I mean, it was a coincidence until I got involved.

The libraries of common code I created tied the shoelaces of the shoes into a single knot. Any movement in the first subject area required synchronization with the second subject area. As long as the functions were independent, the cost of their maintenance was negligible, but as soon as the common library appeared, the volume of necessary testing increased tenfold.

By reducing the absolute number of lines of code in the system, I simultaneously increased the number of dependencies. The context of these dependencies is extremely important: if they were in one place, the common code could be justified and its benefits extracted. But if these dependencies are not kept under control, they will extend their tentacles into more important issues of the system's functioning, even if the code itself appears flawless.

The insidiousness of such errors lies in the correctness of the fundamental ideas. Applying such techniques in the right context is useful, but in the wrong context, they cause more harm than good. Now, if I am working with the code of an existing project and do not know where its various parts might be used, I approach code sharing much more cautiously. Be careful with shared code. Study the context. And only then act.