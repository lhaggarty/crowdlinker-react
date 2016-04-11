import React from "react";


export default class EmailSignUp extends React.Component {

  render() {

    return (

      <emailsignup dangerouslySetInnerHTML={{__html: $.ajax({type: "GET", url: "js/components/_emailSignUp.js", async: false}).responseText}}>
      </emailsignup>
    );
  }
}
