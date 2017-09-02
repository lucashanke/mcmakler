import MongoClient from 'mongodb';
import assert from 'assert';
import mongoose from 'mongoose';

import { NEO } from './models.js';

const MONGO_DB_URL = 'mongodb://localhost:27017/nasa';
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_URL, { useMongoClient: true });

export const persistNEO = (neo) => neo.save().catch(err =>  console.log(err.message));

export const fetchHazardous = (callback) =>
  NEO.find({ isHazardous: true }, callback);

export const fetchFastest = (callback, isHazardous = false) =>
  NEO.find({ isHazardous }).sort({ speed: -1 }).limit(1).exec(callback);
