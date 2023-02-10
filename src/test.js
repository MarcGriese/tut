let obj = [
    {
      oct22: 1895368,
      nov22: 1963413,
      dec22: 1887455,
      jan23: 2002944,
      feb23: 1913215,
      mar23: 2154969,
      apr23: 1904758,
      may23: 2014417,
      jun23: 1792700,
      jul23: 1894468,
      aug23: 1983274,
      sep23: 2063196
    }
  ];
  
  let arr = Object.values(obj[0]);
  
  //console.log(arr);
  // Output: [1895368, 1963413, 1887455, 2002944, 1913215, 2154969, 1904758, 2014417, 1792700, 1894468, 1983274, 2063196]

  let co2MultiplierHungary = 0.26
  let arrCarbonFootprintHungary = []


for (let i = 0; i < arr.length; i++) {
    arrCarbonFootprintHungary.push(Math.round(arr[i] * co2MultiplierHungary))
}

console.log(arrCarbonFootprintHungary)
  