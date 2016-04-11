import React from "react";


export default class Footer extends React.Component {

  render() {

    return (

      <footer dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_footer.js", async: false}).responseText}}>
      </footer>
    );
  }
}
