# POM basics

## Teach-back
One class per page holds its locators
and actions. If the site changes, I fix
one file and all tests are fixed.
Tests never touch raw locators.

## Example
await loginPage.login('standard_user',
  'secret_sauce');

## Mistakes
- Raw locator inside a test
- `construct` instead of `constructor`
