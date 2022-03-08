describe('Test Black Jack Game', () => {
  describe('Test function calcPoints', () => {
    // 1- No Ace
    const noAceHand = [
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 3, displayVal: "3", suit: "hearts" },
      { val: 4, displayVal: "4", suit: "hearts" }
    ];

    // 2- One Ace case and soft
    const oneAceSoftHand = [
      { val: 8, displayVal: "8", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" }
    ];

    // 3- One Ace case and not soft
    const oneAceHardHand = [
      { val: 8, displayVal: "8", suit: "hearts" },
      { val: 10, displayVal: "Queen", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" }
    ];

    // 4- multiple Aces case and soft
    const multAceSoftHand = [
      { val: 7, displayVal: "7", suit: "hearts" },
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" }
    ];

    // 5- multiple Aces case and not soft
    const multAceHardHand = [
      { val: 5, displayVal: "5", suit: "hearts" },
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 10, displayVal: "Queen", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" }
    ];

    // 1- No Ace
    it('1- It should return 9 if no Ace', () => {
      const result = calcPoints(noAceHand);
      expect(result.total).toEqual(9);
      expect(result.isSoft).toEqual(false);
    });

    // 2- One Ace case and soft
    it('2- It should return 19 if there is an Ace with value is 11', () => {
      const result = calcPoints(oneAceSoftHand);
      expect(result.total).toEqual(19);
      expect(result.isSoft).toEqual(true);
    });

    // 3- One Ace case and not soft
    it('3- It should return 19 if there is no Ace with value is 11', () => {
      const result = calcPoints(oneAceHardHand);
      expect(result.total).toEqual(19);
      expect(result.isSoft).toEqual(false);
    });

    // 4- Multiple Aces case and soft
    it('4- It should return 21 if there is an Ace with value is 11', () => {
      const result = calcPoints(multAceSoftHand);
      expect(result.total).toEqual(21);
      expect(result.isSoft).toEqual(true);
    });

    // Multiple Aces case and not soft
    it('5- It should return 19 if all the Aces in hand have value = 1', () => {
      const result = calcPoints(multAceHardHand);
      expect(result.total).toEqual(19);
      expect(result.isSoft).toEqual(false);
    });

  });
});