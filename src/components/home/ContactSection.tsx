"use client";

import { motion } from "framer-motion";
import { container, fadeLeft } from "./animations";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_cq7ixva",
        "template_wf4cpqa",
        formRef.current,
        "sNwb_9QAaDZea89x-",
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            id: loadingToast,
          });
          formRef.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            id: loadingToast,
          });
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full mt-8 mb-12"
      id="contact"
    >
      <motion.div
        variants={fadeLeft}
        className="w-full relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-zinc-900/50 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-rose-500/5 pointer-events-none" />

        {/* Left side: copy */}
        <div className="flex-1 space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Let&apos;s build something together.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-sm">
            I&apos;m always open to discussing product design work or
            partnership opportunities. Reach out and I&apos;ll get back to you
            at the speed of light.
          </p>

          <div className="space-y-4 pt-4 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p>hello@abhirup.dev</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p>West Bengal, India</p>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="flex-1 relative z-10 border border-black/10 dark:border-white/10 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur p-6 md:p-8 shadow-xl">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-white"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-white"
                placeholder="johndoe@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-white resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}
