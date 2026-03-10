# Playwright Project

This is a Playwright browser automation and testing project for AI Agents MCP.

## Overview

Playwright is a modern framework for automating and testing web applications across all major browsers (Chromium, Firefox, WebKit) and platforms (Windows, macOS, Linux).

## Project Structure

```
.
├── tests/                 # Test files
│   └── example.spec.js   # Example test suite
├── playwright.config.js  # Playwright configuration
├── package.json          # Project dependencies
└── README.md            # This file
```

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## Installation

Install project dependencies:

```bash
npm install
```

This will install Playwright and all required browsers.

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests with UI (interactive mode)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

### Run specific browser
```bash
npm run test:chromium  # Chrome
npm run test:firefox   # Firefox
npm run test:webkit    # Safari
```

## Creating Tests

### Using Codegen (Record tests)
```bash
npm run codegen -- https://example.com
```

This opens the Playwright Inspector where you can interact with the page and record your actions.

### Writing Tests Manually

Create a new test file in the `tests/` directory:

```javascript
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Configuration

Edit `playwright.config.js` to customize:
- Test directory location
- Browser selection
- Base URL for tests
- Retry settings
- Reporters (HTML, JUnit, etc.)
- Screenshots and traces

## Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Documentation

For comprehensive documentation, visit:
- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-browsercontext)

## License

ISC
