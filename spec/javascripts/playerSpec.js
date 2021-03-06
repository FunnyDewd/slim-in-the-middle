(function() {
  describe("Player", function() {
    var player, song;
    player = void 0;
    song = void 0;
    beforeEach(function() {
      player = new Player();
      return song = new Song();
    });
    it("should be able to play a Song", function() {
      player.play(song);
      expect(player.currentlyPlayingSong).toEqual(song);
      return expect(player).toBePlaying(song);
    });
    describe("when song has been paused", function() {
      beforeEach(function() {
        player.play(song);
        return player.pause();
      });
      it("should indicate that the song is currently paused", function() {
        expect(player.isPlaying).toBeFalsy();
        return expect(player).not.toBePlaying(song);
      });
      return it("should be possible to resume", function() {
        player.resume();
        expect(player.isPlaying).toBeTruthy();
        return expect(player.currentlyPlayingSong).toEqual(song);
      });
    });
    it("tells the current song if the user has made it a favorite", function() {
      spyOn(song, "persistFavoriteStatus");
      player.play(song);
      player.makeFavorite();
      return expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
    return describe("#resume", function() {
      return it("should throw an exception if song is already playing", function() {
        player.play(song);
        return expect(function() {
          return player.resume();
        }).toThrow("song is already playing");
      });
    });
  });

}).call(this);
