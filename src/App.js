import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnergyCostsPlantGermany from './EnergyCostsPlantGermany'
import EnergyCostsPlantHungary from './EnergyCostsPlantHungary'
import EnergyConsumptionPlantGermany from './EnergyConsumptionPlantGermany'
import EnergyConsumptionPlantHungary from './EnergyConsumptionPlantHungary'
import EnergyCostsDashboard from './EnergyCostsDashboard'
import EnergyConsumptionDashboard from './EnergyConsumptionDashboard'
import CarbonFootprintDashboard from './CarbonFootprintDashboard'
import CarbonFootprintPlantGermany from './CarbonFootprintPlantGermany'
import CarbonFootprintPlantHungary from './CarbonFootprintPlantHungary'
import Settings from './Settings'


export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route path='test' element={<EnergyCostsDashboard/>}/>
                <Route path='energyconsumption'>
                    <Route path='dashboard' element={<EnergyConsumptionDashboard/>}/>
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