var sql = require('mssql/msnodesqlv8');
var config = {
    connectionString: 'Driver=SQL Server; Server=WTDELVSE197671L\\SQLEXPRESS;database: energyMonitoring; trustedConnection: true;'
};
var expr = 'SELECT * FROM Users'

function sqlQuery(expr) {

    sql.connect(config,err => {
        const request = new sql.Request();
        request.query( expr, function(err, output) {
          if (err) console.log(err);
          else console.log(output.recordset);
        });
    });

}

sqlQuery(expr)

module.exports = {
    sqlQuery
}