---
title: "Concept: Vue 3 Composables"
feed: show
date: 2026-03-26
stage: budding
tended: 2026-03-26
type: concept
summary: "Reusable stateful logic with the Composition API."
---

## Concept

A composable is a function that uses Vue's Composition API to encapsulate and reuse stateful logic across components.

## Official Explanation

> "A 'composable' is a function that leverages Vue's Composition API to encapsulate and reuse **stateful logic**."
> — [Vue 3 Docs](https://vuejs.org/guide/reusability/composables)

Composables follow the convention of prefixing the function name with `use` (e.g. `useMouse`, `useFetch`). They can call other composables, use `ref`, `computed`, lifecycle hooks, and watchers internally — and return reactive state or methods to the consuming component.

## Personal Understanding

Think of composables like custom hooks in React, but tied to Vue's reactivity system. The key mental shift from Options API is that instead of defining data, methods, and lifecycle hooks in one object, you group logic by *feature* and pull it into a function you can drop into any component.

The `use` prefix is a signal: "this function manages some piece of reactive state or side-effect." If you find yourself duplicating `ref` + watcher patterns across components, that's the smell that says "extract a composable."

## Applications

- **`useRouterQuery`** — wraps `useRoute` to read/write query params reactively (from Q3-25 notes)
- **`useFetch`** — encapsulates async data fetching with `ref` for data/loading/error state
- Anywhere you'd otherwise repeat `ref`, `watch`, or lifecycle hooks across two or more components

```js
// useFetch.js
import { ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then(res => res.json())
    .then(json => (data.value = json))
    .catch(err => (error.value = err))

  return { data, error }
}
```
