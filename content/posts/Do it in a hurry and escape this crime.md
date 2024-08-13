+++
title = 'Do it in a hurry and escape this crime'
date = 2024-08-11T00:00:00-07:00
draft = false
categories = []
tags = ["time", "john", "work", "tests", "code", "system"]
cover_image='/images/cover/knoxwelle__2017-06-18T220601.000Z.jpg'
+++
Evening is drawing near. Even the air in the room seems to be pulsing at a working pace; the command is pleasant regarding the new features planned for the current iteration. But John is waiting for a date, so he's a touch rushed. He still has time to rush off, rewrite his portion of the code, build it, and register it in the source code management system. After a few minutes, the app's assembly is disrupted, and the "red light" is lit.John acted rashly, assuming that the team would stall because he didn't have time for automated tests.

The working rhythm has failed; the circumstances have altered. Everyone is now aware that updating the code from the version control system will cause it to malfunction on their local machines. This presents a significant challenge for the team, as they need to integrate a large amount of code in order to get ready for the next demonstration. John has really given the team a head start; integration won't happen until someone takes the effort to undo the modifications.

It is illegal to complete tasks quickly and flee since doing so disturbs the regular flow of labor. Unfortunately, developers frequently use this technique to free up some time for themselves, which ultimately wastes the time of others and is a clear sign of contempt. However, it occurs worldwide. Why? 

This is when the role of the architect comes into play. You put a lot of effort into designing a flexible architecture, teaching developers innovative approaches to development (like development through testing), and making sure a server is ready for continuous integration. Furthermore, you must establish a culture that forbids squandering the time of others in the workplace. This calls for the development of a top-notch automated testing infrastructure, among other things, because it has the power to alter developers' behavior. Developers will run tests more frequently if they do them quickly, which is beneficial in and of itself, but they won't leave their peers with broken code.Make the necessary modifications to the tests so that they may be performed locally with dots (or at least with a database kept in memory) if they depend on other systems or require database references. Then, allow the tests to run slowly on the compilation server. People will start seeking traps if you make them wait for the computer to do its task, which will cause issues for everyone else.

Don't squander time to make sure the system operates quickly. This improves productivity, gets rid of excuses for workers to skip work, and eventually helps to accelerate the development process. Make surrogates and simulators, remove dependencies, break the system down into smaller modules—do everything you can to ensure that your colleagues are never even somewhat tempted to adhere to the motto "do in a hurry and escape."