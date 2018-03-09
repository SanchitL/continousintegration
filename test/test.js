const assert = require('assert');
const allFunctions = require('../src/main.js').allFunctions;
const apiMethods = require('../src/requests.js');

describe('Testing on Arrays', () => {
  it('should test if an array is sorted in asceding order', () => {
    const arr = allFunctions.sortArrayElements([5, 1, 3, 5, 2, 5]);
    for (let i = 1; i < arr.length; i++) {
      assert.equal(arr[i] >= arr[i - 1], true);
    }
  });
});

describe('Testing Star Wars API', () => {
  it('should fetch Luke Skywaler\'s data!', (done) => {
    apiMethods.getStarWarsCharacterData('people/1/', (resp, data) => {
      assert.equal('Luke Skywalker', data.name);
      done();
    });
  });
  it('should return 200 status code', function () {
    return apiMethods.getStatusCode('people/1/')
      .then((status) => {
        assert.equal(status, 200);
      });
  });
});
