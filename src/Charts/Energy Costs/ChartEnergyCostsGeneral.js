import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const ChartEnergyCostsPlantGeneral = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/api/energycosts/general')
            const data = await result.json()

            setChartData({
                labels: data.labels,
                datasets: [
                    {
                        label: 'ENERGY COSTS TOTAL',
                        data: data.data,
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

                    }
                ]
            })
        }
        fetchData()
    }, [])

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
                    display: false,
                },
                beginAtZero: true,
                min: 0,
                max: 1200000,
                //y axis labels config
                ticks: {
                    color: 'rgba(255, 255, 255, 1',
                    font: {
                        size: 12
                    },
                    stepSize: 300000,
                    //creates labels for y-axis
                    callback: function (value, index, values) {
                        return value + ' €'
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
        },
        responsive: true
    };

    return (
        <div>
            {chartData.labels && chartData.datasets &&
                <Line data={chartData} options={options} height={428} width={900}></Line>
            }
        </div>
    )
}

export default ChartEnergyCostsPlantGeneral