import NasaService from './nasa_service.js';
import { NEO } from './models.js';
import { persistNEOs } from './repository.js';

const fetch = () => new Promise((resolve, reject) => {
  new NasaService().fetchNEOFeedFromLast3Days().then((response) => {
    let neos = [];
    const neosData = response.data.near_earth_objects;
    Object.keys(neosData).forEach(date => {
      neos = neos.concat(neosData[date].map(neoData => NEO.build(date, neoData)));
    });
    persistNEOs(neos, (err, neos) => resolve(response.data.element_count));
  }).catch(err => reject(err.message));
})

export default fetch;
