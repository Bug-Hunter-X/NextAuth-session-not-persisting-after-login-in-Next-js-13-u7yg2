# NextAuth Session Issue in Next.js 13

This repository demonstrates a problem with NextAuth sessions in Next.js 13.  The login process appears to work correctly, but the session data isn't accessible in protected routes.

## Problem

The `session` object in the `About` page always remains `null`, regardless of login status. This indicates that the session isn't being correctly passed between the login and the protected route. This occurs even with seemingly correct implementation of `getServerSession`. 

## Setup

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`

## Expected Behavior

After successful login, the About page should display the user's email address.

## Actual Behavior

The About page always displays the message indicating that the user is not logged in.