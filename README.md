# Frontend Mentor - Tip Calculator App Solution

This is my solution to the **Tip Calculator App** challenge on Frontend Mentor. This project focuses on building a fully responsive tip calculator that allows users to calculate the tip amount and total cost per person based on the bill amount, selected tip percentage, and number of people.

The challenge was a great opportunity to practice responsive layouts, semantic HTML, form handling, DOM manipulation, event-driven JavaScript, Tailwind CSS customization, and deploying a production build with Vite and GitHub Pages.

---

## Table of contents

* [Overview](#overview)
* [The challenge](#the-challenge)
* [Design](#design)
* [Links](#links)
* [My process](#my-process)
* [Built with](#built-with)
* [What I learned](#what-i-learned)

---

## Overview

This project is a responsive tip calculator application that enables users to calculate:

* Tip amount per person
* Total amount per person

Users can choose from predefined tip percentages or enter a custom percentage value. The interface updates dynamically as the user enters information without requiring a page reload.

The layout is fully responsive and adapts seamlessly across desktop, tablet, and mobile devices using a mobile-first approach and Tailwind CSS utility classes.

---

## The challenge

Users should be able to:

* View the optimal layout depending on their device's screen size.
* Enter a bill amount.
* Select a predefined tip percentage.
* Enter a custom tip percentage.
* Enter the number of people sharing the bill.
* See the calculated tip amount per person.
* See the calculated total amount per person.
* Reset the calculator to its initial state.
* View active, hover and disabled states for interactive elements.
* Experience responsive layouts across desktop, tablet, and mobile devices.

---

## Design

### Desktop Design Empty

<img src="./design/desktop-design-empty.jpg" alt="Desktop design preview" width="700">

### Desktop Design Completed

<img src="./design/desktop-design-completed.jpg" alt="Desktop design preview" width="700">

### Active States

<img src="./design/active-states.jpg" alt="Active states preview" width="700">

### Mobile Design

<img src="./design/mobile-design.jpg" alt="Mobile design preview" width="250">

---

## Links

* Solution URL: [GitHub Repository](https://github.com/mlopezl/tip-calculator-app-challenge)
* Live Site URL: [Live Demo](https://mlopezl.github.io/tip-calculator-app-challenge/)

---

## My process

* Structured the application using semantic HTML5 elements such as `form`, `section`, `label`, and `button`.

* Followed a mobile-first workflow to ensure responsiveness across different screen sizes.

* Built layouts using Flexbox and Tailwind CSS utility classes.

* Implemented responsive breakpoints using:

  * `sm:`
  * `md:`
  * `lg:`

* Customized Tailwind CSS v4 using the `@theme` directive.

* Created a custom design system using CSS variables for:

  * Colors
  * Typography

* Imported and configured the Space Mono font from Google Fonts.

* Built custom-styled radio buttons for tip selection.

* Used the CSS `:has()` pseudo-class through Tailwind variants to create active tip button states.

* Removed default browser number input controls using Tailwind arbitrary selectors.

* Managed application state through JavaScript event listeners.

* Added event handling for:

  * `input`
  * `change`
  * `focus`
  * `reset`

* Selected DOM elements using:

  * `getElementById()`
  * `querySelectorAll()`

* Converted NodeLists into arrays using `Array.from()`.

* Used modern array methods such as:

  * `forEach()`
  * `find()`

* Performed input validation before calculations.

* Calculated tip and total amounts dynamically using reusable functions.

* Formatted monetary values using `toFixed(2)`.

* Enabled and disabled the reset button dynamically through DOM attribute manipulation.

* Triggered custom events using `dispatchEvent()`.

* Built and optimized the project using Vite.

* Generated a production build with:

```bash
pnpm run build
```

* Deployed the production build to GitHub Pages.
* Organized build assets for static hosting compatibility.

---

## Built with

* HTML5
* Tailwind CSS v4
* JavaScript (ES6+)
* Flexbox
* CSS Custom Properties (Variables)
* Google Fonts
* Responsive Design Principles
* Mobile-first Workflow
* Semantic HTML
* DOM Manipulation
* Event Listeners
* Form Validation
* Array Methods (`forEach`, `find`)
* Custom Events (`dispatchEvent`)
* Tailwind Arbitrary Selectors
* Tailwind `has()` Variants
* Vite
* PNPM
* GitHub Pages

---

## What I learned

* Building responsive interfaces using semantic HTML5.
* Creating layouts efficiently with Flexbox and Tailwind CSS utility classes.
* Working with Tailwind CSS v4 and the new `@theme` configuration system.
* Creating reusable design tokens with CSS custom properties.
* Integrating external fonts through Google Fonts.
* Styling form controls and custom radio button groups.
* Using Tailwind's arbitrary selectors to customize browser default behavior.
* Leveraging the CSS `:has()` pseudo-class to create dynamic UI states.
* Selecting and manipulating DOM elements efficiently.
* Handling user interactions with multiple event types.
* Converting NodeLists into arrays for easier manipulation.
* Using modern JavaScript array methods such as `forEach()` and `find()`.
* Validating user input before performing calculations.
* Formatting currency values using `toFixed()`.
* Triggering and handling custom events with `dispatchEvent()`.
* Managing UI state through DOM attributes.
* Understanding the Vite development and production workflow.
* Building optimized production bundles with Vite.
* Deploying static frontend applications using GitHub Pages.
