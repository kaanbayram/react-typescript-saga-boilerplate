import React, { FunctionComponent, useState,useEffect } from "react";
import GetButton from "../../components/GetButton/index";
import Card from "../../components/Card/index";
import Header from "../../components/Header/index";
import KBInput from "../../components/KBInput/index";

interface Props {
  onSearch(type: string, id: string): void;
  onClear(): void;
  posts: any;
  isLoading: boolean;
  error: any;
}

const Startup: FunctionComponent<Props> = props => {
  const { onSearch, onClear,posts, isLoading, error } = props;
  const [type, setType] = useState("posts");
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(props);
  });

  return (
    <div>
      {/* <ExampleComponent /> */}
      <Header text="React-TypeScript Redux-Saga Boilerplate" />
      <br />
      <form>
        <br />
        <KBInput placeholder="Data Type" value="posts"  />
        {/* onChange={e => setType(e.target.value)} */}
        <br />
        <KBInput placeholder="Bring Id or just click to Button" value={id} onChange={e => setId(e.target.value)} />
        <br />
        <GetButton type="primary" marginLeft="500px" text="Get Data"
          onClick={() => {
            onSearch(type, id);
            //setType("");
            setId("");
          }} />
        <br />
      </form>
      <Card datas={props.posts.postsResponse} />
    </div>
  );
};

export default Startup;
