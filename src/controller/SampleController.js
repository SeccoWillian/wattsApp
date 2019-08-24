/*
@ 1- Sum of watts acumulated each hour
@ 2- Percentage of each hour
@ 3- Null to Zero 
*/

var matrix = new Array()
var consumption = new Array()
matrix.length = 24
consumption.length = 24

module.exports = {
    
    createMatrix(jsonTest){
       
        jsonTest.map(hours => hours.time.substring(0,2))
            .filter((value, index, self) => self.indexOf(value) === index)
                .map( elem => {    
                    let hour = jsonTest
                        .filter(getHour => getHour.time.substring(0,2) == elem)
                    consumption[Number(elem)] = hour[hour.length -1].watts
                        .filter(positive => positive > 0)
                            .reduce((preVal, postVal) => preVal + postVal) //(1)
                    matrix[Number(elem)] = Math.round((Number(hour[hour.length -1].time.substring(3,5)) * 100) / 60) //(2)
                });

        consumption = this.toZero(consumption)
        matrix = this.toZero(matrix)

        return {"Matrix %": matrix, "Watts":consumption}
    },

    toZero(arr){
        return Array.from(arr, item => item || 0); //(3)
    }
}
