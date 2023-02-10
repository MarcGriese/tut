import React from "react";
import '../../css/global.css'
import Sidebar from '../../Sidebars/SidebarProduction'
import menuIconTopRight from '../../assets/menu-icon-top-right-1.svg'
import iconSettings3 from '../../assets/schneider-electric-logo.svg'
import arrowLeftIcon from '../../assets/arrow-left.svg'
import arrowRightIcon from '../../assets/arrow-right.svg'

function Settings() {

    return (
        <div className="container-center-horizontal">
            <div className="energy-costs screen">
                <div className="overlap-group3">
                <div className="background"></div>
                    <div className="fullscreen">
                        <Sidebar />
                        <div className="total-energy-consumption-interior">
                                    <div className="flex-row-1">
                                                                                
                                    </div>
                                </div>

                        <img className="menu-icon-top-right" src={menuIconTopRight} alt="menu icon top right" />
                    </div>
                    <img className="schneider-electric-logo" src={iconSettings3} alt="Schneider Electric Logo" />
                    <div className="page-title aileron-bold-white-25px">
                        <span className="aileron-bold-white-25px">PRODUCTION</span>
                    </div>
                    <DaySelection />
                </div>
                
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

export default Settings;