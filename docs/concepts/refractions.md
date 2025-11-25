---
id: refractions
title: Understanding Refractions
sidebar_label: Refractions
---

# Understanding Refractions

**Refractions** are the heart of Refract — they define **how your UI reacts to changes in data**.

If you’ve used React before, you can think of refractions as a smarter, more declarative way to handle **state updates** and **side effects**. Instead of writing “when X changes, update Y,” Refract does that automatically through **data flow mapping**.

---

## What is a Refraction?

A **refraction** is a special function that listens to a piece of state and automatically re-renders the UI whenever that state changes.

You can create a refraction using the `useRefraction()` hook.

```js
import { useRefraction } from 'refract';

function Counter() {
  const [count, setCount] = useRefraction(0);

  return (
    <div>
      <h2>Current count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

Every time you click the button, the refraction automatically detects the state change and refreshes the component  no manual wiring needed.

---

## How Refractions Work
Here’s a simple visual analogy:

```
Data (source) ---> Refraction (transformer) ---> UI (output)
```
***For example***

```const [name, setName] = useRefraction('yourname');

useRefraction(() => {
  console.log(`Hello, ${name}!`);
}, [name]);
```

Whenever the name changes, the refraction reacts automatically just like light refracts when it passes through glass (that’s where the name comes from).

---
## Why Use Refractions?
Refractions make your code:

**Declarative:** You describe what should happen, not how.

**Reactive:** Your UI stays in sync with data automatically.

**Composable:** You can reuse refractions across components.

---

## Real-World Example: A Theme Switcher
Here’s how a refraction can manage a light/dark theme toggle:

```import { useRefraction } from 'refract';

function ThemeToggle() {
  const [theme, setTheme] = useRefraction('light');

  useRefraction(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```
Whenever you toggle the theme, Refract updates your UI instantly no manual DOM manipulation required.

---

## Combining Multiple Refractions
You can even combine multiple refractions to create dynamic behavior.
```
const [count, setCount] = useRefraction(0);
const [theme, setTheme] = useRefraction('light');

useRefraction(() => {
  console.log(`Theme: ${theme}, Count: ${count}`);
}, [count, theme]);
```
This example listens to **both** count and theme — reacting whenever either changes.

---
## What’s Next?

Now that you understand refractions, let’s dive deeper into **Lenses,** another core concept of Refract that helps you focus on specific parts of your state without losing clarity.

Continue to **Lenses**

**Quick Exercise:**
Try creating your own refraction that updates the page title whenever the user clicks a button.
Example: “Clicked 5 times!”

---
## Recap

Refractions = automatic reactivity.

No need to manually subscribe or trigger updates.

Keeps your UI smooth and predictable.

Welcome to the **reactive mindset** powered by Refract 
