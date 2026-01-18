# Manual Test Cases - Checkout Feature

## Test Case ID: TC-CHECKOUT-001
**Title:** Complete Checkout with Valid Information  
**Priority:** Critical  
**Type:** Positive - End-to-End

### Preconditions
- User is logged in
- Cart has at least one item

### Test Steps
1. Add products to cart (Sauce Labs Backpack, Sauce Labs Bike Light)
2. Click on cart icon
3. Verify items are in cart
4. Click "Checkout" button
5. Enter First Name: "John"
6. Enter Last Name: "Doe"
7. Enter Postal Code: "12345"
8. Click "Continue" button
9. Verify order summary page
10. Click "Finish" button

### Expected Result
- Order confirmation page displayed
- Success message: "Thank you for your order!"
- URL contains "/checkout-complete.html"

### Automation Status
✅ Automated: `cypress/e2e/checkout/positive/complete_purchase.cy.js`

---

## Test Case ID: TC-CHECKOUT-002
**Title:** Checkout with Empty First Name  
**Priority:** High  
**Type:** Negative - Validation

### Test Steps
1. Add product to cart
2. Proceed to checkout page
3. Leave First Name empty
4. Enter Last Name: "Doe"
5. Enter Postal Code: "12345"
6. Click "Continue"

### Expected Result
- Error message: "Error: First Name is required"
- User remains on checkout information page

### Automation Status
✅ Automated: `cypress/e2e/checkout/negative/form_validation.cy.js`

---

## Test Case ID: TC-CHECKOUT-003
**Title:** Checkout with Empty Password  
**Priority:** High  
**Type:** Negative - Validation

### Test Steps
1. Add product to cart
2. Proceed to checkout page
3. Enter First Name: "John"
4. Leave Last Name empty
5. Enter Postal Code: "12345"
6. Click "Continue"

### Expected Result
- Error message: "Error: Last Name is required"

### Automation Status
✅ Automated: `cypress/e2e/checkout/negative/form_validation.cy.js`

---

## Test Case ID: TC-CHECKOUT-004
**Title:** SQL Injection in Checkout Form  
**Priority:** Critical  
**Type:** Negative - Security

### Test Steps
1. Add product to cart
2. Proceed to checkout
3. Enter First Name: "' OR '1'='1"
4. Enter Last Name: "Hacker"
5. Enter Postal Code: "99999"
6. Click "Continue"

### Expected Result
- Input is properly sanitized
- No SQL injection occurs
- Form validation handles gracefully

### Automation Status
✅ Automated: `cypress/e2e/checkout/negative/security_tests.cy.js`

---

## Test Case ID: TC-CHECKOUT-005
**Title:** XSS Prevention in Checkout
**Priority:** Critical  
**Type:** Negative - Security

### Test Steps
1. Add product to cart
2. Proceed to checkout
3. Enter First Name: "<img src=x onerror=alert('XSS')>"
4. Enter Last Name: "Test"
5. Enter Postal Code: "12345"
6. Click "Continue"

### Expected Result
- No script execution
- Input properly escaped
- No XSS vulnerability

### Automation Status
✅ Automated: `cypress/e2e/checkout/negative/security_tests.cy.js`

---

## Test Case ID: TC-CHECKOUT-006
**Title:** Checkout with Empty Cart  
**Priority:** Medium  
**Type:** Negative - Edge Case

### Test Steps
1. Login without adding items to cart
2. Navigate to cart page
3. Click "Checkout" button
4. Fill checkout form
5. Click "Continue"

### Expected Result
- System allows proceeding (SauceDemo behavior)
- Overview page shows no items
- Graceful handling of empty cart

### Automation Status
✅ Automated: `cypress/e2e/checkout/negative/empty_cart_checkout.cy.js`

---

## Test Summary

| Test Type | Total Cases | Automated |
|-----------|-------------|-----------|
| Positive | 1 | 1 ✅ |
| Negative - Validation | 3 | 3 ✅ |
| Negative - Security | 2 | 2 ✅ |
| Negative - Edge Cases | 1 | 1 ✅ |
| **TOTAL** | **7** | **7 ✅** |

**Automation Coverage:** 100% ✅
