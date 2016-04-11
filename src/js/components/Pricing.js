import React from "react";


export default class Pricing extends React.Component {

  render() {

    return (

      <pricing dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_pricing.js", async: false}).responseText}}>
      </pricing>
    );
  }
}
