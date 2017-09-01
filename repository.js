import MongoClient from 'mongodb';
import assert from 'assert';

const MONGO_DB_URL = 'mongodb://localhost:27017/nasa';

const insertNEO = (db, neo, callback) => {
  const neoDocument = Object.assign({ _id: neo.get('reference') }, neo.toJS());
  db.collection('neos').insertOne(neoDocument, (err, result) => {
    if (err === null) {
      console.log("Inserted a document into the neos collection.");
    } else {
      console.log("The document was not inserted into the neos collection.");
    }
    callback();
  });
};

export const persistNEO = (neo) => {
  MongoClient.connect(MONGO_DB_URL, (err, db) => {
    assert.equal(null, err);
    insertNEO(db, neo, () => {
        db.close();
    });
  });
};
