---
layout: article
title: Deep Copy and the Immutability Issue
background: '#FFC312'
---

In the latest episode of, "[I Have No Idea What I'm Doing](https://www.youtube.com/watch?v=v6FQrXHv2h8&index=7&list=PLQnVLZV0MsRKVTJvKDTFsyWYRLn499JP6)" I learned that everything I thought I knew about immutability in Javascript was a lie.

Okay, so I'm being dramatic.
Not everything was a lie.
But a fundamental part of my understanding was incorrect.
After speaking to a few people about the issue, it seems this was a shared misconception.

This all stems from a subtle, yet fundamental difference in how we copy objects in javascript.
Deep copying and shallow copying.

Deep copying is what we want for true immutable data.
It is a copy of all the values of an object, and all the values of all the objects within it.
Shallow copying—on the other hand—is a copy of all the values of an object, with references to all the objects within it.
This is what tripped me up.

To understand the problem, we need to look at **three ways of copying objects**.

## Referencing

Okay, so let's strip this all the way back.
Let's create a mutable reference to an object.

```javascript
const initialObject = { name: "Sam", twitter: "@samdbeckham" };
const newObject = initialObject;
```

This is bad for immutability because any changes to `newObject` reflect in `initialObject` like so:

```javascript
newObject.twitter = "@frontendne";
console.log(initialObject.twitter); // @frontendne
```

In this example, `newObject` is a reference to `initialObject`.
So whenever we get or set data on either of these objects it is also applied to the other object.
This is useful in a lot of different ways, but not great for immutability.

## Shallow copying

This is the most common form of copying data in an immutable manner.
We utilise the spread operator to create a copy of `initialObject`.
If you've used redux before, you'll have seen this inside your reducers.

```javascript
const initialObject = { name: "Sam", twitter: "@samdbeckham" };
const newObject = { ...initialObject };
```

There's not a huge difference in how we create the data.
But `newObject` is no-longer linked to `initialObject`.
It is now a copy of the data and an entirely new object.
So if we make the same change we did earlier, we get the following result:

```javascript
newObject.twitter = "@frontendne";
console.log(initialObject.twitter); // @samdbeckham
console.log(newObject.twitter); // @frontendne
```

Modifying the data on `newObject` doesn't affect `initialObject` anymore.
We can go about our day, modifying `newObject` and `initialObject` remains clean.

But this is a shallow copy, and the immutability is only one level deep.
To show this, we need an object inside our `initialObject`:

```javascript
const initialObject = {
  name: "Sam",
  social: {
    twitter: "@samdbeckham",
    youtube: "frontendne"
  }
};
const newObject = { ...initialObject };
```

At first glance, this `newObject` looks like an immutable copy of `initialObject` but look what happens when we do this:

```javascript
newObject.social.twitter = "@frontendne";

console.log(initialObject.social.twitter); // @frontendne
```

Sadly, the immutability is only skin deep.
As soon as we go down another level, we're back to referencing values.
If we were to open up `newObject`, it would look a bit like this:

```javascript
const newObject = {
  name: "Sam",
  social: initialObject.social
};
```

We can get around this issue by shallow copying one level deeper and defining `newObject` like so:

```javascript
const newObject = {
  ...initialObject,
  social: { ...initialObject.social }
};
```

This is how it's usually dealt with in redux, but it only adds one more level of immutability.
If there are any other nested objects they will still be stored as references.
You can see how (with certain data structures) this could get messy.

## Deep Copying

Finally, we get to deep copying.
Deep copying offers us true object immutability.
We can change **any** value in an object—no matter how deeply nested it is—and it won't mutate the data we copied it from.

```javascript
const initialObject = {
  name: "Sam",
  social: {
    twitter: "@samdbeckham",
    youtube: "frontendne"
  }
};
const newObject = deepCopy(initialObject);

newObject.social.twitter = "@frontendne";

console.log(initialObject.social.twitter); // @samdbeckham
console.log(newObject.social.twitter); // @frontendne
```

Hooray! We're immutable!

Unfortunately, Javascript doesn't have a function called `deepCopy()` so we've had to make our own; and it isn't pretty.
There's no "nice" way to handle deep copying in Javascript.
Das Surma wrote a [article on deep copy](https://dassur.ma/things/deep-copy/) which has a few good examples, here are some of the simpler ones.

### JSON

This is the most concise and easy to understand method, and it looks like this:

```javascript
const deepCopy = object => JSON.parse(JSON.stringify(object));
```

First we turn the object into a JSON string with `JSON.stringify()` then we convert that string back into an object with `JSON.parse()`.
Stringifying the data throws out all references, making the returned object completely immutable.
But, if there are any references we need to keep inside this object, they're gone.
If we have any maps, regex, dates, or other special types; they're gone.
If we have any cyclic objects inside the object (which we shouldn't) the whole thing breaks and throws [an error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value).
So it's not very robust.

### Data Laundering

If you don't want want to deal with the issues the JSON parser brings, there are a few—albeit hacky—methods you can can use.
These all revolve around pasing our data to a service, then querying that service to pull our cleaned data back out.
It's like money laundering, only with data, and nowhere near as cool.

For example, we can utilise the notification API:

```javascript
const deepCopy = object =>
  new Notification("", {
    data: object,
    silent: true
  }).data;
```

This triggers a notification, silences it, then returns the data from that notification.
Unfortunately, the user needs to be able to receive notifications for this to work.

We can also utilise the history API and the `messageChannel` in similar ways.
But they all have their downsides.

## What do now?

Deep copying is a bit of a heavy-handed approach to immutability.
Being aware of the gotchas of shallow copying should be enough to see you through most problems.
You can use the nested spread method outlined above to fix any problem areas.
If this approach is starting to get unwieldy, you should aim to improve your data structure first.

If you absolutely **need** deep copying, then fear not.
There's an [issue on the HTML spec](https://github.com/whatwg/html/issues/793) that hopes to address this, with the introduction of `structuredClone()`.
The more visibility this gets, the more likely it is to be implemented.
Until then, I'd suggest using a library like [Immutable.js](https://facebook.github.io/immutable-js/) to handle your immutability.
Or grab the `cloneDeep()` helper from the [underscore](https://lodash.com/docs/4.17.5#cloneDeep) library for a quick-fix.

If you're up for a challenge, try coming up with your own solution to deepCopy.
My friend Niall had a lot of fun [playing with some ideas on Twitter](https://twitter.com/JAMXCORE/status/965716621896667137).
I'd be interested to see what you all come up with.
