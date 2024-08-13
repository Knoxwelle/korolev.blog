+++
title = 'Simplicity is better than versatility'
date = 2024-05-20T00:00:00-07:00
draft = false
categories = []
tags = ["software", "solution", "solutions", "universality", "generalization", "leads"]
cover_image='/images/cover/knoxwelle__2021-04-11T052322.000Z.jpg'
+++
The fact that many frameworks, class libraries, basic services, and other infrastructure code are made to be used universally and aren't tied to any particular application is a common issue with them. The majority of developers specialize in particular systems; therefore, trying to be as versatile as possible is rarely beneficial to them. The greatest approach to reaching universality is not by universality based on supposition but rather by a thorough comprehension of known concrete cases and a study of their essence to uncover a fundamental common solution. Simplicity is the outcome of practical experience.

Simplifying an architectural design over adding more features makes it easier to choose between two options that are equivalent in every other way. Choose a more straightforward and needs-based solution over a more complex and adaptable one when there are two options. Of course, it is possible—indeed, not implausible—that a more straightforward solution will prove to be more adaptable in real life. Even yet, it's easier to modify a straightforward solution when you know exactly what you need than it is to adapt a "universal" solution that hasn't proven to be sufficiently general.

Even with the best of intentions on the part of the architect, many solutions meant for general use turn out to be insufficient for any given purpose. First and foremost, software components need to be well-suited for the task for which they were created.Understanding is the foundation for effective universality, and comprehension breeds simplify.

Occasionally, generalization enables a deeper examination of the issue; the resultant answer reflects the characteristics of multiple well-known examples in that it is concise, well-founded, and clear. But overgeneralization itself becomes a problem that goes the other way, making things more complicated rather than less. The pursuit of abstract generalization frequently results in solutions unrelated to the practicalities of real progress.These kinds of generalizations are predicated on hypotheses that subsequently prove to be incorrect, offer choices that subsequently prove undesirable, and produce a ballast that is subsequently hard or impossible to remove. Ultimately, this will only make things more complicated for developers and architects in the future.

Universality is valued by many architects, although this viewpoint shouldn't be unqualified. People usually have a very specific difficulty and appreciate a specific solution to it; thus, they are usually hesitant to pay for universal fattening (or do not require it). Concrete solution creation can exhibit versatility and flexibility, but if we simultaneously let go of the concrete too soon, we'll find ourselves stumbling into an uncharted territory of clever configurations, long (not to mention bulky) parameter lists, endless interfaces, and asymmetric abstractions.