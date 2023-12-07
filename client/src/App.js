import React, { Component, FlatList } from "react";
import logo from './AniMate.png';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res}))
      .catch(err => err);
  }
  componentDidMount(){
    this.callAPI();
  }
  
  item = (
    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
      
    </div>  
  );
render(){
  return (
    
    <body id="page-top">
      <nav class = "navbar navbar-expanded-lg bg-secondary text-uppercase fixed-top" id= "mainNav">
        <div class = "container">
          <div class = "col-sm-2">
            <img class = "img-fluid" src = {logo} href = "#page-top"/>
          </div>
        </div>
      </nav>
      <section class = "page-section" id="animeList">
        <div>

        </div>
      </section>
      
    </body>
    



      
  );
  }
}

export default App;