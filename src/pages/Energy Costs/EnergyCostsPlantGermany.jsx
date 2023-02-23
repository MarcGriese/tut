import React from "react";
import '../../css/global.css'
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import iconSettings3 from '../../assets/schneider-electric-logo.svg'
import DatePicker from '../../DatePicker'
import Sidebar from '../../Sidebars/SidebarEnergyCosts'
import Chart from '../../Charts/Energy Costs/ChartEnergyCostsPlantGermany'


function EnergyCostsPlantGermany() {

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
                                    <div className="title-costs aileron-regular-normal-white-16px">
                                        <span className="aileron-regular-normal-white-16px">THIS MONTH'S ENERGY COSTS:</span>
                                    </div>
                                    <h1 className="value-costs aileron-bold-green-haze-40px">
                                        <span className="aileron-bold-green-haze-40px">value</span>
                                    </h1>
                                </header>
                                <div className="time">
                                    <div className="monthly-costs-plants aileron-bold-white-16px">
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

export default EnergyCostsPlantGermany;