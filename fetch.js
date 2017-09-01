import { fetchNEOFeedFromLast3Days } from './nasa_service.js';
import { NEO } from './models.js';
import { persistNEO } from './repository.js';

fetchNEOFeedFromLast3Days().then((response) => {
  const neos = response.data.near_earth_objects;
  Object.keys(neos).forEach(date => {
    neos[date].map(neoData => persistNEO(NEO.build(date, neoData)));
  });
  console.log(`Near Earth Objects fetched: ${response.data.element_count}`);
});
