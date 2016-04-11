import React from "react";


export default class Navbar extends React.Component {

  render() {

    return (

      <navbar dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_navbar.js", async: false}).responseText}}>
      </navbar>
    );
  }
}
