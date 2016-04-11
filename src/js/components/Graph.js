import React from "react";


export default class Graph extends React.Component {

  render() {

    return (

      <graph dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_graph.js", async: false}).responseText}}>
      </graph>
    );
  }
}
