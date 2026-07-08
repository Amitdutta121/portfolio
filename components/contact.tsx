"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { cardSurface, sectionShell } from "./design-system";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className={`${sectionShell} max-w-[38rem] text-center`}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-4 text-sm leading-7 text-gray-600 dark:text-white/65 sm:text-base">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          amitdutta121@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className={`${cardSurface} mt-8 flex flex-col p-5 dark:text-black sm:p-6`}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-xl border border-black/10 bg-white px-4 transition-all outline-none focus:border-black/20 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-44 rounded-xl border border-black/10 bg-white p-4 transition-all outline-none focus:border-black/20 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
