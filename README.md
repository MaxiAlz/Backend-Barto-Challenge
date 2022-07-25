# Backend-Barto-Challenge
repository for a challenge from Incluit Software, the BackEnd save data to register of diferents types of cows from afarms 

to install this proyect in your local host, just have to dowload the repository, install the package json whit "npm install" and create .env whit the below information

package json has to have the next dependencis:
  "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.1",
        "express": "^4.18.1",
        "mongoose": "^6.4.3",
        "morgan": "^1.10.0",
        "nodemon": "^2.0.19"
      }
     
 .env has to have the below routes:
 
PORT=8080
DB_URL=mongodb://localhost:27017/node-cows
