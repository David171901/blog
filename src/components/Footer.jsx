import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { PayPalIcon } from "./Icons";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Reservados todos los derechos.</span>
        <div className="flex items-center lg:py-2">
          Apoyame <span className="text-primary dark:text-primary text-2xl px-1">&#9825;</span>
          por&nbsp;
          <Link
            href="https://devdreaming.com"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            PayPal
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
