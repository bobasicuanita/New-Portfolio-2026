import { useContext } from "react";
import { ContactContext } from "../_context/ContactContext";

export default function useContact() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }

  return context;
}