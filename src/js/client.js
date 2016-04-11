import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import Footer from "./components/Footer";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
ReactDOM.render(<Footer/>, app);
