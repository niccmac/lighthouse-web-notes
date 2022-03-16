const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it(`should return and empty string if passed an empty string`, function() {
    const name = "";
    const expectedOutput = "";
    assert.equal(nameInverter(name), expectedOutput);
    
  });
});

describe(`#nameInverter`, function() {
  it(`should return a single name when passed a single name`, function() {
    const name = "single";
    const expectedOutput = "single";
    assert.equal(nameInverter(name), expectedOutput);
  });
});

describe(`#nameInverter`, function() {
  it(`should return names without whitespace`, function() {
    let name = " single ";
    let expectedOutput = "single";
    assert.equal(nameInverter(name), expectedOutput);

  });
});

describe(`#nameInverter`, function() {
  it(`should return lastname, firstname`, function() {
    let name = "firstname lastname";
    let expectedOutput = "lastname, firstname";
    assert.equal(nameInverter(name), expectedOutput);

  });
});

describe(`#nameInverter`, function() {
  it(`return a last-name, first-name when passed a first and last-name with extra spaces around the names`, function() {
    let name = "    firstname lastname";
    let expectedOutput = "lastname, firstname";
    assert.equal(nameInverter(name), expectedOutput);
  });
});

describe('nameInverter', function() {
  it(`should return and empty string if passed only a specific honorific`, function() {
    const name = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(name), expectedOutput);
    
  });
});

describe('nameInverter', function() {
  it(`return honorific first-name when passed honorific first-name`, function() {
    const name = "Dr. firstname";
    const expectedOutput = "Dr. firstname";
    assert.equal(nameInverter(name), expectedOutput);
    
  });
});


describe('nameInverter', function() {
  it(`return a honorific last-name, first-name when passed honorific first-name last-name`, function() {
    const name = "Dr. firstname lastname";
    const expectedOutput = "Dr. lastname, firstname";
    assert.equal(nameInverter(name), expectedOutput);
    
  });
});

describe('nameInverter', function() {
  it(`return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words`, function() {
    const name = "  Dr. firstname lastname ";
    const expectedOutput = "Dr. lastname, firstname";
    assert.equal(nameInverter(name), expectedOutput);
    
  });
});

describe('nameInverter', function() {
  it(`throw an error when name is undefined`, function() {
    const name = undefined;
    const expectedOutput = "throw 'Error'";
    assert.equal(nameInverter(name), expectedOutput);
    
  });
});
