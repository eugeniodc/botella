# AGENTS.md

## Build, Lint, and Test Commands
- **Build:** `npm run build` (Next.js, Turbopack)
- **Dev:** `npm run dev`
- **Start:** `npm run start`
- **Lint:** `npm run lint` (ESLint, extends next/core-web-vitals & next/typescript)
- **Test:** No test setup or files found; add tests using Jest or Vitest if needed.

## Code Style Guidelines
- **Imports:** Use ES module syntax. Group external before internal. Use `@/*` alias for absolute imports.
- **Formatting:** Follow ESLint and Next.js recommended rules. Use Tailwind CSS for styling.
- **Types:** Use explicit TypeScript types for props, exports, and function signatures.
- **Naming:** PascalCase for components, camelCase for functions/variables.
- **Error Handling:** Follow React/Next.js conventions. No custom error handling found.
- **Utilities:** Use helper functions (e.g., `cn` for class merging).
- **Strictness:** Avoid unused code; strict linting enforced.
- **Components:** Use functional components and React hooks.
- **CSS:** Use Tailwind classes in `className` or CSS modules.
- **Accessibility:** Use semantic HTML and ARIA attributes as needed.

_No Cursor or Copilot rules present._
