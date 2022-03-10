describe("Tests for Black Jack", () => {
  describe("Tests for No aces", () => {
    const noAcesHand = [
      { val: 5, displayVal: "5", suit: "hearts" },
      { val: 10, displayVal: "Jack", suit: "hearts" },
    ];

    it("Should return total=15 and isSoft=false with hand w/o Aces", () => {
      const response = calcPoints(noAcesHand);
      expect(response).toEqual({ total: 15, isSoft: false });
    });
  });
  describe("Tests for 1 ace case (soft)", () => {
    const acesHand1 = [
      { val: 11, displayVal: "Ace", suit: "diamonds" },
      { val: 10, displayVal: "Queen", suit: "hearts" },
    ];

    it("Should return total: 21, isSoft: true with hand w/one Ace", () => {
      const response = calcPoints(acesHand1);
      expect(response).toEqual({ total: 21, isSoft: true });
    });

    const acesHand2 = [
      { val: 11, displayVal: "Ace", suit: "diamonds" },
      { val: 5, displayVal: "5", suit: "hearts" },
      { val: 3, displayVal: "3", suit: "spades" },
    ];

    it("Should return total: 19, isSoft: true with hand w/one Ace", () => {
      const response = calcPoints(acesHand2);
      expect(response).toEqual({ total: 19, isSoft: true });
    });
  });
  describe("Tests for 1 ace case (not soft)", () => {
    const notSoftAceHand1 = [
      { val: 10, displayVal: "King", suit: "diamonds" },
      { val: 10, displayVal: "Jack", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" },
    ];

    it("Should return total: 21, isSoft: true with hand w/one Ace", () => {
      const response = calcPoints(notSoftAceHand1);
      expect(response).toEqual({ total: 21, isSoft: false });
    });
  });
  describe("Tests for multiple ace case (soft)", () => {
    const multiSoftAceHand1 = [
      { val: 11, displayVal: "Ace", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "diamonds" },
    ];

    it("Should return total: 22, isSoft: true with hand w/two Ace", () => {
      const response = calcPoints(multiSoftAceHand1);
      expect(response).toEqual({ total: 12, isSoft: true });
    });
  });
  describe("Tests for multiple ace case (not soft)", () => {
    const multiNotSoftAceHand1 = [
      { val: 10, displayVal: "Jack", suit: "hearts" },
      { val: 10, displayVal: "Jack", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "diamonds" },
    ];

    it("Should return total: 22, isSoft: false with hand w/two Ace", () => {
      const response = calcPoints(multiNotSoftAceHand1);
      expect(response).toEqual({ total: 22, isSoft: false });
    });
  });
});
