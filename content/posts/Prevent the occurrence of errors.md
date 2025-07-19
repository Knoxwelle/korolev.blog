+++
title='Prevent the occurrence of errors'
date=2025-07-08T00:00:00-07:00
draft=false
categories=[]
tags=["july", "dd", "recording", "date", "errors", "user", "users", "instructions"]
cover_image='/images/cover/knoxwelle__2024-04-02T214205.000Z.jpg'
+++
Error messages are the most critical form of interaction between the user and the system. They arise when the user's communication with the system is on the verge of breaking down.

It is easiest to assume that errors occur due to user fault from entering incorrect data. However, the mistakes people make are predictable and happen systematically. Therefore, you can "debug" the interaction between the user and the system just as you debug the interaction between other components of the system.

Let's say the user needs to enter a date within a specific range. Instead of allowing them to enter any date, wouldn't it be better to provide a tool like a list or calendar that shows only the permissible dates? This would eliminate any possibility of entering a date outside the allowed range.

Another common problem is formatting errors. For example, if a user sees a date text field and enters an unambiguously interpretable date "July 29, 2012," it would be incorrect to reject it simply because the data is not in the format you prefer (e.g., "MM/DD/YYYY"). Even worse is rejecting the date "29/07/2012" just because of extra spaces; such issues are the hardest for users to realize, as they believe the date is in the correct format.

The error occurs because it is easier for us to reject the data than to parse three or four widely used date formats. Such minor errors irritate the user, making it difficult for them to concentrate, and they make more mistakes. To avoid this, be understanding of the user's desire to input information rather than data.

Another way to avoid formatting errors is to provide the user with a hint, for example, by using a label in the input field that shows the required format ("MM/DD/YYYY"). Another way to provide a hint is to divide the field into three parts of two, two, and four characters.

Hints are not the same as instructions: hints are unobtrusive and concise, while instructions are verbose. Hints appear at the moment of interaction, while instructions come before that moment. Hints emphasize context, while instructions dictate behavior.

Usually, instructions are ineffective in preventing errors. Users tend to believe that interfaces should act according to their previous experience ("Anyone should understand what July 29, 2012, means!"). Therefore, no one reads the instructions. Hints guide users away from making mistakes.

Another way to avoid mistakes is to offer default values. For example, users typically enter values that correspond to today's date, tomorrow, my birthday, the deadline for my project, or the date specified in this same form last time. Depending on the context, one of these dates could very well be a good option for the default value.

Whatever the reason for the user's mistake, the system should forgive the errors. This can be facilitated by providing the ability to perform multi-level undo of all executed operations, especially those that can delete or modify user data.

Recording each undo operation in a log file and subsequently analyzing it can shed light on which interface features cause users to unconsciously make mistakes, such as constantly clicking the "wrong" button. It often turns out that such errors are caused by misleading prompts or a poorly thought-out sequence of actions, which can be redesigned to prevent errors from occurring.

Whatever approach you choose, most errors are systemic and arise from mutual misunderstanding between the user and the application. If you understand how users think, how they perceive information, how they make decisions, and how they input data, then you will be able to debug the interaction between your programs and your users.