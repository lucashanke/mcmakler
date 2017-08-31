import { NEO } from '../models.js';
import { Record } from 'immutable';


describe('NEO', () => {
  test('returns a Record instance', () => {
    const neo = NEO();
    expect(neo).toBeInstanceOf(Record);
  });

  test('sets all the fields of the NEO model', () => {
    const neo = NEO();
    expect(neo.get('date')).toEqual('');
    expect(neo.get('reference')).toEqual('');
    expect(neo.get('name')).toEqual('');
    expect(neo.get('speed')).toEqual(0);
    expect(neo.get('isHazardous')).toEqual(false);
  });
});
