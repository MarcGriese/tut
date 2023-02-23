import React from "react";
import '../../css/global.css'
import { Link } from "react-router-dom";
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import iconSettings3 from '../../assets/schneider-electric-logo.svg'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'
import Sidebar from '../../Sidebars/SidebarCarbonFootprint'
import Chart from '../../Charts/Carbon Footprint/ChartCarbonFootprintM314hourly.js'


function CarbonFootprintM486daily() {

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
                                        <span className="aileron-regular-normal-white-16px">TODAY'S CO2 EMISSIONS:</span>
                                    </div>
                                    <h1 className="value-consumption aileron-bold-green-haze-40px">
                                        <span className="aileron-bold-green-haze-40px">value</span>
                                    </h1>
                                </header>
                                <div className="time">
                                    <Link to='/carbonfootprint/m486hourly'>
                                        <div className="hourly-daily aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">day</span>
                                        </div>
                                    </Link>
                                    <Link to='/carbonfootprint/m486daily'>
                                        <div className="daily-daily aileron-bold-white-16px">
                                            <span className="aileron-bold-white-16px">week</span>
                                        </div>
                                    </Link>
                                    <Link to='/carbonfootprint/m486weekly'>
                                        <div className="weekly-daily aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">month</span>
                                        </div>
                                    </Link>
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
                        <span className="aileron-bold-white-25px">M486 ASSEMBLAGE</span>
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
            <img className="arrow" src={arrowLeftIcon} alt="arrow left" />
            <div className="date aileron-regular-normal-white-16px">
                <span className="aileron-regular-normal-white-16px">Day | Mon, 02.01.2023</span>
            </div>
            <img className="arrow" src={arrowRightIcon} alt="arrow right" />
        </div>
    );
}

export default CarbonFootprintM486daily;