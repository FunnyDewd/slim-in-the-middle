(function() {
  describe('Github', function() {
    it('exists', function() {
      var github;
      github = new Github();
      return expect(github).not.toBe(null);
    });
    return it('can fetch my user data', function() {
      var github, me;
      github = new Github();
      return me = github.user('melindavoo');
    });
  });

}).call(this);
