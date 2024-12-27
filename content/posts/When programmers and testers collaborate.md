+++
title='When programmers and testers collaborate'
date=2024-08-28T00:00:00-07:00
draft=false
categories=[]
tags=[]
cover_image='/images/cover/knoxwelle__2021-09-02T215442.000Z.jpg'
+++
When testers and programmers start collaborating, miracles happen. Less time is spent playing ping-pong with defects in the defect tracking system. Less time is spent discussing whether the behavior is a bug or a new feature, and more time is spent on developing quality.
software that meets customer expectations. There is
many opportunities to establish collaboration even before the coding begins.

Testers can help clients write acceptance tests in the language
their subject area using tools such as Fit (Framework for
Интеграционный тест). If these tests are given to the programmers before they start writing code, they will be able to apply the practice of acceptance test-driven development (ATDD). Programmers write frameworks to run the tests, and then code to ensure they pass.
these tests. Next, these tests are included in the set of regression tests. In this case
In the cooperation organization, functional testing is conducted quickly.
and there is more time left for experimental testing of boundary conditions or scenarios of more sophisticated workflows.

You can go even further. As a tester, I can outline my testing considerations even before the programmers start writing the code for the new feature. If I am interested in the programmers' considerations, they almost
always provide me with information that allows me to achieve better code coverage or reduce the time spent on unnecessary tests. Often, we have managed to prevent defects by clarifying many initial ideas through tests. For example, in one of the projects I participated in,
I handed over the Fit tests to the programmers, which showed what the results were.
expected when searching by mask. The programmer was initially determined to implement only a search by specific words. We managed to communicate with the client, and we were able to agree on the correct interpretation of the search before starting to write the code. As a result, we prevented the occurrence of a defect.
and saved everyone a ton of time.

Programmers can collaborate with testers in the field of automation. 
They are familiar with good coding practices and are capable of helping testers create a reliable set of automated tests, which will serve the interests of the entire team. I have often seen test automation projects fail due to poorly designed tests. Either the tests try to check too much, or the testers do not understand the technology well enough to make the tests independent of the code. Testers often create bottlenecks, so it is beneficial when programmers work with them on tasks such as automation. By determining together with testers what can be tested at an early stage – possibly with the help of some simple tool – programmers gain an additional feedback channel, which ultimately allows them to create higher quality code.

If testers stop thinking only about how to break the program or find errors in the developers' code, then developers will stop thinking that testers are just trying to "get" them and will be more inclined to cooperate. When programmers understand that they are responsible for the quality of their code, the ease of testing it becomes a natural additional quality, and the team can jointly automate more regression tests. Such is the miracle of successful teamwork.