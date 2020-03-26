import * as functions from 'firebase-functions';
import * as connection from './connection';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as admin from 'firebase-admin';
import {tagsRouter} from './tags/tags.routes';
import {userRouter} from './users/users.routes';
import {articlesRouter} from "./articles/articles.routes";

admin.firestore().settings({timestampsInSnapshots: true});

const adminLocal = connection;
const app = express();
const main = express();

console.log(adminLocal);

app.use('/Category', articlesRouter);
app.use('/Question', tagsRouter);
app.use('/User', userRouter);

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

// webApi is your functions name, and you will pass main as
// a parameter
export const webApi = functions.https.onRequest(main);
