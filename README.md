# The OFFICIAL goodr Modal

Welcome to the goodr modal (official)! This is a reuseable modal component developed by the goodr team to take hassle out of developing your own modal/pop-up from scratch.

## Installation

### Prerequisites

- Shopify development environment setup
- Basic knowledge of Liquid templating
- Node.js (optional, for local development)

### Steps

1. **Clone or download this repository** into your Shopify theme's `sections/` directory:

   ```bash
   # If using git
   git clone <repository-url>

   # Or manually copy the files
   cp -r goodr-modal/sections/* your-theme/sections/
   cp -r goodr-modal/assets/* your-theme/assets/
   ```

2. **Add the modal section to your theme** by including it in your Liquid template:

   ```liquid
   {% section 'modal-section' %}
   ```

3. **Configure the modal** using Shopify Theme Editor or by editing the section's schema settings

4. **Test locally** using Shopify CLI:
   ```bash
   shopify theme dev
   ```

## Project Structure

```
.
├── README.md                  # This file
├── sections/
│   └── modal-section.liquid  # Main Liquid component
└── assets/
    ├── modal-section.css     # Styling
    └── modal-section.js      # Interactivity
```

## Usage

### Basic Implementation

Add the section to your theme and configure via the Shopify Theme Editor or directly in your template:

```liquid
{% section 'modal-section' %}
```

### Customization

Refer to the schema settings in [sections/modal-section.liquid](sections/modal-section.liquid) to customize:

- Modal title and content
- Trigger button text
- Styling and animations
- Close behavior

## Tradeoffs & Assumptions

### Assumptions

- **Single modal per page**: This component is optimized for a single modal instance per page load
- **Modern browser support**: Uses ES6+ JavaScript; targets browsers with ES2015+ support
- **Liquid templating**: Assumes usage within a Shopify theme with Liquid templating engine
- **CSS scope**: Assumes no conflicting global CSS selectors

### Tradeoffs

- **No framework dependencies**: Built with vanilla JavaScript to minimize bundle size, but lacks some advanced state management features
- **Limited animation options**: Pre-defined animations to keep CSS lightweight; custom animations require CSS knowledge
- **Accessibility basics**: Includes ARIA attributes but may need enhancement for complex use cases
- **Browser compatibility**: Does not support Internet Explorer 11; targets modern browsers only
- **Responsive design**: Mobile-first approach may require theme-specific adjustments

## Future Improvements

### High Priority

- [ ] **Multiple modal support**: Allow multiple independent modals on one page
- [ ] **Accessibility enhancements**: Full WCAG 2.1 AA compliance, improved keyboard navigation
- [ ] **Unit tests**: Add test coverage for JavaScript functionality
- [ ] **Performance optimization**: Lazy load modal assets until first interaction

### Medium Priority

- [ ] **Animation presets**: Expand animation library with fade, slide, scale variants
- [ ] **TypeScript migration**: Add type safety to JavaScript code
- [ ] **Configuration API**: Expose JavaScript API for programmatic control
- [ ] **Theme customization**: Support Shopify Theme Settings for font, color customization

### Low Priority

- [ ] **Internationalization (i18n)**: Multi-language label support
- [ ] **Analytics integration**: Built-in event tracking for modal interactions
- [ ] **Advanced styling**: CSS-in-JS or SCSS preprocessing support
- [ ] **Mobile gestures**: Swipe-to-close and gesture detection

## Contributing

To contribute improvements:

1. Create a feature branch
2. Test thoroughly in a Shopify development store
3. Submit a pull request with a detailed description

## License

© goodr. All rights reserved.

## Support

For issues or questions, please refer to the Shopify Theme Development documentation or contact the development team.
