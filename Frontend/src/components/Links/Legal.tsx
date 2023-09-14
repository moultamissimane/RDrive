// import Link from 'next/link';
// import { useState } from 'react';
// import { Popover } from '@headlessui/react';
// const Legal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handlePopoverOpen = () => {
//     setIsOpen(true);
//   };

//   const handlePopoverClose = () => {
//     setIsOpen(false);
//   };

//   const legalLinks = [
//     { text: 'About US', url: '/about' },
//     { text: 'Privacy Policy', url: '/privacy-policy' },
//     { text: 'Terms of Service', url: '/terms' },
//   ];

//   return (
//     <Popover className="relative">
//       {({ open }) => (
//         <>
//           <Popover.Button
//             className={`text-black dark:text-white text-sm font-medium focus:outline-none`}
//             onClick={handlePopoverOpen}
//           >
//             Legal
//           </Popover.Button>

//           {isOpen && (
//             <Popover.Panel
//               className="absolute z-10 w-40  mb-4 py-2 px-2 bg-white dark:bg-black border dark:border-gray-700 rounded-md shadow-lg mt-2 md:mt-3"
//               style={{ top: 'auto', left: '50%', transform: 'translateX(-50%)', bottom: '100%' }}
//               onClick={handlePopoverClose}
//             >
//               <div className="flex flex-col space-y-2">
//                 {legalLinks.map(({ text, url }) => (
//                   <Link key={url} href={url} legacyBehavior >
//                       <span className="flex px-2 items-center text-black dark:text-white text-sm hover:text-white cursor-pointer hover:bg-gray-700 rounded">{text}</span>
//                   </Link>
//                 ))}
//               </div>
//             </Popover.Panel>
//           )}
//         </>
//       )}
//     </Popover>
//   );
// };

// export default Legal;

import Link from 'next/link';
// import { useState } from 'react';
import { useAppDispatch, useAppSelector, RootState } from '../../redux/store';
import { setIsOpen } from '../../redux/features/LegalSlice';
import { Popover } from '@headlessui/react';

const Legal = () => {
 const dispatch = useAppDispatch()
  // const [isOpen, setIsOpen] = useState(false);
const isOpen = useAppSelector((state:RootState)=>state.legal.isOpen)

const handlePopoverOpen = () => {
  dispatch(setIsOpen(true));
};

const handlePopoverClose = () => {
  dispatch(setIsOpen(false));
};

const legalLinks = [
  { text: 'About US', url: '/about' },
  { text: 'Privacy Policy', url: '/privacy-policy' },
  { text: 'Terms of Service', url: '/terms' },
];

return (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={`text-black dark:text-white text-sm font-medium focus:outline-none`}
          onClick={handlePopoverOpen}
        >
          Legal
        </Popover.Button>

        {isOpen && (
          <Popover.Panel
            className="absolute z-10 w-40 mb-4 py-2 px-2 bg-white dark:bg-black border dark:border-gray-700 rounded-md shadow-lg mt-2 md:mt-3"
            style={{ top: 'auto', left: '50%', transform: 'translateX(-50%)', bottom: '100%' }}
            onClick={handlePopoverClose}
          >
            <div className="flex flex-col space-y-2">
              {legalLinks.map(({ text, url }) => (
                <Link key={url} href={url} legacyBehavior>
                  <span className="flex px-2 items-center text-black dark:text-white text-sm hover:text-white cursor-pointer hover:bg-gray-700 rounded">
                    {text}
                  </span>
                </Link>
              ))}
            </div>
          </Popover.Panel>
        )}
      </>
    )}
  </Popover>
);
};

export default Legal;