+++
title='To do something hastily and run away is a crime'
date=2024-10-03T00:00:00-07:00
draft=false
categories=[]
tags=["john", "run", "time", "tests", "code", "work"]
cover_image='/images/cover/knoxwelle__2017-06-07T081638.000Z.jpg'
+++
It's getting close to evening. The team is diligently working on the new functionality planned for the current iteration; it seems even the air in the room is pulsing with the rhythm of work. However, John is a bit in a hurry: he has a date waiting for him. However, he manages to finish writing his part of the code, compiles it, registers it in the version control system – and hastily leaves.
A few minutes later, the "red light" comes on: the application build is broken. John didn't have time for automated tests, so he went with the "hack and run" principle, which caused the entire team's work to come to a halt.

The situation has changed – the work rhythm has been disrupted. Now everyone knows that when updating the code from the version control system, the non-functional code will end up on their local computers as well, and since the team needs to integrate a lot of code in preparation for the upcoming demonstration, this becomes a serious obstacle. Essentially, John tripped the team up – integration will only be possible after someone spends their time undoing his changes.

Such a situation happens annoyingly often. To do something hastily and run away –
crime, as it disrupts the normal course of work.
This is a sadly common way for developers to save money.
a little time for myself, ultimately wasting someone else's time,
that serves as a manifestation of direct disrespect towards other people. And yet this
is happening everywhere. Why? Usually because a full assembly
systems or conducting tests take too much time.

Here you come into play – the architect. You put in a lot of effort to create a flexible architecture, train developers in agile development methods (such as test-driven development), and ensure the presence of a continuous integration server. Moreover, you need to establish a culture whose rules prohibit the unnecessary waste of others' working time. For this, among other things, it is necessary to ensure the creation of a high-quality automated testing infrastructure, as it can change the behavior of developers. If the tests run quickly, developers will run them more often, which is already good in itself, but besides that, they will not leave broken code for their colleagues. If the tests depend on external systems or require database access to run, modify them so they can be executed locally with stubs (or at least with an in-memory database), and let these tests run slowly on the build server. Don't make people wait for the computer to do its job, otherwise they will start looking for workarounds that ultimately create problems for everyone else.

Don't spare any time to ensure smooth operation with the system.
This increases labor efficiency, eliminates reasons for employees to avoid work, and ultimately contributes to speeding up the process.
developments. Create surrogates and simulators, eliminate dependencies,
divide the system into smaller modules – do whatever it takes for your
There wasn't even a shadow of temptation among the colleagues to follow the principle of "do it hastily and run away."