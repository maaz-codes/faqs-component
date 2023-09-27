import React, { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
        <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {

  const [curOpen, setCurOpen] = useState(null);

  return (
  <div className="accordion">
    {
      data.map((element, i) => (
        <AccordionItem 
          num={i+1} 
          title={element.title} 
          text={element.text} 
          key={i}
          onOpen={setCurOpen}
          curOpen={curOpen}>

        </AccordionItem>
      ))
    }
  </div>
  );
}

function AccordionItem({ num, title, text, onOpen, curOpen }) {

    const isOpen = num === curOpen;

    function handleClick() {
        onOpen(isOpen ? null : num);
    } 

    return (
        <div className={`item ${isOpen ? "open" : null}`} onClick={handleClick}>
            <p className="number">{num < 9 ? `0${num}` : num}</p>
            <p className="title">{title} </p>
            <p className="icon"> {isOpen ? "-" : "+"} </p>
            {
                isOpen && <div className="content-box">{text}</div>
            }
        </div>
    );
}