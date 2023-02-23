const express = require('express')
const api = express()
const PORT = 8080
var sql = require('mssql/msnodesqlv8');
var config = {
    connectionString: 'Driver=SQL Server; Server=WTDELVSE197671L\\SQLEXPRESS;database: energyMonitoring; trustedConnection: true;'
};
const cors = require('cors')
api.use(express.urlencoded({ extended: true }));
api.use( express.json())
api.use(cors())

let arrEnergyConsumptionHungary = []
let arrEnergyConsumptionGermany = []
let arrEnergyConsumptionGeneral = []
let energyCostsMultiplierGermany = []
let arrEnergyCostsGermany = []
let arrEnergyCostsHungary = []
let co2MultiplierGermany = 0.42
let arrCarbonFootprintGermany = []
let co2MultiplierHungary = 0.26
let arrCarbonFootprintHungary = []
let arrCarbonFootprintGeneral = []

//gottloser test

api.post('/api/date', (req, res) => {
    const { date } = req.body;
    console.log(`Received date: ${date}`);
    // Do something with the received date
  
    res.status(200).send(`Date received: ${date} `);
  });



//
// ----------------------------------------
// SQL Request for EnergyConsumption in Plant Germany

sql.connect(config,err => {
        const request = new sql.Request();
        request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_consumption_plant] WHERE [plant_id] = 1;', function(err, output) {
          if (err) console.log(err);
          else {
            let obj = output.recordset
            arrEnergyConsumptionGermany = Object.values(obj[0])
            
            //calculate carbon footprint plant germany
            for (let i = 0; i < arrEnergyConsumptionGermany.length; i++) {
                arrCarbonFootprintGermany.push(Math.round(arrEnergyConsumptionGermany[i] * co2MultiplierGermany))
            }
            
            api.get('/api/carbonfootprint/germany', (req, res) => {
                res.status(200).send({
                    "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                    "data": arrCarbonFootprintGermany
                })
            })

            

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



sql.connect(config,err => {
        const request = new sql.Request();
        request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_consumption_plant] WHERE [plant_id] = 2;', function(err, output) {
          if (err) console.log(err);
          else {
            let obj = output.recordset
            arrEnergyConsumptionHungary = Object.values(obj[0])
            
            // Calculate Carbon Footprint Plant Hungary
            for (let i = 0; i < arrEnergyConsumptionHungary.length; i++) {
                arrCarbonFootprintHungary.push(Math.round(arrEnergyConsumptionHungary[i] * co2MultiplierHungary))
            }
            
            api.get('/api/carbonfootprint/hungary', (req, res) => {
                res.status(200).send({
                    "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                    "data": arrCarbonFootprintHungary
                })
            })

            //calculate total energy consumption
            for (let i = 0; i < arrEnergyConsumptionGermany.length; i++) {
                arrEnergyConsumptionGeneral.push(Math.round(arrEnergyConsumptionGermany[i] + arrEnergyConsumptionHungary[i]))
            }
            
            api.get('/api/energyconsumption/general', (req, res) => {
                res.status(200).send({
                    "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                    "data": arrEnergyConsumptionGeneral
                })
            })

            //calculate total co2 emissions
            for (let i = 0; i < arrCarbonFootprintGermany.length; i++) {
                arrCarbonFootprintGeneral.push(Math.round(arrCarbonFootprintGermany[i] + arrCarbonFootprintHungary[i]))
            }
            
            api.get('/api/carbonfootprint/general', (req, res) => {
                res.status(200).send({
                    "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                    "data": arrCarbonFootprintGeneral
                })
            })

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

sql.connect(config,err => {
    const request = new sql.Request();
    request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_costs] WHERE [country_id] = 1;', function(err, output) {
      if (err) console.log(err);
      else {
        let obj = output.recordset
        energyCostsMultiplierGermany = Object.values(obj[0])
        
        // Calculate Total energy costs plant Germany
        for (let i = 0; i < arrEnergyConsumptionGermany.length; i++) {
            arrEnergyCostsGermany.push(Math.round(arrEnergyConsumptionGermany[i] * (energyCostsMultiplierGermany[i] / 1000)))
        }
        
        api.get('/api/energycosts/germany', (req, res) => {
            res.status(200).send({
                "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                "data": arrEnergyCostsGermany 
            })
        })

      }
    });
});

// //
// // ----------------------------------------
// // SQL Request for monthly Energy Costs in Hungary

sql.connect(config,err => {
    const request = new sql.Request();
    request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_costs] WHERE [country_id] = 2;', function(err, output) {
      if (err) console.log(err);
      else {
        let obj = output.recordset
        energyCostsMultiplierHungary = Object.values(obj[0])
        
        // Calculate Total energy costs plant Germany
        for (let i = 0; i < arrEnergyConsumptionHungary.length; i++) {
            arrEnergyCostsHungary.push(Math.round(arrEnergyConsumptionHungary[i] * (energyCostsMultiplierHungary[i] / 1000)))
        }
        
        api.get('/api/energycosts/hungary', (req, res) => {
            res.status(200).send({
                "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                "data": arrEnergyCostsHungary 
            })
        })

        // calculate total energy costs
        for (let i = 0; i < arrEnergyCostsGermany.length; i++) {
            arrEnergyCostsGeneral.push(Math.round(arrEnergyCostsGermany[i] + arrEnergyCostsHungary[i]))
        }
        
        api.get('/api/energycosts/general', (req, res) => {
            res.status(200).send({
                "labels": ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                "data": arrEnergyCostsGeneral
            })
        })

      }
    });
});

let arrEnergyCostsGeneral = []







api.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)