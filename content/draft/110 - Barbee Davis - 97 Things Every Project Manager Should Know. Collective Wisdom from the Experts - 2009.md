+++
title='84 97 Things Every Project Manager Should Know'
date=2024-07-10T00:00:00-07:00
draft=true
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2021-08-08T051054.000Z.jpg'
+++
84 97 Things Every Project Manager Should Know
The Fallacy of 
Perfect Execution
David Wood
Fredericksburg, Virginia, U.S.
If you think you can create flaw less code if you work hard enough, 
don’t be embarrassed. Many others have thought so, too. Unfortunately, it is 
not possible. Even in theory.
Arbitrary logic is hard to verify in the general case and hard, or impossible, 
to fully test. Drawing an analogy to the bricks and beams used in other 
construction-related activities, three researchers in the UK recently suggested that software is hard to verify because “there are no good, predictable 
building blocks. The elements out of which programs are constructed: statements, procedures, or objects, cannot be composed in a predictable fashion.”
The building blocks of software don’t snap together like Legos. They can be 
put together in so many ways that it is impossible to determine all of the combinations. That may be a decent working definition of Turing completeness.*
Software is, in a word, complicated.
Tracing and verifying arbitrary logic in code may sound esoteric. How about 
the simpler job of tracing programmer intent? Surely we can talk to programmers and ask them what they meant. Unfortunately, programmer intent 
is generally lost within a few days of writing a code block, especially when 
requirements change or are inconsistently documented.
Programmers also change jobs, leaving undocumented or wrongly documented code behind. Source code rapidly becomes the last and only forensic 
clue to programmer intent. Alas, intent can only be imperfectly ascertained 
from clues like variable names, logic flow, and the occasional comment.
* Turing completeness: Named after Alan Turing, this is the concept that every design for a computing 
device could be emulated by a universal machine. True Turing-complete machines are physically 
impossible, due to the unlimited storage they would require. However, Turing completeness may be 
attributed to machines that would be universal if they had unlimited storage.
Download at Boykma.ComCollective Wisdom from the Experts 85
Bugs will remain part of every software product shipped. We put bugs into 
software for both bad reasons (like ignorance of language features or poor 
attention to detail) and good ones (such as conflicting or poorly communicated requirements). Further, bugs are a source of change in software because 
when they are recognized we refactor the code to fix them, injecting new bugs 
in the process.
Meir (Manny) Lehman was the first to recognize that software evolves during its life cycle, way back in 1969. He later figured out that multiple feedback loops exist within a software development effort, and that those feedback 
loops influence the process of evolution. They include the injection of multiple 
(possibly conflicting) requirements and design decisions.
Various degrees of programmer understanding of requirements, design decisions, and implementation details contribute to other feedback loops. In other 
words, the sources of bugs don’t have to be logical programming errors. Bugs 
are also introduced by differences of opinion.
The Fallacy Of Perfect Execution is the delusion that it is possible to create 
flawless code with sufficient attention to detail. If that were so, we would all 
be strong advocates of structured programming techniques. We aren’t, and for 
good reason. Software, at any stage of its evolution, is buggy, extremely likely 
to change, and inaccurately documented.
That insight, simple though it may be, encourages us to approach software 
differently. It encourages us to develop tools and techniques to incrementally 
refactor software implementations, requirements, and documentation.
Download at Boykma.Com