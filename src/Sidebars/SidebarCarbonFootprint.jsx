import React from "react";
import '../global.css'
import dashboardIcon from '../assets/dashboard-icon-2.svg'
import energyCostsIcon from '../assets/energy-costs-icon-1.svg'
import energyConsumptionIcon from '../assets/energy-consumption-icon-1.svg'
import carbonFootprintIcon from '../assets/carbon-footprint-icon-1.svg'
import ProductionBigIcon from '../assets/subtract-1.svg'
import iconSettings2 from '../assets/icon-1.svg'
import ProductionSmallIcon from '../assets/subtract-2.svg'
                        
                    

function Sidebar() {
    return(
        <div className="sidebar-menu">
            <img className="dashboard-icon" src={dashboardIcon} alt="dashboard icon" />
            <img className="sidebar-menu-item" src={energyCostsIcon} alt="energy costs icon" />
            <img className="sidebar-menu-item" src={energyConsumptionIcon} alt="energy consumption icon" />
            <div className="overlap-group1">
                <img className="icon-settings1" src={carbonFootprintIcon} alt="carbon footprint icon" />
            </div>
            <div className="settings-container">
                <img className="icon-settings" src={ProductionBigIcon} alt="icon-settings" />
                <SettingsIcon />
            </div>
            <img className="sidebar-menu-item" src={iconSettings2} alt="icon-settings" />
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
    
export default Sidebar