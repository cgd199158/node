var should = chai.should();
describe('simple test', function () {
  it('should equal 0 when n === 0', function () {
    window.fibonacci(0).should.equal(0);
    window.fibonacci(10).should.equal(55);
  });
  it('should equal 55 when n === 10', function () {
    window.fibonacci(10).should.equal(55);
  });
});
