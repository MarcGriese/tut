import React from "react";
import '../../css/global.css'
import { Link } from 'react-router-dom'
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import iconSettings3 from '../../assets/schneider-electric-logo.svg'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'
import Sidebar from '../../Sidebars/SidebarEnergyCosts'
import Chart from '../../Charts/Energy Costs/ChartEnergyCostsM314hourly.js'


function EnergyCostsM314weekly() {

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
                                        <span className="aileron-regular-normal-white-16px">THIS WEEK'S ENERGY COSTS:</span>
                                    </div>
                                    <h1 className="value-consumption aileron-bold-green-haze-40px">
                                        <span className="aileron-bold-green-haze-40px">value</span>
                                    </h1>
                                </header>
                                <div className="time">
                                    <Link to='/energycosts/m314hourly'>
                                        <div className="hourly-weekly aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">day</span>
                                        </div>
                                    </Link>
                                    <Link to='/energycosts/m314daily'>
                                        <div className="daily-weekly aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">week</span>
                                        </div>
                                    </Link>
                                    <Link to='/energycosts/m314weekly'>
                                        <div className="weekly-weekly aileron-bold-white-16px">
                                            <span className="aileron-bold-white-16px">month</span>
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
                        <span className="aileron-bold-white-25px">M314 SPRITZMASCHINE</span>
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

export default EnergyCostsM314weekly;