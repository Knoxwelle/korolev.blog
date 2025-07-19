+++
title='Interfaces'
date=2025-02-14T00:00:00-07:00
draft=false
categories=[]
tags=["api", "interface", "interfaces", "users", "use", "user"]
cover_image='/images/cover/knoxwelle__2021-04-20T021039.000Z.jpg'
+++
One of the most common tasks in software development is interface specification. Interfaces exist at the highest level of abstraction (user interfaces), at the lowest level (function interfaces), and at intermediate levels (class interfaces, libraries, etc.). Regardless of what you are doing—aligning with end users on their future interaction with the system, collaborating with developers to develop the API specification, or declaring private class functions—interface design is an important part of your job. If you handle it well, using your interfaces will be a pure pleasure, and user productivity will increase. If you handle the task poorly, your interfaces will become a source of frustration and errors.

Good interfaces possess the following properties:

They are easy to use correctly.
Users of a well-designed interface almost always use it correctly because that is the path of least resistance for that interface.
resistance. If this is a graphical user interface, they are almost
always click on the right icon, button, or menu item because it
the action turns out to be the most obvious and simple. If this is the interface
applied programming, they almost always pass the correct parameters with the right values to the calls, doing what seems most natural. If the interface is such that it is easy to use correctly, everything works by itself.

They are hard to use incorrectly.
Good interfaces take into account the mistakes users make.
and hinder their execution, ideally preventing it altogether. For example, a graphical user interface can disable or hide commands that are meaningless in the current context, while an application programming interface can resolve the issue of argument order by allowing
pass parameters in any order.

A good approach to designing interfaces that are easy to use.
correctly, – practice working with them before their creation. Create a layout
graphical user interface (for example, on a whiteboard or on
based on the sticky notes spread out on the table) and play around with the layout before writing code. Write API calls before declaring functions. Break down standard use cases and determine what behavior you expect from the interface. Which elements would you ultimately like
Click? What parameters would you ultimately like to transmit? Simple to work with.
interfaces are natural because they allow you to do exactly what you need. Such interfaces are more successful if they are developed from the perspective
user. (This is one of the strengths of test-driven development, TDD.)

To make incorrect use of the interface more difficult, two things are needed. Firstly, it is necessary to anticipate what mistakes users might make and find ways to prevent them. Secondly, one should observe the mistakes made by the first users of the interface's beta version and modify the interface—yes, modify the interface!—to prevent such mistakes. The best way to prevent incorrect usage is to make it impossible. If users are persistently trying to undo an irreversible action, make that action reversible. If they constantly pass an incorrect value to the API, try to modify the API to accept the values that users want to pass.
And most importantly, remember that interfaces exist for the convenience of their users, not their creators.