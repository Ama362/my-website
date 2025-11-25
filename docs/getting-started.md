---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# Getting Started with Refract

Welcome to **Refract**, a modern JavaScript framework designed to make building **scalable**, **interactive**, and **reactive** user interfaces simple and fun!

Refract introduces a new way of managing UI state called **Refractions** a pattern that helps your app automatically update when data changes, without manually handling complex state logic.


---

## Installation

To begin using Refract, make sure you have **Node.js (v18 or above)** installed.  
Then, create a new project:

```bash
npx create-refract-app my-first-refract
cd my-first-refract
npm start
```

This will start a local development server.
Visit http://localhost:3000
 to see your first Refract app in action.


---

 ## Your First Component
 In Refract, everything begins with a component a reusable piece of your UI.
 Create a new file called HelloRefract.js:

 ```
 import { createComponent } from 'refract';

export default createComponent(() => {
  return (
    <div>
      <h1>Hello, Refract! </h1>
      <p>Building UIs just got easier.</p>
    </div>
  );
});
```

Then, import it into your main file (App.js):

```
import HelloRefract from './HelloRefract';

export default function App() {
  return (
    <main>
      <HelloRefract />
    </main>
  );
}
```

When you refresh your browser, you’ll see:

Hello, Refract! 
Building UIs just got easier.

---

## Understanding “Refractions”

A Refraction is like a **“reactive lens”** it automatically keeps your UI in sync with your data.

Example

```
import { createComponent, refraction } from 'refract';

export default createComponent(() => {
  const count = refraction(0);

  return (
    <div>
      <p>Count: {count.value}</p>
      <button onClick={() => count.value++}>Increment</button>
    </div>
  );
});
```

Every time you click **Increment,** the count updates no extra re-renders or state management needed.
Refract automatically “reacts” to changes in the refraction.

---

## Why Refract?

**Declarative:** Describe what your UI should look like, and Refract handles the rest.
**Reactive:** Data updates instantly reflect in the UI.

**Composable:** Build reusable components easily.

**Lightweight:** Small core size and no boilerplate.

 
 
--- 

## Next Steps

Now that you’ve started with Refract, check out:

Concepts → Refractions — Learn how data reactivity works.

API → createComponent— Dive into component creation.

Tutorials → Counter App — Build your first app step-by-step.

---

**Tip:**
Use Refract’s built-in development tools to visualize your refractions in real time.

Run:

```
npm run devtools
```

Then open localhost:4000/devtools to inspect your data flow.

---

**Welcome to the world of Refract where UI building feels like light passing through glass.** 

```

---

### What’s in this file:
- Clear intro + motivation
- Easy setup guide
- Realistic code snippets
- Friendly tone
- Forward links to the next docs

---

If you’d like, I can now move on to the next file:
`concepts/refractions.md`  
Would you like me to continue with that next?
```