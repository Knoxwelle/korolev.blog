+++
title='Commentary on comments'
date=2024-06-09T00:00:00-07:00
draft=false
categories=["basic"]
tags=["basic", "programming interface", "code", "comments", "program", "programming", "reading"]
cover_image='/images/cover/knoxwelle__2019-12-03T095346.000Z.jpg'
+++
At my first programming class at the university, the instructor handed out two sheets for us to write the program text in BASIC. On the board, he wrote the assignment: "Create a program to input and calculate the average of 10 bowling scores." Then the teacher left the room. Is this task difficult? I don't remember my solution, but it seems there was a FOR/NEXT loop and no more than 15 lines of code.

In each form for the program code, we would write the code by hand before entering it into the computer – it was about 70 lines. I had no idea why the teacher gave us two forms each. Since my handwriting has always been terrible, I used the second form to neatly rewrite my code, hoping to earn a couple of points for style.

To my great surprise, when I received my work back at the next class, I found that the grade for it was just above passing. On top of my carefully rewritten code, it said: "What about the comments?"

Both the instructor and I understood what this program did, but that was not enough. Part of the task was to teach me the following: my code should be understandable to another programmer who comes after me. I still remember this lesson.

Comments are not a vice. They are as necessary in programming as the basic constructs of branching and loops. In most modern languages, there are tools like javadoc that analyze comments written in a specific format and automatically compile an API (Application Programming Interface) reference. Having such a reference is good, but it is completely insufficient. The code should contain explanations of its intended purpose. When you write code based on the ancient principle "if it was hard to write, it should be no easier to read," you are doing a disservice to your client, your employer, your colleagues, and in the future, to yourself.

On the other hand, don't get too carried away with commenting. Make sure your comments clarify the code rather than complicate its reading. Insert appropriate comments in the code that clearly indicate what the code is supposed to do. Comments in the header should provide any programmer with enough information to use your code without reading it, while comments in the code should assist the developer who will be fixing or extending the code.

At one of my jobs, I had a disagreement with a design decision made "from above." With the sarcastic irony typical of young programmers, I placed the text of an email containing "top-down" instructions in a comment block at the top of the file. However, it turned out that the managers of this company personally reviewed the code that went into the repository. Thus, I was introduced to the term "career-limiting move" for the first time.