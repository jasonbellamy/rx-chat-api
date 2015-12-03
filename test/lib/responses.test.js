import { assert } from 'chai';
import { successResponse, errorResponse } from '../../lib/responses';

describe('Lib: Responses', () => {
  describe('successResponse', () => {
    it('should return an object with a success property that equals true', (done) => {
      const expected = { success: true, message: 'success', entities: {} };
      const actual   = successResponse();
      assert.deepEqual(expected, actual);
      done();
    });

    it('should return an object with a message property that equals the provided message', (done) => {
      const expected = { success: true, message: 'custom success message', entities: {} };
      const actual   = successResponse('custom success message');
      assert.deepEqual(expected, actual);
      done();
    });

    it('should return an object with a default message if one is not provided', (done) => {
      const expected = { success: true, message: 'success', entities: {} };
      const actual   = successResponse();
      assert.deepEqual(expected, actual);
      done();
    });

    it('should return an object with an entities property that contains the provided object', (done) => {
      const expected = { success: true, message: 'custom success message', entities: { id: 1 } };
      const actual   = successResponse('custom success message', { id: 1 });
      assert.deepEqual(expected, actual);
      done();
    });
  });


  describe('errorResponse', () => {
    it('should return an object with a success property that equals false', (done) => {
      const expected = { success: false, message: 'error', entities: {} };
      const actual   = errorResponse();
      assert.deepEqual(expected, actual);
      done();
    });

    it('should return an object with a message property that equals the provided message', (done) => {
      const expected = { success: false, message: 'custom error message', entities: {} };
      const actual   = errorResponse('custom error message');
      assert.deepEqual(expected, actual);
      done();
    });

    it('should return an object with a default message if one is not provided', (done) => {
      const expected = { success: false, message: 'error', entities: {} };
      const actual   = errorResponse();
      assert.deepEqual(expected, actual);
      done();
    });

    it('should return an object with an entities property that contains the provided object', (done) => {
      const expected = { success: false, message: 'custom error message', entities: { id: 1 } };
      const actual   = errorResponse('custom error message', { id: 1 });
      assert.deepEqual(expected, actual);
      done();
    });
  });
});
