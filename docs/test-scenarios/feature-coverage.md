# Test Coverage Matrix

## Overview
This document provides a comprehensive mapping of manual test scenarios to automated test scripts, demonstrating the complete test automation coverage for the SauceDemo application.

---

## Feature Coverage Summary

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

---

## Detailed Feature Mapping

### 1. Authentication (Login)

| Test Case ID | Description | Type | Automation File |
|--------------|-------------|------|-----------------|
| TC-LOGIN-001 | Valid login | Positive | `auth/login/positive/valid_login.cy.js` |
| TC-LOGIN-002 | Locked out user | Negative | `auth/login/negative/invalid_credentials.cy.js` |
| TC-LOGIN-003 | Empty username | Validation | `auth/login/negative/validation_tests.cy.js` |
| TC-LOGIN-004 | Empty password | Validation | `auth/login/negative/validation_tests.cy.js` |
| TC-LOGIN-005 | SQL injection | Security | `auth/login/negative/security_tests.cy.js` |
| TC-LOGIN-006 | XSS attack | Security | `auth/login/negative/security_tests.cy.js` |
| TC-LOGIN-007 | Very long input | Boundary | `auth/login/negative/security_tests.cy.js` |
| TC-LOGIN-008 | Special characters | Edge Case | `auth/login/negative/security_tests.cy.js` |
| TC-LOGIN-009 | Wrong password | Negative | `auth/login/negative/invalid_credentials.cy.js` |

**Automation Coverage:** 9/9 (100%) ✅

---

### 2. Authentication (Logout)

| Test Case ID | Description | Type | Automation File |
|--------------|-------------|------|-----------------|
| TC-LOGOUT-001 | Successful logout | Positive | `auth/logout/positive/successful_logout.cy.js` |
| TC-LOGOUT-002 | Direct inventory access | Security | `auth/logout/negative/unauthorized_access.cy.js` |
| TC-LOGOUT-003 | Direct cart access | Security | `auth/logout/negative/unauthorized_access.cy.js` |
| TC-LOGOUT-004 | Direct checkout access | Security | `auth/logout/negative/unauthorized_access.cy.js` |
| TC-LOGOUT-005 | Back button after logout | Security | `auth/logout/negative/unauthorized_access.cy.js` |

**Automation Coverage:** 5/5 (100%) ✅

---

### 3. Cart Operations

| Test Case ID | Description | Type | Automation File |
|--------------|-------------|------|-----------------|
| TC-CART-001 | Add single item | Positive | `cart/positive/add_to_cart.cy.js` |
| TC-CART-002 | Add multiple items | Positive | `cart/positive/add_to_cart.cy.js` |
| TC-CART-003 | Remove from inventory | Positive | `cart/positive/remove_from_cart.cy.js` |
| TC-CART-004 | Remove from cart page | Positive | `cart/positive/remove_from_cart.cy.js` |
| TC-CART-005 | Empty cart | Negative | `cart/negative/empty_cart.cy.js` |
| TC-CART-006 | Maximum capacity | Edge Case | `cart/negative/edge_cases.cy.js` |
| TC-CART-007 | Rapid add/remove | Edge Case | `cart/negative/edge_cases.cy.js` |
| TC-CART-008 | Cart persistence | Edge Case | `cart/negative/edge_cases.cy.js` |

**Automation Coverage:** 8/8 (100%) ✅

---

### 4. Checkout Flow

| Test Case ID | Description | Type | Automation File |
|--------------|-------------|------|-----------------|
| TC-CHECKOUT-001 | Complete purchase | Positive | `checkout/positive/complete_purchase.cy.js` |
| TC-CHECKOUT-002 | Empty first name | Validation | `checkout/negative/form_validation.cy.js` |
| TC-CHECKOUT-003 | Empty last name | Validation | `checkout/negative/form_validation.cy.js` |
| TC-CHECKOUT-004 | Empty postal code | Validation | `checkout/negative/form_validation.cy.js` |
| TC-CHECKOUT-005 | Very long name | Validation | `checkout/negative/form_validation.cy.js` |
| TC-CHECKOUT-006 | Special characters | Validation | `checkout/negative/form_validation.cy.js` |
| TC-CHECKOUT-007 | SQL injection | Security | `checkout/negative/security_tests.cy.js` |
| TC-CHECKOUT-008 | XSS prevention | Security | `checkout/negative/security_tests.cy.js` |
| TC-CHECKOUT-009 | HTML injection | Security | `checkout/negative/security_tests.cy.js` |
| TC-CHECKOUT-010 | Path traversal | Security | `checkout/negative/security_tests.cy.js` |
| TC-CHECKOUT-011 | Empty cart checkout | Edge Case | `checkout/negative/empty_cart_checkout.cy.js` |
| TC-CHECKOUT-012 | Checkout persistence | Edge Case | `checkout/negative/empty_cart_checkout.cy.js` |

**Automation Coverage:** 12/12 (100%) ✅

---

### 5. Product Management

| Test Case ID | Description | Type | Automation File |
|--------------|-------------|------|-----------------|
| TC-PRODUCT-001 | Sort A-Z | Positive | `products/positive/sort_products.cy.js` |
| TC-PRODUCT-002 | Sort Z-A | Positive | `products/positive/sort_products.cy.js` |
| TC-PRODUCT-003 | Sort price low-high | Positive | `products/positive/sort_products.cy.js` |
| TC-PRODUCT-004 | Sort price high-low | Positive | `products/positive/sort_products.cy.js` |
| TC-PRODUCT-005 | Verify sort order | Positive | `products/positive/sort_products.cy.js` |
| TC-PRODUCT-006 | Product details | Navigation | `products/negative/invalid_navigation.cy.js` |
| TC-PRODUCT-007 | All products display | Verification | `products/negative/invalid_navigation.cy.js` |
| TC-PRODUCT-008 | Product images | Verification | `products/negative/invalid_navigation.cy.js` |
| TC-PRODUCT-009 | Product prices | Verification | `products/negative/invalid_navigation.cy.js` |

**Automation Coverage:** 9/9 (100%) ✅

---

### 6. Session Management

| Test Case ID | Description | Type | Automation File |
|--------------|-------------|------|-----------------|
| TC-SESSION-001 | Protected pages access | Security | `session/negative/unauthorized_access.cy.js` |
| TC-SESSION-002 | URL manipulation | Security | `session/negative/unauthorized_access.cy.js` |

**Automation Coverage:** 2/2 (100%) ✅

---

## Test Types Distribution

| Test Type | Count | Percentage |
|-----------|-------|-----------|
| **Positive Tests** | 11 | 24% |
| **Negative Tests** | 34 | 76% |
| └─ Validation | 12 | 27% |
| └─ Security | 13 | 29% |
| └─ Edge Cases | 9 | 20% |

---

## Technology Stack

- **Test Framework:** Cypress 13.x
- **Language:** JavaScript
- **Design Pattern:** Page Object Model (POM)
- **Test Data Management:** JSON Fixtures
- **Reporting:** Mochawesome
- **CI/CD:** GitHub Actions

---

## Project Structure

```
Demo/
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── positive/
│   │   │   │   └── negative/
│   │   │   └── logout/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── products/
│   │   └── session/
│   ├── fixtures/         # Test data
│   ├── pages/           # Page Object Model
│   └── support/         # Custom commands
├── docs/
│   ├── manual-test-cases/
│   └── test-scenarios/
└── .github/workflows/   # CI/CD configuration
```

---

## Automation Benefits

✅ **100% Test Coverage** - All manual test cases are automated  
✅ **Regression Testing** - Run full suite in minutes  
✅ **Early Bug Detection** - Catch issues before production  
✅ **CI/CD Integration** - Automated testing on every commit  
✅ **Comprehensive Testing** - Security, validation, edge cases covered  
✅ **Maintainable Code** - POM pattern for easy updates  
✅ **Data-Driven** - Flexible test data management
