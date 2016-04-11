import React from "react";


export default class TopText extends React.Component {

  render() {

    return (

      <toptext dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_topText.js", async: false}).responseText}}>
      </toptext>
    );
  }
}
