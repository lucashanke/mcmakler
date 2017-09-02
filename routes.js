import { fetchHazardous, fetchFastest, fetchBestYear, fetchBestMonth } from './repository.js';

const NO_NEOS_FOUND = 'No NEOs found.';
const ERROR_MESSAGE = 'Sorry, but something went wrong.';

const root = (req, res) => res.json({"hello":"world!"});

export const hazardous = (req, res) => fetchHazardous((err, neos) => res.json(neos));

export const fastest = (req, res) =>
  fetchFastest((err, neo) => {
    if (err === null) {
      if (neo.length === 0) return res.status(404).json({ message: NO_NEOS_FOUND});
      return res.json(neo[0]);
    }
    return res.status(500).send({ message: ERROR_MESSAGE});
  }, req.query.hazardous === 'true' || false);

export const bestYear = (req, res) =>
  fetchBestYear((err, year) => {
  if (err === null) {
    if (year.length === 0) return res.status(404).json({ message: NO_NEOS_FOUND});
      return res.json(year[0]);
    }
    return res.status(500).send({ message: ERROR_MESSAGE});
  }, req.query.hazardous === 'true' || false);

export const bestMonth = (req, res) =>
  fetchBestMonth((err, month) => {
    if (err === null) {
      if (month.length === 0) return res.status(404).json({ message: NO_NEOS_FOUND});
      return res.json(month[0]);
    }
    return res.status(500).send({ message: ERROR_MESSAGE});
  }, req.query.hazardous === 'true' || false);

export default root;
