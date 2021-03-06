import MongoClient from 'mongodb';
import assert from 'assert';
import mongoose from 'mongoose';

import { NEO } from './models.js';

const MONGO_DB_URL = `mongodb://${process.env.MONGO_DB_HOST || 'localhost'}:27017/nasa`;
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_URL, { useMongoClient: true });

export const persistNEOs = (neos, callback) => NEO.insertMany(neos, callback);

export const fetchHazardous = (callback) =>
  NEO.find({ isHazardous: true }, callback);

export const fetchFastest = (callback, isHazardous) =>
  NEO.find({ isHazardous }).sort({ speed: -1 }).limit(1).exec(callback);

export const fetchBestYear = (callback, isHazardous) =>
  NEO.aggregate(
    { $match: { isHazardous } },
    { $project: { year: { $year: "$date" } } },
    { $group: { _id: "$year", count: { $sum: 1 } } },
  ).sort({ count: -1 }).limit(1).exec(callback);

export const fetchBestMonth = (callback, isHazardous) =>
  NEO.aggregate(
    { $match: { isHazardous } },
    { $project: { month: { $month: "$date" } } },
    { $group: { _id: "$month", count: { $sum: 1 } } },
  ).sort({ count: -1 }).limit(1).exec(callback);
