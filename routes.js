import { fetchHazardous, fetchFastest, fetchBestYear, fetchBestMonth } from './repository.js';

const root = (req, res) => res.json({"hello":"world!"});
export const hazardous = (req, res) => fetchHazardous((err, neos) => res.json(neos));

export const fastest = (req, res) =>
  fetchFastest((err, neo) => res.json(neo), req.query.hazardous === 'true' || false);

export const bestYear = (req, res) =>
  fetchBestYear((err, year) => res.json(year), req.query.hazardous === 'true' || false);

export const bestMonth = (req, res) =>
  fetchBestMonth((err, month) => res.json(month), req.query.hazardous === 'true' || false);

export default root;
