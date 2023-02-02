import React from "react";
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

function ChartEnergyCostsM314hourly() {

    //testChart.style.backgroundColor = 'rgba(67,67,67,1)'

    const data = {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        datasets: [{
            label: 'ENERGY COSTS M314 SPRITZMASCHINE',
            data: [NaN, 8, 3, 4.5, 5],
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
                max: 8,
                //y axis labels config
                ticks: {
                    color: 'rgba(255, 255, 255, 1',
                    font: {
                        size: 10
                    },
                    stepSize: 2,
                    //creates labels for y-axis
                    callback: function(value, index, values) {
                        return value + ' kWh'
                    }
                }
            },
            //x axis config
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, 1)',
                    font: {
                        size: 10
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
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default ChartEnergyCostsM314hourly