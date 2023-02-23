import React from "react";
import Sidebar from '../../Sidebars/SidebarDashboard'
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import schneiderElectricLogo from '../../assets/schneider-electric-logo.svg'
import icon1 from '../../assets/energy-costs-icon-1.svg'
import icon2 from '../../assets/carbon-footprint-icon-1.svg'
import icon3 from '../../assets/energy-consumption-icon-1.svg'
import icon4 from '../../assets/produced-icon.svg'
import icon5 from '../../assets/errors.svg'
import icon6 from '../../assets/time.svg'
import DatePicker from '../../DatePicker'
import bubble from '../../assets/bubble.svg'
import '../../css/Dashboards.css'
import { Link } from 'react-router-dom'
import a from '../../assets/a.svg'
import b from '../../assets/b.svg'
import c from '../../assets/c.svg'
import d from '../../assets/d.svg'
import e from '../../assets/e.svg'
import f from '../../assets/f.svg'
import g from '../../assets/g.svg'

function Dashboard() {
    return (
        <div className="container-center-horizontal">
            <div className="energy-costs screen">
                <div className="overlap-group3">
                    <div className="background"></div>
                    <div className="fullscreen">
                        <Sidebar />
                        <div className="panels">
                            <div className="flex-row">
                                <Link to='/energycosts/general'>
                                    <div className="total">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL ENERGY COSTS</span>
                                            </div>
                                            <img className="icon" src={icon1} alt="icon" />
                                        </div>
                                        <h1 className="value aileron-bold-white-40px">
                                            <span className="aileron-bold-white-40px">35.000€</span>
                                        </h1>
                                        <Bubble />
                                        <div className="overlap-group-1">
                                            <div className="bar"></div>
                                        </div>
                                        <div className="total-budget aileron-bold-white-16px">
                                            <span className="aileron-bold-white-16px">Total Budget</span>
                                        </div>
                                    </div></Link>


                                <Link to='/energyconsumption/general'>
                                    <div className="total">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL ENERGY CONSUMPTION</span>
                                            </div>
                                            <img className="icon" src={icon3} alt="icon" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/carbonfootprint/germany'>
                                    <div className="total">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL PRODUCTION ERRORS</span>
                                            </div>
                                            <img className="icon" src={icon5} alt="icon" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex-row">
                                <Link to='/carbonfootprint/general'>
                                    <div className="total">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL CO2 EMISSIONS</span>
                                            </div>
                                            <img className="icon" src={icon2} alt="icon" />
                                        </div>
                                        <h1 className="value aileron-bold-white-40px">
                                            <span className="aileron-bold-white-40px">35.000€</span>
                                        </h1>
                                        <Bubble2 />
                                        <div className="bar-1">
                                            <div className="a"></div>
                                            <img src={a} alt="a" className="bar-item" />
                                            <img src={b} alt="b" className="bar-item" />
                                            <img src={c} alt="c" className="bar-item" />
                                            <img src={d} alt="d" className="d" />
                                            <img src={e} alt="e" className="bar-item" />
                                            <img src={f} alt="f" className="bar-item" />
                                            <img src={g} alt="g" className="bar-item" />
                                            <div className="h"></div>
                                        </div>
                                        <div className="total-header aileron-bold-white-16px">
                                            <span className="aileron-bold-white-16px">Emissions in kg/kWh</span>
                                        </div>
                                    </div>
                                </Link>




                                <Link to='/carbonfootprint/hungary'>
                                    <div className="total">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL PIECES PRODUCED</span>
                                            </div>
                                            <img className="icon" src={icon4} alt="icon" />
                                        </div>
                                        <h1 className="value aileron-bold-white-40px">
                                            <span className="aileron-bold-white-40px">35.000€</span>
                                        </h1>
                                        <Bubble />
                                        <div className="overlap-group-1">
                                            <div className="bar"></div>
                                        </div>
                                        <div className="total-budget aileron-bold-white-16px">
                                            <span className="aileron-bold-white-16px">Total Capacity</span>
                                        </div>
                                    </div>
                                </Link>

                                <Link to='/carbonfootprint/germany'>
                                    <div className="total">
                                        <div className="flex-row-1">
                                            <div className="header aileron-regular-normal-white-16px">
                                                <span className="aileron-regular-normal-white-16px">TOTAL PRODUCTION TIME</span>
                                            </div>
                                            <img className="icon" src={icon6} alt="icon" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <img className="menu-icon-top-right" src={menuIconTopRight} alt="menu icon top right" />
                    </div>
                    <img className="schneider-electric-logo" src={schneiderElectricLogo} alt="Schneider Electric Logo" />
                    <div className="page-title aileron-bold-white-25px">
                        <span className="aileron-bold-white-25px">DASHBOARD</span>
                    </div>
                    <DaySelection />
                </div>
            </div>
        </div>
    );
}

export default Dashboard

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

function Bubble2() {
    return (
        <div className="bubble" >
            <img className="" src={bubble} alt="bubble" />
            <div className="percent aileron-bold-white-14px">
                <span className="aileron-bold-white-14px">0.42</span>
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