const MyCoin = artifacts.require("MyCoin");

contract('MyCoin', function(accounts) {
  it("should put 10000 MyCoin in the first account", function() {
    return MyCoin.deployed().then(function(instance) {
      return instance.getBalance.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });
});
