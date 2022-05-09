import express, { Request, Response, NextFunction } from 'express';
import * as db from "../database/dbquery";
import  {User} from "../models/User";

const user = new User();

let route = express.Router();

// mount express paths, any addition middleware can be added as well.
// ex. router.use('/pathway', middleware_function, sub-router);


// Home page route.
route.get('/', function (req, res) {
    res.send('Wiki home page');
  })
  
  // About page route.
  route.get('/about', function (req, res) {
    res.send('About this wiki');
  })




  route.get('/users',user.getAllUsers);
// Export the router
export = route;


