describe('Test the Soccer Program', () => {
  describe('Test getTotalPoints', () => {
    // Create getTotalPoints function which accepts a string of results
    // including wins, draws, and losses i.e. 'wwdlw'
    // Returns total number of points won
    it('Should return a number', () => {
      const result = getTotalPoints('w');
      expect(typeof result).toEqual('number');
    });

    it('Should return 9 for 3 wins', () => {
      const result = getTotalPoints('www');
      expect(result).toEqual(9);
    });
  });

  describe('Test for orderTeams', () => {
    // create orderTeams function that accepts as many team objects as desired,
    // each argument is a team object in the format { name, results }
    // i.e. {name: 'Sounders', results: 'wwlwdd'}
    // Return a string with format "Team name: points"
    it('Should return a string', () => {
      const result = orderTeams({ name: 'Sounders', results: 'wwdl' },{ name: 'Galaxy', results: 'wlld' });
      expect(result).toEqual('Sounders: 7\nGalaxy: 4');
    });
  });
});