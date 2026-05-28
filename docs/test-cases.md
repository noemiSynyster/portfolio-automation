# Test Cases – Practice Software Testing

# Authentication Suite

---

## TC-AUTH-001 – Successful Login

### Priority

High

### Preconditions

* User account exists

### Test Steps

| Step | Action                 | Expected Result                   |
| ---- | ---------------------- | --------------------------------- |
| 1    | Navigate to login page | Login form is displayed           |
| 2    | Enter valid email      | Email accepted                    |
| 3    | Enter valid password   | Password accepted                 |
| 4    | Click login button     | User is authenticated             |
| 5    | Verify redirection     | User dashboard/homepage displayed |

---

## TC-AUTH-002 – Invalid Login

### Priority

High

### Test Steps

| Step | Action                    | Expected Result                |
| ---- | ------------------------- | ------------------------------ |
| 1    | Navigate to login page    | Login form displayed           |
| 2    | Enter invalid credentials | Credentials accepted by form   |
| 3    | Click login button        | Login rejected                 |
| 4    | Verify error message      | Authentication error displayed |

---

# Product Search Suite

---

## TC-SRCH-001 – Search Existing Product

### Priority

High

### Test Steps

| Step | Action                           | Expected Result             |
| ---- | -------------------------------- | --------------------------- |
| 1    | Open homepage                    | Homepage displayed          |
| 2    | Enter product name in search bar | Search input updated        |
| 3    | Execute search                   | Matching products displayed |

---

## TC-SRCH-002 – Search Non-Existing Product

### Priority

Medium

### Test Steps

| Step | Action                      | Expected Result              |
| ---- | --------------------------- | ---------------------------- |
| 1    | Open homepage               | Homepage displayed           |
| 2    | Search invalid product name | Search executed              |
| 3    | Verify results              | No results message displayed |

---

# Cart Suite

---

## TC-CART-001 – Add Product to Cart

### Priority

High

### Preconditions

* Product available in catalog

### Test Steps

| Step | Action                    | Expected Result         |
| ---- | ------------------------- | ----------------------- |
| 1    | Open product details page | Product details visible |
| 2    | Click Add to Cart         | Product added           |
| 3    | Open shopping cart        | Product appears in cart |

---

## TC-CART-002 – Remove Product from Cart

### Priority

High

### Preconditions

* Product exists in cart

### Test Steps

| Step | Action             | Expected Result        |
| ---- | ------------------ | ---------------------- |
| 1    | Open shopping cart | Cart displayed         |
| 2    | Remove product     | Product removed        |
| 3    | Verify cart        | Cart updated correctly |

---

# Checkout Suite

---

## TC-CHK-001 – Successful Checkout Flow

### Priority

Critical

### Preconditions

* User logged in
* Product added to cart

### Test Steps

| Step | Action                        | Expected Result                |
| ---- | ----------------------------- | ------------------------------ |
| 1    | Open cart                     | Cart displayed                 |
| 2    | Proceed to checkout           | Checkout page displayed        |
| 3    | Complete shipping information | Information accepted           |
| 4    | Complete payment information  | Payment accepted               |
| 5    | Submit order                  | Order created successfully     |
| 6    | Verify confirmation           | Confirmation message displayed |

---

## TC-CHK-002 – Checkout With Empty Cart

### Priority

High

### Test Steps

| Step | Action            | Expected Result              |
| ---- | ----------------- | ---------------------------- |
| 1    | Open cart page    | Cart displayed               |
| 2    | Attempt checkout  | Checkout blocked             |
| 3    | Verify validation | Empty cart warning displayed |

---

# User Account Suite

---

## TC-ACC-001 – Logout Successfully

### Priority

Medium

### Preconditions

* User logged in

### Test Steps

| Step | Action         | Expected Result                   |
| ---- | -------------- | --------------------------------- |
| 1    | Open user menu | Menu displayed                    |
| 2    | Click logout   | Session terminated                |
| 3    | Verify state   | User redirected to login/homepage |
