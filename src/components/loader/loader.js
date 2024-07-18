import { Spin } from "antd";
import React from "react";

function Loader(props) {
  return (
    <div className="text-center">
      <div className='loading'>
        <h5> Carregando, Espere Por Favor ...</h5>
        <Spin size='large' />
      </div>
    </div>
  );
}

export default Loader;
