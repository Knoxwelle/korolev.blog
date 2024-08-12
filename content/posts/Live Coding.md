+++
title = 'Live Coding'
date = 2024-05-13T00:00:00-07:00
draft = false
categories = ["recruiting", "github", "canadian", "big4", "pr"]
tags = ["github", "code", "kind", "candidate", "people", "work"]
cover_image='/images/cover/knoxwelle__2021-06-01T075855.000Z.jpg'
+++
I've been going to interviews again, and I'd like to share some observations. This time we talk about live coding in enterprise companies and how the recruitment process should be constructed.

## Live Coding

There's always a lot of noise around him. Some people like it (interviews), some people don't like it at all (candidates), and someone goes to a psychologist after him for six months. This is not really to understand that the candidate is able to code; there are not enough extensive projects on Github, profile articles with code, reports after all. As I was told, this is done to ensure that everyone is treated equally in recruitment. Well, good luck hiring a leader or a gentleman in five rounds. At the second, he'll ask himself, "Do I really need this? Well, there are already three offers," and it will fall off.

All right, live coding. Usually, you get two tasks to program. Yeah, turn the trees. Do you know what roffle is? You come to them later, and they don't have any trees at all. There's an hour for everything. And how this hour will pass depends very much on the interlocutor. There are those who help reason, elaborate the IDE, set up a two-point, and, if forgotten, show some kind of empathy and support—the candidate is still stressed. Take care of them! Much more often, I get those who don't even turn on the cameras. They just give it a job and watch the attempts. At one of these sessions, I solved a three-hour task. Did I get an offer? (No.) "Because you probably have a choice, so we're not going to communicate." Epic ~~fail~~win!

The most interesting live coding experience I've ever had was with one Canadian. We discussed and solved the problem together. Literally together, he wrote one part and I wrote the second, more complicated. And that's when I realized another problem of this session: one-sidedness. We have a co-interview at the end of the day. That is, the candidate should look after future colleagues. Can they code too? Working at "Big4" does not always involve this.

And in a well-known company, they are asked to solve the problems for O(1), but it does not care about the amount of additional memory. It's easy to understand why their app weighs so much, but it still breaks. But the nuance is that in practice, such code is much more difficult to write and maintain because of the problems of synchronization of these very data structures. And it turns out that the interview turns into an Olympiad, and there is how lucky you are—if you slept, come up with a solution; no, nothing; you come up before sleeping.

Another reason why people do not like online programming is that the interviewer is not prepared. Encoding in a notebook with a scratched screen still occurs. Most often, of course, just some kind of online editor, and good if with syntax lighting. But to find such another half-business, you have to come up with a challenge. The strangest thing I had was "Transfer money from account A to account B"—and the white screen. No interfaces, no templates, not even a hint on the BD... And you just spend 10 minutes telling them what they want to see. What about writing classes? What fields? In short, all this support code, which is not directly related to the task,.

And now what do we need to do? What I liked most was the discussion of some kind of PR. Here, without sarcasm, it is immediately clear how a person will behave in a working situation. What he is paying attention to, what he is missing, and why. For example, gentlemen usually ignore formatting because it's the work of linters and focus more on APIs, races, and optimum work with the base. I highly recommend trying.