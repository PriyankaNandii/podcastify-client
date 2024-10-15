import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../../Layout/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import {
  Box,
  Flex,
  HStack,
  useRadio,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// const like = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className={`rounded-md p-1 size-8 cursor-pointer`}>
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
//     />
//   </svg>
// );
// const dislike = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className={`rounded-md p-1 size-8 cursor-pointer`}>
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
//     />
//   </svg>
// );
// const love = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className={`rounded-md p-1 size-8 cursor-pointer`}>
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//     />
//   </svg>
// );
const reactionButton = [
  {
    icon: <AiOutlineLike />,
    action: "like",
  },
  {
    icon: <AiOutlineDislike />,
    action: "dislike",
  },
  {
    icon: <FaRegHeart />,
    action: "love",
  },
];
export default function NotificationDetails() {
  const toast = useToast();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["notificationDetails", id],
    queryFn: async () => {
      const response = await axiosPublic(`/announcements/${id}`);

      return response.data;
    },
    enabled: !!id,
  });
  const { data: isReacted, isLoading: reactionFetching } = useQuery({
    queryKey: ["reaction", id],
    queryFn: async () => {
      const response = await axiosPublic(`/notification-reaction/${id}`);

      return response.data;
    },
  });

  if (isLoading || reactionFetching) {
    return <Loader />;
  }

  const checkReactedBefore = isReacted.find(
    (person) => person.email === user.email
  );

  const { findAnnouncement, findPerson } = data;
  const { title, description, _id } = findAnnouncement || {};
  const { name } = findPerson || {};

  const reactions = async (action) => {
    const obj = {
      react: action,
      postId: _id,
      name: user.displayName,
      email: user.email,
    };

    if (checkReactedBefore?.email === user.email) {
      toast({
        title: "Sorry!",
        description: "You have already reacted",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    try {
      const response = await axiosPublic.post("/notification-reaction", obj);
      if (response.data.insertedId) {
        toast({
          title: "Success!",
          description: "Successfully reacted",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-2 bg-gradient-to-r to-[#0f172a] from-[#0e1f49] h-full lg:min-h-screen text-white">
      <Helmet>
        <title>Podcastify | notification | details</title>
      </Helmet>
      <div className="w-full mx-auto md:w-1/2 text-justify p-2 md:p-4 space-y-4">
        <h1 className="font-bold">{title}</h1>
        {name ? (
          <h1>We are honorable mentioned Mr. {name}</h1>
        ) : (
          <h1>Hello @everyone</h1>
        )}
        <div className="p-2">
          <h1 className="font-black">Message</h1>
          <div>{description}</div>
        </div>

        <Flex gap="12px">
          {reactionButton.map((ele) => (
            <div
              key={ele.action}
              className={`${
                checkReactedBefore?.react === ele.action ? "bg-red-500" : ""
              } text-2xl cursor-pointer p-1 rounded-lg`}
              onClick={() => reactions(ele.action)}>
              {ele.icon}
            </div>
          ))}
        </Flex>
      </div>
      <div className="border h-96">
        <iframe src="https://streamable.com/u7rnf2" autoPlay></iframe>
      </div>
    </div>
  );
}