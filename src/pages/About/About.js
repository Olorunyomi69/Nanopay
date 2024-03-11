import React from "react";
import './About.css';
import ladyImage from '../../images/ladyImage.png';

const About = () => {
  return (
    <div className="about-wrapper">
      <h1>ABOUT US</h1>
      <div className="about-grid">
        <p>
          Welcome to Nanopay, where we serve as your reliable and convenient
          solution for secure mobile payments and financial management. Our
          mission is to streamline your financial transactions, providing you
          the tools to make seamless payments anytime, anywhere. Nanopay is
          reshaping the landscape of banking services, particularly in
          underserved and remote areas of Nigeria, ensuring that individuals
          have access to essential banking services at their fingertips. Our
          platform empowers users to send money, pay bills, recharge mobile
          phones, book tickets, and much more. Supporting a variety of payment
          methods, including debit cards, credit cards, bank transfers, and UPI
          (Unified Payments Interface), we believe in making financial services
          accessible and secure for everyone, regardless of location. At
          Nanopay, we are committed to delivering a seamless mobile experience
          that addresses all your financial management needs. Our platform is
          crafted to provide you with convenience, efficiency, and limitless
          possibilities, all at your fingertips. Trust in our secure platform
          for all your financial transactions. Our goal is to reach 10,000
          businesses within our first three months of operation. Nanopay invites
          you to take control of your finances and unlock your wealth potential.
          Whether you're striving for financial independence, planning for
          retirement, or seeking expert guidance on investment strategies,
          Nanopay is here to support you on your financial journey.
        </p>

        <img src={ladyImage} alt="ladyImage"/>
      </div>
    </div>
  );
};

export default About;
