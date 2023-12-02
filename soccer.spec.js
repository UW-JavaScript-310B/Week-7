describe('Test for the soccer score', () => {
    it('Testing result and letter to number convertion', () => {
        const result = 'wdldwl';
        const wNumber = result[0];

        expect(getTotalPoints(result)).toEqual(8);
        expect(getPointsFromResult(wNumber)).toEqual(3);
    })
})