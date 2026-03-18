# CLAUDE.md

## Project Overview

Landing page for **DL Performance** — a Next.js 16 application with React 19, TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS, shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theming**: next-themes
- **Notifications**: Sonner

## Project Structure

```
app/              # Next.js App Router pages and layouts
components/       # Shared components
  ui/             # shadcn/ui primitives (button, card, input, badge, label)
  checklist-form.tsx
  theme-provider.tsx
hooks/            # Custom React hooks
lib/              # Utility functions
public/           # Static assets
docs/             # Project documentation
```

## Common Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run lint      # Run ESLint
npm run format    # Format with Prettier
npm run typecheck # TypeScript type check
```

## Guidelines

- Use `cn()` from `lib/utils` for conditional class names
- Follow shadcn/ui patterns for new UI components
- Keep components in `components/ui/` for primitives, `components/` for feature components
- Forms use React Hook Form + Zod for validation
- Images from `images.unsplash.com` are allowed via Next.js remote patterns
