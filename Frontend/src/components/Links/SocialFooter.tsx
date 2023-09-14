
import { VscGithub } from "react-icons/vsc";
import { RiTelegramLine, RiYoutubeLine } from 'react-icons/ri';
import Hover from '../Tooltip/Tooltip';
import { motion } from "framer-motion";
import siteConfig from "../../config/site.config";
import Link from "next/link";

function SocialFooter() {
  const socialIcons = [
    {
      href: `https://www.youtube.com/${siteConfig.youtube}`,
      icon: <RiYoutubeLine />,
      tooltip: 'YouTube',
    },
    {
      href: `https://github.com/${siteConfig.github}`,
      icon: <VscGithub />,
      tooltip: 'Github',
    },
    {
      href: `https://t.me/${siteConfig.telegram}`,
      icon: <RiTelegramLine />,
      tooltip: 'Telegram',
    }
  ];

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-center gap-x-8 text-[28px]'>
        {socialIcons.map(({ href, icon, tooltip }) => (
          <Hover tipChildren={tooltip} key={href}>
          <Link href={href} target='_blank' rel='noopener noreferrer'>
            <motion.div whileHover={{ scale: 1.2 }}>
              {icon}
            </motion.div>
          </Link>
          </Hover>
        ))}
      </div>
    </motion.div>
      </>
  );
}

export default SocialFooter;
