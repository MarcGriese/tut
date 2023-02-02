import React from "react";
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

function testChart() {

    //testChart.style.backgroundColor = 'rgba(67,67,67,1)'

    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            label: 'ENERGY COSTS PLANT HUNGARY',
            data: [538917, 513972, 520305, 544457, 501574, 543132, 541287, 530257, 474400, 528891, 534573, 553413],
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
                max: 600000,
                //y axis labels config
                ticks: {
                    color: 'rgba(255, 255, 255, 1',
                    font: {
                        size: 12
                    },
                    stepSize: 150000,
                    //creates labels for y-axis
                    callback: function(value, index, values) {
                        return value + '€'
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

export default testChart