"use client";
import { ReactNode, useState } from "react";
import { ContactContext } from "./ContactContext";

type ContactProviderProps = {
  children: ReactNode;
};

export default function ContactProvider({ children }: ContactProviderProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <ContactContext.Provider
      value={{ isContactModalOpen, setIsContactModalOpen }}
    >
      {children}
    </ContactContext.Provider>
  );
}
