# Monday CRM Clone

## Table of Contents

[Project summary](#project-summary)

[Technologies](#technologies)

## Project summary

This project is a clone of a Monday-style CRM based on Ania Kubów's [tutorial](https://www.youtube.com/watch?v=DDh2GoiCrCk).
Users of this app should be able to:

- Create a ticket with data such as title, description, priority, status, progress, and category
- View a dashboard containing a list of tickets and see each ticket's data at a glance
- View, edit and delete individual tickets

I changed my approach on a few things that Ania does in the original tutorial.

- I extracted the TicketForm as its own component rather than including it as part of TicketPage.
- I used Formik to create the TicketForm and extract the form fields as components so that they could be generated dynamically. To handle validation, I used Yup and created a validation schema for the form.

Current to-dos:

- Finish the TicketForm component
- Connect app to Webstax database

## Technologies

- [Create React App](https://github.com/facebook/create-react-app)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)

