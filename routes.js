import { fetchHazardous } from '../repository.js';

const root = (req, res) => res.json({"hello":"world!"});
export const hazardous = (req, res) => fetchHazardous((err, neos) => res.json(neos));

export default root;
