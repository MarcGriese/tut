import React from 'react'
import {Component} from 'react'
//import Settings from './Settings'
import EnergyConsumptionPlantGermany from './EnergyConsumptionPlantGermany'
//import EnergyConsumptionPlantHungary from './EnergyConsumptionPlantHungary'
//import Chart from './testChart'


class App extends Component {
    render() {
      return (
        <div className="container">
          <EnergyConsumptionPlantGermany/>
        </div>
      )
    }
  }



  export default App