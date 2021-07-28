// var utils  = require('course-utilities');
// var hello = utils.load('./hello.js', 'hello');

const hello = require ('./hello.js')

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});