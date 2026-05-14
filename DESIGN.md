---
name: Ethereal Technical
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max-width: 1280px
---

## Brand & Style

This design system embodies an "Ethereal Technical" aesthetic, merging the precision of high-end engineering with a light, atmospheric clarity. It targets sophisticated users who value transparency, efficiency, and quiet confidence. 

The design style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive white space and a monochromatic palette to reduce cognitive load, while employing subtle translucent layers and hairline strokes to suggest depth without weight. The result is a UI that feels like a precision instrument floating in a clear, well-lit environment.

## Colors

The color palette is strictly monochromatic to emphasize form and typography over decorative hue. 

- **Primary (#000000):** Used for core text, primary actions, and structural lines to provide maximum contrast and legibility.
- **Secondary (#888888):** Utilized for secondary information, icons, and inactive states. It bridges the gap between the stark black and white, providing a soft "technical" gray for metadata.
- **Neutral (#FFFFFF):** The foundation of the system. It serves as the primary canvas, creating an expansive, airy feel that allows content to breathe.

The light mode aesthetic is maintained by ensuring that the background remains pure white, with depth created through tonal layering and varying levels of gray rather than shadows.

## Typography

The typography is a critical pillar of the technical aesthetic, inspired by the geometric precision and clean lines of the reference site.

**Space Grotesk** is used for headings and labels. Its geometric construction and slightly technical character provide a modern, "engineered" feel. Headings should utilize light weights (300) at larger sizes to mimic the ethereal, airy quality of the reference.

**Inter** is used for body text to ensure maximum readability and a neutral, systematic appearance. It maintains the modern sans-serif look while providing the necessary balance for long-form content.

Labels are always set in Space Grotesk with increased letter spacing and uppercase styling to denote utility and navigational importance.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain a sense of architectural rigor. Content is centered within a 1280px container, utilizing a 12-column system.

The spacing rhythm is based on a 4px baseline unit, ensuring all margins, paddings, and gutters are mathematical multiples. This precision reinforces the "Technical" brand persona. Large margins (48px+) are encouraged to separate distinct content blocks, creating the "Ethereal" sense of floating modules. Gutters are kept wide (24px) to prevent the UI from feeling cramped.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-contrast outlines** rather than traditional drop shadows.

1.  **Background:** Pure #FFFFFF.
2.  **Surfaces:** Use #F9F9F9 for subtle differentiation of container areas.
3.  **Outlines:** Elements like cards and inputs are defined by 1px hairline borders in #888888 (at 20% opacity) or #000000 (at 10% opacity).
4.  **Glassmorphism:** For overlays or navigation bars, use a backdrop filter blur (20px) with a semi-transparent white fill (#FFFFFF at 70% opacity). This creates the "Ethereal" effect of content passing behind a frosted surface.

## Shapes

The shape language is **Soft (Level 1)**. Elements feature a 0.25rem (4px) corner radius. This slight rounding softens the technical austerity of the grid just enough to make the interface feel approachable and modern, without losing the precision of sharp intersections.

Interactive components like buttons or input fields should maintain this consistent, subtle radius. Circular (pill) shapes are reserved exclusively for status indicators or small tags to provide visual variety against the rectangular grid.

## Components

- **Buttons:** Primary buttons are solid #000000 with #FFFFFF Space Grotesk text (uppercase). Secondary buttons are outlined with a 1px #000000 stroke. All buttons use the 4px border radius.
- **Input Fields:** Minimalist design with a 1px bottom border in #888888. Upon focus, the border transitions to #000000. Labels sit above the input in uppercase Space Grotesk.
- **Cards:** Defined by a 1px hairline border in a very light gray (#E0E0E0). No shadows. Padding inside cards should be generous (min 32px) to maintain the airy aesthetic.
- **Chips/Tags:** Small, #F0F0F0 background with #888888 Space Grotesk text. Rounded corners follow the system standard (4px).
- **Lists:** Separated by 1px horizontal rules in #F0F0F0. Items have high vertical padding to emphasize the "Ethereal" layout.
- **Checkboxes/Radios:** Square (for checkboxes) and Circle (for radios) with 1px #000000 strokes. When active, they are filled solid #000000 with a white checkmark/dot.
- **Data Tables:** Highly technical. No vertical borders. Use 1px horizontal dividers. Headers are uppercase Space Grotesk with tracking increased for clarity.