# Bokhtier Portfolio - Codebase Review Report

**Date:** May 16, 2026  
**Project:** Bokhtier Portfolio Website  
**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion

---

## Executive Summary

This report documents inconsistencies found across the codebase during a comprehensive review. The application is well-structured but contains several stylistic and structural inconsistencies that impact code maintainability and readability. Total inconsistencies found: **18 categories** with **45+ specific instances**.

---

## 1. Import Formatting Inconsistencies

### Issue: Destructuring Spacing
Different files use inconsistent spacing patterns for destructured imports.

**Inconsistent Patterns:**
- **With spaces:** `import { motion } from "framer-motion"` (Footer.tsx, ThemeToggle.tsx, BackToTop.tsx)
- **Without spaces:** `import {motion} from "framer-motion"` (Hero.tsx, Experience.tsx, ProjectCard.tsx, SectionHeading.tsx)

**Files Affected:**
- `src/components/Hero.tsx:4` - `import {motion} from "framer-motion"`
- `src/components/Experience.tsx:3-4` - `import {useState}`, `import {motion}`
- `src/components/ProjectCard.tsx:4` - `import {motion}`
- `src/components/Footer.tsx:3-4` - `import React from`, `import { motion }`
- `src/components/ThemeToggle.tsx:3-4` - `import { useTheme }`, `import { useEffect, useState }`

**Recommendation:** Standardize to one format. ESLint best practice is **with spaces**: `{ motion }`

**Severity:** Low - Stylistic

---

## 2. Import Path Inconsistencies

### Issue: Mixed Relative vs Alias Paths
Different components use inconsistent path resolution strategies.

**Patterns Found:**
- **Alias path:** `@/components/SectionHeading` (src/app/projects/page.tsx:4)
- **Relative with dots:** `./../../components/SectionHeading` (src/app/contact/page.tsx:9)
- **Relative standard:** `../../components/ProjectCard` (src/app/projects/page.tsx:1)
- **Relative hook:** `../../hooks/useActiveSection` (src/components/ScrollNav.tsx:8)

**Files Affected:**
```
src/app/projects/page.tsx:1        ../../components/ProjectCard
src/app/projects/page.tsx:4        @/components/SectionHeading
src/app/contact/page.tsx:7         ../../components/ContactForm
src/app/contact/page.tsx:8         @/components/CopyMailButton
src/app/contact/page.tsx:9         ./../../components/SectionHeading (redundant dots)
src/components/ScrollNav.tsx:8     ../../hooks/useActiveSection
```

**Best Practice:** Use alias paths (`@/*`) for all imports within src/ to avoid dot-relative confusion and improve readability.

**Recommended Pattern:** All imports from `src/` should use `@/` alias:
```typescript
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
```

**Severity:** Medium - Affects readability and maintainability

---

## 3. Component File Name vs Export Name Mismatch

### Issue: Exported Functions Don't Match File Names
Component files export functions with different names than the file itself.

**Problematic Files:**

| File Name | Exported Function | Impact |
|-----------|------------------|--------|
| `CopyMailButton.tsx` | `CopyEmailButton` | Inconsistent naming, confusing imports |
| `SecondaryProjectCard.tsx` | `ProjectCard` | Duplicate export name with ProjectCard.tsx |

**Files Affected:**
```
src/components/CopyMailButton.tsx:5 → export default function CopyEmailButton()
src/components/SecondaryProjectCard.tsx:19 → export default function ProjectCard()
```

**Issue:** The second file exports `ProjectCard` which conflicts with the actual ProjectCard component. This makes imports ambiguous:
```typescript
// Which ProjectCard is this?
import ProjectCard from "@/components/SecondaryProjectCard";
```

**Recommendations:**
1. Rename `CopyMailButton.tsx` to `CopyEmailButton.tsx` OR rename export to `CopyMailButton`
2. Rename `SecondaryProjectCard.tsx` export to `SecondaryProjectCard` or rename file to match export

**Severity:** High - Can cause confusion and import errors

---

## 4. Component Export Pattern Inconsistency

### Issue: Mixed Component Declaration Styles
Components use different declaration and export patterns.

**Pattern 1 - Direct Function Export:**
```typescript
// Hero.tsx, Experience.tsx, ScrollNav.tsx, BackToTop.tsx, etc.
export default function ComponentName() {
  return (...)
}
```

**Pattern 2 - Arrow Function + Export:**
```typescript
// Footer.tsx, CopyMailButton.tsx
const Footer = () => {
  return (...)
};
export default Footer;
```

**Pattern 3 - Named Function Declaration:**
```typescript
// ProjectCard.tsx, SecondaryProjectCard.tsx
export default function ProjectCard({ ...props }: Props) {
  return (...)
}
```

**Files Affected:**
- `src/components/Hero.tsx:8` - `const Hero = () => ...` (should be direct export)
- `src/components/Footer.tsx:7` - `const Footer = () => ...` (mixed pattern)
- Others use direct export

**Recommendation:** Standardize to **direct function export** pattern:
```typescript
export default function ComponentName() {
  return (...)
}
```

**Severity:** Low - Stylistic, but impacts consistency

---

## 5. React Import Inconsistency

### Issue: Unnecessary React Imports
Some components import React unnecessarily.

**Files with Unnecessary React Imports:**
```
src/components/Hero.tsx:3            import React from "react";
src/components/Footer.tsx:3          import React from "react";
src/components/CopyMailButton.tsx:1  import React, { useState } from "react";
```

**Context:** Modern React (especially React 19) doesn't require importing React for JSX. These imports are unused.

**Recommendation:** Remove React from imports, keep only used hooks:
```typescript
// ❌ Wrong
import React, { useState } from "react";

// ✅ Correct
import { useState } from "react";
```

**Severity:** Low - Doesn't affect functionality but increases bundle size

---

## 6. Inconsistent Link Implementation

### Issue: Mixed Link vs Anchor Tag Usage
Different patterns for navigation and external links.

**Patterns Found:**

**Pattern 1 - Next.js Link:**
```typescript
// ScrollNav.tsx:79
<Link href={`#${id}`} className={...}>
```

**Pattern 2 - HTML Anchor:**
```typescript
// Social.tsx:32
<motion.a href={social.link} target="_blank">

// SecondaryProjectCard.tsx:51
<a href={github} target="_blank" rel="noopener noreferrer">
```

**Files Affected:**
```
src/components/ScrollNav.tsx       Uses <Link> for hash navigation
src/components/Social.tsx:32       Uses <motion.a> for external links
src/components/ProjectCard.tsx     Uses <Link> for project routes
src/components/SecondaryProjectCard.tsx  Uses <a> tags for external links
src/app/contact/page.tsx:63        Uses <motion.a> for social links
```

**Best Practices:**
- Use `<Link>` for **internal routes** (Next.js optimization)
- Use `<a>` for **external URLs** and **hash navigation**

**Recommendation:** Update components to use proper patterns:
```typescript
// External links
<a href={url} target="_blank" rel="noopener noreferrer">Link</a>

// Internal routes
<Link href="/path">Link</Link>

// Hash navigation
<a href="#section">Link</a>
```

**Severity:** Medium - Affects performance and SEO

---

## 7. String Concatenation vs Path Patterns

### Issue: Inconsistent Route Construction
Path concatenation uses different styles.

**Patterns Found:**
```typescript
// String concatenation
href={"/projects/" + slug}          // ProjectCard.tsx:36
href={"./projects/" + slug}         // SecondaryProjectCard.tsx:62

// Proper approach (not used)
href={`/projects/${slug}`}
```

**Files Affected:**
```
src/components/ProjectCard.tsx:36           href={"/projects/" + slug}
src/components/ProjectCard.tsx:83           href={"/projects/" + slug}
src/components/SecondaryProjectCard.tsx:28  href={"/projects/" + slug}
src/components/SecondaryProjectCard.tsx:62  href={"./projects/" + slug} (relative path)
```

**Issues:**
1. String concatenation is less readable than template literals
2. Inconsistent use of absolute (`/`) vs relative (`./`) paths
3. Line 62 uses relative path which may cause issues

**Recommendation:** Use template literals consistently:
```typescript
// ✅ Correct
href={`/projects/${slug}`}
```

**Severity:** Medium - Affects readability and could cause routing issues

---

## 8. Tailwind CSS Class Formatting

### Issue: Inconsistent Class String Organization
Long class strings are formatted differently across components.

**Pattern 1 - Multi-line with Backticks:**
```typescript
// ProjectCard.tsx:32-34
className={`relative  border border-primary w-full justify-center 
rounded-sm hover:cursor-pointer flex flex-col overflow-hidden 
hover:outline-4 hover:outline-primary transition p-4 gap-6 ${
    isEven ? "" : "md:flex-row-reverse"
}`}
```

**Pattern 2 - Single Line:**
```typescript
// SecondaryProjectCard.tsx:26
className="bg-secondary w-full border-primary border-2 rounded-lg..."
```

**Pattern 3 - Conditional with Ternary:**
```typescript
// ScrollNav.tsx:81-82
className={`relative z-10 text-sm px-2 py-1 font-bold tracking-wider 
transition-colors ${isActive ? "text-primary underline..." : "..."}
```

**Issues:**
1. Inconsistent approach to handling long class strings
2. Extra whitespace in class strings (ProjectCard.tsx line 32 has double space)
3. No clear convention for multi-line vs single-line

**Examples of Extra Spacing:**
```
ProjectCard.tsx:32   "relative  border"  (double space)
ProjectCard.tsx:15   "flex flex-col  justify-start"  (double space)
```

**Recommendation:** Use `clsx` or `classnames` library for complex conditional classes:
```typescript
import clsx from 'clsx';

className={clsx(
  "relative border border-primary w-full justify-center",
  "rounded-sm hover:cursor-pointer flex flex-col overflow-hidden",
  "hover:outline-4 hover:outline-primary transition p-4 gap-6",
  { "md:flex-row-reverse": !isEven }
)}
```

**Severity:** Low - Stylistic, but affects consistency

---

## 9. Variable Naming Convention Inconsistency

### Issue: Inconsistent Casing in Variable Names
Variables don't follow consistent casing patterns.

**Problem:** `secondaryprojects` (all lowercase)
```typescript
// src/app/projects/page.tsx:3
import {projects, secondaryprojects} from "../../../lib/projects";
// src/app/projects/page.tsx:23
{secondaryprojects.map((project, index) => (
```

**Expected:** Should follow camelCase convention like `projects`

**Recommendation:** 
```typescript
// ✅ Correct
import { projects, secondaryProjects } from "@/lib/projects";
{secondaryProjects.map(...)}
```

**Severity:** Low - Stylistic, but inconsistent with codebase conventions

---

## 10. Props Interface Naming

### Issue: Inconsistent Interface Definition and Naming
Some components define props interfaces, others don't.

**Pattern 1 - With Interface:**
```typescript
// ProjectCard.tsx:10-21
interface ProjectCardProps {
    title: string;
    shortDescription: string;
    // ...
}
```

**Pattern 2 - Without Interface:**
```typescript
// SectionHeading.tsx:5-8
interface SectionHeadingProps {
    index: string;
    title: string;
}
```

**Missing Types:**
- `src/components/ContactForm.tsx` - No interface definition visible
- `src/components/SubSectionHeading.tsx` - Props structure unclear

**Recommendation:** All components should have explicit prop interfaces:
```typescript
interface ComponentNameProps {
  // Props definition
}

export default function ComponentName(props: ComponentNameProps) {
  // ...
}
```

**Severity:** Medium - Affects type safety and IDE support

---

## 11. Animation Variant Type Annotations

### Issue: Inconsistent Type Usage for Framer Motion Variants
Some components type variants explicitly, others don't.

**With Type Annotation:**
```typescript
// ScrollNav.tsx:20
const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { ... }
};
```

**Without Type Annotation:**
```typescript
// Social.tsx:13-26
const container = { /* ... */ };
const item = { /* ... */ };
```

**Recommendation:** Consistently use type annotations for better IDE support:
```typescript
const container: Variants = { /* ... */ };
const item: Variants = { /* ... */ };
```

**Severity:** Low - Type safety improvement

---

## 12. Event Handler Naming Convention

### Issue: Inconsistent Event Handler Naming
Different patterns for function naming.

**Pattern 1 - Explicit Naming:**
```typescript
// CopyMailButton.tsx:9
const handleCopy = async () => { ... }

// BackToTop.tsx:11
const toggleVisibility = () => { ... }
```

**Pattern 2 - Inline/No Specific Pattern:**
```typescript
// ScrollNav.tsx:39
const handleScroll = () => { ... }
```

**Recommendation:** Standardize to `handle` prefix for all event handlers:
```typescript
const handleCopy = () => { ... }
const handleScroll = () => { ... }
const handleClick = () => { ... }
```

**Severity:** Low - Stylistic consistency

---

## 13. Comment and Documentation Style

### Issue: Inconsistent Comment Patterns
Different files use different comment styles.

**Pattern 1 - Descriptive Comments:**
```typescript
// src/components/ProjectCard.tsx:1-2
// src/components/ProjectCard.tsx
"use client";

// Image
```

**Pattern 2 - Minimal Comments:**
```typescript
// src/components/Hero.tsx
{/* Greeting */}
{/* Main Heading */}
```

**Pattern 3 - Complex Comments:**
```typescript
// src/components/ScrollNav.tsx:37
// Scroll  Logic  (note: typo "Scroll  Logic" with double space)
```

**Recommendation:** 
- Use JSX comments for inline documentation: `{/* Section name */}`
- Use code comments sparingly for non-obvious logic
- Avoid header comments in small files

**Severity:** Low - Documentation consistency

---

## 14. Data Variable Naming in Components

### Issue: Inconsistent Data Structure Naming
Similar data structures use different naming patterns.

**Pattern 1 - Array of Objects in Component:**
```typescript
// src/components/Experience.tsx:7-19
const experiences = [{ company, role, duration, points }, ...]

// src/components/Social.tsx:6-11
const socials = [{ icon, link }, ...]

// src/app/contact/page.tsx:11-17
const socials = [{ icon, link }, ...]
```

**Duplication:** `socials` defined in both `Social.tsx` and `contact/page.tsx`

**Recommendation:** Extract shared data to a constants file:
```typescript
// src/lib/constants.ts
export const SOCIAL_LINKS = [
  { icon: <FaGithub />, link: "https://github.com/bokhtier19" },
  // ...
];
```

**Severity:** Medium - Code duplication and maintenance risk

---

## 15. Motion Component Pattern Inconsistency

### Issue: Different Patterns for Using Framer Motion
Motion components used differently across codebase.

**Pattern 1 - Motion with Variants:**
```typescript
// ScrollNav.tsx:60
<motion.div className={...} initial="hidden" animate="visible" variants={containerVariants}>
```

**Pattern 2 - Motion with Inline Animation:**
```typescript
// Hero.tsx:11-14
<motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
```

**Pattern 3 - Motion on HTML Elements:**
```typescript
// SectionHeading.tsx:12
<motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}}>
```

**Recommendation:** Create a shared variants configuration file:
```typescript
// src/lib/animations.ts
export const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
```

**Severity:** Medium - Code reusability improvement

---

## 16. Email Handling Inconsistency

### Issue: Multiple Email References
Email address hardcoded in multiple places with potential inconsistency.

**Files Affected:**
```
src/components/CopyMailButton.tsx:7     bokhtierelius19@gmail.com
src/app/contact/page.tsx:54             bokhtierelius19@gmail.com (same)
src/app/contact/page.tsx:16             mailto:bokhtierelius19@gmail.com (link)
src/lib/projects.ts                     (if contact info stored)
```

**Recommendation:** Create a constants file for contact info:
```typescript
// src/lib/constants.ts
export const CONTACT_EMAIL = "bokhtierelius19@gmail.com";
```

**Severity:** Low - Maintenance and consistency

---

## 17. TypeScript Strict Mode Configuration

### Issue: Strict Mode Enabled but Optional Chains Not Everywhere
TypeScript is configured with `strict: true` but some code could be safer.

**Configuration:** `tsconfig.json:7` - `"strict": true` ✅

**Potential Issues:**
- Properties accessed without null checks in some places
- Optional chaining not consistently used where needed

**Recommendation:** Audit property access patterns and ensure:
```typescript
// ✅ Safe
const icon = social?.icon ?? null;

// ⚠️ Unsafe when property may not exist
const value = object.property;
```

**Severity:** Medium - Type safety

---

## 18. Unused Imports

### Issue: Some Components Import Unused Modules
`Image` from `next/image` is imported but not used in some components.

**Files Affected:**
```
src/components/ProjectCard.tsx:5     import Image from "next/image"; (not used)
src/components/SecondaryProjectCard.tsx:5  import Image from "next/image"; (not used)
```

Both components use `<img>` tags instead of Next.js `<Image>` component.

**Recommendation:**
1. Remove unused import
2. Or convert `<img>` to `<Image>` for optimization:
```typescript
import Image from "next/image";

<Image 
  src={image1} 
  alt={title} 
  width={500} 
  height={400}
  className="object-cover rounded-xl shadow-lg"
/>
```

**Severity:** Low - Code cleanliness

---

## Summary of Issues by Severity

### High Priority (3)
1. Component name mismatches (CopyMailButton, SecondaryProjectCard)
2. Import path inconsistencies affecting readability
3. Link implementation patterns affecting performance

### Medium Priority (9)
1. Inconsistent import spacing
2. Props interface consistency
3. Data duplication (socials array)
4. Motion component pattern inconsistencies
5. TypeScript strict mode compliance
6. Variable naming conventions
7. Tailwind class formatting with issues
8. Route construction patterns
9. Comment style consistency

### Low Priority (6)
1. Unnecessary React imports
2. Unused imports (Image component)
3. Event handler naming
4. Animation variant type annotations
5. Email handling centralization
6. Export pattern consistency

---

## Recommendations for Refactoring

### Phase 1: Critical Fixes (High Priority)
1. [ ] Rename `CopyMailButton.tsx` to `CopyEmailButton.tsx` or adjust export
2. [ ] Rename `SecondaryProjectCard.tsx` export to `SecondaryProjectCard`
3. [ ] Fix import paths to use `@/` alias throughout

### Phase 2: Code Quality Improvements (Medium Priority)
1. [ ] Standardize import formatting (spaces around destructures)
2. [ ] Create shared variants file for Framer Motion animations
3. [ ] Remove duplication of socials array
4. [ ] Create constants file for email and shared data
5. [ ] Add proper TypeScript interfaces to all components
6. [ ] Fix extra whitespace in Tailwind class strings

### Phase 3: Polish (Low Priority)
1. [ ] Remove unnecessary React imports
2. [ ] Remove unused Image imports
3. [ ] Convert `<img>` to `<Image>` component
4. [ ] Standardize event handler naming
5. [ ] Standardize comment patterns
6. [ ] Consolidate component export patterns

---

## ESLint Configuration Recommendations

Add these rules to `eslint.config.mjs` to prevent future inconsistencies:

```javascript
// Force consistent import spacing
rules: {
  'object-curly-spacing': ['error', 'always'],
  'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  '@next/next/no-img-element': 'warn', // Encourage <Image> component
  'import-order': ['error', { // Enforce consistent import order
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    'newlines-between': 'always',
  }],
}
```

---

## Conclusion

The codebase is well-structured and functional, but would benefit from standardization in naming conventions, import paths, and component patterns. Most issues are stylistic but addressing them would significantly improve code maintainability and developer experience.

**Estimated Effort to Fix:**
- High Priority: 2-3 hours
- Medium Priority: 4-6 hours
- Low Priority: 2-3 hours
- **Total: 8-12 hours**

**Testing After Changes:**
- Run full test suite
- Manual browser testing for routing
- Verify Next.js build optimization
- Check bundle size changes

