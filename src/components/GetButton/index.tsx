import * as React from 'react';
import IButtonProps from './entities';

import Button from 'antd/lib/button';
import 'antd/dist/antd.css';

import "./assets/style.scss";

interface IState{
    // marginleft:string,
}

export default class GetButton extends React.Component<IButtonProps,IState>{
    constructor(props: IButtonProps) {
        super(props);
        this.state = {
            // marginleft:"",
        }
        //Styles;
    }

    componentDidMount(){
        // this.setState({marginleft:this.props.marginLeft+"px"});
    }

    render() {
    return <div className="buttonContent"><Button className="button" {...this.props}>{this.props.text}</Button></div>;
    }
}

