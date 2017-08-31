import { response } from 'jest-mock-express'
import root from '../routes/root.js';

describe('#root', () => {
  test('calls response json with key "hello" and value "world!"', () => {
    const res = response();
    root(null, res);
    expect(res.json).toHaveBeenCalledWith({"hello":"world!"});
  });
});
