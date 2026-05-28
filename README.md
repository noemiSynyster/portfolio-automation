# Practice Software Testing – QA Automation Framework

End-to-End automation framework built using Playwright and TypeScript for the Practice Software Testing demo e-commerce application.

## Project Overview

This project simulates a real-world QA Automation initiative for an e-commerce platform. The goal is to validate critical business flows through automated End-to-End testing while applying scalable automation architecture and industry best practices.

Application Under Test:
https://practicesoftwaretesting.com/

---

# Tech Stack

* Playwright
* TypeScript
* Node.js
* npm
* Playwright HTML Reporter
* GitHub Actions (planned)

---

# Testing Scope

The framework currently covers:

* Authentication
* Product Search
* Product Filtering
* Product Details
* Shopping Cart
* Checkout Flow
* User Account validations

---

# Framework Design

The framework follows:

* Page Object Model (POM)
* Reusable utilities
* Shared fixtures
* Test isolation principles
* Environment-based configuration

---

# Project Structure

```text
project-root/
│
├── docs/
│   ├── test-plan.md
│   ├── test-cases.md
│
├── pages/
├── tests/
├── fixtures/
├── utils/
├── playwright.config.ts
└── package.json
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

---

# Running Tests

Run all tests:

```bash
npx playwright test
```

Run headed mode:

```bash
npx playwright test --headed
```

Run specific test file:

```bash
npx playwright test tests/checkout/checkout.spec.ts
```

---

# Reports

Open Playwright HTML report:

```bash
npx playwright show-report
```

---

# Test Documentation

Project documentation can be found in:

* docs/test-plan.md
* docs/test-cases.md

---

# Planned Improvements

* CI/CD integration with GitHub Actions
* Cross-browser execution
* API testing
* Docker support
* Visual regression testing
* Accessibility validations

---

# Author

QA Automation Portfolio Project
Created by Alondra Noemi Muñoz Gonzalez
