import React from 'react';
import siteConfig from '../config/site.config';
import Link from 'next/link';
import Storage from './Storage';
import SocialFooter from './Links/SocialFooter';
import FooterLinks from './Links/footerLinks';
import { motion } from 'framer-motion';
import Image from './Image';


const Footer = ({token}) => {
    
  return (
    <footer className="mx-auto w-full border-t dark:border-gray-700 font-medium text-black dark:text-white">
      <div className="flex justify-center py-2 px-2">
        <FooterLinks />
      </div>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="flex flex-col md:flex-row items-center justify-between mx-2 py-4 md:py-6">
        <div className="md:order-2 text-center md:text-left mb-4 md:mb-0">
          <SocialFooter />
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Storage token={token}/>
        </div>
        <div className="md:order-3 text-center md:text-right">
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
          >
          <Link href="/" passHref >
            <div className="flex items-center text-xs md:text-sm">
              <Image src={siteConfig.icon} alt={siteConfig.title} width={30} height={30} />
              <span className="ml-2">&copy; 2020 - {new Date().getFullYear()} {siteConfig.footer} &reg; Global Inc.</span>
            </div>
          </Link>
        </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
