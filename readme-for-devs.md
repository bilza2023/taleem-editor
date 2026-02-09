
### Context first (why this README exists)

This system is **done**, not “in progress”.
The README is a **time capsule** for when you come back after weeks or months and think:

> “Why is this built like this?”

So it should explain **decisions**, not code.

---

### Date anchor

9-Feb-2026
This matters because EQ and editor decisions are time-bound.

---

### High-level architecture (big picture)

This is a **pure content authoring + playback system**.

There are only two real runtime modes:

• **Editor** → produces JSON
• **Player** → consumes JSON

No hidden mutation.
No server dependency.
No magic transforms.

JSON is the contract.

---

### Core mental model

Every deck is:

```
Deck
 ├─ version
 ├─ name
 └─ deck[]   ← array of slides
        ├─ type
        ├─ start / end (optional / mockable)
        └─ data[]  ← slide-specific structure
```

Nothing outside this exists.

---

### Main modules and how they work together

**Editor**

* Owns slide creation and editing
* Every slide editor edits only `data[]`
* Editor never edits `type`
* Editor never edits player logic
* Final output is plain JSON

**TopToolbar**

* Controls lifecycle, not content
* New = reset editor state
* Launch = save JSON to localStorage + open player
* Download = export same JSON
* Deck name = identity (storage key)

**SlideList**

* UI-only list manager
* Reorder, delete, update slides
* Does not understand slide internals

**SlideTypeRouter**

* The switchboard
* Maps `type → editor component`
* Enforces one contract: `{ data, onChange }`
* No slide object leakage

**Individual Slide Editors**

* Stateless, local editors
* Receive `data`
* Emit `onChange(newData)`
* No awareness of deck, timings, or player

**EQ Editor (special)**

* Uses same contract as others
* Edits `data[]` with line objects
* UI is functional but UX-incomplete
* Requires LaTeX-style math manually

**Player**

* Dumb renderer
* Reads deck JSON
* Renders exactly what is written
* Does not validate or fix content

---

### Special decisions (important to remember)

• **No file loading in player**
Player reads only from localStorage or provided JSON.

• **No registry of decks**
Decks self-identify via name + version.

• **Templates are just named decks**
Renaming = cloning.

• **Normalization happens only at save time**
Editor is free-form, output is strict.

• **EQ is intentionally unfinished**
Architecture is correct, UX is postponed.

---

### EQ status (explicit warning for future you)

EQ is present and wired but:

• Math requires `$...$`
• No validation
• No auto-wrapping
• Player assumes valid LaTeX

This was a **conscious pause**, not a bug.

---

### Final mindset

This system is **stable**.

Future work should be:
• content
• UX polish
• optional compiler passes

Not architectural changes.

When you write the actual `readme-for-devs.md`, this discussion becomes its backbone.

When you’re ready, next step can be:
• converting this into the markdown file
• or freezing the repo and moving to content work
