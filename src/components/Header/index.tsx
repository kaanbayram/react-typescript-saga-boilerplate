import * as React from "react";
import IHeaderProps from "./entities";
import "./assets/styles.scss";

interface IState{

}

export default class Header extends React.Component<IHeaderProps,IState>{
    constructor(props:IHeaderProps){
        super(props);
        this.state={

        }

    }

    render(){
        return <header className="header">{this.props.text}</header>;
    }
}