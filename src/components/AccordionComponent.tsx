"use client";
import React from "react";
import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "@/components/AccordionItem"; // Asegúrate de tener el componente AccordionItem

interface AccordionProps {
  questions: { question: string; answer: string }[];
}

const AccordionComponent: React.FC<AccordionProps> = ({ questions }) => {
  return (
    <Accordion>
      {questions.map((item, index) => (
        <AccordionItem key={index} header={item.question} initialEntered>
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
