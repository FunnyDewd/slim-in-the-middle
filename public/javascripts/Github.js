(function() {
  var Github;

  Github = function() {};

  Github.prototype.user = function(user) {
    this.url = "https://api.github.com/users/" + user + "?callback=?";
    $.getJSON(this.url, function(data) {
      return window.data = data.data;
    });
    return window.data;
  };

  window.Github = Github;

}).call(this);
