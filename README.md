# Hobby OS

A personal hobby management system designed for interest-driven minds.

Hobby OS helps you enjoy hobbies without burnout, guilt, or forced consistency. It focuses on **interest cycles**, **energy**, and **intent** instead of streaks and habits.

---

## Why Hobby OS exists

Most hobby trackers assume consistency is the goal.

For many people, especially interest-driven minds:

* Motivation comes in waves
* Hyperfocus leads to burnout
* Pauses are normal, not failures

Hobby OS is built around that reality.

---

## Core principles

* Interest > streaks
* Pauses are healthy
* Progress is non-linear
* Low friction over perfection

---

## What it does (MVP)

* Manage hobbies with clear intent

  * relax / skill / output
* Log hobby sessions quickly

  * duration
  * interest level (1–5)
  * optional note
* Pause and resume hobbies intentionally
* Weekly summaries that reflect patterns, not guilt

---

## What it does NOT do

* No streaks
* No daily pressure
* No gamification
* No notifications spam

---

## Example flow

1. Add a hobby and set its intent
2. Log sessions when you feel like it
3. Rate interest, not productivity
4. Pause hobbies without deleting them
5. Review weekly insights to rebalance

---

## Tech stack

* **Frontend**: SvelteKit
* **Styling**: Tailwind CSS
* **Backend**: Supabase (Auth, Postgres, RLS)
* **Optional (later)**: Go for background insights

---

## Data model (simplified)

* hobbies
* sessions

Each record is user-owned and protected via Row Level Security.

---

## Roadmap (optional, later)

* Burnout detection (time ↑, interest ↓)
* Dormant hobby detection
* Weekly insight generation
* Read-only history view

---

## Philosophy

Hobby OS is not about doing more.

It’s about:

* doing what fits your energy
* stopping before burnout
* returning without guilt

---

## Status

Early-stage personal project.
Built for daily use, not metrics.

