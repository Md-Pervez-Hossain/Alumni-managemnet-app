import React from "react";
import RegisterForm from "../SignUp/RegisterForm";
import RegisterUserCard from "../SignUp/RegisterUserCard";
import TotalCharityDonation from "../../sharedComponents/TotalCharityDonation/TotalCharityDonation";
import MyDonation from "../../sharedComponents/MyDonation/MyDonation";

const Rakib = () => {
  return (
    <div>
      <TotalCharityDonation></TotalCharityDonation>
      <MyDonation></MyDonation>
    </div>
  );
};

export default Rakib;
