import React from "react";

import Navbar from "./Navbar";
import TopText from "./TopText";
import Graph from "./Graph";
import TestimonyCarousel from "./TestimonyCarousel";
import Pricing from "./Pricing";
import EmailSignUp from "./EmailSignUp";
import Footer from "./Footer";

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "Welcome",
  //   };
  // }
  //
  // changeTitle(title) {
  //   this.setState({title});
  // }

  render() {
    return (
      <div>
        // <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <navbar />
        <toptext />
        <graph />
        <testimonycarousel />
        <pricing />
        <emailsignup />
        <footer />
      </div>
    );
  }
}
