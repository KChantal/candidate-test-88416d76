# 🥼 YunoJuno Frontend Candidate Test (FreelancerHub)

Hi! First of all, thank you for applying and we appreciate you taking
the time to do this. We generally say 3-4hrs should be enough.

### 👋 Introduction

This repo contains a basic React app, called FreelancerHub. Your
task will be to setup the project and extend it!

The app consists of two TypeScript bundles, bundled by Vite; one for
the navigation and one for the dashboard. You can consider this as a
representation of the "micro-frontends" pattern, and it exists like this
because our actual app is undergoing a transition from an MPA to an SPA
and so dealing with these issues is a real-life scenario at YunoJuno.

### 📈 Goals

There are three main goals.

You are free to update the app as you please based on best practice you know.

**Setup synchronisation of Redux store state**

Because of the micro-frontends pattern, there are two Redux stores - one for
the dashboard and one for the navigation. Both apps contain a component which
allows a freelancer to change their availability.

Your job is to introduce a performant, scale-able way to ensure the state is
kept in sync between both components. When a freelancer's availability is
updated in one, it should be reflected in the other immediately.

You should think about:

- performance
- having a repeatable pattern that we could use elsewhere and apply easily

**Improve the usability/design of the dashboard availability component**

Freelancers can update their availability via the dashboard component.

It works fine, we guess - but it looks a bit strange and the fact it works
via an unstyled select drop-down feels a bit 1996.

We'd like you to apply your own flair to this component and rethink how
a freelancer would interact with it.

**Fix the navigation's availability update component**

A freelancer is meant to be able to update their availability from any page on
FreelancerHub by using the component in the navigation but currently when they
click the availability selection we are told that it does not show correctly.

Simply fix it, so that it works.

### Getting Started

1. Fork the repository<sup>☨</sup>.
1. Clone it locally & setup the environment.
1. Install dependencies:
   ```
   npm install
   ```
1. Start the development server:
   ```
   npm run dev
   ```

---

# Changes Made and Details on Implementation

### Goals:

1. Update made to Redux store, creating a single, central store
2. Multiple changes and updates to the design and functionality of the Dashboard (and other areas)
3. Users can now use a dropdown on the Dashboard page to update their availabilty, which does so instantly, as well as in the side navbar

(See further details on other changes made below, as well as thoughts and any improvemnts/changes I would make)

### UI/UX

- **Modernized**

  - Added custom SVG 'FreelancerHub' logo with gradient design (based on YunoJuno's real logo, but kept the FreelancerHub theme)
  - Added Heroicons alongside page routes
  - Updated/added extra color schemes (uses mostly indigo-900 as primary color, as well as red-600 for app name - could be improved to have fewer colors, and stick to a more consistent theme throughout)
  - Now has hover effects and transitions
  - Added animations with timeouts to ensure clarity on Availability status being updated successfully

- **WorkStatusCard Enhancements**

  - Uses status buttons with modern styling and emojis (kept in a consts file for reusability)
  - Animated status updates
  - Slight improvements on layout and spacing
  - improved color contrast and accessibility (though this could be an area for further improvement)

- **UserAvatar Improvements**
  - Uses a fixed-width to prevent layout shifts
  - Centered dropdown menu
  - Text truncation, if needed for longer statuses - though tried to keep them short enough to be within view
  - Changed text label/descriptions around Availability
  - User can click outside to close the dropdown

### State Management

- Now uses a centralized store using `combineSlices` - this approach should allow for any future state management additions more easily
- Removed previous stores under individual components
- Ensures type-safe hooks and actions
- Efficient state updates
- Status notification system also added to allow for clear message that the status update was successful

### Component Structure

- **Navigation**

  - Updated sidebar with Heroicons
  - UserAvatar updated
  - More responsive/modern layout

- **Dashboard**
  - Chose to add the UserAvatar component to Header area, for improved UX (easier for users to find and interact with)
  - Cleaner UI

### General Styling

- Included custom animations with Framer Motion when status has changed
- Changed the colors of multiple components, and attempted to keep a consistent look (could be improved)

### Colors

- Primary: indigo-900 (#312E81) - tried to match YunoJuno's color scheme as best as I could
- Accent: Various indigo shades
- Text: Gray scale (as originally implemented)
- Status: Green for success - added when Availability has successfully been updated in WorkStatusCard
- Other: Blues (as originally implemented, added in other areas)

### Other

- Added extra mock users for extra manual testing

### Potential Future Improvements

- Definitely include solid testing - both unit and integration tests, potentially Cypress for E2E frontend flow
- Implement light/dark mode toggle feature
- Add more micro-frontend features(?)
- Enhance animation system - if in alignment with branding and overall design
- Add user preferences / settings link and page
- Ensure it's mobile, tablet, and web-friendly
- Further improvements around accessibility features (such as elements to improve experience if using screen readers)
- Have and stick to a color scheme and design - I may have gotten slightly carried away with changing colors (and other small style changes) in other areas of the app(!)
- Potentially use a component library - if this would improve styling and consistent layout
- Made attempt to add a 'brand color' in Tailwind, but was unsuccessful, so stuck with a pre-defined color that was as close as possible
- If any functionality is used in multiple areas, add a utils section for ease of reusability, as well as unit testing
- Add .env file for any private data - 3rd party App IDs and secret keys etc

## New Dependencies added

- Framer Motion
- Heroicons
