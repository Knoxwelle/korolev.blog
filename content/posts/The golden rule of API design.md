+++
title='The golden rule of API design'
date=2024-11-23T00:00:00-07:00
draft=false
categories=["api", "java", "c#"]
tags=["designing", "api", "java", "code", "testing", "users", "method", "tests"]
cover_image='/images/cover/knoxwelle__2017-05-25T131834.000Z.jpg'
+++
Designing application programming interfaces (APIs) is difficult, especially in the general case. When developing an API that will have hundreds or thousands of users, you need to consider that over time it will most likely need to be changed, and these changes can disrupt the functioning of the client code. Moreover, you need to consider the potential impact on your API from its users. If the API class calls its own method, it should be remembered that the user is capable of creating a subclass of your class and overriding this method, which can lead to disaster. And you won't be able to change this method because some of your users have given it a different meaning. You become dependent on your users when it comes to choosing the internal implementation.

API developers solve this problem in various ways, although the simplest solution is to lock down their API. For example, in Java, the idea of adding the final modifier to most classes and methods can be quite tempting. In C#, in turn, classes and methods can be declared as sealed. In any language, you can try to present an API using a singleton or use a static method factory to protect against those who will attempt to override behavior and use your code in ways that will limit your future options. All of this seems reasonable, but is it really?

Over the past 10 years, we have gradually come to understand that modular testing is an extremely important element of practice, but this lesson has not yet been learned everywhere in our industry. There is plenty of evidence for this, and it is all around us. Take an arbitrary untested class that uses a third-party API and try to write unit tests for it. Most likely, you will encounter problems. It will turn out that the code using the API is tightly coupled to it. It is impossible to emulate API classes in such a way that you can understand how your code interacts with them or provide return values for testing.

The situation will improve over time, but only if we start considering testing as a real use case when designing APIs. Unfortunately, this is somewhat more complicated than just testing our code. Here, it is appropriate to recall the golden rule of API design: it is not enough to write tests for the API being developed; you must write unit tests for the code that uses your API. By following this rule, you will personally learn what difficulties your users will face when they try to test their code independently.

There is no single solution that makes it easier for developers to test code based on your API. The keywords static, final, and sealed are not inherently bad constructs. Sometimes they can be useful. But it is important to remember the testing problem, and for that, you must experience it yourself. Once this is done, it can be addressed just like any other design problem.