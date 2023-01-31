import React from "react";
import Sidebar from './Sidebars/SidebarCarbonFootprint'
import menuIconTopRight from './assets/menu-icon-top-right-1.svg'
import schneiderElectricLogo from './assets/schneider-electric-logo.svg'
import icon from './assets/carbon-footprint-icon-1.svg'
import arrowLeftIcon from './assets/arrow-left.svg'
import arrowRightIcon from './assets/arrow-right.svg'
import bubble from './assets/bubble.svg'
import './Dashboards.css'
import {Link} from 'react-router-dom'

function CarbonFootprintDashboard() {
    return(
        <div className="container-center-horizontal">
            <div className="energy-costs screen">
                <div className="overlap-group3">
                    <div className="background"></div>
                    <div className="fullscreen">
                        <Sidebar />
                        <div className="panels">
                            <div className="flex-row">
                                <div className="total-energy-costs">
                                    <div className="flex-row-1">
                                        <div className="header aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">TOTAL CO2 EMISSIONS</span>
                                        </div>
                                        <img className="icon" src={icon} alt="icon" />
                                    </div>
                                    <h1 className="value aileron-bold-green-haze-40px">
                                        <span className="aileron-bold-green-haze-40px">35.000€</span>
                                    </h1>
                                    <Bubble />
                                    <div className="overlap-group-1">
                                        <div className="bar"></div>
                                    </div>
                                    <div className="total-budget aileron-bold-white-16px">
                                        <span className="aileron-bold-white-16px">Total Budget</span>
                                    </div>
                                    </div>

                                    <Link to='/carbonfootprint/hungary'>
                                        <div className="plant-2">
                                            <div className="plant-1 aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">PLANT HUNGARY</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to='/carbonfootprint/germany'>
                                        <div className="plant-2">
                                            <div className="plant-1 aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">PLANT GERMANY</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex-row-2">
                                    <div className="flex-row-item">
                                        <div className="m314-spritzmaschine aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">M314 SPRITZMASCHINE</span>
                                        </div>
                                    </div>
                                    <div className="flex-row-item">
                                        <div className="m486-assemblage aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">M486 ASSEMBLAGE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <img className="menu-icon-top-right" src={menuIconTopRight} alt="menu icon top right" />
                    </div>
                    <img className="schneider-electric-logo" src={schneiderElectricLogo} alt="Schneider Electric Logo" />
                    <div className="page-title aileron-bold-white-25px">
                        <span className="aileron-bold-white-25px">CARBON FOOTPRINT</span>
                    </div>
                    <DaySelection />
                </div>
            </div>
        </div>
    );
}

export default CarbonFootprintDashboard

function Bubble() {
    return(
        <div className="bubble" >
            <img className="" src={bubble} alt="bubble" />
            <div className="percent aileron-bold-white-14px">
                <span className="aileron-bold-white-14px">77%</span>
            </div>
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