import { Record } from 'immutable';

export const NEO = Record({
  date: '',
  reference: '',
  name: '',
  speed: 0,
  isHazardous: false,
});

NEO.build = (date, neoData) => NEO({
  date,
  reference: neoData.neo_reference_id,
  name: neoData.name,
  speed: parseFloat(neoData.close_approach_data[0].relative_velocity.kilometers_per_hour),
  isHazardous: neoData.is_potentially_hazardous_asteroid,
});
