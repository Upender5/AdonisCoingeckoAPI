
# Adonis Crypto

This repository contains a Node.js application built with AdonisJS framework for fetching and managing cryptocurrency data.

## Installation

 ## Clone the repository:

git clone https://github.com/Upender5/AdonisCoingeckoAPI.git

## Navigate to the project directory:

cd adonis-crypto

## Install the dependencies:
 
npm install

## Open another terminal window and run the Ace REPL:
 
node ace

## Install the Adonis Lucid package:
 
npm install @adonisjs/lucid

## Configure the database:
 
node ace configure @adonis/lucid

## Create a migration file for the coins data:
 
node ace make:migration coinsData

## Run the migration to create the necessary database tables:
 
node ace migration:run

## Start the development server with auto-reload:
 
node ace serve --watch

## Create a command to fetch coin data:
 
node ace make:command FetchCoinData

## Generate the Ace manifest:
 
node ace generate:manifest

## Fetch coin data using the created command:
 
node ace fetch:coin_data

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the Upender5 License.