+++
title='The assembly must be clean'
date=2024-07-01T00:00:00-07:00
draft=false
categories=["java"]
tags=["java", "warnings", "code", "need", "fix", "example"]
cover_image='/images/cover/knoxwelle__2017-06-05T100213.000Z.jpg'
+++
Have you ever seen a list of compiler warnings the size of an essay on how not to write code and thought: "Of course, something needs to be done about this... but I just don't have time for it right now"? And conversely, have you ever seen a single warning appear during compilation and immediately fix it?

When I start a new project from scratch, there are no warnings, no mess, no problems. But as the codebase grows, if no measures are taken, it's likely that the mess, clutter, warnings, and issues will gradually accumulate. In a large stream of "noise," it becomes significantly harder to find a truly important warning among the hundreds of others that I am not interested in.

To make warnings useful again, I try to adhere to a policy of zero tolerance for warnings during assembly. Even if the warning is insignificant, I eliminate it. If it is not critical but still relevant, I fix the code. If the compiler reports a potential null pointer exception, I fix the source of that danger, even if I "know" that in a real-world scenario this problem will never occur. If the documentation embedded in the code (Javadoc or its equivalent) refers to parameters that have been removed or renamed, I correct the documentation.

If I'm not interested in the warning and it's completely insignificant, I consult with the team about whether we should change our warning policy. For example, I believe that documenting the parameters and return value of a method is often unnecessary, and there is no need to issue a warning if they are not documented. Or here's another example: when transitioning to a new version of a programming language, warnings may appear in the code where there were none before. For example, when generics were introduced in Java 5, old code that did not specify the types of generic parameters was flooded with warnings. I don't need such annoying warnings (at least not yet). Warnings that are not aligned with reality are useless.

By ensuring a consistently clean build, I no longer have to decide whether each warning is significant or not when reviewing them. Ignoring something is also a mental task, and I try to eliminate all unnecessary mental work. Thanks to the clean build, it's easier for me to hand over my work to someone else. If I leave all these warnings, someone else will have to deal with them and decide which ones are important and which are not. Even more likely, this new person will simply ignore all the warnings, including the significant ones.

Warnings during the build are useful. You just need to get rid of the useless noise to start reaping the benefits. Don't put it off until the "spring cleaning" of the code. If something starts to catch your eye, deal with it right away. You need to either fix the source of the warning, suppress its output, or change the warning output policy of your development environment. A clean build is needed not only to check for compilation errors and "failed" tests. Warnings are an important and inevitable part of maintaining code hygiene.