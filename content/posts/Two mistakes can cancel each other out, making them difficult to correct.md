+++
title='Two mistakes can cancel each other out, making them difficult to correct'
date=2024-11-15T00:00:00-07:00
draft=false
categories=[]
tags=["code", "allan klumpp", "apollo", "everything", "timetolive", "problems", "fix", "defect", "users"]
cover_image='/images/cover/knoxwelle__2019-10-12T040611.000Z.jpg'
+++
Code never lies, but it can be internally contradictory. Sometimes contradictions cause confusion: how can this even work?

In his interview, Allan Klumpp, the lead software developer for the Apollo lunar module, revealed that the engine control software contained a defect that caused the lunar module to behave erratically. However, there was another bug in the program that compensated for the first one, and during the Apollo 11 and 12 moon landings, this software was successfully used before the bugs were discovered and fixed.

Let's consider a function that returns an exit code. Let's say it returns false when it should return true. Now imagine that the calling function does not implement the check for the return value. Everything works perfectly until one day someone discovers the lack of a check and adds it.

Or let's consider an application that stores its state in the form of an XML document.
Let's assume that one of the nodes is incorrectly recorded as TimeToLive (time
life) instead of TimeToDie (time to die), as it should be according to the documentation. Everything will be fine as long as the write code and the read code contain the same
a mistake. But fix it in one place or add a new application reading the same document, and the symmetry will collapse, along with the entire code.

When there are two defects in the code, but the failure seems to be only one, it can become useless.
the methodological approach to error correction. Upon receiving an error message,
The developer discovers a defect, fixes it, and conducts testing. The same failure occurs, but due to the influence of the second defect. Then the first fix is rolled back, the code is examined again, and the second defect is found and fixed. But the first defect is still there, it reappears.
the same rejection, and then the second fix is rolled back. The process repeats, but now the developer has rejected two fixes and is trying to find a third one, which
He will never succeed.

The interaction of two defects in the code, manifesting as the same failure, not only complicates problem-solving but also leads developers into a dead end where they discover that their earlier solutions to the problem were correct.

This happens not only with code: problems are found in documents containing technical requirements. And they can spread, like a virus, from one place to another. A mistake in the code compensates for a mistake in the written specification.

The virus can also affect humans: users discover that when the program says "left," it means "right," and they adjust their settings accordingly.
actions. They even inform new users about the issue: "Remember, when the app says you need to click the left button, it means that
you need to right-click." It's worth fixing the error, and users will have to
to retrain

Single errors are usually easy to detect and fix. Problems arise when there are multiple errors requiring multiple fixes. This is partly because simple problems are easy to fix, and therefore they are usually not postponed, while more complex problems accumulate until a better time.
times.

There is no simple answer to the question of how to solve problems arising from related defects. One must remember their existence, have a clear mind, and be ready to consider all possibilities if necessary.