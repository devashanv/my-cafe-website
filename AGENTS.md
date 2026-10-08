# Project Instructions

## 1. Project Objective

This project recreates existing websites as improved, AI-optimized websites.

The goal is to build websites that are:

- useful and understandable to humans
- easy for search engines to crawl and understand
- easy for answer engines to extract answers from
- clear to generative AI systems
- well structured for AI-powered search and discovery
- fast, accessible, secure, and maintainable

SEO, AEO, GEO, and AISO must be considered as part of the overall
website architecture and content structure, not added as an afterthought.

Do not implement optimization techniques only because they are commonly
described as "SEO tricks". Every optimization must have a clear purpose
and should improve understanding, discoverability, usability, or
technical quality.

---

## 2. Technology Stack

Use the following stack unless there is a documented reason to change it:

- React
- Vite
- TypeScript
- Tailwind CSS

Prefer native platform capabilities and existing project dependencies
before introducing additional libraries.

Do not add a dependency without explaining why it is necessary.

---

## 3. Development Philosophy

Follow this workflow:

Understand → Plan → Implement → Validate → Review

Before making significant changes:

1. Understand the existing code and requirements.
2. Identify the files that need to change.
3. Determine the simplest appropriate solution.
4. Implement only the required changes.
5. Run appropriate validation.
6. Review the resulting changes.

Do not make unrelated changes.

Do not introduce unnecessary abstractions, folders, components,
dependencies, or configuration.

Prefer simple solutions that are easy for another developer to
understand and maintain.

---

## 4. Codex Operating Rules

Codex is a coding assistant, not the decision maker for the project.

For significant architectural or SEO/AEO/GEO/AISO decisions:

- explain the proposed approach before implementation when practical
- identify important trade-offs
- do not invent requirements
- do not assume missing business information
- ask for clarification when a major decision cannot be made reliably

For implementation tasks:

- inspect relevant existing files before modifying them
- modify only files necessary for the task
- preserve existing functionality unless a change is intentional
- do not overwrite unrelated work
- do not install dependencies unless required
- do not make large refactors without justification

After implementation, run appropriate checks such as:

- TypeScript/build validation
- ESLint
- relevant tests, when available
- manual browser verification when the change affects UI

---

## 5. React and TypeScript Rules

Use React function components and TypeScript.

Prefer:

- small, focused components
- reusable components when reuse is real
- meaningful component and variable names
- explicit TypeScript types where they improve clarity
- semantic HTML
- predictable data flow

Avoid:

- unnecessary component abstraction
- unnecessary global state
- duplicated business logic
- `any` unless there is a justified reason
- large components containing unrelated responsibilities

Do not create architectural folders until the application actually
requires them.

---

## 6. Styling Rules

Use Tailwind CSS for component styling.

Prefer:

- responsive design
- mobile-first layouts
- consistent spacing and typography
- accessible color contrast
- reusable styling patterns when appropriate

Avoid unnecessary custom CSS.

Keep global CSS limited to genuine global requirements.

---

## 7. Code Quality

Code should be:

- readable
- maintainable
- accessible
- type-safe
- performant
- secure

Prefer clarity over cleverness.

Do not optimize prematurely.

When performance optimization is required, identify the actual
problem before introducing a solution.

## 8. SEO Rules

SEO must be considered during page architecture, content structure,
routing, rendering, performance, and implementation.

### Technical SEO

Every important indexable page should have:

- a unique, descriptive URL
- a unique and meaningful `<title>`
- a useful meta description
- one clear primary `<h1>`
- logical heading hierarchy
- descriptive link text
- semantic HTML
- appropriate canonical URL handling
- appropriate robots directives when required
- crawlable internal links
- optimized images with meaningful `alt` text
- appropriate language metadata

Do not create duplicate pages or duplicate metadata unnecessarily.

### Page Structure

Use semantic HTML elements where appropriate:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

HTML structure should communicate the meaning and hierarchy of the
content without relying only on CSS classes or visual appearance.

### URLs and Routing

URLs should be:

- descriptive
- stable
- human-readable
- lowercase
- logically structured

Avoid unnecessary query parameters, meaningless identifiers,
and duplicate URL variations.

### Metadata

Metadata must describe the actual page content.

Do not:

- stuff keywords into titles or descriptions
- create misleading metadata
- duplicate the same title across important pages
- generate metadata that does not match visible page content

### Internal Linking

Important pages should be discoverable through crawlable internal
links.

Internal links should:

- use meaningful anchor text
- connect related content
- help users and search engines understand site structure
- avoid unnecessary link duplication

### Images

Images should be optimized for performance and accessibility.

Use:

- descriptive file names when practical
- meaningful `alt` text for informative images
- empty `alt=""` for purely decorative images
- appropriate image dimensions
- modern image formats when appropriate
- lazy loading for non-critical images when appropriate

Do not use images as a replacement for important textual content.

### Performance

SEO implementation must not unnecessarily reduce performance.

Prefer:

- optimized images
- minimal JavaScript
- efficient component rendering
- appropriate code splitting
- avoiding unnecessary dependencies
- fast initial page rendering

Performance decisions should be based on actual requirements
and measured results where possible.

### Search Intent and Content

Content should satisfy the intended user query or task.

Before creating important content, identify:

- the target audience
- the user's intent
- the information they need
- the most useful answer or action

Do not create content primarily to increase keyword count.

Content should be clear, useful, accurate, and naturally written.

### SEO Validation

Before considering an important page complete, verify:

- page URL
- title
- meta description
- canonical URL
- robots directives where applicable
- heading hierarchy
- semantic HTML
- internal links
- image accessibility
- sitemap requirements
- robots.txt requirements
- structured data where appropriate
- production build
- mobile responsiveness
- performance

## 9. AEO Rules

Answer Engine Optimization (AEO) focuses on making useful information
easy for answer engines and AI systems to understand, extract, and
present in response to user questions.

AEO must be implemented through clear information architecture,
well-structured content, direct answers, semantic HTML, and trustworthy
supporting information.

### Answer-Focused Content

When a page addresses a specific user question:

1. Clearly identify the question or user need.
2. Provide a concise direct answer near the relevant heading.
3. Follow the direct answer with supporting explanation and useful detail.
4. Keep the answer consistent with the rest of the page content.
5. Do not hide important answers behind unnecessary interactions.

Prefer a structure such as:

Question or descriptive heading
        ↓
Direct answer
        ↓
Supporting explanation
        ↓
Examples, evidence, details, or next action

### Question and Heading Structure

Use descriptive headings that reflect the actual information being
provided.

When appropriate, use natural question-based headings such as:

- What is ...?
- How does ... work?
- Who is ... for?
- What services does ... provide?
- Where is ... available?
- How can I ...?

Do not convert every heading into a question unnecessarily.

Headings must describe real content that follows them.

### Content Extractability

Important information should be represented as real text in the HTML.

Prefer:

- concise paragraphs
- lists
- tables when comparison is appropriate
- clearly labeled sections
- descriptive headings
- explicit definitions
- clearly stated facts

Do not place essential information only inside:

- images
- canvas elements
- decorative graphics
- inaccessible interactive components
- client-side content that is unnecessarily delayed

### Definitions and Entities

When introducing an important entity, concept, service, product,
organization, or location, define it clearly.

Where useful, establish:

- what it is
- what it does
- who it serves
- where it operates
- relevant characteristics
- relationships to other entities

Avoid ambiguous references when the identity of an entity matters.

### FAQs

Use FAQ sections only when they provide genuinely useful questions
and answers for users.

Do not create artificial FAQ content solely to target search queries.

FAQ content must:

- answer real user questions
- contain visible answers
- match the actual page content
- avoid repetition
- avoid keyword stuffing

Do not assume that adding FAQ structured data guarantees enhanced
search results.

### Lists and Structured Information

Use lists when information is naturally list-like.

Use tables when users need to compare structured information.

Use paragraphs for explanations and narrative content.

Choose the HTML structure based on the meaning of the information,
not because a particular format is believed to provide a ranking
advantage.

### Answer Accuracy

Answers must be:

- accurate
- current when freshness matters
- specific
- consistent with the page
- supported by appropriate evidence when claims require evidence

Do not invent facts, statistics, testimonials, reviews, credentials,
or business information to make a page appear more authoritative.

### AEO Validation

For important question-oriented content, verify:

- the question or user need is clear
- the direct answer is easy to find
- supporting information follows logically
- headings accurately describe their sections
- important information exists as crawlable text
- answers are consistent with visible content
- content does not depend unnecessarily on JavaScript interactions
- factual claims are accurate and appropriately supported

## 10. GEO Rules

Generative Engine Optimization (GEO) focuses on making the website's
important entities, relationships, information, and claims clear and
understandable to generative AI systems.

GEO must be based on genuine information, useful content, clear
entity relationships, consistency, and trustworthy evidence.

Do not attempt to manipulate generative AI systems through artificial
content, keyword stuffing, hidden text, fabricated authority, or other
deceptive techniques.

### Entity Clarity

Important entities should be clearly identified when relevant.

Depending on the website, entities may include:

- organization
- business
- person
- product
- service
- location
- event
- article
- brand

Where relevant, clearly communicate:

- entity name
- entity type
- description
- purpose
- relationships
- location
- services or products
- relevant attributes

Avoid ambiguous references when the identity of an entity matters.

### Organization Identity

For an organization or business website, clearly communicate
information such as:

- official name
- what the organization does
- services or products
- target customers
- operating locations
- contact information
- relevant business characteristics

Business information must remain consistent across important pages.

Do not invent organization details that have not been provided or
verified.

### Entity Relationships

When relationships are meaningful, represent them clearly.

Examples include:

- organization → provides → service
- organization → located in → location
- person → works for → organization
- product → belongs to → brand
- article → discusses → topic
- service → available in → location

Use clear visible content and appropriate structured data to express
these relationships when applicable.

### Evidence and Trust

Important claims should be supported by appropriate evidence when
evidence is necessary.

Examples include:

- statistics
- certifications
- awards
- customer claims
- professional credentials
- research findings
- business claims
- product specifications

Do not fabricate:

- reviews
- testimonials
- awards
- certifications
- statistics
- credentials
- partnerships
- customer numbers
- business locations
- authority signals

When a claim cannot be verified, do not present it as an established
fact.

### Consistency

Important information should be consistent across:

- page content
- navigation
- metadata
- structured data
- organization information
- contact information
- location information

Do not create conflicting versions of the same entity or fact.

### First-Hand and Authoritative Information

Prefer information supplied directly by the organization or supported
by reliable sources.

When external sources are used for important factual claims:

- use appropriate authoritative sources
- preserve factual accuracy
- avoid copying large amounts of external content
- provide references where appropriate

Do not claim that a website is authoritative merely because it contains
structured data.

### Content Depth

Important topics should contain enough useful information for the
subject and user intent.

Do not create long content merely to increase word count.

Prefer:

- clear explanations
- useful details
- specific facts
- examples
- supporting evidence
- relevant context

### Generative Search Visibility

Do not guarantee that a search engine or AI system will cite,
recommend, or mention the website.

Optimization should instead improve the probability that systems can:

- discover the content
- understand the entities
- understand relationships
- identify relevant answers
- distinguish the organization from similar entities
- evaluate the usefulness and credibility of the information

### GEO Validation

For important pages, verify:

- important entities are clearly identified
- organization information is consistent
- entity relationships are understandable
- important claims are accurate
- supporting evidence exists where necessary
- structured data matches visible content
- no fabricated authority signals exist
- important information is available as crawlable text

## 11. AISO Rules

AI Search Optimization (AISO) focuses on making the website
understandable, accessible, and useful for AI-powered search and
discovery systems.

AISO should build on strong SEO, AEO, GEO, accessibility, semantic
HTML, structured data, content quality, and technical implementation.

Do not implement artificial "AI optimization" tricks that have no
clear technical, content, usability, or discoverability benefit.

### AI-Readable Content

Important information should be represented clearly in the document
structure.

Prefer:

- meaningful headings
- concise paragraphs
- descriptive lists
- useful tables
- explicit definitions
- clear entity names
- direct answers
- descriptive links
- meaningful labels

Avoid unnecessarily hiding important information behind complex
client-side interactions.

### Machine-Readable Structure

Where appropriate, provide machine-readable information through:

- semantic HTML
- structured data
- descriptive metadata
- clear URLs
- consistent entity information
- accessible document structure

Machine-readable information must reflect the actual visible content.

Do not create structured data solely for the purpose of manipulating
search or AI systems.

### Entity and Context Understanding

Important pages should make it possible to understand:

- what the page represents
- who or what the page is about
- how the subject relates to the organization
- what products or services are involved
- where relevant activities take place
- what action the user can take

Avoid ambiguous wording when precise context is important.

### AI-Friendly Information Architecture

The site architecture should make relationships between important
content understandable.

Related pages should be connected through meaningful navigation
and internal links.

Important content should not depend entirely on visual layout to
communicate relationships.

### Content Reuse and Citation Readiness

Write important information in a form that can be accurately quoted,
summarized, or referenced without losing its meaning.

Prefer:

- factual statements
- concise explanations
- clear definitions
- explicit claims
- supporting evidence
- identifiable sources where appropriate

Do not intentionally create misleading or decontextualized statements
that could produce incorrect AI summaries.

### AI Discovery

Do not assume that all AI systems discover or process websites in
the same way.

Maintain strong fundamentals:

- crawlable pages
- accessible content
- useful internal links
- stable URLs
- accurate metadata
- appropriate structured data
- quality content
- reliable technical infrastructure

Do not rely on undocumented AI-specific tags or unsupported claims
about guaranteed AI visibility.

### Human-First Principle

AI optimization must never make the website worse for human users.

Prioritize:

1. usefulness
2. clarity
3. accessibility
4. accuracy
5. usability
6. performance

AI/search optimization should support these goals rather than replace
them.

### AISO Validation

For important pages, verify that:

- the main subject is clear
- important entities are identifiable
- important information exists in HTML text
- content hierarchy is understandable
- answers are easy to locate
- internal relationships are clear
- structured data is accurate
- metadata is accurate
- content is accessible without unnecessary interaction
- the page remains useful to a human reader

## 12. Semantic HTML Rules

Use semantic HTML to communicate the meaning and structure of content
to browsers, assistive technologies, search engines, and other
machine-processing systems.

Prefer semantic elements when their meaning matches the content.

Use appropriate elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<h1>` through `<h6>`
- `<p>`
- `<ul>`
- `<ol>`
- `<li>`
- `<figure>`
- `<figcaption>`
- `<button>`
- `<form>`
- `<label>`

### Heading Hierarchy

Each important page should have a clear heading hierarchy.

Prefer:

`<h1>` → main page topic

`<h2>` → major sections

`<h3>` → subsections

Do not choose heading elements only because of their visual size.

Use CSS/Tailwind to control visual appearance.

Do not skip heading levels without a meaningful structural reason.

### Links and Buttons

Use `<a>` for navigation to another URL or page.

Use `<button>` for actions performed within the current interface.

Do not use clickable `<div>` or `<span>` elements when a semantic
interactive element is appropriate.

Links should have descriptive text that communicates their destination
or purpose.

### Forms

Form controls must have accessible labels.

Use appropriate input types and semantic form elements.

Do not rely only on placeholder text as the label.

### Semantic Structure

Do not use `<div>` elements when a more meaningful semantic element
accurately represents the content.

However, do not force semantic elements where they do not represent
the actual meaning of the content.

Semantic HTML should reflect the content rather than being used as an
SEO trick.

## 13. Structured Data Rules

Use structured data when it provides meaningful information about the
page, organization, product, service, article, event, or other
supported entity.

Structured data must describe the actual content and entities present
on the page.

### General Rules

- Prefer standardized Schema.org vocabulary where appropriate.
- Use JSON-LD when implementing structured data unless another format
  is specifically required.
- Keep structured data consistent with visible page content.
- Do not invent properties or values.
- Do not add schema types solely because they might provide a ranking
  benefit.
- Do not create fake reviews, ratings, prices, events, organizations,
  or other entities.

### Entity Selection

Select structured data based on what the page actually represents.

Examples may include:

- Organization
- LocalBusiness
- WebSite
- WebPage
- Service
- Product
- Article
- BreadcrumbList
- Event

Do not automatically add every possible schema type.

### Relationships

When appropriate, structured data should communicate relationships
between entities.

For example:

- WebSite → publisher → Organization
- WebPage → about → Organization
- Service → provider → Organization
- Article → author → Person or Organization

Use relationships only when they are factually correct.

### Visible Content Consistency

Structured data must not contain information that contradicts or
materially differs from the visible page.

If information changes dynamically, the structured data should reflect
the current information.

### Validation

Validate structured data after implementation.

Check for:

- valid JSON-LD syntax
- supported Schema.org types and properties
- consistency with visible content
- missing required information where applicable
- invalid or unsupported values
- accidental duplicate structured data

Do not assume that valid syntax guarantees eligibility for a search
feature or AI visibility.

## 14. Accessibility Rules

Accessibility is a core implementation requirement and must not be
treated as an optional enhancement.

The website should be usable with different input methods and
assistive technologies.

### General Rules

- Use semantic HTML.
- Provide accessible names for interactive controls.
- Provide labels for form controls.
- Use meaningful alternative text for informative images.
- Use empty `alt=""` for decorative images.
- Maintain sufficient color contrast.
- Ensure interactive elements are keyboard accessible.
- Provide visible focus states.
- Do not rely only on color to communicate meaning.
- Use appropriate ARIA attributes only when native HTML semantics are
  insufficient.

### Interactive Elements

Prefer native controls such as:

- `<button>`
- `<a>`
- `<input>`
- `<select>`
- `<textarea>`

Do not replace native controls with non-semantic elements unless there
is a justified requirement.

### Dynamic Content

When content changes dynamically, ensure the change remains
understandable and accessible to users.

Do not hide important information from keyboard or assistive technology
users.

Accessibility improvements should also improve the clarity and
machine-readability of the website where appropriate.

## 15. Internal Linking Rules

Internal links should help users and systems understand the
relationship between pages.

Important pages should be reachable through normal crawlable links.

Use descriptive anchor text that communicates the destination.

Prefer:

`Explore our web development services`

over vague text such as:

`Click here`

### Linking Principles

- Link related content where useful.
- Maintain logical navigation.
- Connect important pages from relevant contextual content.
- Avoid unnecessary duplicate links.
- Avoid excessive internal linking.
- Do not create links solely for keyword manipulation.

Internal linking should reflect the actual information architecture
of the website.

## 16. Performance Rules

Performance is part of the website's technical quality and user
experience.

Prefer:

- optimized images
- appropriate image dimensions
- modern image formats where appropriate
- lazy loading for non-critical media
- efficient React rendering
- minimal client-side JavaScript
- code splitting when useful
- avoiding unnecessary dependencies
- avoiding unnecessary network requests

Do not optimize blindly.

When performance becomes a concern, identify the actual bottleneck
before introducing an optimization.

Important content should not be delayed unnecessarily by client-side
JavaScript when it can be rendered or delivered more efficiently.

## 17. Validation Rules

A feature is not considered complete merely because it works visually.

Before completing significant work, validate the relevant areas.

### Code

- TypeScript/build succeeds.
- ESLint passes.
- No unnecessary console errors or warnings.
- No unintended files are modified.

### SEO

Check:

- URLs
- titles
- meta descriptions
- canonical URLs
- robots directives
- headings
- semantic HTML
- internal links
- images
- sitemap requirements
- robots.txt requirements

### AEO

Check:

- questions and user needs are clear
- important answers are easy to locate
- important information exists as text
- headings accurately describe content
- answers are consistent with visible content

### GEO

Check:

- important entities are identifiable
- organization information is consistent
- relationships are understandable
- important claims are accurate
- evidence exists where appropriate

### AISO

Check:

- page purpose is clear
- important information is machine-readable
- entity context is understandable
- content hierarchy is clear
- structured data is accurate
- internal relationships are clear
- important information is not unnecessarily hidden

### Accessibility

Check:

- keyboard navigation
- focus states
- semantic HTML
- image alternatives
- form labels
- interactive controls
- color contrast

### Performance

Check:

- production build
- image optimization
- unnecessary JavaScript
- unnecessary dependencies
- major loading bottlenecks