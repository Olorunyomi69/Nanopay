import React, { useState } from "react";
import faqImage from "./faqImage.png";
import faqIcon from "./faqIcon.png";
import "./faq.css";
const faqText = [
  { text: "01. How can I get started with Nanopay?" },
  { text: "02. What payment methods does Nanopay support?" },
  { text: "03. How does Nanopay benefit users in underserved areas?" },
  { text: "04. How secure are transactions on Nanopay?" },
  { text: "05. How can businesses get involved with Nanopay?" },
];
const Faq = () => {
    const [showText, setShowText] = useState({});

    const toggleText = ( item) => {
      setShowText(item);
    };
  return (
    <div className="faq-wrapper">
      <div className="faq-image">
        <img src={faqImage} alt="faq" />
      </div>

      <div className="faq-text-wrapper">
      <h1>Frequently asked questions</h1>
        {faqText.map((items, idx) => {
          return (
            <div className="faq-text" key ={idx}>
              <div className="faq">
                <p>{items.text}</p>
              </div>
              <button className="text-image" onClick={() => toggleText(items)}>
                <img src={faqIcon} alt="plus-icon" />
              </button>
              {showText.text === items.text  && <p>Additional text to show onClick</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
