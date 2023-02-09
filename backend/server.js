const express = require('express')
const app = express()
const PORT = 8080
var sql = require('mssql/msnodesqlv8');
var config = {
    connectionString: 'Driver=SQL Server; Server=WTDELVSE197671L\\SQLEXPRESS;database: energyMonitoring; trustedConnection: true;'
};

app.use( express.json())

let users

// sql.connect(config,err => {
//         const request = new sql.Request();
//         request.query( 'SELECT [oct22] ,[nov22],[dec22],[jan23],[feb23],[mar23],[apr23],[may23],[jun23],[jul23],[aug23],[sep23] FROM [energyMonitoring].[dbo].[energy_consumption_plant] WHERE [plant_id] = 1;', function(err, output) {
//           if (err) console.log(err);
//           else users = output.recordset;
//         });
//     });


app.get('/user', (req, res) => {
    res.status(200).send({ //send beinhaltet die Daten die beim abfragen der get request gesendet werden
        users: 1
    })
})


app.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)