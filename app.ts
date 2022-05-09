import express, { Request, Response, NextFunction } from 'express';
import  apiRouter  from "./routes/api";
import router from "./routes/router";
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();

const port = process.env.PORT || 2000;
console.log('port',port);
// interface LocationWithTimezone {
//     location: string;
//     timezoneName: string;
//     timezoneAbbr: string;
//     utcOffset: number;
//   };
  
  // const getLocationsWithTimezones = (request: Request, response: Response, next: NextFunction) => {
  //   let locations: LocationWithTimezone[] = [
  //     {
  //       location: 'Germany',
  //       timezoneName: 'Central European Time',
  //       timezoneAbbr: 'CET',
  //       utcOffset: 1
  //     },
      
  //   ];
  //   console.log(locations[0]);
  //   response.status(200).json(locations);
  // };

  
// app.get('/timezones', getLocationsWithTimezones);

app.use('/api',apiRouter);
app.use(bodyParser.json());

app.listen(port, () => {

  console.log(`Timezones by location application is running on port ${port}.`);
});