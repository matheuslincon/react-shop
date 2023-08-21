# React Shop

![](https://github.com/matheuslincon/react-shop/blob/main/gif/reactShop.gif)

## Description

This project is designed to reinforce my React learnings. I chose to sell games because it is one of my interests. All data is stored in Firestore and fetched by the frontend. I used Stripe API to implement payment system. 

---


## Requirements / Purpose

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

At a minimum the e-shop website should have two pages:
- Home Page
  - This will contain:
    - A Grid of products
    - Carousel of featured products
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application


  #### Tech Stack:
    - React
    - React Router Dom
    - React Icons
    - Tailwind
    - Firebase
    - Stripe (For Payments)

---

## Getting Started

To get started with this project, clone the repository and install the dependencies:

`git clone git@github.com:matheuslincon/react-shop.git`

`cd react-shop`

`npm install`

Then, start the development server:

`npm run dev`

Then, open a new terminal tab to start your backend server:

  `cd backend`

  `npm install`

  `npm run start`

---

## Features

- A Carousel with new release games.
- A Grid display all the games.
- Buttons to filter games by platform.
- Pagination.
- Favorite toggle in the game card.
- Search bar to look for different games available.
- a Cart Modal with checkout feature.
- Checkout page created by Stipe API, upon compliting purchase, it redirects to the "Thank you" Page.

---

## Known issues

- [ ] Fix Carousel layout on mobile.

---

## Future Goals

- [ ] Add a notification that a game was added to the cart.
- [ ] Create a Favorite games page.

---

## Issues Addressed

- [x] Disable add to cart if game is out of stock.

---
