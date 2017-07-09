---
title: State
layout: Default
---

Sourced from:

http://www.christianalfoni.com/articles/2016_04_06_CycleJS-driven-by-state#state-store

André Staltz has been developing an interesting project called CycleJS that is based 
on the philosophy that applications are just IO with inputs typically being interactions 
via keyboard, mouse etc and the outputs being typically UI such as DOM. The whole 
idea gels well with the Observables. CycleJS revolves around Observables and hence the 
name what goes in, comes back out and back around again.

Observables being based on inputs and outputs are powerful because of how you can 
transform and control the flow of data/information going through the observable.

A simple example of this transformation and control could be a reaction to a click that 
will increase a count after 200ms

    // With plain JS
    let count = 0;
    document.querySelector('#button').addEventListener('click', () => {
    setTimeout(() => ++count, 200);
    });

    // With Observable
    Observable.fromEvent(document.querySelector('#button'), 'click')
    .delay(200)
    .scan(count => ++count, 0);

An observable approach means more expressive code, felxible and you can achieve 
some amazing stuff with little code.

Pure functions are simply input and outputs

A pure function doesn’t depend on and doesn’t modify the states of variables out of its scope.

Concretely, that means a pure function always returns the same result given same parameters. Its execution doesn’t depend on the state of the system.

Pure functions are a pillar of functional programming.

http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/

This makes your code less error prone and it is easier to test. But the question to answer is: “How can you actually build an application with this approach?”

