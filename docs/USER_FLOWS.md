# User Flows — Revelation Youth

> The key journeys visitors take. Used to validate that navigation, page structure, and content support real intent. No flow requires accounts, payments, or backend in the MVP.

---

## 1. Personas (lightweight)

- **The Visitor** — heard about Revelation Youth, wants to know what it is and when/where to come.
- **The Member** — already attends; wants music, devotions, events, and ways to connect.
- **The Parent** — checking legitimacy, location, and service time before their teen attends.
- **The Listener** — found the music first (Spotify/YouTube) and clicked through.

---

## 2. Core Flows

### Flow A — "What is this and when can I come?" (Visitor / Parent)

1. Land on **Home** (`/`).
2. Read brand title + tagline; sense the tone (calm, premium, church).
3. Scan to church info + service time (also in footer).
4. Navigate to **Events** → **Youth Services** to confirm next date/time/location.
5. Optionally open the address (and later, directions).

**Supports:** clear service time on Home + footer; Youth Services shows June 28, 2026, 2:30 PM, address.

---

### Flow B — "Listen to the music" (Listener / Member)

1. Home → **Music**.
2. See the **Encounter** cover card; click it.
3. On **`/music/encounter`**: view cover, play embedded YouTube, open Spotify/YouTube links, read lyrics (or placeholder), see "Chords coming soon."

**Supports:** Music card links to detail; detail page has embed + links + lyrics/chords sections.

---

### Flow C — "See what's coming / merch" (Member)

1. Home → **Merch**.
2. Browse editorial grid of placement visuals with **"Coming Soon"** labels.
3. Leaves understanding merch is coming — no purchase expectation.

**Supports:** no prices/cart; clear coming-soon framing.

---

### Flow D — "Daily/weekly encouragement" (Member)

1. Home → **Devotions**.
2. View the single large weekly devotion visual.
3. Read writer credit at the bottom.

**Supports:** one visual, no cards, no downloads.

---

### Flow E — "Reach out / connect" (Visitor / Member)

1. Home → **Community**.
2. Choose a section: Prayer Requests, Questions, Testimonies, or General Discussions.
3. See a simple form UI (or clearly-marked "coming soon").
4. Understands this is a first step to connect — not a forum.

**Supports:** four sections; static/coming-soon forms; no accounts.

---

### Flow F — "Follow on social" (any)

1. From the footer on any page, tap **Instagram / YouTube / Facebook** (or Spotify on Music).
2. Opens the correct external profile in a new tab.

**Supports:** footer social links on every page; correct URLs from data.

---

## 3. Navigation Expectations

- Top nav reaches all six primary destinations from anywhere.
- Detail pages (`/music/encounter`, `/events/*`) are reached **via their parent**, with a clear way back.
- Mobile menu opens/closes smoothly; all destinations reachable; tap targets comfortable.
- Footer is consistent on every page (info + socials + tagline).

---

## 4. Empty / Missing-Content States

| Situation | What the user sees |
|---|---|
| No worship nights | "No upcoming worship nights at this time." |
| No conferences | "No upcoming conferences at this time." |
| Lyrics not provided | `[ADD LYRICS HERE]` placeholder |
| Chords not ready | "Chords coming soon." |
| Devotion image missing | `[NEEDS DEVOTION IMAGE]` placeholder |
| Merch not launched | "Coming Soon" labels on placement visuals |

Empty states must feel intentional and calm — never broken or apologetic.

---

## 5. Out-of-Scope Flows (Do Not Build)

Registering for an event, buying merch, creating an account, posting to a forum, logging in, receiving emails. These are future work; the MVP must not imply they exist (no fake buttons that go nowhere except where a clear "coming soon" is intended).
