import "reflect-metadata"
import app from './App';
import { AppDataSource } from "./data-source"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

AppDataSource.initialize()
.then(() => {
    console.log('conectou na base index.ts');


})
.catch((error) => console.log(error));

app.set('port', process.env.PORT || 3116);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

app.listen(app.get('port'), () => {
  console.log(`START APLICATION - PORT: ${app.get('port')}`);
});
