import React from 'react';
import {Route } from 'react-router';
import './App.css';
import {About} from './components/about';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
  }

// ComponentDidMount is used to execute the code : https://jsonplaceholder.typicode.com/users
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
  }


  render(){

    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;


    //this.state = [{name:'Hari', age:35}, {name:'Om', age:30}];
    //this.state =[{name:'Hari', age:35}, {name:'Om', age:30}];

    return (
    <>
      {
        // this.state.map(
        //   (userInfo) => {
        //     return <>{userInfo.name}</>;
        //   }
        // )
      }

      {
        items.map((item) => ( 
        <ol key = { item.id } >
            <b> User_Name : </b> { item.username }, 
            <b> Full_Name : </b>{ item.name }, 
            <b> User_Email : </b> { item.email } 
            <b> Address : </b> { item.address.street } 
            </ol>
        ))
      }
      <About />


    </>
    )
  }
}

export default App;
