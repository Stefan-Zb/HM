import React, {Component} from 'react';
import Car from "./components/car/Car";

class App extends Component {

  cars = [
    {
      model: 'BMW',
      madeYear: 2005,
      power: 100,
      color: 'white',
    },
    {
      model: 'Peugeot',
      madeYear: 2012,
      power: 140,
      color: 'white',
    },
    {
      model: 'Ford',
      madeYear: 2015,
      power: 230,
      color: 'black',
    },
    {
      model: 'Skoda',
      madeYear: 2005,
      power: 90,
      color: 'silver',
    },
    {
      model: 'Tesla',
      madeYear: 2020,
      power: 190,
      color: 'red',
    },
    {
      model: 'Toyota',
      madeYear: 2018,
      power: 280,
      color: 'gray',
    },
    {
      model: 'Nissan',
      madeYear: 2005,
      power: 100,
      color: 'blue',
    },
    {
      model: 'Hiundai',
      madeYear: 2005,
      power: 100,
      color: 'lorem',
    },
    {
      model: 'Mazda',
      madeYear: 2003,
      power: 150,
      color: 'sit',
    },
    {
      model: 'Volvo',
      madeYear: 2009,
      power: 70,
      color: 'green',
    },
  ];

  render() {
    return (
      <div>
        {
          this.cars.map((value, index) =>{
            return (<Car item={value} key={index}/>)
          })
        }
      </div>
    );
  }
}

export default App;
