---
title: Learnt — A Rolodex of Terms
feed: show
date: 28-03-2026
---

This page is a living index of terms, concepts, and ideas I've encountered and actually understood. It's not a glossary of definitions I've copied — each entry is written in my own words once something has clicked. Think of it as a personal vocabulary: the language I've picked up while building, reading, and figuring things out. New entries get added whenever a concept earns its place.

---

<div class="rolodex">

  <div class="rolodex-tabs">
    <a href="#A">A</a><a href="#B">B</a><a href="#C">C</a><a href="#D">D</a>
    <a href="#E">E</a><a href="#F">F</a><a href="#G">G</a><a href="#H">H</a>
    <a href="#I">I</a><a href="#J">J</a><a href="#K">K</a><a href="#L">L</a>
    <a href="#M">M</a><a href="#N">N</a><a href="#O">O</a><a href="#P">P</a>
    <a href="#Q">Q</a><a href="#R">R</a><a href="#S">S</a><a href="#T">T</a>
    <a href="#U">U</a><a href="#V">V</a><a href="#W">W</a><a href="#X">X</a>
    <a href="#Y">Y</a><a href="#Z">Z</a>
  </div>

  <div class="rolodex-cards">

    <div class="rolodex-letter" id="A">
      <span class="letter-tab">A</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Async Functions</h3>
          <span class="tag">JavaScript · Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>Functions declared with the <code>async</code> keyword that always return a Promise. Inside them, <code>await</code> pauses execution until a Promise resolves, without blocking the main thread.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>It's a cleaner way to write code that has to wait — like fetching data — without nesting <code>.then()</code> callbacks. You write it like normal top-to-bottom code but it still runs asynchronously under the hood.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>async function getUser(id) {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="B">
      <span class="letter-tab">B</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Build-time vs Runtime Dependency</h3>
          <span class="tag">Build & Architecture</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A build-time dependency is only required during compilation or bundling and is not included in the final output. A runtime dependency ships with the app and must be present when it runs.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Build-time = tools that help make the thing (Vite, TypeScript, ESLint). Runtime = stuff the thing actually needs to work in a browser or server (Vue, Pinia, a date library). Getting this wrong bloats your bundle with things users never needed.</p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="C">
      <span class="letter-tab">C</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Composable</h3>
          <span class="tag">Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A function that uses Vue's Composition API to encapsulate and reuse stateful logic — refs, watchers, lifecycle hooks — across components. Conventionally prefixed with <code>use</code>.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Like a React custom hook but for Vue. Instead of copying the same <code>ref</code> + <code>watch</code> logic into every component, you pull it into a <code>useXxx()</code> function and call it wherever you need it.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>// useFetch.js
import { ref } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  fetch(url)
    .then(r => r.json())
    .then(json => (data.value = json))
    .catch(err => (error.value = err))
  return { data, error }
}</code></pre>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p><a href="https://vuejs.org/guide/reusability/composables" target="_blank">Vue 3 Docs — Composables</a></p>
        </div>
      </div>

      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Conditional Rendering</h3>
          <span class="tag">Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>Using <code>v-if</code>, <code>v-else-if</code>, and <code>v-else</code> directives to add or remove elements from the DOM based on a condition. <code>v-show</code> is a related directive that toggles visibility via CSS instead.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Use <code>v-if</code> when you want the element gone from the DOM entirely. Use <code>v-show</code> when the element needs to toggle often — it's cheaper because it doesn't re-create the DOM node each time, just hides it.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>&lt;p v-if="isLoggedIn"&gt;Welcome back!&lt;/p&gt;
&lt;p v-else&gt;Please log in.&lt;/p&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="D">
      <span class="letter-tab">D</span>
      <div class="rolodex-entry placeholder">
        <div class="entry-header">
          <h3>[ Term ]</h3>
          <span class="tag">[ Category ]</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p class="placeholder-text">The formal or official explanation of the concept.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p class="placeholder-text">How it actually clicked — in your own words.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre class="placeholder-text"><code>// optional code example</code></pre>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p class="placeholder-text"><a href="#">[ Link to docs or source ]</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="E">
      <span class="letter-tab">E</span>
      <div class="rolodex-entry placeholder">
        <div class="entry-header">
          <h3>[ Term ]</h3>
          <span class="tag">[ Category ]</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p class="placeholder-text">The formal or official explanation of the concept.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p class="placeholder-text">How it actually clicked — in your own words.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre class="placeholder-text"><code>// optional code example</code></pre>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p class="placeholder-text"><a href="#">[ Link to docs or source ]</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="F">
      <span class="letter-tab">F</span>
      <div class="rolodex-entry placeholder">
        <div class="entry-header">
          <h3>[ Term ]</h3>
          <span class="tag">[ Category ]</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p class="placeholder-text">The formal or official explanation of the concept.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p class="placeholder-text">How it actually clicked — in your own words.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre class="placeholder-text"><code>// optional code example</code></pre>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p class="placeholder-text"><a href="#">[ Link to docs or source ]</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="G">
      <span class="letter-tab">G</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Git (core commands)</h3>
          <span class="tag">General Dev</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A distributed version control system. Changes move through three stages: working tree → staging area → local repository → remote repository.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Git is a save system for code. <code>add</code> stages changes, <code>commit</code> saves them locally with a message, <code>push</code> sends them to the shared remote. Branches are cheap — make one whenever you're trying something new.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>git add src/components/Card.vue
git commit -m "add rolodex card component"
git push origin main</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="H">
      <span class="letter-tab">H</span>
      <div class="rolodex-entry placeholder">
        <div class="entry-header">
          <h3>[ Term ]</h3>
          <span class="tag">[ Category ]</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p class="placeholder-text">The formal or official explanation of the concept.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p class="placeholder-text">How it actually clicked — in your own words.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre class="placeholder-text"><code>// optional code example</code></pre>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p class="placeholder-text"><a href="#">[ Link to docs or source ]</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="I">
      <span class="letter-tab">I</span>
      <div class="rolodex-entry placeholder">
        <div class="entry-header">
          <h3>[ Term ]</h3>
          <span class="tag">[ Category ]</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p class="placeholder-text">The formal or official explanation of the concept.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p class="placeholder-text">How it actually clicked — in your own words.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre class="placeholder-text"><code>// optional code example</code></pre>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p class="placeholder-text"><a href="#">[ Link to docs or source ]</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="J">
      <span class="letter-tab">J</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="K">
      <span class="letter-tab">K</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="L">
      <span class="letter-tab">L</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="M">
      <span class="letter-tab">M</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Math.sign()</h3>
          <span class="tag">JavaScript</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A built-in method that returns <code>1</code> if the number is positive, <code>-1</code> if negative, and <code>0</code> if zero.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Useful any time you care about direction, not magnitude — e.g. which way the user is scrolling or dragging. Replaces a conditional like <code>n > 0 ? 1 : -1</code> with a single call.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>const direction = Math.sign(deltaY) // 1 = down, -1 = up</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="N">
      <span class="letter-tab">N</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Nitro</h3>
          <span class="tag">Build & Architecture</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>The server engine behind Nuxt 3. It compiles server routes and API handlers into a universal output that can run across different runtimes — Node.js, Deno, Cloudflare Workers, and more.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Nitro is what makes Nuxt backend code "just work" wherever you deploy. You write one API route, Nitro figures out how to run it on whatever platform you're targeting. It abstracts the runtime so you don't have to think about it.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p><a href="https://nitro.unjs.io" target="_blank">Nitro Docs</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="O">
      <span class="letter-tab">O</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="P">
      <span class="letter-tab">P</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Pagination</h3>
          <span class="tag">Vue 3 · JavaScript</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A technique for splitting a dataset into discrete pages, loading or displaying only a subset at a time. Can be implemented server-side (fetch per page) or client-side (slice an array).</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>The three numbers you always need: current page, items per page, total count. Everything else — the prev/next buttons, the page list — is derived from those. Componentize the controls early; they always get reused.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>const page = ref(1)
const perPage = 10
const paginated = computed(() =>
  items.value.slice((page.value - 1) * perPage, page.value * perPage)
)</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="Q">
      <span class="letter-tab">Q</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="R">
      <span class="letter-tab">R</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>router.push()</h3>
          <span class="tag">Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A Vue Router method for programmatic navigation. Pushes a new entry onto the history stack, navigating to the specified route.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>It's the code equivalent of clicking a <code>&lt;RouterLink&gt;</code>. Use it when navigation needs to happen as a result of logic — after a form submits, after login succeeds, after an action completes.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>const router = useRouter()

async function handleLogin() {
  await login(credentials)
  router.push({ name: 'dashboard' })
}</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="S">
      <span class="letter-tab">S</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Script Setup</h3>
          <span class="tag">Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A compile-time syntax sugar for the Composition API in Vue 3 SFCs. Top-level bindings declared inside <code>&lt;script setup&gt;</code> are automatically exposed to the template.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>It removes boilerplate. No <code>setup() { return { ... } }</code> — you just write your logic and the compiler wires it to the template. It's processed at build time, so there's no runtime cost.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>&lt;script setup&gt;
import { ref } from 'vue'
const count = ref(0)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="count++"&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Slots</h3>
          <span class="tag">Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A Vue mechanism for passing template content from a parent component into a child's designated placeholder. Named slots allow multiple injection points in a single component.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Slots are how you make components that wrap other content — like a card, modal, or layout shell. The child says "put content here" with <code>&lt;slot&gt;</code>, the parent fills it in. Named slots let you fill multiple different spots.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>&lt;!-- Card.vue --&gt;
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;slot name="header" /&gt;
    &lt;slot /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Parent --&gt;
&lt;Card&gt;
  &lt;template #header&gt;&lt;h2&gt;Title&lt;/h2&gt;&lt;/template&gt;
  &lt;p&gt;Card body content.&lt;/p&gt;
&lt;/Card&gt;</code></pre>
        </div>
      </div>

      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>SSR (Server-Side Rendering)</h3>
          <span class="tag">Build & Architecture · Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>Rendering a page's HTML on the server before sending it to the browser. The client receives a fully-formed HTML document rather than an empty shell that JavaScript must populate.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>The browser gets real content on the first response — faster first paint, better SEO. The trade-off is that your components run on both server and client, so you have to be careful about browser-only APIs like <code>window</code> or <code>localStorage</code>.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p><a href="https://vuejs.org/guide/scaling-up/ssr" target="_blank">Vue 3 Docs — SSR</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="T">
      <span class="letter-tab">T</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>toReversed()</h3>
          <span class="tag">JavaScript</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>An ES2023 array method that returns a new array with the elements in reverse order, without mutating the original.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Use this instead of <code>.reverse()</code> whenever you're working with reactive state — Vue's refs included. <code>.reverse()</code> mutates the array in place, which can cause silent bugs when the same array is referenced elsewhere.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">Implementation</span>
          <pre><code>const original = [1, 2, 3]
const flipped = original.toReversed() // [3, 2, 1]
// original is still [1, 2, 3]</code></pre>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="U">
      <span class="letter-tab">U</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>useRouterQuery</h3>
          <span class="tag">Vue 3</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A composable pattern built on Vue Router's <code>useRoute</code> and <code>useRouter</code> that makes URL query parameters readable and writable as reactive state.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>Instead of managing a <code>ref</code> for a filter and then separately syncing it to the URL, this pattern makes the URL the source of truth. The query param IS the state — refreshing the page or sharing the link preserves everything.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p><a href="https://vueuse.org/router/useRouteQuery/" target="_blank">VueUse — useRouteQuery</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="V">
      <span class="letter-tab">V</span>
      <div class="rolodex-entry">
        <div class="entry-header">
          <h3>Vite</h3>
          <span class="tag">Build & Architecture</span>
        </div>
        <div class="entry-section">
          <span class="entry-label">Definition</span>
          <p>A frontend build tool that uses native ES modules for near-instant dev server startup and Rollup for optimised production builds.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">My Version</span>
          <p>The reason modern Vue/React dev feels fast. In development, Vite serves files directly as ES modules — no bundling step, so hot reload is nearly instant. Production still gets a proper bundle via Rollup.</p>
        </div>
        <div class="entry-section">
          <span class="entry-label">References</span>
          <p><a href="https://vitejs.dev" target="_blank">Vite Docs</a></p>
        </div>
      </div>
    </div>

    <div class="rolodex-letter" id="W">
      <span class="letter-tab">W</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="X">
      <span class="letter-tab">X</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="Y">
      <span class="letter-tab">Y</span>
      <p class="empty-letter">—</p>
    </div>

    <div class="rolodex-letter" id="Z">
      <span class="letter-tab">Z</span>
      <p class="empty-letter">—</p>
    </div>

  </div>
</div>

<style>
.rolodex {
  font-family: inherit;
  margin-top: 1.5rem;
}

.rolodex-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 1.5rem;
}

.rolodex-tabs a {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s, color 0.15s;
}

.rolodex-tabs a:hover {
  background: #333;
  color: #fff;
  border-color: #333;
}

.rolodex-cards {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.rolodex-letter {
  border-left: 3px solid #ccc;
  padding: 0.75rem 0 0.75rem 1rem;
}

.letter-tab {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  color: #888;
}

.rolodex-entry {
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}

.entry-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem 0.6rem;
  border-bottom: 1px solid #e0e0e0;
  background: #f5f5f5;
}

.entry-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.entry-section {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #f0f0f0;
}

.entry-section:last-child {
  border-bottom: none;
}

.entry-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.3rem;
}

.entry-section p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #444;
}

.entry-section pre {
  margin: 0;
  padding: 0.6rem 0.75rem;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 0.8rem;
  overflow-x: auto;
}

.entry-section a {
  font-size: 0.88rem;
}

.tag {
  font-size: 0.7rem;
  color: #999;
  font-style: italic;
  white-space: nowrap;
}

.empty-letter {
  color: #ccc;
  font-size: 0.85rem;
  margin: 0.25rem 0;
}

.rolodex-entry.placeholder {
  opacity: 0.4;
  border-style: dashed;
}

.placeholder-text {
  color: #aaa !important;
  font-style: italic;
}
</style>
