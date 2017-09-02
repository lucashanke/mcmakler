import { Record } from 'immutable';
import mongoose from 'mongoose';
import moment from 'moment';

export const NEO = mongoose.model('neos', {
  _id: Number,
  date: Date,
  reference: String,
  name: String,
  speed: Number,
  isHazardous: Boolean,
});

NEO.build = (date, neoData) => NEO({
  // _id set to be the neo_reference_id to avoid duplicates
  _id: neoData.neo_reference_id,
  date: moment(date).toDate(),
  reference: neoData.neo_reference_id,
  name: neoData.name,
  // not sure of which close_approach_data to use to get the speed. Used the first one.
  speed: parseFloat(neoData.close_approach_data[0].relative_velocity.kilometers_per_hour),
  isHazardous: neoData.is_potentially_hazardous_asteroid,
});
