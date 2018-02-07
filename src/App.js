import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      bikes : [{"bikeid":1,"brand":"Cannondale","model":"Habit","modelnum":3,"price":"3799.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C23308M/Variants/C23308M70LG/images/imabtgf9u5ij2ctrpyi1.ashx?vs=1&d=20170623T185124Z","style":"trail"},{"bikeid":4,"brand":"Cannondale","model":"Habit","modelnum":4,"price":"2799.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23408M_GRY.ashx","style":"trail"},{"bikeid":5,"brand":"Cannondale","model":"Habit","modelnum":5,"price":"2199.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23508M_VLT.ashx","style":"trail"},{"bikeid":6,"brand":"Cannondale","model":"Habit","modelnum":6,"price":"1999.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23608M_BLK.ashx","style":"trail"},{"bikeid":7,"brand":"Cannondale","model":"Scalpel","modelnum":1,"price":"7499.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C24158M_VLT.ashx","style":"cross-country"},{"bikeid":8,"brand":"Cannondale","model":"Scalpel","modelnum":2,"price":"6499.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/C18_C24157M_ORG_V3.ashx","style":"cross-country"},{"bikeid":9,"brand":"Cannondale","model":"Scalpel","modelnum":3,"price":"5399.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C24306M_BBQ.ashx","style":"cross-country"},{"bikeid":10,"brand":"Cannondale","model":"Scalpel","modelnum":4,"price":"4199.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C24406M_AGR.ashx","style":"cross-country"},{"bikeid":11,"brand":"Cannondale","model":"Scalpel","modelnum":5,"price":"2799.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C24516M/Variants/C24516M1002/images/coilkdzxyajdab9yawps.ashx?vs=1&d=20170623T185226Z","style":"cross-country"},{"bikeid":12,"brand":"Cannondale","model":"Trigger","modelnum":1,"price":"7749.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C22118M/Variants/C22118M10LG/images/easpinwmgfwxj6gafkqk.ashx?vs=1&d=20170314T192357Z","style":"all-mountain"},{"bikeid":13,"brand":"Cannondale","model":"Trigger","modelnum":2,"price":"5999.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C22208M/Variants/C22208M10LG/images/z6nhs5fo2idsew6h8ihb.ashx?vs=1&d=20170314T192359Z","style":"all-mountain"},{"bikeid":14,"brand":"Cannondale","model":"Trigger","modelnum":3,"price":"3999.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/C18_C22308M_ORG_V4.ashx","style":"all-mountain"},{"bikeid":15,"brand":"Cannondale","model":"Jekyll","modelnum":1,"price":"7749.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Cannondale/Global/MY18-Images/Jekyll/C18_C21118M_BBQ.ashx?vs=1&d=00010101T000000Z","style":"enduro"},{"bikeid":16,"brand":"Cannondale","model":"Jekyll","modelnum":2,"price":"5999.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C21208M/Variants/C21208M70LG/images/ca7ap74qr1snhjdyn19b.ashx?vs=1&d=20170314T192350Z","style":"enduro"},{"bikeid":17,"brand":"Cannondale","model":"Jekyll","modelnum":3,"price":"4199.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C21308M/Variants/C21308M50LG/images/qkdlpunrdhubjcn8lt6e.ashx?vs=1&d=20170314T192353Z","style":"enduro"},{"bikeid":18,"brand":"Cannondale","model":"Jekyll","modelnum":4,"price":"3199.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C21408M/Variants/C21408M10LG/images/eklfd3frtwe76oyjn0li.ashx?vs=1&d=20170314T192355Z","style":"enduro"},{"bikeid":3,"brand":"Cannondale","model":"Habit","modelnum":2,"price":"4499.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23238M_GRY.ashx","style":"trail"}],
      originalList: [{"bikeid":1,"brand":"Cannondale","model":"Habit","modelnum":3,"price":"3799.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C23308M/Variants/C23308M70LG/images/imabtgf9u5ij2ctrpyi1.ashx?vs=1&d=20170623T185124Z","style":"trail"},{"bikeid":4,"brand":"Cannondale","model":"Habit","modelnum":4,"price":"2799.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23408M_GRY.ashx","style":"trail"},{"bikeid":5,"brand":"Cannondale","model":"Habit","modelnum":5,"price":"2199.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23508M_VLT.ashx","style":"trail"},{"bikeid":6,"brand":"Cannondale","model":"Habit","modelnum":6,"price":"1999.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23608M_BLK.ashx","style":"trail"},{"bikeid":7,"brand":"Cannondale","model":"Scalpel","modelnum":1,"price":"7499.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C24158M_VLT.ashx","style":"cross-country"},{"bikeid":8,"brand":"Cannondale","model":"Scalpel","modelnum":2,"price":"6499.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/C18_C24157M_ORG_V3.ashx","style":"cross-country"},{"bikeid":9,"brand":"Cannondale","model":"Scalpel","modelnum":3,"price":"5399.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C24306M_BBQ.ashx","style":"cross-country"},{"bikeid":10,"brand":"Cannondale","model":"Scalpel","modelnum":4,"price":"4199.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C24406M_AGR.ashx","style":"cross-country"},{"bikeid":11,"brand":"Cannondale","model":"Scalpel","modelnum":5,"price":"2799.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C24516M/Variants/C24516M1002/images/coilkdzxyajdab9yawps.ashx?vs=1&d=20170623T185226Z","style":"cross-country"},{"bikeid":12,"brand":"Cannondale","model":"Trigger","modelnum":1,"price":"7749.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C22118M/Variants/C22118M10LG/images/easpinwmgfwxj6gafkqk.ashx?vs=1&d=20170314T192357Z","style":"all-mountain"},{"bikeid":13,"brand":"Cannondale","model":"Trigger","modelnum":2,"price":"5999.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C22208M/Variants/C22208M10LG/images/z6nhs5fo2idsew6h8ihb.ashx?vs=1&d=20170314T192359Z","style":"all-mountain"},{"bikeid":14,"brand":"Cannondale","model":"Trigger","modelnum":3,"price":"3999.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/C18_C22308M_ORG_V4.ashx","style":"all-mountain"},{"bikeid":15,"brand":"Cannondale","model":"Jekyll","modelnum":1,"price":"7749.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Cannondale/Global/MY18-Images/Jekyll/C18_C21118M_BBQ.ashx?vs=1&d=00010101T000000Z","style":"enduro"},{"bikeid":16,"brand":"Cannondale","model":"Jekyll","modelnum":2,"price":"5999.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C21208M/Variants/C21208M70LG/images/ca7ap74qr1snhjdyn19b.ashx?vs=1&d=20170314T192350Z","style":"enduro"},{"bikeid":17,"brand":"Cannondale","model":"Jekyll","modelnum":3,"price":"4199.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C21308M/Variants/C21308M50LG/images/qkdlpunrdhubjcn8lt6e.ashx?vs=1&d=20170314T192353Z","style":"enduro"},{"bikeid":18,"brand":"Cannondale","model":"Jekyll","modelnum":4,"price":"3199.99","type":"mountain","picture":"http://cf-prd.cannondale.com/~/media/Images/Dorel/Products/Bikes/C21408M/Variants/C21408M10LG/images/eklfd3frtwe76oyjn0li.ashx?vs=1&d=20170314T192355Z","style":"enduro"},{"bikeid":3,"brand":"Cannondale","model":"Habit","modelnum":2,"price":"4499.99","type":"mountain","picture":"http://www.cannondale.com/~/media/Images/Dorel/Cannondale/Common/MY18%20Bikes/Mountain/C18_C23238M_GRY.ashx","style":"trail"}]
    }
  }
  

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  reset(){
    this.setState({
      bikes: this.state.originalList
    })
  }
  
  onShuffleClick(){
    this.setState({
      bikes: this.shuffle(this.state.bikes.slice())
    });
  }
  
  rotate(){
    var tempArr = this.state.bikes.slice();
    tempArr.push(tempArr.shift());
    this.setState({
      bikes: tempArr
    })
  }
  
  remove(index){
    var tempArr = this.state.bikes.slice();
    tempArr.splice(index, 1);
    this.setState({
      bikes: tempArr
    })
  }
  render(){
    var bikes= this.state.bikes.map((bike, i) =>  
      <div key={bike.bikeid} className='bike-container'>
        <img className='bike-image' src={bike.picture} alt={bike.model+' '+bike.brand}/>
        <div>
          <h1 className='bike-model'>{bike.model}</h1>
          <h2 className='bike-brand'>{bike.brand}</h2>
          <h4 onClick={_=>this.remove(i)} className='delete-button'>DELETE</h4>
        </div>
      </div>)
    return(
      <div>
        <div className='button-container'>
          <button className='shuffle-button' onClick={_=>this.onShuffleClick()}>Shuffle</button>
          <button className='shuffle-button' onClick={_=>this.rotate()}>rotate</button>
          <button className='shuffle-button' onClick={_=>this.reset()}>reset</button>
        </div>
        <FlipMove>
          {bikes}
        </FlipMove>
      </div>
    );
  }
}


export default App;
