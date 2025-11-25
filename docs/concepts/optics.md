---
title: Optics
description: A detailed explanation of the optics module, how it works, and how developers can use it in real-world scenarios.
---

# Optics: Understanding How Everything Comes Into Focus

Optics refers to the mechanisms your system uses to **retrieve**, **transform**, and **deliver** data in a predictable way. Think of it as the “vision” of your application — how it **sees** data internally and exposes it efficiently to the outside world.

This guide explains the underlying concepts, structure, and practical usage of optics in your project.

---

##  What Are Optics?

Optics are **data access paths** that allow you to:

- Extract a specific part of a data structure  
- Update or transform nested values  
- Compose reusable access patterns  
- Improve consistency across your API, UI, and services  

Optics help you avoid repeating the same “dig into this data structure” logic everywhere.

---

##  Why Optics Matter

Without optics, developers usually rely on long property chains, like:

js
const city = user?.profile?.address?.location?.city;

This is repetitive, fragile, and hard to maintain.

Optics fix this by offering safe, reusable access paths, such as:


const city = UserOptics.profile.address.location.city.get(user);

---

 ## Visual Overview
 ### How Optics Work (Concept Diagram)

Think of optics like a magnifying glass → helping you zoom into exactly the part of the data you need, without breaking the whole structure.

---

 ### Types of Optics

Your system may use any of the following optical tools:

**1. Lenses**

Used for getting and setting values inside objects.

Example: Accessing a user’s email.

**2. Prisms**

Used for branching data, such as handling null, optional values, or discriminated unions.

**3. Traversals**

Used to loop through arrays or collections within the structure.  

---

## Code Examples
### Creating a Lens


```
import { lens } from "optics-lib";

const userEmailLens = lens("profile", "contact", "email");

// Get value
const email = userEmailLens.get(user);

// Update value
const updatedUser = userEmailLens.set("new@mail.com")(user);
```

--- 

### Composing Optics

```
You can glue optics together to build powerful access paths.

const cityLens = UserOptics.profile.address.location.city;

const city = cityLens.get(user);

const newUser = cityLens.set("Port Harcourt")(user);
```

---

### Using Traversals
```
const taskNames = tasksTraversal.map(task => task.name).getAll(taskList);
```

---

## Real-World Use Cases


| Use Case              | How Optics Help                                     |
| --------------------- | --------------------------------------------------- |
| **API Serialization** | Extract only the fields to expose publicly          |
| **UI Rendering**      | Build consistent selectors for nested UI components |
| **State Management**  | Update deeply nested state safely and immutably     |
| **Form Builders**     | Bind specific form elements to specific data paths  |


----

### Summary

Optics help your project remain:

* Clean (less repetitive code)

* Safe (no undefined crashes)

* Scalable (easily reusable access paths)

* Consistent (one style of data access everywhere)

By adopting optics, you eliminate fragile property-chains and switch to a structured, reliable way to work with data.
