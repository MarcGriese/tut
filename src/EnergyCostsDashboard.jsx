import React from "react";
import './global.css'
import dashboardIcon from './assets/dashboard-icon-2.svg'
import energyCostsIcon from './assets/energy-costs-icon-1.svg'
import energyConsumptionIcon from './assets/energy-consumption-icon-1.svg'
import carbonFootprintIcon from './assets/carbon-footprint-icon-1.svg'
import ProductionBigIcon from './assets/subtract-1.svg'
import iconSettings2 from './assets/icon-1.svg'
import menuIconTopRight from './assets/menu-icon-top-right-1.svg'
import iconSettings3 from './assets/schneider-electric-logo.svg'
import arrowLeftIcon from './assets/arrow-left.svg'
import arrowRightIcon from './assets/arrow-right.svg'
import ProductionSmallIcon from './assets/subtract-2.svg'
import Chart from './testChart'


function EnergyCostsDashboard() {

    return (
        <div className="container-center-horizontal">
            <div className="settings screen">
                
                <div className="overlap-group2">
                    <div className="background"></div>
                    <div className="fullscreen">
                        
                        <div className="sidebar-menu">
                            <img className="dashboard-icon" src={dashboardIcon} alt="dashboard icon" />
                            <div className="overlap-group1">
                                <img className="icon-settings1" src={energyCostsIcon} alt="energy costs icon" />
                            </div>
                            <img className="sidebar-menu-item" src={energyConsumptionIcon} alt="energy consumption icon" />
                            <img className="sidebar-menu-item" src={carbonFootprintIcon} alt="carbon footprint icon" />
                            <div className="settings-container">
                                <img className="icon-settings" src={ProductionBigIcon} alt="icon-settings" />
                                <SettingsIcon />
                            </div>
                                <img className="sidebar-menu-item" src={iconSettings2} alt="icon-settings" />
                        </div>

                        <div className="total-energy-consumption-interior">
                                    <div className="flex-row-1">
                                        <header className="header">
                                            <div className="title aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">THIS HOUR'S ENERGY CONSUMPTION:</span>
                                            </div>
                                            <h1 className="value aileron-bold-green-haze-40px">
                                                <span className="aileron-bold-green-haze-40px">value</span>
                                            </h1>
                                        </header>
                                        <div className="time">
                                            <div className="hourly aileron-bold-white-16px">
                                                <span className="aileron-bold-white-16px">hourly</span>
                                            </div>
                                            <div className="daily aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">daily</span>
                                            </div>
                                            <div className="weekly aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">weekly</span>
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
                        <span className="aileron-bold-white-25px">ENERGY</span>
                    </div>
                    <DaySelection />
                </div>
            </div>
        </div>
    );
}

function SettingsIcon() {
    return(
        <div className="settings-icon">
            <img className="icon-settings-2" src={ProductionSmallIcon} alt="icon-settings" />
        </div>
    );
}

function DaySelection() {
    return(
        <div className="day-selection">
            <img className="arrow" src={arrowLeftIcon} alt="arrow left" />
            <div className="date aileron-regular-normal-white-16px">
                <span className="aileron-regular-normal-white-16px">Day | Mon, 02.01.2023</span>
            </div>
            <img className="arrow" src={arrowRightIcon} alt="arrow right" />
        </div>
    );
}

export default EnergyCostsDashboard;