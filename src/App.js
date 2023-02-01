import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnergyCostsPlantGermany from './pages/Energy Costs/EnergyCostsPlantGermany'
import EnergyCostsPlantHungary from './pages/Energy Costs/EnergyCostsPlantHungary'
import EnergyConsumptionM314hourly from './pages/Energy Consumption/EnergyConsumptionM314hourly'
import EnergyConsumptionM486hourly from './pages/Energy Consumption/EnergyConsumptionM486hourly'
import EnergyConsumptionPlantGermany from './pages/Energy Consumption/EnergyConsumptionPlantGermany'
import EnergyConsumptionPlantHungary from './pages/Energy Consumption/EnergyConsumptionPlantHungary'
import EnergyCostsDashboard from './pages/Energy Costs/EnergyCostsDashboard'
import EnergyConsumptionDashboard from './pages/Energy Consumption/EnergyConsumptionDashboard'
import CarbonFootprintDashboard from './pages/Carbon Footprint/CarbonFootprintDashboard'
import CarbonFootprintPlantGermany from './pages/Carbon Footprint//CarbonFootprintPlantGermany'
import CarbonFootprintPlantHungary from './pages/Carbon Footprint//CarbonFootprintPlantHungary'
import Settings from './pages/Settings/Settings'



export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route path='test' element={<EnergyCostsDashboard/>}/>
                <Route path='energyconsumption'>
                    <Route path='dashboard' element={<EnergyConsumptionDashboard/>}/>
                    <Route path='m314' element={<EnergyConsumptionM314hourly/>}/>
                    <Route path='m486' element={<EnergyConsumptionM486hourly/>}/>
                    <Route path='germany' element={<EnergyConsumptionPlantGermany/>}/>
                    <Route path='hungary' element={<EnergyConsumptionPlantHungary/>}/>
                </Route>

                <Route path='energycosts'>
                    <Route path='dashboard' element={<EnergyCostsDashboard/>}/>
                    <Route path='germany' element={<EnergyCostsPlantGermany/>}/>
                    <Route path='hungary' element={<EnergyCostsPlantHungary/>}/>
                </Route>

                <Route path='carbonfootprint'>
                    <Route path='dashboard' element={<CarbonFootprintDashboard/>}/>
                    <Route path='germany' element={<CarbonFootprintPlantGermany/>}/>
                    <Route path='hungary' element={<CarbonFootprintPlantHungary/>}/>
                </Route>
                <Route path='settings' element={<Settings/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}