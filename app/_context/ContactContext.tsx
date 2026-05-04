"use client";
import { createContext } from "react";

type ContactContextType = {
  isContactModalOpen: boolean;
  setIsContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined,
);
