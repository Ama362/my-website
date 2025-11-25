---
title: Understanding Lenses
sidebar_position: 2
---

#  Understanding Lenses in Refract

In **Refract**, a **Lens** is a simple yet powerful concept — it helps you **focus** on a specific part of your application’s state without having to deal with the entire state object.  

Think of it like a **magnifying glass** that lets you clearly see and update a small part of your data.

---

##  What is a Lens?

Imagine your app’s state is like a big object:

```js
{
  user: {
    name: "Ama",
    age: 23,
    location: "Nigeria"
  },
  settings: {
    theme: "light",
    notifications: true
  }
}
```

Now, if you only want to update the user’s name, you don’t need to handle the whole object you can create a lens that focuses only on user.name.

---

## Creating a Lens

You can create a lens using Refract’s built-in createLens() function.

```
import { createLens } from "refract";

const userNameLens = createLens(
  (state) => state.user.name,         // getter
  (state, newName) => ({              // setter
    ...state,
    user: { ...state.user, name: newName },
  })
);
```

Let’s break this down:

- The **getter** tells Refract how to find the specific piece of data.

- The **setter** tells Refract how to update that data while keeping the rest of the state unchanged.

---

## Using a Lens with Refractions

Now that we have a lens, we can use it inside a component to read and modify the user’s name directly.

```
import { useRefraction } from "refract";
import { userNameLens } from "./lenses";

function UserProfile() {
  const [name, setName] = useRefraction(userNameLens);

  return (
    <div>
      <h3>Hello, {name} </h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
```

**What happens here:**

- ```useRefraction(userNameLens) ```connects your component to the user name part of the global state.

- Any changes automatically update the state without affecting other parts.

**Why Lenses Matter**
Benefit	Description
---

- Precision	Focus only on the part of state you need.

- Performance	Components only re-render when the focused data changes.

- Reusability	One lens can be reused across multiple components.

- Clarity	Makes code easier to reason about and maintain.

---

**Example: Nested State Management**

Let’s say you want to update the **theme** inside settings:

```
const themeLens = createLens(
  (state) => state.settings.theme,
  (state, newTheme) => ({
    ...state,
    settings: { ...state.settings, theme: newTheme },
  })
);
```

Then use it in your component:

```function ThemeSwitcher() {
  const [theme, setTheme] = useRefraction(themeLens);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
```

