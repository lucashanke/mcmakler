import { response } from 'jest-mock-express'
import root from '../routes.js';

describe('#root', () => {
  test('calls response json with key "hello" and value "world!"', () => {
    const responseMock = response();
    root(null, responseMock);
    expect(responseMock.json).toHaveBeenCalledWith({"hello":"world!"});
  });
});
