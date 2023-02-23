import React from "react";
import '../../css/global.css'
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import iconSettings3 from '../../assets/schneider-electric-logo.svg'
import Sidebar from '../../Sidebars/SidebarEnergyConsumption'
import Chart from '../../Charts/Energy Consumption/ChartEnergyConsumptionPlantGermany.js'
import DatePicker from '../../DatePicker'

let thisMonth = "1.895.368 kWh"

function EnergyConsumptionPlantGermany() {

    return (
        <div className="container-center-horizontal">
            <div className="settings screen">
                <div className="overlap-group2">
                    <div className="background"></div>
                    <div className="fullscreen">
                        <Sidebar />
                        <div className="total-energy-consumption-interior">
                            <div className="flex-row-1">
                                <header className="header">
                                    <div className="title-consumption aileron-regular-normal-white-16px">
                                        <span className="aileron-regular-normal-white-16px">THIS MONTH'S ENERGY CONSUMPTION:</span>
                                    </div>
                                    <h1 className="value-consumption aileron-bold-green-haze-40px">
                                        <span className="aileron-bold-green-haze-40px">{thisMonth}</span>
                                    </h1>
                                </header>
                                <div className="time">
                                    <div className="monthly-consumption-plants aileron-bold-white-16px">
                                        <span className="aileron-bold-white-16px">monthly</span>
                                    </div>
                                </div>
                            </div>
                            <div className="graph">
                                <Chart />
                            </div>
                        </div>
                        <img className="menu-icon-top-right" src={menuIconTopRight} alt="menu icon top right" />
                    </div>
                    <img className="schneider-electric-logo" src={iconSettings3} alt="Schneider Electric Logo" />
                    <div className="page-title aileron-bold-white-25px">
                        <span className="aileron-bold-white-25px">PLANT GERMANY</span>
                    </div>
                    <DaySelection />
                </div>
            </div>
        </div>
    );
}

function DaySelection() {
    return (
        <div className="day-selection">
            <div className="date">
                <DatePicker />
            </div>
        </div>
    );
}

export default EnergyConsumptionPlantGermany;