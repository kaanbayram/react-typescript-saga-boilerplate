import * as React from "react";
import ICardProps from "./entities/index";
import { Space, Card } from 'antd';
import './assets/styles.scss'

interface IState {
    datas: object
}

interface Props {
    datas: object;
}

interface Post {
    body: any;
    id: any;
    title: any;
    userId: any;
}

const GetCard: React.FC<any> = ({ datas }) => {
    console.log(typeof datas.datas.postsResponse);

    if (Object.keys(datas.datas.postsResponse).length !== 0 && datas.datas.postsResponse.id === undefined && typeof datas.datas.postsResponse === "object") {


        return (
            <Space className="grid" direction="horizontal">{datas.datas.postsResponse.map((element: any) => <Card title={element.title} style={{ width: 300 }}> <p>{element.body}</p></Card>)}</Space>

        )
    }
    return (<Space className="grid" direction="horizontal">
        <Card title={datas.datas.postsResponse.title} style={{ width: 300 }}>
            <p>{datas.datas.postsResponse.body}</p>
        </Card></Space>
    )

}

export default class CardComp extends React.Component<ICardProps, IState>{
    constructor(props: ICardProps) {
        super(props);

        this.state = {
            datas: {}
        }
    }


    componentDidUpdate() {
        console.log(this.props.datas);
    }



    render() {
        return (
            <div className="content">


                <GetCard datas={this.props} />
            </div >
        );
    }
}