import * as React from 'react';
import GetButton from "./components/GetButton/index";
import Card from "./components/Card/index";
import Header from "./components/Header/index";
import KBInput from "./components/KBInput/index";
import Startup from "./modules/StartupComponent/StartupContainer";

import "./assets/style.scss";


export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentWillReceiveProps(nextProps:any){
    console.log(nextProps);
  }
  render() {
    return (
      <React.Fragment>
        <Startup />
      </React.Fragment>
    );
  }
}


