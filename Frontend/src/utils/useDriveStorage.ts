import axios from "axios";
import { useEffect, useState } from "react";

const useDriveStorage = (token:string) => {
  const [quota, setQuota] = useState({ used: 0, remaining: 0, total: 0, percentageUsed: 0 });

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://graph.microsoft.com/v1.0/me/drive", config)
      .then((res) => {
        const used = res.data.quota.used;
        const total = res.data.quota.total;
        const remaining = total - used;
        const percentageUsed = (used / total) * 100; // Percentage of used storage
        setQuota({ used, remaining, total, percentageUsed });
        // console.log(res.data);
      });
  }, [token]);

  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  return { quota, formatBytes };
};

export default useDriveStorage;

// import axios from "axios";
// import { useEffect } from "react";
// // import { useDispatch, useSelector } from 'react-redux';
// import { setQuota } from "../redux/features/useDriveStorageSlice";
// import { useAppDispatch, useAppSelector, RootState } from "../redux/store";

// const useDriveStorage = (token:string) => {
//   const dispatch = useAppDispatch();
//   const quota = useAppSelector((state:RootState) => state.driveStorage.quota);

//   useEffect(() => {
//     const config = {
//       headers: { Authorization: `Bearer ${token}` },
//     };
//     axios
//       .get("https://graph.microsoft.com/v1.0/me/drive", config)
//       .then((res) => {
//         const used = res.data.quota.used;
//         const total = res.data.quota.total;
//         const remaining = total - used;
//         const percentageUsed = (used / total) * 100; // Percentage of used storage
//         dispatch(setQuota({ used, remaining, total, percentageUsed }));
//       });
//   }, [token]);

//   const formatBytes = (bytes, decimals = 2) => {
//     if (!+bytes) return "0 Bytes";

//     const k = 1024;
//     const dm = decimals < 0 ? 0 : decimals;
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];


//     const i = Math.floor(Math.log(bytes) / Math.log(k));

//     return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
//   };

//   return { quota, formatBytes };
// };

// export default useDriveStorage;
