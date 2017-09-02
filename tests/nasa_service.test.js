import sinon from 'sinon';
import axios from 'axios';
import moment from 'moment';
import NasaService from '../nasa_service.js';

describe('NasaService', () => {

  let service;

  beforeEach(() => {
    service = new NasaService();
  })

  describe('#fetchNEOFeedFromLast3Days', () => {

    test('returns a Promise that resolves with neos data', (done) => {
      const stub = sinon.stub(axios, 'get').resolves({ data: 'neos' });

      const result = service.fetchNEOFeedFromLast3Days();
      expect(result).toBeInstanceOf(Promise);
      result.then(data => {
        expect(data).toEqual({ data: 'neos' });
        done();
      }).catch(err => console.log(err));

      stub.restore();
    });

    test('calls a get request to the nasa neo feed url', () => {
      const spy = jest.spyOn(axios, 'get');

      service.fetchNEOFeedFromLast3Days();
      const call = spy.mock.calls[0];
      const url = call[0];
      expect(url).toMatch(/https:\/\/api\.nasa\.gov\/neo\/rest\/v1\/feed\?api_key=/)

      spy.mockReset();
      spy.mockRestore();
    });

    test('calls a get request with endDate of today', () => {
      const spy = jest.spyOn(axios, 'get');

      service.fetchNEOFeedFromLast3Days();
      const call = spy.mock.calls[0];
      const params = call[1].params;
      expect(params.end_date).toEqual(moment().format('YYYY-MM-DD'))

      spy.mockReset();
      spy.mockRestore();
    });

    test('calls a get request with startDate three days before today', () => {
      const spy = jest.spyOn(axios, 'get');

      service.fetchNEOFeedFromLast3Days();
      const call = spy.mock.calls[0];
      const params = call[1].params;
      expect(params.start_date).toEqual(moment().subtract(3, 'days').format('YYYY-MM-DD'));

      spy.mockReset();
      spy.mockRestore();
    });

  });
})
