const express = require('express')
const api = express()
const PORT = 8080
var sql = require('mssql/msnodesqlv8');
var config = {
    connectionString: 'Driver=SQL Server; Server=WTDELVSE197671L\\SQLEXPRESS;database: energyMonitoring; trustedConnection: true;'
};
const cors = require('cors')
api.use( express.json())
api.use(cors())

// sql.connect(config,err => {
//         const request = new sql.Request();
//         request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_consumption_plant] WHERE [plant_id] = 1;', function(err, output) {
//           if (err) console.log(err);
//           else users = output.recordset;
//         });
//     });


//
// ----------------------------------------
// SQL Request for EnergyConsumption in Plant Germany

let arrEnergyConsumptionGermany = []

sql.connect(config,err => {
        const request = new sql.Request();
        request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_consumption_plant] WHERE [plant_id] = 1;', function(err, output) {
          if (err) console.log(err);
          else {
            let obj = output.recordset
            arrEnergyConsumptionGermany = Object.values(obj[0])
            return arrEnergyConsumptionGermany
          }
        });
    });

api.get('/api/energyconsumption/germany', (req, res) => {
    res.status(200).send({ //send beinhaltet die Daten die beim abfragen der get request gesendet werden
        "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
        "data": arrEnergyConsumptionGermany
    })
})

// //
// // ----------------------------------------
// // SQL Request for EnergyConsumption in Plant Hungary

let arrEnergyConsumptionHungary

sql.connect(config,err => {
        const request = new sql.Request();
        request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_consumption_plant] WHERE [plant_id] = 2;', function(err, output) {
          if (err) console.log(err);
          else {
            let obj = output.recordset
            arrEnergyConsumptionHungary = Object.values(obj[0])
            return arrEnergyConsumptionHungary
          }
        });
    });

api.get('/api/energyconsumption/hungary', (req, res) => {
    res.status(200).send({ 
        "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
        "data": arrEnergyConsumptionHungary
    })
})

// //
// // ----------------------------------------
// // SQL Request for monthly Energy Costs in Germany

// let energyCostsMultiplierGermany = []

// sql.connect(config,err => {
//     const request = new sql.Request();
//     request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_costs] WHERE [country_id] = 1;', function(err, output) {
//       if (err) console.log(err);
//       else {
//         let obj = output.recordset
//         energyCostsMultiplierGermany = Object.values(obj[0])
//         return energyCostsMultiplierGermany
//       }
//     });
// });

// //
// // ----------------------------------------
// // Calculate total energy costs plant germany

// let arrEnergyCostsGermany = []

// for (let i = 0; i < arrEnergyConsumptionGermany.length; i++) {
//     arrEnergyCostsGermany.push(Math.round(arrEnergyConsumptionGermany[i] * energyCostsMultiplierGermany[i]))
// }

// api.get('/api/energycosts/germany', (req, res) => {
//     res.status(200).send({
//         "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
//         data: arrEnergyCostsGermany 
//     })
// })

// //
// // ----------------------------------------
// Calculate Carbon Footprint Plant Germany


let co2MultiplierGermany = 0.42
let arrCarbonFootprintGermany = []

//arrEnergyConsumptionGermany ist undefined.. Warum weiß ich noch nicht. Bevor ich es rausfinde, wird kein Chart funktionieren bis auf die energy consumptions

for (let i = 0; i < arrEnergyConsumptionGermany.length; i++) {
    arrCarbonFootprintGermany.push(Math.round(arrEnergyConsumptionGermany[i] * co2MultiplierGermany))
}

api.get('/api/carbonfootprint/germany', (req, res) => {
    res.status(200).send({
        "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
        data: arrCarbonFootprintGermany
    })
})

// //
// // ----------------------------------------
// // Calculate Carbon Footprint Plant Hungary

// let co2MultiplierHungary = 0.26
// let arrCarbonFootprintHungary = []

// for (let i = 0; i < arrEnergyConsumptionHungary.length; i++) {
//     arrCarbonFootprintHungary.push(Math.round(arrEnergyConsumptionHungary[i] * co2MultiplierHungary))
// }

// api.get('/api/carbonfootprint/hungary', (req, res) => {
//     res.status(200).send({
//         "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
//         data: arrCarbonFootprintHungary
//     })
// })

api.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)