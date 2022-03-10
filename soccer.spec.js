describe("Test the Soccer Program", () => {
  describe("Test getTotalPoints", () => {
    // Create getTotalPoints function which accepts a string of results
    // including wins, draws, and losses i.e. 'wwdlw'
    // Returns total number of points won    it("Should return a number", () => {
    it("Should not be null", () => {
      const response = getTotalPoints("w");
      expect(response).not.toBeNull();
    });

    it("Should return a number", () => {
      const response = getTotalPoints("w");
      expect(typeof response).toEqual("number");
    });

    it("Should return 9 for three wins", () => {
      const response = getTotalPoints("www");
      expect(response).toEqual(9);
    });
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

/*
const RESULT_VALUES = {
    w: 3,
    d: 1,
    l: 0
  };
  
  // This function accepts one argument, the result, which should be a string
  // Acceptable values are 'w', 'l', or 'd'
  const getPointsFromResult = result => RESULT_VALUES[result];
  

  const getTotalPoints = resultsString => {
    const results = resultsString.split('');
  
    let totalPoints = 0;
    results.forEach(function(result) {
      totalPoints += getPointsFromResult(result);
    });
  
    return totalPoints;
  };
  
  */
