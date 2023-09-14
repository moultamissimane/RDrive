import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger, Tooltip, User } from "@nextui-org/react";
import { fetchGitHubUser } from '../../utils/githubApi';
import { UserCard } from "../Cards/UserCard";

export const Avatar = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGitHubUser(username);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub user:', error);
      }
    };

    fetchData();
  }, [username]);

  if (!userData) {
    return null;
  }
  return (
    <>
    <Tooltip
      offset={10}
      classNames={{
        base: "bg-white dark:bg-gray-800 overflow-hidden",
        arrow: "bg-white dark:bg-gray-800",
      }}
     content={<UserCard username={username} />}>
      <User
            name={userData.name || ''}
            description={userData.location || ''}
            className="transition-transform hidden sm:flex"
            classNames={{
              name: "text-base font-semibold",
              description: "uppercase"
            }}
            avatarProps={{
              className: "bg-gray-200 dark:bg-gray-700",
              src: userData.avatar_url
            }} 
      />

    </Tooltip>
    <Popover
      showArrow
      offset={15}
      placement="bottom"
      classNames={{
        base: "bg-white dark:bg-gray-800 overflow-hidden",
        arrow: "bg-white dark:bg-gray-800",
      }}>
        <PopoverTrigger>
          <User
            as='button'
            name={userData.name || ''}
            description={userData.location || ''}
            className="transition-transform inline-flex sm:hidden"
            classNames={{
              name: "text-base font-semibold",
              description: "uppercase"
            }}
            avatarProps={{
              className: "bg-gray-200 dark:bg-gray-700",
              src: userData.avatar_url
            }} />
        </PopoverTrigger>
        <PopoverContent>
          <UserCard username={username} />
        </PopoverContent>
      </Popover></>
  );
};
