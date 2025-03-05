+++
title='Before blaming others, check your own code'
date=2024-07-08T00:00:00-07:00
draft=false
categories=[]
tags=["sherlock holmes", "dirk", "compiler", "time", "code", "errors", "version"]
cover_image='/images/cover/knoxwelle__2021-08-30T144419.000Z.jpg'
+++
A developer – any of us! – often finds it difficult to admit that their code doesn't work. It seems so implausible that we are more likely to assume there is a bug in the compiler.

In reality, it is very, very rare for code to be non-functional due to a bug in the compiler, interpreter, operating system, application server, database, memory manager, or any other element of system software. Yes, there are bugs, but they are much less frequent than we would like to think.

Once, I actually encountered a bug in the compiler (removing the loop variable during optimization), but in all other cases, my complaints about the compiler or operating system turned out to be unfounded. I wasted a lot of my time, support staff time, and management time, only to end up in an awkward position when it turned out that the mistake was my own.

When the development tools used in a project have stood the test of time, are widely used, and are part of numerous technology stacks, there is no particular reason to doubt their quality. Of course, if it is an early version of the tool, or if only a few people in the world use it, or if it is a rarely downloaded open-source project with version number 0.1, it is quite reasonable to be suspicious of this tool. (Similarly, one can be suspicious of an alpha version of a commercial tool.)

Considering how rare errors in compilers are, it is much more advantageous to spend time and effort searching for errors in your own code rather than trying to prove that the compiler is wrong. All the usual debugging considerations apply here: isolate the problem, use stubs instead of calls, surround the problematic area with checks; verify adherence to calling conventions, common libraries, and version numbers; describe the problem to a colleague; check if the stack is corrupted and ensure variable type matching; try running the code on different computers and in different build configurations, such as debug and release.

Question your own assumptions and the assumptions of others. The assumptions underlying the operation of tools from different manufacturers may not match; the same is true for different tools from the same manufacturer.

If a colleague reports a bug that you can't reproduce, go and see how it occurs for them. Their actions or the sequence of them might never have occurred to you.

My personal system is as follows: if I can't find the error and start blaming the compiler, it's time to check the integrity of the stack. This is especially useful when adding tracing code changes the localization of the problem.

Multithreading is yet another source of errors that make programmers start yelling at their computers and go gray prematurely. All advice to write simple code becomes exponentially more valuable for multithreaded systems. When searching for such errors, it is difficult to systematically rely on debugging and modular testing, so the simplicity of the design becomes paramount.

So, before throwing accusations at the compiler, remember the advice of Sherlock Holmes – "When you have eliminated the impossible, whatever remains, however improbable, must be the truth" – and follow it, rather than the advice of Dirk Gently: "When you have eliminated the improbable, whatever remains, however impossible, must be the truth."