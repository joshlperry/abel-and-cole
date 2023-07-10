# QA Doc: Newsletter Sign-up

## Introduction

The newsletter sign-up is a feature designed to allow users to complete a form and subscribe to our newsletter. The users can set their preference and recieve 20% off of their next purchase.

## Scope

In this round of testing we should include;

- Page loads and displays correctly on mobile and desktop
- Form validation and input fields validate and work as expected
- After the first successful submission the data is stored correctly in session storage and is restored correctly on reload.
- After successfully submitting the user is displayed a thank you message

## Test environment

This isn't hosted anywhere so you will need a working dev environment to build and test this application locally.

## Test cases

### Page Load

Verify the form loads correctly

    Expected results:
    - all text is spelt correctly
    - all elements are spaced correctly
    - all elements are clickable
    - all elements are readable
    - the page matches designs (if we had any)
    - if there has been a previous, successful submit the form should restore values except for 'name' and 'email'

### Form Validation

Form validation rules

    Expected results:
    - name is required
    - valid email is required
    - diet selected is required
    - dietry checkboxes are optional with none, any or all checked being valid.
    - method of communication checkboxes need at least 1 checked, but it can be any checked. If none are checked then email checkbox becomes a required field

### Submission

On clicking the submit button on the form

    Expected results:
    - Form will show validation errors if any required field is not filled.
    - On a success, the name and email address fields will not be stored in session storage
    - On a success, the diet, preferences and communcation data will be stored in session storage to persist between page reloads
    - On a success, the form should hide and show a thank you message

### Thank you

The thank you message after a successful form submit

    Expected results:
    - Newsletter form is hidden
    - Thank you message will address the user's name in the title
    - The successful email address is displayed in the text body for confimation.

## Risks and Assumptions
