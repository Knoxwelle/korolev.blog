+++
title='Code review'
date=2024-09-29T00:00:00-07:00
draft=false
categories=[]
tags=["code", "conduct", "review", "reviews", "process", "knowledge"]
cover_image='/images/cover/knoxwelle__2021-10-22T175947.000Z.jpg'
+++
Conducting code reviews is necessary. Why? It improves code quality and reduces the relative share of defects. But you may be misunderstanding why this happens.

Many programmers have an aversion to code reviews, which can be linked to their unfortunate personal experiences. I have encountered organizations where all code underwent formal review before it could enter the system for commercial use. Often, the review is conducted by an architect or lead developer—a practice that can be called "the architect checks everything." This is documented in the company's software development process guide, and programmers are required to comply.

Perhaps, in some organizations, such a strict and formal process is indeed necessary, but they are in the minority. In most organizations, such an approach is counterproductive. The authors of the code under review seem to be appearing before a parole board. Reviewers need to keep up with reading the code and tracking all the nuances of the evolving system: they can quickly become the bottleneck of the entire process, causing it to degrade soon.

Code review should not just be a method for fixing errors in the code, but a means of spreading knowledge and establishing common coding standards. By allowing other programmers to familiarize themselves with your code, you make each of them a co-owner of the code. Let any team member walk through the code with the others. There is no need to look for errors; during code review, you should strive to study it and understand how it works.

During code reviews, be kind. Comments should be constructive, not sharp. Assign roles for the review process to ensure that seniority does not influence the code evaluation. For example, one reviewer can focus on documentation, another on exceptions, and a third on functionality. This approach will distribute the review workload more evenly among team members.

Agree on a specific day of the week to be a regular code review day. Allocate a couple of hours for this activity. Rotate the author of the code being reviewed each time. Additionally, don't forget to change the roles of the participants in the review at each meeting. Involve newcomers in the review process. Despite their limited experience, they can provide you with a fresh perspective thanks to their recent university knowledge. Engage experts – they possess experience and knowledge. They will quickly and accurately point out code that is prone to errors. Code reviews will be easier if the team's coding standards are checked by an automated tool. In this case, you will never have to discuss code formatting at the review meeting.

Perhaps the main measure of the success of a review is whether it is interesting to people. Reviews are oriented towards the people involved. If a review meeting takes place in an unpleasant or boring atmosphere, it will be difficult to motivate anyone. Conduct code reviews in an informal setting, and let the main goal of the event be the dissemination of knowledge among team members. Leave sarcasm aside, and instead bring cake or sandwiches.