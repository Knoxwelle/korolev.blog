+++
title='Apply the principles of functional programming'
date=2025-01-28T00:00:00-07:00
draft=false
categories=[]
tags=["programming", "transparency", "paradigm", "objects", "functions"]
cover_image='/images/cover/knoxwelle__2018-02-22T081603.000Z.jpg'
+++
Functional programming has recently regained the attention of the majority in the programming community, partly because the emergent properties of the functional paradigm resonate with solving the challenges arising in our industry due to the increasing importance of multi-core architectures. And although this application is undoubtedly important, it is not the main reason for my urging to learn functional programming.

By mastering the functional programming paradigm, a programmer can significantly improve the quality of code produced in other contexts. A deep understanding of the functional programming paradigm and its practical application will help you design systems with a much higher degree of referential transparency.

Referential transparency is a highly desirable quality: it implies that functions consistently produce the same results for the same input data regardless of the place and time of calling these functions. The computation of a function, therefore, is weakly dependent on the side effects of mutable state – ideally, it does not depend on them at all.

One of the main sources of defects in code written in an imperative programming language is mutable variables. Every engineer has surely had to figure out why, in some specific case, a certain value did not match the expected one. The semantics of scopes can prevent the emergence of such sneaky errors or, at least, significantly narrow the possible area of their occurrence. But the true cause of their occurrence may be the very concept of designing such code that indiscriminately relies on mutability.

And in this regard, we definitely shouldn't expect much help from our own industry. Most books on object-oriented programming subtly promote such constructs. They often provide examples of groups of objects that have a relatively long lifespan and exchange calls to methods that change state (mutator methods), which is unsafe. However, proper test-driven design, especially if "mock roles, not objects" are ensured, allows for the elimination of excessive mutability in the architecture.

As a result, the architecture typically ends up with a more successful distribution of responsibilities and numerous small functions that work with the received arguments rather than directly accessing mutable member variables. The number of defects decreases, and their debugging becomes easier, as it is simpler to find the source of an incorrect value in such a construct than to determine the specific context in which an erroneous assignment occurs. This significantly increases referential transparency, and nothing can contribute to a deep understanding of these ideas as effectively as studying a functional programming language, where such a computation model is the norm.

Of course, this approach is not always optimal. For example, often in object-oriented systems, this style yields better results when developing the domain model (that is, when the collaboration of objects serves to reduce the complexity of business rules) than when developing the user interface.

Master the paradigm of functional programming to wisely apply the acquired knowledge in other areas. Take your object hierarchies, for example—they will simply shine with the quality of referential transparency and will turn out to be significantly closer to their functional counterparts than one might assume. In fact, some even express the opinion that in their highest manifestation, functional programming and the object-oriented approach are merely reflections of each other, a kind of computational yin and yang.