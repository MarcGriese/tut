import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnergyCostsPlantGermany from './EnergyCostsPlantGermany'
import EnergyCostsPlantHungary from './EnergyCostsPlantHungary'
import EnergyConsumptionPlantGermany from './EnergyConsumptionPlantGermany'
import EnergyConsumptionPlantHungary from './EnergyConsumptionPlantHungary'
import EnergyCostsDashboard from './EnergyCostsDashboard'


export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route path='test' element={<EnergyCostsDashboard/>}/>
                <Route path='energyconsumption'>
                    <Route path='germany' element={<EnergyConsumptionPlantGermany/>}/>
                    <Route path='hungary' element={<EnergyConsumptionPlantHungary/>}/>
                </Route>

                <Route path='energycosts'>
                    <Route path='dashboard' element={<EnergyCostsDashboard/>}/>
                    <Route path='germany' element={<EnergyCostsPlantGermany/>}/>
                    <Route path='hungary' element={<EnergyCostsPlantHungary/>}/>
                </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}