/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  testMatch: [
    '<rootDir>/src/__tests__/auth.test.js',
    '<rootDir>/src/__tests__/category.test.js',
    '<rootDir>/src/__tests__/delivery.test.js',
    '<rootDir>/src/__tests__/discount.test.js',
    '<rootDir>/src/__tests__/order.test.js',
    '<rootDir>/src/__tests__/payment.test.js',
    '<rootDir>/src/__tests__/product.test.js',
    '<rootDir>/src/__tests__/user.test.js',
  ],
};
