describe("Test the soccer program", ()=>{
    describe("Test getTotalPoints", ()=>{

        it('should return a number', function () {

            const result = getTotalPoints('w')

            expect(typeof result).toEqual('number')

        });

        it('should return 6', function () {

            const result = getTotalPoints('ww')

            expect(result).toEqual(6)

        });

    })

    describe("Test orderTeams", ()=>{

        const teamsArray =[
            {name:'Sounders', results:'wwd;'},
            {name:'Galaxy', results:'wlld'}
        ]

        // it('should return a string', function () {
        //
        //     spyOn(console, 'log').and.callThrough()
        //
        //     const result = orderTeams(teamsArray)
        //
        //     expect(typeof result).toEqual('string')
        //
        // });

        it('should return a string', function () {

            //spyOn(console, 'log').and.callThrough()

            const result = orderTeams(teamsArray)

            expect(result).toEqual("Sounders: 7\n Galaxy: 4")

        });

        // it('should return 6', function () {
        //
        //     const result = getTotalPoints('ww')
        //
        //     expect(result).toEqual(6)
        //
        // });

    })



})