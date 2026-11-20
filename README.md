# SauceDemo E-Commerce Automation Testing

## Project Overview

This project is an **E-Commerce Website Automation Testing Framework** developed using JavaScript and Playwright.

The project focuses on automating important user workflows on the [SauceDemo](https://www.saucedemo.com/) website. It helps verify website functionality and identify issues through automated test execution.

The framework uses a structured approach to organize test cases, page interactions, test data, and reusable utility functions.

## Tech Stack

- **Programming Language:** JavaScript
- **Automation Tool:** Playwright
- **Testing Framework:** Playwright Test
- **Runtime Environment:** Node.js
- **Package Manager:** npm
- **Version Control:** Git and GitHub

## Application Under Test

Website: https://www.saucedemo.com/

## Project Structure

```text
saucedemo_automation/
│
├── pages/
│   └── Page Object files
│
├── tests/
│   └── Automation test scripts
│
├── test-data/
│   └── Test data files
│
├── utils/
│   └── Reusable utility functions
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Key Features

- Automated browser testing using Playwright.
- Organized test scripts for different application workflows.
- Reusable page components using a page-based structure.
- Separate test data management.
- Automated login testing.
- Shopping cart functionality testing.
- Checkout workflow testing.
- Headed browser execution for observing test behaviour.
- HTML test reports for reviewing execution results.

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/aaquibkhan404/saucedemo_automation.git
```

**2. Navigate to the project directory**

```bash
cd saucedemo_automation
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Playwright browsers**

```bash
npx playwright install
```

## Running Automation Tests

**Run all test cases**

```bash
npm test
```

**Run tests in headed mode**

```bash
npm run test:headed
```

**Run login tests**

```bash
npm run test:login
```

**Run cart tests**

```bash
npm run test:cart
```

**Run checkout tests**

```bash
npm run test:checkout
```

## Test Reports

After test execution, generate and view the Playwright HTML report using:

```bash
npm run report
```

The report helps review test execution results, including passed tests, failed tests, execution details, and error information.

## Learning Outcomes

Through this project, I gained practical experience in:

- Browser automation using Playwright.
- Writing and executing automated test cases.
- JavaScript for automation testing.
- Working with locators and assertions.
- Organizing automation code into separate modules.
- Managing test data.
- Debugging automation failures.
- Generating and reviewing test reports.

## Future Improvements

- Implement more negative and edge-case scenarios.
- Add cross-browser testing.
- Integrate API testing.
- Add CI/CD integration using GitHub Actions.
- Improve test reporting and screenshots for failed tests.

## Author

**Aaquib Khan**

B.Tech – Computer Science and Engineering

GitHub: https://github.com/aaquibkhan404

---

**Project Repository:** [SauceDemo Automation Testing](https://github.com/aaquibkhan404/saucedemo_automation)

*This project was developed for hands-on learning and practical experience in Software Testing and Test Automation using Playwright.*<img width="1920" height="1080" alt="Screenshot 2026-11-05 134542" src="https://github.com/user-attachments/assets/b6f2a8f7-4e7e-4514-8d74-bee368ef4fbd" />
