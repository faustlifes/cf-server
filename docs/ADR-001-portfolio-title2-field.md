# ADR-001: Extend Portfolio Item with `title2` Field

- **Date:** 2026-06-21
- **Status:** Proposed

## Context

The home slider (`/api/sliders`) displays a hero banner with two title lines (`title1`, `title2`), while the portfolio grid (`/api/portfolio`) only has a single `title` field. The "Our Amazing Work" section is intended to showcase work examples that conceptually overlap with what the slider promotes. To support richer display in the portfolio grid (e.g. a subtitle line under the main title), the `portfolio_items` schema needs a second title field aligned with the slider's pattern.

## Decision

Extend the `PortfolioItemEntity` and `portfolio_items` table with an optional `title2` column — a secondary title or short descriptor for each work item.

### Schema change

```sql
ALTER TABLE portfolio_items
  ADD COLUMN title2 VARCHAR(255) NULL;
```

### Entity change

```ts
@Column({ nullable: true })
title2: string;
```

### DTO change

```ts
@IsString()
@IsOptional()
title2?: string;
```

`title2` is nullable/optional so existing records require no migration data and the change is backwards-compatible.

## Consequences

- **Positive:** Portfolio items can carry a richer display label, closing the content gap with the slider model.
- **Positive:** No breaking change — existing records and API consumers continue to work without `title2`.
- **Negative:** Slight schema divergence from the current minimal portfolio model; consumers must handle the field being absent.
