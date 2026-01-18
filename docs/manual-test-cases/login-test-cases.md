# Manual Test Cases - Login Feature

## Test Case ID: TC-LOGIN-001
**Title:** Valid Login with Standard User  
**Priority:** High  
**Type:** Positive

### Preconditions
- User has valid credentials (standard_user / secret_sauce)
- User is on the login page

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter "standard_user" in the username field
3. Enter "secret_sauce" in the password field
4. Click the "Login" button

### Expected Result
- User is redirected to inventory page (/inventory.html)
- Product list is displayed
- URL contains "/inventory.html"

### Automation Status
✅ Automated: `cypress/e2e/auth/login/positive/valid_login.cy.js`

---

## Test Case ID: TC-LOGIN-002
**Title:** Login with Locked Out User  
**Priority:** High  
**Type:** Negative

### Preconditions
- User has locked_out_user credentials

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter "locked_out_user" in the username field
3. Enter "secret_sauce" in the password field
4. Click the "Login" button

### Expected Result
- Error message displayed: "Epic sadface: Sorry, this user has been locked out."
- User remains on login page
- No redirection occurs

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/invalid_credentials.cy.js`

---

## Test Case ID: TC-LOGIN-003
**Title:** Login with Empty Username  
**Priority:** High  
**Type:** Negative - Validation

### Preconditions
- User is on the login page

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Leave username field empty
3. Enter "secret_sauce" in the password field
4. Click the "Login" button

### Expected Result
- Error message displayed: "Epic sadface: Username is required"
- User remains on login page

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/validation_tests.cy.js`

---

## Test Case ID: TC-LOGIN-004
**Title:** Login with Empty Password  
**Priority:** High  
**Type:** Negative - Validation

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter "standard_user" in the username field
3. Leave password field empty
4. Click the "Login" button

### Expected Result
- Error message displayed: "Epic sadface: Password is required"
- User remains on login page

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/validation_tests.cy.js`

---

## Test Case ID: TC-LOGIN-005
**Title:** SQL Injection Attack Prevention  
**Priority:** Critical  
**Type:** Negative - Security

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter "' OR '1'='1" in the username field
3. Enter "' OR '1'='1" in the password field
4. Click the "Login" button

### Expected Result
- Login fails
- Error message displayed
- No SQL injection bypass occurs
- User remains on login page
- URL does not change to /inventory.html

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/security_tests.cy.js`

---

## Test Case ID: TC-LOGIN-006
**Title:** XSS Attack Prevention  
**Priority:** Critical  
**Type:** Negative - Security

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter "<script>alert('XSS')</script>" in the username field
3. Enter "test123" in the password field
4. Click the "Login" button

### Expected Result
- Login fails with appropriate error
- No script execution occurs
- No alert popup appears
- Input is properly sanitized/escaped

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/security_tests.cy.js`

---

## Test Case ID: TC-LOGIN-007
**Title:** Very Long Username Input  
**Priority:** Medium  
**Type:** Negative - Boundary

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter a 300-character string in the username field
3. Enter "secret_sauce" in the password field
4. Click the "Login" button

### Expected Result
- System handles gracefully without crash
- Appropriate error message displayed
- No system error occurs

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/security_tests.cy.js`

---

## Test Case ID: TC-LOGIN-008
**Title:** Special Characters in Credentials  
**Priority:** Medium  
**Type:** Negative - Edge Case

### Test Steps
1. Navigate to https://www.saucedemo.com
2. Enter "user!@#$%^&*()" in the username field
3. Enter "pass!@#$%^&*()" in the password field
4. Click the "Login" button

### Expected Result
- Login fails appropriately
- Error message displayed
- No system crash or unexpected behavior

### Automation Status
✅ Automated: `cypress/e2e/auth/login/negative/security_tests.cy.js`

---

## Test Summary

| Test Type | Total Cases | Automated |
|-----------|-------------|-----------|
| Positive | 1 | 1 ✅ |
| Negative - Invalid Credentials | 1 | 1 ✅ |
| Negative - Validation | 3 | 3 ✅ |
| Negative - Security | 3 | 3 ✅ |
| Negative - Edge Cases | 1 | 1 ✅ |
| **TOTAL** | **9** | **9 ✅** |

**Automation Coverage:** 100% ✅
