# Analytics & tracking

Everything measurement-related lives in **`components/Analytics.jsx`**, which
exposes a single global, `window.DPAnalytics`. Pages and the app shell call it;
nothing else talks to Google directly.

## What's installed

| Tool | ID | Where |
|---|---|---|
| Google Analytics 4 | `G-00CRXYH6B8` | `GA4_MEASUREMENT_ID` in `components/Analytics.jsx` |
| HubSpot tracking | portal `242324318` | `<script>` before `</body>` in `index.html` |
| Google Search Console | — | verification `<meta>` in `<head>` of `index.html` |

**HubSpot's script is region-specific.** This portal is `na2`, so the host is
`js-na2.hs-scripts.com`. The plain `js.hs-scripts.com` redirects and fails. It
is also pinned to `https://` rather than HubSpot's own protocol-relative `//`,
which breaks on an http page.

HubSpot's value here is that it ties anonymous browsing to a CRM contact once
someone submits the inquiry form — the team can see what a prospect read before
reaching out.

## The part that matters: virtual page views

The site has **one real URL**. Out of the box GA4 would record every visit as
`/` and per-page traffic would be invisible — you could not tell whether anyone
reached Membership.

So `gtag('config', …)` sets **`send_page_view: false`**, and `app.jsx` fires a
page view itself on every route change:

```js
useEffect(() => { window.DPAnalytics.page(route); }, [route]);
```

`DP_ROUTE_META` in `Analytics.jsx` maps each route to a virtual path and title
(`golf` → `/golf`, "Golf"). **Keep it in step with the routes in `app.jsx`** —
an unlisted route still reports, but as its raw id.

Two consequences worth knowing:

- **Never paste Google's stock gtag snippet into the page.** It calls `config`
  without `send_page_view: false`, so every visit would be counted twice and the
  inflation is hard to spot after the fact.
- In GA4, Enhanced Measurement's **"Page changes based on browser history
  events"** is deliberately **off**. It does the same job a different way and
  would collide once real URL routing is added.

## Events

| Event | Fires when | Why |
|---|---|---|
| `page_view` | Route changes | Per-page traffic, see above |
| `enter_site` | Splash gate "Enter" clicked | How many arrivals get past the gate |
| `generate_lead` | Inquiry form submits successfully | GA4's standard lead event, so built-in conversion reports work untouched |
| `phone_click` | Any `tel:` link | GA4 cannot see these on its own |
| `membership_email_click` | Any `mailto:` link | Same |

`phone_click` and `membership_email_click` come from one delegated listener in
the capture phase (`trackContactLinks()`), not handlers on each anchor — it
covers every such link including ones added later. Enhanced Measurement's
outbound-click tracking only covers `http(s)` links, so `tel:` and `mailto:`
are invisible to it.

Every call is wrapped in try/catch. **Measurement must never break the site.**

## Turning it off

Set `GA4_MEASUREMENT_ID` to `''`. No Google script loads and no Google cookie is
set. Useful for a staging copy.

## Campaign arrivals skip the splash gate

Not strictly analytics, but it lives in `app.jsx` next to this. Visitors
arriving with `gclid`, `gbraid`, `wbraid`, `msclkid`, `fbclid`, or any
`utm_source` / `utm_medium` / `utm_campaign` land **directly on the site**
rather than the Enter screen.

A paid click has already been paid for; making it click again to see any
content costs conversions outright, and Google grades landing page experience
as part of Quality Score, so a content-free interstitial raises cost-per-click
across the campaign. Organic visitors still get the splash.

The query string is left intact so GA4 and Google Ads attribution still resolve.
A practical side effect: tagging the Instagram bio link `?utm_source=instagram`
both skips the gate and attributes that traffic properly instead of burying it
in "direct".

## Reading the data — two traps

**GA4's warnings lie early on.** "Data collection isn't active for your website"
and zeroes on the Home card persisted while Realtime clearly showed active
users. The banner takes 24–48 hours; standard reports lag 24–48 hours.
**Realtime is the only instant view** — never diagnose from the banner.

**New events take ~24 hours to appear in Admin → Events**, even though Realtime
shows them immediately. They cannot be marked as key events until they appear.
Use **DebugView** if you need to confirm an event sooner.

## Still outstanding

- `generate_lead`, `phone_click` and `membership_email_click` need marking as
  **key events** in GA4 (Admin → Data display → Key events) before they count as
  conversions.
- **Google Ads** is not connected. When it is, the conversion ID and label go in
  `Analytics.jsx` alongside the GA4 ID and fire on the same events.
- **Vercel Analytics** is not enabled. Cookie-free and not blocked by ad
  blockers, so it is a useful cross-check — GA4 typically undercounts 10–30%.
- GA4 property access should be granted at **Property** level, not Account.
  Account level would expose every other client in the same GA4 account.
