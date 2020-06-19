# Assignment 8
## Employee basic details store.

Create an application to store the basic details of an employee of Gemini Solutions.

a) The UI is divided into 2 equal half sections.
b) First half consists of :

    A form with the following fields:        
    - Name
    - Email
    - Mobile No
    - Submit button

   Validations to be added: 
   1. Name is required. Should contain only spaces and letters. No digits / special characters allowed.
   2. Email is required. Should be a valid email. 
   3. Mobile no is not required. But if the value is filled by the user, it should be a valid 10 digit number with no letters or special characters.

    --> Clicking on Submit button will first validate all data in the form via a javascript function. If all the validations pass, then it calls the function to save the data to the localStorage and at the same time display the same data on the table on the right side.
    --> In case if any validations fail, show an alert mentioning the error message and dont save the data in the localStorage till the validation passes again.

Suggestion: 
-- Create as many functions as possible to achieve a functional approach. 
-- Create functions to fetch and store data in local storage by key.

c) Second half consists of :

    -   A table that fetches all data from localStorage and displays in a neat and clean responsive grid.

d) The UI should extensively make use of bootstrap classes and should be completely responsive. 