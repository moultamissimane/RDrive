import { FiUploadCloud, FiDownloadCloud } from "react-icons/fi";
import { motion } from "framer-motion";
import useDriveStorage from "../utils/useDriveStorage";

const Storage = ({ token }) => {
  const { quota, formatBytes } = useDriveStorage(token);

  return (
    <motion.div
      className="mx-auto w-64 bg-white dark:bg-black dark:shadow-gray-700 rounded-lg shadow overflow-hidden select-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiUploadCloud className="mr-2 text-black dark:text-white" />
            <p className="text-black dark:text-white text-sm font-medium">
              Used {formatBytes(quota.used)}
            </p>
          </div>
          <div className="flex items-center">
            <FiDownloadCloud className="mr-2 text-black dark:text-white" />
            <p className="text-black dark:text-white text-sm font-medium">
              Total {formatBytes(quota.total)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Storage;