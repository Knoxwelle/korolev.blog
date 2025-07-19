+++
title='Tests are written for people'
date=2025-03-13T00:00:00-07:00
draft=false
categories=[]
tags=["tests", "code", "test", "method", "check"]
cover_image='/images/cover/knoxwelle__2021-05-29T010651.000Z.jpg'
+++
You cover all the finished code or its fragments with automated tests. Congratulations! Do you write tests first and then code? Even better! Just because of this, you can be considered a programmer practicing advanced approaches in software development. But are your tests good? How can you determine that? One way is to ask yourself: "Who am I writing for?"
these tests?». If the answer is "I write them for myself to reduce costs
for debugging" or "for the compiler to execute them," then it's quite possible that you are not writing the best tests. So, for whom
Why write tests? For those who will try to understand your code.

Good tests serve as documentation for the code they are testing. They describe how the code works. For each use case, the tests do the following:

-Describe the context, starting point, or prerequisites that must be met.
- They illustrate how the application is invoked.
- Describe the expected results or postconditions that need to be verified.

In various usage scenarios, the options for these actions will be slightly
differ. Anyone who tries to understand your code should be able to
look at several tests and, by comparing these three parts of the tests under consideration, be able to determine what makes the program work in different cases
differently. Each test should clearly illustrate the cause-and-effect
connections between these three parts.

From this, it follows that the invisible part of the test is as important as the visible part. The abundance of code in the test distracts the reader's attention to insignificant details.
hide such details in understandable method calls, and in this you
The Extract Method refactoring technique will be very helpful. And try to give each test an expressive name so that it describes a specific use case, and the person reading the tests doesn't have to
analyze each test in an attempt to understand what the differences are
between scenarios. In all cases, the test class name and the class method name must contain at least the entry point and the way to call the application. This will allow for a simple reading of the method names to check the test coverage. It is often useful to include the expected results in the test method names, unless
this won't make the names too long to read or perceive.

Testing the tests themselves is also a good idea. You can check if they can
detect errors that should be found if these errors are introduced into the production code (of course, in the local copy of the code, which
you will throw them away later). Make sure that the tests produce useful and meaningful reports. You also need to check that your tests speak a language understandable to the
who understands your code. This can be done only if you let them read it
tests to a programmer who is not familiar with your code and listen to their impressions. If something is unclear to them, don't attribute it to a lack of mental ability. It is more likely that you failed to write clear code. Try switching roles and reading their tests!