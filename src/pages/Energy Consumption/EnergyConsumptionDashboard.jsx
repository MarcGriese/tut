import React from "react";
import Sidebar from '../../Sidebars/SidebarEnergyConsumption'
import DatePicker from '../../DatePicker'
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import schneiderElectricLogo from '../../assets/schneider-electric-logo.svg'
import icon from '../../assets/energy-consumption-icon-1.svg'
import bubble from '../../assets/bubble.svg'
import '../../css/Dashboards.css'
import { Link } from 'react-router-dom'
import M314Chart from '../../Charts/Energy Consumption/ChartEnergyConsumptionM314hourly tiny'
import M486Chart from '../../Charts/Energy Consumption/ChartEnergyConsumptionM486hourly tiny'

function EnergyCostsDashboard() {
    return (
        <div className="container-center-horizontal">
            <div className="energy-costs screen">
                <div className="overlap-group3">
                    <div className="background"></div>
                    <div className="fullscreen">
                        <Sidebar />
                        <div className="panels">
                            <div className="flex-row">
                                <Link to='/energyconsumption/general'>
                                    <div className="total-energy-costs">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL ENERGY CONSUMPTION</span>
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
                                </Link>

                                <Link to='/energyconsumption/hungary'>
                                    <div className="plant-2">
                                        <div className="plant-1 aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">PLANT HUNGARY</span>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/energyconsumption/germany'>
                                    <div className="plant-2">
                                        <div className="plant-1 aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">PLANT GERMANY</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex-row-2">
                                <Link to='/energyconsumption/m314hourly'>
                                    <div className="flex-row-item">
                                        <div className="m314-spritzmaschine aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">M314 SPRITZMASCHINE</span>
                                        </div>
                                        <div className="graph-tiny">
                                            <M314Chart />
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/energyconsumption/m486hourly'>
                                    <div className="flex-row-item">
                                        <div className="m486-assemblage aileron-regular-normal-white-16px">
                                            <span className="aileron-regular-normal-white-16px">M486 ASSEMBLAGE</span>
                                        </div>
                                        <div className="graph-tiny">
                                            <M486Chart />
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <img className="menu-icon-top-right" src={menuIconTopRight} alt="menu icon top right" />
                    </div>
                    <img className="schneider-electric-logo" src={schneiderElectricLogo} alt="Schneider Electric Logo" />
                    <div className="page-title aileron-bold-white-25px">
                        <span className="aileron-bold-white-25px">ENERGY CONSUMPTION</span>
                    </div>
                    <DaySelection />
                </div>
            </div>
        </div>
    );
}

export default EnergyCostsDashboard

function Bubble() {
    return (
        <div className="bubble" >
            <img className="" src={bubble} alt="bubble" />
            <div className="percent aileron-bold-white-14px">
                <span className="aileron-bold-white-14px">77%</span>
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