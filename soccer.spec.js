describe("Test the Soccer Program", () => {
  // Create getTotalPoints function which accepts a string of results
  // including wins, draws, and losses i.e. 'wwdlw'
  // Returns total number of points won    it("Should return a number", () => {
  describe("Test getTotalPoints", () => {
    it("Should not be null", () => {
      const response = getTotalPoints("w");
      expect(response).not.toBeNull();
    });

    it("Should return a number", () => {
      const response = getTotalPoints("w");
      expect(typeof response).toEqual("number");
    });

    it("Should return 0 for three losses", () => {
      const response = getTotalPoints("lll");
      expect(response).toEqual(0);
    });

    it("Should return 9 for three wins", () => {
      const response = getTotalPoints("www");
      expect(response).toEqual(9);
    });

    it("Should return 9 for three draws", () => {
      const response = getTotalPoints("ddd");
      expect(response).toEqual(3);
    });

    it("Should return 4 for one win, one loss and one draw", () => {
      const response = getTotalPoints("wld");
      expect(response).toEqual(4);
    });

    it("Should return 0 for empty string", () => {
      const response = getTotalPoints("");
      expect(response).toEqual(0);
    });

    //Would be nice to implement this
    // it("Should return 0 for empty string", () => {
    //   const response = getTotalPoints(null);
    //   expect(new Error()).toBeInstanceOf(Error);
    //   //expect(response).toEqual(0);
    // });
  });

  // create orderTeams function that accepts as many team objects as desired,
  // each argument is a team object in the format { name, results }
  // i.e. {name: 'Sounders', results: 'wwlwdd'}
  // Logs each entry to the console as "Team name: points"
  describe("Test orderTeams", () => {
    const teamArray = [
      { name: "Manchester City", results: "wwl" },
      { name: "Arsenal", results: "wwl" },
      { name: "Liverpool", results: "www" },
    ];

    it("Should not be null", () => {
      const response = orderTeams(...teamArray);
      expect(response).not.toBeNull();
    });

    it("Should return a string", () => {
      const response = orderTeams(...teamArray);
      expect(typeof response).toEqual("string");
    });

    it("Should contain  Manchester City: 6", () => {
      const response = orderTeams(...teamArray);
      expect(response).toContain("Manchester City: 6");
    });
  });
});
