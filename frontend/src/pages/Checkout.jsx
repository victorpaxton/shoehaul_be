import React from "react";
import BillingDetail from '../components/Checkout/BillingDetail';
import ShoeItem from '../components/Checkout/ShoeItem';
import Summary from '../components/Checkout/Summary';
import { Header, Footer } from "../components";
import { ContextProvider } from "../data/Context";
const Checkout = () => {

  return (
    <>
      <Header/>
      <div className='mt-20 pt-5 ml-14 mr-20 grid grid-cols-4'>
        <BillingDetail/>
        <div className="mt-20 pt-3">
          <ContextProvider><Summary/></ContextProvider>
          <ContextProvider><ShoeItem/></ContextProvider>
        </div>
      </div>
      <Footer/>
    </>
    );
};

export default Checkout;