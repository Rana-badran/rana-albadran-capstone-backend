# rana-albadran-capstone

# Project Title

Past Time’s Treasures

## Overview

An antique store directory to find stores in the city

- Gather 20 geolocations in the GTA
- Users can share newfound hidden gems to add to the list

### Problem/ inspiration

A way to quickly find antiques and vintage items.
They're usually hard to find and are not centralized into a single place.

### User Profile

Antique collectors, buyers, and dealers

- Being able to find stores and add new stores

### Features

As a user, I want to be able to see a list of antique stores in the GTA
As a user, I want to be able to search the list based on categories of items
As a user, I want to be able to see detailed information on each store including address, name, contact, products (etc…)
As a user, I want to be able to add a new antique store that I may come across to the database
As a user, I want to be able to see the list of antique stores on a map and be able to click to get information

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - Axios
- Server libraries:
  - Knex
  - express

### APIs

No external APIs will be used

### Sitemap

- Home page
- Search stores
  --> List of stores
  --> map of stores
- Add a store

### Data

Creating a database with am API to host the list of 20 stores

- put into the database

### Endpoints

//GET List of all stores
//GET stores based on category
//POST/ CREATE store

- information (name, id, address, website)

## Roadmap

By technology:

- Create Database
- MY SQL
- Diagram:
  - tables (schema)
  - Knex migration file
  - Knex seeds file (JS array of objects that holds all the data)

Create server

- express project with routing
- define endpoints (get/stores)

Create client

- react project with routes and boilerplate pages
  - Create seeds with sample data

By feature:

- Feature: Home page

- Feature: List stores + map view

  - Create GET /stores endpoint

- Feature: View store

  - View store details
  - Create GET /stores/

- Feature: add store/dealer - Create POST/ stores endpoint

- Feature: filter store
  - create get/stores(query parameter)

## Nice-to-haves

- App imrovement

  - utilize geo google map api to get coodinates when adding a store

- Feature: favorite stores
- Create POST /favorite
- States for add & update ratings

Auth

- Feature: Create an account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement a login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens
  - Server: Update expected requests/responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

Additional Ideas:

- Being able to create a marketplace functionality for the buyers and sellers to converse
- maybe list key events (eg estate sales etc)
- Log in and pick favorite stores
- add a generated map based on stores the user wants to visit on a particular day (day trip feature)
