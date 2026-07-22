## Premium UI/UX Guidelines (Pro Max Design System)
When building or modifying web applications, strictly adhere to the following design philosophy unless the user explicitly requests otherwise:

1. **Aesthetics (Less is More):** 
   - Favor a minimalist, monochromatic color palette (e.g., Tailwind's `neutral` or `zinc` scales).
   - Avoid pure colors (like pure black or pure red). Use subtle contrast.
   - Use typography effectively: tight tracking (`tracking-tight`) for headings, readable line heights for body text.
2. **Components (21st.dev Style):**
   - Implement "clean borders": use thin, semi-transparent borders (`border-neutral-200` for light mode, `border-white/10` for dark mode) coupled with subtle shadows (`shadow-sm` or `shadow-md`).
   - Utilize glassmorphism (`backdrop-blur-md` with semi-transparent backgrounds) for overlays and floating panels.
3. **Animations (Motion.dev Standard):**
   - Always prefer `framer-motion` over manual CSS keyframes for layout changes and reveals.
   - Exclusively use Spring Physics for transitions (e.g., `transition={{ type: "spring", bounce: 0, duration: 0.7 }}`) to eliminate rigid easing curves.
   - Use hover/tap micro-interactions (`whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}`).
