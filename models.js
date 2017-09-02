import { Record } from 'immutable';
import mongoose from 'mongoose';

export const NEO = mongoose.model('neos', {
  _id: Number,
  date: String,
  reference: String,
  name: String,
  speed: Number,
  isHazardous: Boolean,
});

NEO.build = (date, neoData) => NEO({
  _id: neoData.neo_reference_id,
  date,
  reference: neoData.neo_reference_id,
  name: neoData.name,
  speed: parseFloat(neoData.close_approach_data[0].relative_velocity.kilometers_per_hour),
  isHazardous: neoData.is_potentially_hazardous_asteroid,
});
