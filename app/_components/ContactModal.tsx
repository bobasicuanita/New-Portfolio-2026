"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  if (typeof window === "undefined") return null;

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isDisabled = !isValidEmail(email) || message.trim() === "";

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabled || loading) return;
    setLoading(true);
    setStatus("idle");

    emailjs
      .sendForm(
        "service_wp29mqj",
        "template_f4byy47",
        formRef.current!,
        "FMOyX2fFXGCGFf9-u",
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  const handleClose = () => {
    setEmail("");
    setMessage("");
    setStatus("idle");
    setLoading(false);
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-9999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60"
            onClick={handleClose}
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
          />

          <motion.div
            className="absolute bottom-10 lg:left-1/2 lg:-translate-x-1/2 left-4 right-4 lg:w-[40%] max-h-[85vh] overflow-y-auto rounded-2xl bg-(--background-tile) border border-gray-200 dark:border-white/5 shadow-lg shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full justify-between items-center border-b border-gray-300 dark:border-white/10 p-4 px-4">
              <h2 className="text-lg text-black dark:text-(--white-color) font-[nasalization]">
                Let’s Connect
              </h2>
              <button
                onClick={handleClose}
                className="cursor-pointer text-(--gray-color) hover:text-blue-500 dark:hover:text-cyan-500 transition"
              >
                ✕
              </button>
            </div>

            <div className="px-4 py-4 pb-2">
              <form ref={formRef} onSubmit={sendEmail}>
                <input
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="outline-none text-sm w-full p-2 rounded border border-transparent bg-(--white-color) dark:bg-black/40 text-black dark:text-(--white-color) placeholder-(--gray-color) dark:placeholder-(--gray-color) mb-3 focus:border-blue-600 dark:focus:border-cyan-500"
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className="outline-none text-sm w-full p-2 rounded min-h-[120px] max-h-[250px] resize-y bg-(--white-color) dark:bg-black/40 mb-3 text-black dark:text-(--white-color) placeholder-(--gray-color) dark:placeholder-(--gray-color) focus:border border-0 focus:border-blue-600 dark:focus:border-cyan-500"
                />
                <button
                  type="submit"
                  disabled={isDisabled || loading}
                  className={`relative w-full flex items-center justify-center py-4 sm:py-2 px-3 text-sm font-[Nasalization] rounded-3xl capitalize transition duration-200 overflow-hidden
                    ${isDisabled || loading ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div
                    className={`absolute inset-0 bg-slate-500 dark:bg-[#3D3D40] rounded-3xl z-0 transition ${
                      isDisabled || loading ? "opacity-50" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 rounded-3xl pointer-events-none z-10 [background:radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_40%)] blur-sm transition ${isDisabled || loading ? "opacity-10" : "opacity-100"}`}
                  />
                  <span
                    className={`relative z-10 text-md uppercase transition ${
                      isDisabled || loading ? "opacity-60" : "opacity-100"
                    }`}
                  >
                    {loading ? "Sending..." : "Send"}
                  </span>
                </button>
                {status === "success" && (
                  <p className="text-(--green-color) text-sm mt-3 text-center">
                    Message sent successfully ✓
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3 text-center">
                    Failed to send. Try again.
                  </p>
                )}
              </form>
              <div className="w-full h-px bg-gray-300 dark:bg-white/10 my-6" />
              <h3 className="text-center text-blue-600 dark:text-cyan-500 uppercase font-[Nasalization]">
                Socials
              </h3>
              <p className="text-center text-xs text-(--gray-color) dark:text-(--white-color) mt-2">
                Building modern web experiences — follow along
              </p>
              <div className="flex mt-4 gap-4 justify-center items-center">
                <div className="py-2 flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/konstantinos-karasavvas-webdev/"
                    target="_blank"
                    className="transform text-black dark:text-(--white-color) transition-transform duration-300 hover:rotate-10"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <div className="py-2 flex flex-row gap-2 items-center">
                  <a
                    href="https://github.com/bobasicuanita"
                    target="_blank"
                    className="transform text-black dark:text-(--white-color) transition-transform duration-300 hover:rotate-10"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
