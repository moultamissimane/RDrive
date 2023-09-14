import React from 'react';
import Legal from './Legal';
import siteConfig from '../../config/site.config';
import Hover from '../Tooltip/Tooltip';
import Link from 'next/link';

const footerLinks: { href: string; text: string; tooltip: React.ReactNode }[] =
  [
    {
      href: '/FRP',
      text: 'FRP',
      tooltip: 'FRP Files & Tool',
    },
    {
      href: '/Drivers',
      text: 'Drivers',
      tooltip: 'Android USB Flashing Driver',
    },
    {
      href: '/Flash-Tool',
      text: 'Flash Tool',
      tooltip: 'Mobile Flashing Tools',
    },
    {
      href: '/OS',
      text: 'OS Files',
      tooltip: 'Universal OS Files: Latest for Windows, Mac & Linux',
    },
    {
      href: '/iCloud',
      text: 'iCloud Bypass',
      tooltip: 'Say goodbye to iCloud locks: Unlock now.',
    },
    {
        href: '/service-center-price-list',
        text: 'Parts Price List',
        tooltip: 'All Brand Parts Service Center Price List',
      },
    {
      href: `https://status.rdrive.org/`,
      text: 'Status',
      tooltip: 'APIs Status Check',
    },
    {
      href: `${siteConfig.domain}/sitemap.xml`,
      text: 'Sitemap',
      tooltip: 'Sitemap Index URL',
    },
  ];

  function FooterLinks() {
    return (
      <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-4  items-center">
        {footerLinks.map(({ href, text, tooltip }, index) => (
          <React.Fragment key={href}>
            {index === footerLinks.length - 1 && <Legal />}
            <Hover tipChildren={tooltip}>
              <Link
                className="animated-underline text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                href={href}
              >
                {text}
              </Link>
            </Hover>
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  export default FooterLinks;