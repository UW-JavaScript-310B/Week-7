describe('Test for the soccer score', () => {
    it('Card number', () => {
        const result = 'wdldwl';
        const wNumber = result[0];

        expect(getTotalPoints(result)).toEqual(8);
        expect(getPointsFromResult(wNumber)).toEqual(3);
    })
})