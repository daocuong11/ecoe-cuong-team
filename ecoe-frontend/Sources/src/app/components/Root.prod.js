import React, { Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import theme from "constants/theme";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainPage from "../MainPage";

import { GET_PRODUCTS } from "./comp-libs/globals/GridCard/GridCardGQ/query";
import { client } from "graphConfig/config/config.js";
import { searchCriticals } from "constants/productSearchCritical";
import ErrorBoundary from "./comp-libs/globals/ErrorBoundary";

import { } from '../components/comp-libs/search';


const Root = () => {

  client.query({ query: GET_PRODUCTS }).then(result => console.log(result));
  if (localStorage.getItem("searchCriticals") === undefined || localStorage.getItem("searchCriticals") === null)
    localStorage.setItem("searchCriticals", JSON.stringify(searchCriticals));
  if (localStorage.getItem("productType") === undefined || localStorage.getItem("productType") === null)
    localStorage.setItem("productType", 'PROJECT');
  if (localStorage.getItem("domainName") === undefined || localStorage.getItem("domainName") === null)
    localStorage.setItem("domainName", 'ecoe');
    
    
  return (
    <ApolloProvider client={client}>
      
        <ThemeProvider theme={theme}>
          <Fragment>            
            <Router>                           
                <MainPage />              
            </Router>
          </Fragment>

        </ThemeProvider>
     
    </ApolloProvider>
  );
};

export default Root;
