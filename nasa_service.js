import axios from 'axios';
import moment from 'moment';

const FEED_ENDPOINT = 'https://api.nasa.gov/neo/rest/v1/feed';
const API_KEY = process.env.NASA_API_KEY;

export const fetchNEOFeedFromLast3Days = () => {
  const endDate = moment();
  const startDate = moment().subtract(3,'days');
  return axios.get(`${FEED_ENDPOINT}?api_key=${API_KEY}`, {
    params: {
      start_date: startDate.format('YYYY-MM-DD'),
      end_date: endDate.format('YYYY-MM-DD'),
      detailed: true,
    },
  });
}
