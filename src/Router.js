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
import CarbonFootprintPlantGermany from './pages/Carbon Footprint/CarbonFootprintPlantGermany'
import CarbonFootprintPlantHungary from './pages/Carbon Footprint/CarbonFootprintPlantHungary'
import Settings from './pages/Settings/Settings'

import CarbonFootprintM314hourly from './pages/Carbon Footprint/CarbonFootprintM314hourly'
import CarbonFootprintM486hourly from './pages/Carbon Footprint/CarbonFootprintM486hourly'

import EnergyCostsM314hourly from './pages/Energy Costs/EnergyCostsM314hourly'
import EnergyCostsM486hourly from './pages/Energy Costs/EnergyCostsM486hourly'
import Dashboard from './pages/Dashboard/Dashboard'
import TotalEnergyCosts from './pages/Dashboard/EnergyCosts'
import TotalEnergyConsumption from './pages/Dashboard/EnergyConsumption'
import TotalCarbonFootprint from './pages/Dashboard/CarbonFootprint'
import ProductionDashboard from './pages/Production/ProductionDashboard'
import EnergyCostsM314daily from './pages/Energy Costs/EnergyCostsM314daily'
import EnergyCostsM314weekly from './pages/Energy Costs/EnergyCostsM314weekly'
import EnergyCostsM486daily from './pages/Energy Costs/EnergyCostsM486daily'
import EnergyCostsM486weekly from './pages/Energy Costs/EnergyCostsM486weekly'

import CarbonFootprintM314daily from './pages/Carbon Footprint/CarbonFootprintM314daily'
import CarbonFootprintM314weekly from './pages/Carbon Footprint/CarbonFootprintM314weekly'
import CarbonFootprintM486daily from './pages/Carbon Footprint/CarbonFootprintM486daily'
import CarbonFootprintM486weekly from './pages/Carbon Footprint/CarbonFootprintM486weekly'
import EnergyConsumptionM314daily from './pages/Energy Consumption/EnergyConsumptionM314daily'
import EnergyConsumptionM314weekly from './pages/Energy Consumption/EnergyConsumptionM314weekly'
import EnergyConsumptionM486daily from './pages/Energy Consumption/EnergyConsumptionM486daily'
import EnergyConsumptionM486weekly from './pages/Energy Consumption/EnergyConsumptionM486weekly'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/'>
                    <Route path='dashboard' element={<Dashboard />} />

                    <Route path='energyconsumption'>
                        <Route path='dashboard' element={<EnergyConsumptionDashboard />} />
                        <Route path='general' element={<TotalEnergyConsumption />} />
                        <Route path='m314hourly' element={<EnergyConsumptionM314hourly />} />
                        <Route path='m314daily' element={<EnergyConsumptionM314daily />} />
                        <Route path='m314weekly' element={<EnergyConsumptionM314weekly />} />
                        <Route path='m486hourly' element={<EnergyConsumptionM486hourly />} />
                        <Route path='m486daily' element={<EnergyConsumptionM486daily />} />
                        <Route path='m486weekly' element={<EnergyConsumptionM486weekly />} />
                        <Route path='germany' element={<EnergyConsumptionPlantGermany />} />
                        <Route path='hungary' element={<EnergyConsumptionPlantHungary />} />
                    </Route>

                    <Route path='energycosts'>
                        <Route path='dashboard' element={<EnergyCostsDashboard />} />
                        <Route path='general' element={<TotalEnergyCosts />} />
                        <Route path='m314hourly' element={<EnergyCostsM314hourly />} />
                        <Route path='m314daily' element={<EnergyCostsM314daily />} />
                        <Route path='m314weekly' element={<EnergyCostsM314weekly />} />
                        <Route path='m486hourly' element={<EnergyCostsM486hourly />} />
                        <Route path='m486daily' element={<EnergyCostsM486daily />} />
                        <Route path='m486weekly' element={<EnergyCostsM486weekly />} />
                        <Route path='germany' element={<EnergyCostsPlantGermany />} />
                        <Route path='hungary' element={<EnergyCostsPlantHungary />} />
                    </Route>

                    <Route path='carbonfootprint'>
                        <Route path='dashboard' element={<CarbonFootprintDashboard />} />
                        <Route path='general' element={<TotalCarbonFootprint />} />
                        <Route path='m314hourly' element={<CarbonFootprintM314hourly />} />
                        <Route path='m314daily' element={<CarbonFootprintM314daily />} />
                        <Route path='m314weekly' element={<CarbonFootprintM314weekly />} />
                        <Route path='m486hourly' element={<CarbonFootprintM486hourly />} />
                        <Route path='m486daily' element={<CarbonFootprintM486daily />} />
                        <Route path='m486weekly' element={<CarbonFootprintM486weekly />} />
                        <Route path='germany' element={<CarbonFootprintPlantGermany />} />
                        <Route path='hungary' element={<CarbonFootprintPlantHungary />} />
                    </Route>

                    <Route path='production'>
                        <Route path='dashboard' element={<ProductionDashboard />} />
                    </Route>

                    <Route path='settings' element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}