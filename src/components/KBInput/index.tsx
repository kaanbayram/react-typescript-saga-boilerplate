import * as React from 'react';
import IKBInputProps from './entities';

import Input from 'antd/lib/input';
import 'antd/dist/antd.css';

import "./assets/styles.scss";

interface IState{
    // marginleft:string,
}

export default class GetButton extends React.Component<IKBInputProps,IState>{
    constructor(props: IKBInputProps) {
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
    return <div className="inputContent"><Input className="input" {...this.props} /></div>;
    }
}

