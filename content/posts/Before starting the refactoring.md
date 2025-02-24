+++
title='Before starting the refactoring'
date=2024-07-29T00:00:00-07:00
draft=false
categories=[]
tags=["code", "tests", "system", "mistakes", "changes"]
cover_image='/images/cover/knoxwelle__2018-10-24T221749.000Z.jpg'
+++
Sooner or later, every programmer has to perform refactoring of existing code. But before diving in, consider a few things that can save you and your colleagues a lot of time (and spare you from headaches):

- It is best to start refactoring by assessing the state of the existing code in the project and the tests written for it. This way, you can identify the strengths and weaknesses of the code in its current state, to preserve its strong points and avoid the mistakes already made. Everyone thinks their system will be better than the current one... until it turns out that the new code is no better, and maybe even worse, than the previous version, all because we did not learn from the mistakes made in the old system.

- Resist the urge to rewrite everything from scratch. It is best to reuse as much code as possible. No matter how ugly it may seem, this code has already been tested, reviewed, and so on. Throwing away old code, especially if it has been used in a production system, means discarding months (or years) of work on tested and battle-hardened code that may contain unknown workarounds or bug fixes. If you don't take this into account, the new code may exhibit the same mysterious bugs that have already been fixed in the old code. As a result, you will waste a lot of time and effort, as well as the knowledge accumulated over the years.

- A multitude of small changes is better than one large one. By making small changes, it is easier to assess their impact on the system using standard feedback channels, such as testing. It's disheartening to see a good hundred unit tests "fail" after a change is made. The irritation and anxiety caused by such results can lead you to make questionable decisions. It's much easier to cope if only one or two tests "fail" at any given moment.

- After each development iteration, it is important to ensure that all existing tests pass successfully. If the existing tests do not cover the changes you made, create new tests. Do not thoughtlessly discard tests from old code. It may seem at first glance that some of them are not applicable to the new system architecture, but it is definitely worth taking the time to understand the purpose of each specific test.

- Leave personal preferences and ego aside. Why fix something that already works? If the style or organization of the code contradicts your tastes, it is not a sufficient reason for refactoring. Just as your confidence that you can write better code than the previous programmer.

- The emergence of new technology is not a compelling enough reason to conduct refactoring. It is very bad when refactoring is undertaken solely because the existing code is years behind the latest cutting-edge technologies, and we think that a new language or platform will allow us to solve the problem much more elegantly. It is best to leave your system's code alone, except in cases where a cost-benefit analysis shows that a new language or platform can provide significant gains in functionality, ease of maintenance, or performance.

- Remember that people make mistakes. A new code structure does not always guarantee that the new code will be better than the previous one or at least of the same quality. I have witnessed and participated in several failed attempts at reorganization. It was not pleasant, but people are prone to making mistakes.