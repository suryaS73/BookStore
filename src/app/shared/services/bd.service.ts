import { Injectable } from '@angular/core';
import * as sql from 'mssql';

const config: sql.config = {
  server: 'jdbc:mysql://localhost:3306/',
  database: 'bookStore',
  user: 'root',
  password: 'root',
  options: {
    encrypt: true, // Enable encryption if needed
  },
};

@Injectable({
  providedIn: 'root'
})
export class BdService {

  constructor() { 
    try {
      sql.connect(config);
      console.log('Connected to the database successfully!');
      // Perform database operations here
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }

  // connectToDatabase() {
  //   try {
  //     sql.connect(config);
  //     console.log('Connected to the database successfully!');
  //     // Perform database operations here
  //   } catch (error) {
  //     console.error('Error connecting to the database:', error);
  //   }
  // }



}
