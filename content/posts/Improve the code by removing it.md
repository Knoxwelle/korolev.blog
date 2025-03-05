+++
title='Improve the code by removing it'
date=2024-08-22T00:00:00-07:00
draft=false
categories=[]
tags=["advice", "yagni", "system", "code", "requirements", "client", "tip"]
cover_image='/images/cover/knoxwelle__2021-04-11T052322.000Z.jpg'
+++
Less is more. It's a clichéd short maxim, but sometimes it's really true.

Over the past few weeks, among the improvements I made to our code was the removal of some of its fragments.

We were developing the project following the principles of extreme programming, including YAGNI (You Aren’t Gonna Need It). But human nature is imperfect, and in some places we made mistakes.

I noticed that our product took an unjustifiably long time to perform certain tasks—simple tasks that should have been completed almost instantly. This was all because we overcomplicated their implementation—with all sorts of trinkets and bows that were actually unnecessary but seemed useful at some point.

So, I simplified the code, improved the product's performance, and reduced the overall code entropy, all thanks to removing unnecessary functions from the project code. Fortunately, my unit tests helped me ensure that I didn't break anything as a result of my actions.

Such a simple and quite pleasant experience.

But where did this unnecessary code come from? Why did one of the programmers suddenly decide to write unnecessary code, and why wasn't it uncovered during code review or pair programming? Almost certainly, it was like this:

- These additional features were interesting to the programmer, and he happily wrote them. (Tip: Write useful code, not cool code.)

- Someone decided that it might be needed in the future, so why not write the code right away? (Advice: This contradicts YAGNI. Don't write right now what you don't need right now.

- The "excess" didn't seem that significant, and it was easier to implement this function right away than to contact the client and find out if they needed it. (Tip: Writing and maintaining extra code always takes longer. And the client is a nice guy. A small piece of extra code can grow over time, like a snowball, into a huge maintenance task.)

- To justify the additional feature, the programmer invented new requirements that were neither in the documentation nor in the discussions. In fact, these are fake technical requirements. (Advice: System requirements are set by the client, not by the programmers.)

 So what are you working on now? Is it really necessary?