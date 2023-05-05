import React from "react";
import PaymentForEvents from "../../sharedComponents/PaymentForEvents/PaymentForEvents";
import ShowCharity from "../../sharedComponents/ShowCharity/ShowCharity";
import PaymentForCharity from "../../sharedComponents/ShowCharity/PaymentForCharity";
import CheckoutForm from "../../Dashboard/DashboardComponents/CheckoutForm/CheckoutForm";
import PaymentSuccessful from "../../sharedComponents/PaymnetSuccessfull/PaymnetSuccessfull";

const Rakib = () => {
  return (
    <div>
      <CheckoutForm />
      <PaymentSuccessful />
      
      {/* <PaymentForEvents></PaymentForEvents>
      <ShowCharity></ShowCharity>
      <PaymentForCharity></PaymentForCharity> */}
    </div>
  );
};

export default Rakib;
