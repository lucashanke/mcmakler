import moment from 'moment';
import { NEO } from '../models.js';

describe('NEO', () => {

  describe('#build', () => {
    test('returns a NEO record with the data and date informed', () => {
      const neoData = {
        neo_reference_id: '1',
        name: 'neo-1',
        close_approach_data: [{
          relative_velocity: {
            kilometers_per_hour: 130.0,
          },
        }],
        is_potentially_hazardous_asteroid: true,
      };
      const neo = NEO.build('2017-08-31', neoData);
      expect(neo.get('date')).toEqual(moment('2017-08-31').toDate());
      expect(neo.get('reference')).toEqual('1');
      expect(neo.get('name')).toEqual('neo-1');
      expect(neo.get('speed')).toEqual(130.0);
      expect(neo.get('isHazardous')).toEqual(true);
    });

    test('uses the first set of close_approach_data to set speed' , () => {
      const neoData = {
        neo_reference_id: '1',
        name: 'neo-1',
        close_approach_data: [
          {
            relative_velocity: {
              kilometers_per_hour: 130.0,
            },
          },
          {
            relative_velocity: {
              kilometers_per_hour: 260.0,
            },
          }
        ],
        is_potentially_hazardous_asteroid: true,
      };
      const neo = NEO.build('2017-08-31', neoData);
      expect(neo.get('speed')).toEqual(130.0);
    });
  })
});
