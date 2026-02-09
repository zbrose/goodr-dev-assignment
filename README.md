# The goodr popup

Welcome to the goodr popup (official)! This is a reuseable popup component developed by the goodr team to take hassle out of developing your own popup/pop-up from scratch.

<img src="./assets/desktop.png" width="200" /> <img src="./assets/mobile.png" width="165" />

## Features

### Open/Close on Delay

Popup opens and closes on a timed delay that can be customized wiithin the Shopify Editor. An overlay focuses the popup with a slightly darker background.

![popup gif](/assets/show.gif)

### Desktop/Mobile Responsive

The popup is fully responsive on desktop and mobile platforms.

![popup gif](/assets/responsive.gif)

### Composable Design

Design the popup of your dreams with movable blocks allowing users to reuse and customize the popup's layout.

![popup gif](/assets/composable.gif)

### Customizable Settings

Go even further into your inner artist and customize color schemes, images, text and more in editor.

![popup gif](/assets/customize.gif)

### Accessible Focus Trap

An implemented focus trap allows screen readers to interact with focusable elements without getting lost in the background noise.

![popup gif](/assets/focus.gif)

### Persisted Session Storage

Popup state is stored within session storage and won't reappear unless the user opens a new tab or window.

![popup gif](/assets/session.gif)

## Technology & Methodologies

**CSS / BEM Methodology:** Leverages the Block, Element, Modifier convention to maintain a modular class structure. This ensures encapsulated styles and prevents global CSS leakage.

**Object-Oriented JavaScript:** A dedicated JS class manages the logic and heavy functional lifting of the popup.

**Liquid Templating:** Utilizes Liquid markup and conditional rendering to deliver dynamic content tailored to the user's settings.

## Installation

### Prerequisites

- The Shopify CLI intalled on your machine: `npm install -g @shopify/cli@latest`
- An IDE such as VS Code
- Shopify development environment setup
- Basic knowledge of Liquid templating

### Steps

1. **Clone or download this repository** into your Shopify theme's `sections/` directory:

   ```bash
   # If using git
   git clone <repository-url>

   # Or manually copy the files and place them within the corresponding directories
   cp -r goodr-popup/sections/* your-theme/sections/
   cp -r goodr-popup/snippets/* your-theme/snippets/
   cp -r goodr-popup/assets/* your-theme/assets/
   ```

2. **Add the popup section to your theme** by including it in your Liquid template OR add and configure using the Shopify Theme Editor or by editing the section's schema settings

   ```liquid
   {% section 'goodr-popup' %}
   ```

3. **Test locally** using Shopify CLI:
   ```bash
   shopify theme dev
   ```

## Usage

### Basic Implementation

Add the section to your theme and configure via the Shopify Theme Editor or directly in your template:

```liquid
{% section 'goodr-popup' %}
```

### Customization

Refer to the schema settings in [sections/goodr-popup.liquid](sections/goodr-popup.liquid) to customize or add the popup section to a theme in the Shopify Theme editor.

- Popup color and text
- Trigger button text
- Styling and animations
- Close behavior

## Tradeoffs & Assumptions

### Assumptions

- **Single popup per page**: This component is optimized for a single popup instance per page load
- **Modern browser support**: Uses ES6+ JavaScript; targets browsers with ES2015+ support
- **Liquid templating**: Assumes usage within a Shopify theme with Liquid templating engine
- **CSS scope**: Assumes no conflicting global CSS selectors

### Tradeoffs

- **Responsive design**: Mobile-first approach may require theme-specific adjustments
- **Theming**: Current theme capabilites only includes styles and colors from goodr brand
- **Limited Settings**: Basic settings are included for customization and more developement is required to extend

## Future Improvements

- **Animation presets**: Expand animation library with fade, slide, scale variants
- **TypeScript**: Add type safety to JavaScript code
- **Theme customization**: Support Shopify Theme Settings for font, color customization
- **Internationalization (i18n)**: Multi-language label support
- **Analytics integration**: Built-in event tracking for popup interactions
- **Advanced styling**: CSS-in-JS or SCSS preprocessing support
