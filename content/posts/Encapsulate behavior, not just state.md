+++
title='Encapsulate behavior, not just state'
date=2024-09-18T00:00:00-07:00
draft=false
categories=["java", "c"]
tags=[" java object", "java", "c# object", "order", "item", "additem", "ordermanager", "orderservice", "object", "classes", "encapsulation", "customer", "objects"]
cover_image='/images/cover/knoxwelle__2024-04-22T212715.000Z.jpg'
+++
In systems theory, there is the concept of isolation, which is among the most useful when it comes to large and complex system structures. 
In the software development industry, everyone understands the value of isolating one entity within another, in other words, encapsulation. In programming languages, subprograms and functions, modules and packages, classes, etc., are used to ensure isolation.

Modules and packages solve large-scale encapsulation tasks, while
how classes, subprograms, and functions are designed to solve the same problems in a more
at a low level. Over the years of working, I have discovered that of all types of encapsulation
The most difficult thing for programmers is encapsulation in classes. It is not uncommon to encounter a class where the only method, main, has 5000 lines, or a class,
in which there are only set and get methods for its basic attributes. Such
examples show that the developers of these classes have not fully mastered object-oriented thinking and do not know how to harness the power of objects as
modeling structures. For those who are familiar with the term POJO (Plain Old
Java Object – a simple Java object in the old style) and POCO (Plain Old C# Object or
Plain Old CLR Object), I note: initially, they expressed a return to the fundamentals of OOP
as modeling paradigms – understandable and simple, but not stupid objects.

The object encapsulates both state and behavior, with behavior being determined by the actual state. Let's take the object "door." It has four states: open, closed, opening, closing. It provides two operations: "open," "close." Depending on the state, the "open" and "close" operations behave differently. This inherent property of the object makes the design process conceptually simple. It all comes down to two simple tasks: assigning and delegating the responsibilities of various objects, including inter-object interaction protocols.

The best way to show how it works is through an example. Let's say we have three classes: Customer, Order, and Item. The Customer object is the natural source of rules for checking creditworthiness and determining the maximum amount available for deduction. The Order object knows which Customer is associated with it, so the addItem operation delegates the actual credit check to the method customer.validateCredit(item.price()) (customer.checkCredit(item.price())). If the postcondition of the method is not met, an exception can be thrown and the purchase can be canceled. 

Less experienced OOP developers sometimes decide to wrap all business rules in a single object, which is often called OrderManager or OrderService. In such an architecture, the Order, Customer, and Item objects essentially serve as table types. All the logic is extracted from the classes and tied together in one large procedural method, containing numerous if-then-else constructs. Errors can easily creep into such methods, and maintaining them is almost impossible. Why? Because encapsulation is broken.

Final conclusion: do not break encapsulation and use the power of your programming language to maintain it.