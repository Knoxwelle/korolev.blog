+++
title='Do not rely on miracles'
date=2024-10-09T00:00:00-07:00
draft=false
categories=["cobol"]
tags=["grace hopper", "cobol", "dll", "magic", "work", "project", "need", "programmers"]
cover_image='/images/cover/knoxwelle__2020-02-07T165621.000Z.jpg'
+++
If you look at any activity, process, or discipline with sufficient
long distance, everything seems simple. Managers who have no experience
software development, believe that the work of a programmer is simple, and programmers who have no management experience feel the same way about the work of a manager.

Programming is a certain activity that some people spend some of their time on. And the most difficult part of the work—the thought process—is the least noticeable and the least appreciated by the uninitiated. For decades, attempts have been made to eliminate the need for skilled thinking personnel. One of the earliest and most memorable attempts was Grace Hopper's efforts to make programming languages less mysterious. Thanks to this, as some predicted, the need for narrowly specialized programmers may disappear. The result (COBOL) contributed to the material well-being of many narrowly specialized programmers in the following decades.

The obsessive idea that software development can be simplified by excluding programming from it seems completely naive to a programmer who understands what it's about. But the train of thought leading
to this error, embedded in human nature, and programmers are prone
this error just like all the others.

In any project, there are many things that an individual programmer may not be closely involved with: obtaining technical requirements from users, approving the budget, setting up the build server, deploying the application in a test or production environment, transitioning the business to new processes or programs, and so on.

If you are not actively engaged in some kind of activity, there is a subconscious tendency to think that it is simple and happens "by some kind of magic."
on its own." As long as this magic lasts, everything is fine. But when (usually the word "when" is more appropriate than "if") the magic ends, the project faces difficulties.

I have encountered projects where developers wasted weeks in vain.
of their time, as no one realized that their work depended on
Is the "correct" version of the DLL loaded? When periodic crashes started,
All possible causes were being checked until someone noticed that the "incorrect" version of the DLL was being loaded.

In another division, everything was going smoothly: projects were completed on time, without late-night debugging and last-minute corrections. So smoothly that upper management decided everything was running "on its own" and that a project manager was no longer needed. Six months later, projects in this department started to run like everywhere else: with delays, errors, and continuous patches.

You don't need to understand all the "magic" that makes your project work, but it wouldn't hurt to understand it at least partially, just as it wouldn't hurt to appreciate those who know some things better than you do.
The most important thing is that if the magic suddenly stops working, you need to know how to restore it.