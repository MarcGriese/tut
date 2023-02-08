import React from "react";
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
// import sqlQuery from '../../backend/dbFiles/sqlQuery'
// var expr = 'SELECT * FROM [energyMonitoring].[dbo].[energy_costs]'

// console.log(sqlQuery(expr))












function TestChart() {


    //testChart.style.backgroundColor = 'rgba(67,67,67,1)'

    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            label: 'ENERGY CONSUMPTION PLANT GERMANY',
            data: [],
            //Connection lines between points
            borderWidth: 3,
            showLine: true,
            lineTension: 0.4,
            borderColor: 'rgba(0, 158, 77, 1)',

            //options: legend
            backgroundColor: 'rgba(0, 158, 77, 1)',

            //points:
            pointBackgroundColor: 'rgba(0, 158, 77, 1)',
            pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointHoverBorderColor: 'rgba(0, 158, 77, 1)',

            //fill chart:
            fill: {
                target: 'origin',
                above: 'rgba(0, 158, 77, 0.4)'
            }
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            //y axis config
            y: {
                //grid lines
                grid: {
                    color: 'rgba(255, 255, 255, 1)',
                    lineWidth: 1,
                },
                //border
                border: {
                    display:false,
                },
                beginAtZero: true,
                min: 0,
                max: 2400000,
                //y axis labels config
                ticks: {
                    color: 'rgba(255, 255, 255, 1',
                    font: {
                        size: 12
                    },
                    stepSize: 600000,
                    //creates labels for y-axis
                    callback: function(value, index, values) {
                        return value/1000000 + 'm kWh'
                    }
                }
            },
            //x axis config
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, 1)',
                    font: {
                        size: 12
                    }
                },
                //grid lines config
                grid: {
                    color: 'rgba(255, 255, 255, 1)',
                    drawOnChartArea: false,
                    lineWidth: 1
                }
            }
        }
    };

    return(
        <div>
            <Line data={data} options={options} height={428} width={900}></Line>
        </div>
    )
}

export default TestChart