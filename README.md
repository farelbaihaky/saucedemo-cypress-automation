# 🎯 SauceDemo - Cypress E2E Test Automation

![Cypress Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Cypress](https://img.shields.io/badge/cypress-15.8.1-green)
![License](https://img.shields.io/badge/license-MIT-blue)

> **Professional QA Automation Portfolio** - A comprehensive end-to-end test automation framework for [SauceDemo](https://www.saucedemo.com) built with Cypress, demonstrating industry best practices, security testing, and full CI/CD integration.

---

## 📋 Table of Contents
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Test Coverage](#-test-coverage)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Test Reports](#-test-reports)
- [Documentation](#-documentation)

---

## ✨ Features

### 🏗️ **Architecture & Design**
- ✅ **Page Object Model (POM)** - Maintainable and scalable test architecture
- ✅ **Data-Driven Testing** - JSON fixtures for flexible test data management
- ✅ **Feature-Based Organization** - Tests organized by feature → positive/negative

### 🔒 **Comprehensive Test Coverage**
- ✅ **Positive Testing** - Happy path scenarios for all features
- ✅ **Negative Testing** - Error handling and edge cases
- ✅ **Security Testing** - SQL Injection, XSS prevention, input sanitization
- ✅ **Validation Testing** - Form validation and boundary conditions
- ✅ **Session Management** - Authentication and authorization tests

### 🚀 **DevOps Integration**
- ✅ **CI/CD Pipeline** - Automated testing with GitHub Actions
- ✅ **Test Reporting** - Mochawesome HTML reports with screenshots
- ✅ **Video Recording** - Automatic test execution recording
- ✅ **Artifact Management** - Screenshots on failure, videos, and reports

### 📊 **Professional Documentation**
- ✅ **Manual Test Cases** - Before/After automation mapping
- ✅ **Test Coverage Matrix** - Feature → Manual → Automated mapping
- ✅ **Visual Proof** - Screenshots and test execution recordings

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Cypress 15.x** | E2E testing framework |
| **JavaScript (ES6+)** | Programming language |
| **Page Object Model** | Design pattern |
| **Mochawesome** | Test reporting |
| **GitHub Actions** | CI/CD pipeline |
| **JSON** | Test data fixtures |

---

## 📁 Project Structure

```
saucedemo-cypress-automation/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml      # CI/CD configuration
├── cypress/
│   ├── e2e/                       # Test specs organized by feature
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── positive/      # Happy path tests
│   │   │   │   └── negative/      # Error scenarios
│   │   │   └── logout/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── products/
│   │   └── session/
│   ├── fixtures/                  # Test data (JSON)
│   │   ├── loginData.json
│   │   └── checkoutData.json
│   ├── pages/                     # Page Object Model
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   ├── support/                   # Custom commands
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── reports/                   # Mochawesome reports
│   └── videos/                    # Test execution videos
├── docs/
│   ├── manual-test-cases/         # Manual test documentation
│   │   ├── login-test-cases.md
│   │   └── checkout-test-cases.md
│   └── test-scenarios/
│       └── feature-coverage.md    # Test coverage matrix
├── cypress.config.js              # Cypress configuration
└── package.json                   # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/farelbaihaky/saucedemo-cypress-automation.git
cd saucedemo-cypress-automation
```

2. **Install dependencies**
```bash
npm install
```

3. **Verify installation**
```bash
npx cypress verify
```

---

## ▶️ Running Tests

### Interactive Mode (Cypress UI)
```bash
npm run cypress:open
```
Perfect for development and debugging with real-time browser preview.

### Headless Mode (CI/CD)
```bash
# Run all tests
npm test

# Run with Chrome browser
npm run test:chrome

# Run with UI visible
npm run test:headed
```

### Run Specific Test Suites
```bash
# All authentication tests
npm run test:auth

# All positive tests
npm run test:positive

# All negative tests
npm run test:negative

# Specific feature
npx cypress run --spec "cypress/e2e/checkout/**/*.cy.js"
```

### Generate Test Reports
```bash
# Run tests and generate HTML report
npm run test:report
```
Report will be available at: `cypress/reports/html/index.html`

---

## 📊 Test Coverage

### Feature Coverage Summary

| Feature | Manual Test Cases | Automated Tests | Coverage |
|---------|------------------|-----------------|----------|
| **Authentication** | 14 | 14 | 100% ✅ |
| └─ Login | 9 | 9 | 100% ✅ |
| └─ Logout | 5 | 5 | 100% ✅ |
| **Cart Operations** | 8 | 8 | 100% ✅ |
| **Checkout Flow** | 12 | 12 | 100% ✅ |
| **Product Management** | 9 | 9 | 100% ✅ |
| **Session Management** | 2 | 2 | 100% ✅ |
| **TOTAL** | **45+** | **45+** | **100% ✅** |

### Test Types Distribution

| Test Type | Count | Percentage |
|-----------|-------|-----------|
| **Positive Tests** | 11 | 24% |
| **Negative Tests** | 34 | 76% |
| └─ Validation | 12 | 27% |
| └─ Security | 13 | 29% |
| └─ Edge Cases | 9 | 20% |

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes automated CI/CD pipeline that runs on every push and pull request:

- ✅ **Automated Test Execution** - All tests run automatically
- ✅ **Cross-Browser Testing** - Chrome browser testing
- ✅ **Artifact Collection** - Screenshots, videos, and reports
- ✅ **Status Badges** - Build status visible in README

**Configuration:** `.github/workflows/cypress-tests.yml`

---

## 📈 Test Reports

### Mochawesome Reports

After running tests, comprehensive HTML reports are generated showing:
- ✅ Test execution summary
- ✅ Pass/fail statistics
- ✅ Test duration and performance
- ✅ Screenshots on failure
- ✅ Detailed stack traces

**View Reports:**
```bash
npm run test:report
open cypress/reports/html/index.html
```

---

## 📚 Documentation

### Manual Test Cases
Comprehensive test scenarios documented before automation:
- [Login Test Cases](docs/manual-test-cases/login-test-cases.md)
- [Checkout Test Cases](docs/manual-test-cases/checkout-test-cases.md)

### Test Coverage Matrix
Complete mapping of manual tests to automated scripts:
- [Feature Coverage Matrix](docs/test-scenarios/feature-coverage.md)

---

## 🎯 Test Examples

### Security Testing
```javascript
// SQL Injection Prevention
it('Should prevent SQL injection in login form', () => {
    const { username, password } = loginData.securityTests.sqlInjection;
    LoginPage.submitLogin(username, password);
    LoginPage.verifyLoginError(expectedError);
    cy.url().should('not.include', '/inventory.html');
});
```

### Data-Driven Testing
```javascript
// Multiple scenarios from fixture
loginData.invalidUsers.forEach((user) => {
    it(`Should show error for user: ${user.username}`, () => {
        LoginPage.submitLogin(user.username, user.password);
        LoginPage.verifyLoginError(user.expectedError);
    });
});
```

### Page Object Model
```javascript
// Clean, maintainable test code
class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button')
    };

    submitLogin(username, password) {
        if (username) this.elements.usernameInput().type(username);
        if (password) this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
    }
}
```

---

## 🏆 Key Highlights

### Why This Portfolio Stands Out

1. **🧠 QA Mindset** - Manual test cases → Automation demonstrates testing thought process
2. **💼 Professional Code** - POM pattern, clean architecture, industry best practices
3. **🔒 Security Focus** - SQL injection, XSS, input validation testing
4. **⚙️ DevOps Ready** - Full CI/CD integration with GitHub Actions
5. **📊 100% Coverage** - All features comprehensively tested
6. **📝 Excellent Documentation** - Clear, professional documentation
7. **🎨 Maintainable** - Easy to scale and modify for new features

---

## 📝 License

This project is created for portfolio and educational purposes.

---

## 👤 Author

**Farel Baihaky**
- LinkedIn: https://www.linkedin.com/in/farelbaihaky/
- Email: farelbaihaky@gmail.com

---

## 🙏 Acknowledgments

- [Cypress.io](https://www.cypress.io/) - Amazing testing framework
- [SauceDemo](https://www.saucedemo.com) - Test application
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Beautiful reports

---

<div align="center">

**⭐ If you found this helpful, please give it a star!**

Made with ❤️ for QA Automation Excellence

</div>
