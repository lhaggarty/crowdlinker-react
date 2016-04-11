import React from "react";


export default class TestimonyCarousel extends React.Component {

  render() {

    return (

      <testimonycarousel dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_testimonyCarousel.js", async: false}).responseText}}>
      </testimonycarousel>
    );
  }
}
