import Link from 'next/link'
import siteConfig from '../config/site.config'
import { FiUpload } from 'react-icons/fi'
import { BsChatSquareDots } from "react-icons/bs";
import { SearchBar } from './SearchBar';
import Image from './Image';
import Hover from './Tooltip/Tooltip';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] border-b bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md dark:border-gray-700 dark:bg-black select-none">
      <div className="mx-auto flex w-full items-center justify-between space-x-4 px-4 my-1">
        <div className="flex items-center space-x-2 py-2 dark:text-white md:p-2 select-none">
          <Link href="/" className="flex items-center space-x-2" passHref>
            <Image src={siteConfig.icon} alt="icon" width={40} height={40} />
            <span className="hidden font-bold sm:block">{siteConfig.title}</span>
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-1 md:space-x-4 md:flex-initial">
          <div className='border dark:border-gray-700 rounded-md py-2 px-2'>
            <Hover tipChildren="Request & Feedback">
              <Link
                href={`https://t.me/${siteConfig.telegram}`}
                target="_blank"
                aria-label="Request & Feedback Here"
                className='text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'>
                <BsChatSquareDots className="h-4 w-4" />
              </Link>
            </Hover>
          </div>
          <div className='border dark:border-gray-700 rounded-md py-2 px-2'>
            <Hover tipChildren="Upload">
              <Link
                href={siteConfig.upload}
                target="_blank"
                aria-label="Upload Files Here"
                className='text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white'>
                <FiUpload className="h-4 w-4" />
              </Link>
            </Hover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// import Link from 'next/link'
// import siteConfig from '../config/site.config'
// import { SearchBar } from './SearchBar';
// import Image from './Image';
// import UserCard from './Cards/UserCard';

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-[100] border-b bg-white bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md dark:border-gray-700 dark:bg-black select-none">
//       <div className="flex w-full items-center my-1 px-2 md:px-6">
//             <Link href="/" passHref>
//             <Image src={siteConfig.icon} alt="icon" width={40} height={40} />
//             </Link>
//         <div className="flex-grow flex justify-center ml-1">
//           <SearchBar />
//         </div>
//         <div className="ml-2">
//          <UserCard />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
