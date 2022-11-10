## User Story

* AS A manager at an internet retail company
* I WANT a back end for my e-commerce website that uses the latest technologies
* SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
* GIVEN a functional Express.js API 
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia Core for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete data in my database

## Installation 
1. Clone the repo by copying the below and enter into your terminal with the command "git clone"
   ```sh
   https://github.com/brianthoang/Module_13_Challenge_ORM.git
   ```

2. Be sure to create your own env.file. There will be a example in the repository for assistance.
   
3. Enter into your mysql shell in your command line
   ```sh
   mysql -u root -p 
   ```

4. Run the following commands
   ```sh
    source db/schema.sql
    quit    
    ```
5. In your terminal run the following commands. Be sure to check if you are in the correct folder
    ```
    npm i 
    npm run seed
    npm start
    ```
6. Open up Insomnia to run the application

## Video Submission

   