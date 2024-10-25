import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { IoIosNotifications } from "react-icons/io";
import useDataFetcher from "../../Hooks/useDataFetcher";
import Loader from "../../Layout/Loader";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import { LuBellRing } from "react-icons/lu";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OurPodcasters = () => {
  const toast = useToast();
  const { data, isLoading } = useDataFetcher("users");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mySubs, setMySubs] = useState([]);
  const [totalSubscriber, setTotalSubscriber] = useState([]);

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const mySubscription = async () => {
      try {
        const response = await axiosPublic.get("/totalSubscriber");
        setTotalSubscriber(response.data);
      } catch (error) {
        console.log(error);
      }
      try {
        const response = await axiosPublic.get(
          `/mySubscription/${user?.email}`
        );
        setMySubs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    mySubscription();
  }, [user?.email]);

  if (isLoading) {
    return <Loader />;
  }

  const podcasters = data.filter((podcast) => podcast.role === "podcaster");
  const listOfMySubscriptionId = mySubs.map((a) => a.podcasterId);

  const handleSubscription = async (id, uid) => {
    const collectedData = {
      podcasterId: id,
      podcasterUid: uid,
      subscriberEmail: user?.email,
    };
    if (!user?.email) {
      onOpen();
      return;
    }
    try {
      const response = await axiosPublic.post("/subscriptions", collectedData);
      if (response.data === "Already subscribed") {
        toast({
          title: "You have already subscribe",
          status: "error",
          position: "top-right",
        });
        return;
      } else {
        setMySubs((prevSubs) => [...prevSubs, collectedData]);
        setTotalSubscriber((prevSubs) => [...prevSubs, { podcasterUid: uid }]);
        toast({
          title: "Subscription successful",
          status: "success",
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-24 bg-black md:px-20 px-5">
      <h2 className="text-center text-red-500 text-lg p-3 uppercase tracking-wide">
        Our Team
      </h2>
      <h1 className="text-center text-white text-2xl lg:text-5xl font-bold mb-10">
        Meet with Our Podcasters
      </h1>

      <div className=" gap-8 grid lg:grid-cols-4 md:grid-cols-2 justify-center my-10">
        {podcasters.map((podcaster) => (
          <div
            key={podcaster?._id}
            className="flex flex-col justify-center max-w-xs w-full p-6 shadow-lg rounded-xl bg-[#1a1a1a] hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src={
                podcaster.userPhotoUrl ||
                "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
              }
              alt=""
              className={
                podcaster.userPhotoUrl
                  ? `w-26 h-26 mx-auto rounded-full dark:bg-gray-500`
                  : `w-32 h-32 mx-auto rounded-full dark:bg-gray-500`
              }
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold text-white">
                {podcaster.name}
              </h2>
              <p className="text-sm text-gray-400">{podcaster.role}</p>
            </div>

            <div className="flex justify-center mt-3 space-x-4">
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* GitHub Icon */}
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Twitter Icon */}
                </svg>
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Email Icon */}
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-around p-3 rounded-md bg-[#2b2b2b]">
              <button
                onClick={() => handleSubscription(podcaster._id, podcaster.uid)}
                className={`px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                  listOfMySubscriptionId.includes(podcaster._id)
                    ? "bg-green-500 hover:bg-green-400"
                    : "bg-red-600 hover:bg-red-500"
                } text-white`}
              >
                {listOfMySubscriptionId.includes(podcaster._id)
                  ? "Subscribed"
                  : "Subscribe"}
              </button>
              {/*  <h1 className="text-sm font-bold text-white text-center flex-1 mx-2">
                {
                  totalSubscriber.filter(
                    (subscriber) => subscriber.podcasterUid === podcaster.uid
                  ).length
                }{" "}
                subscribers
              </h1> */}
              <div className="text-3xl text-white">
                {listOfMySubscriptionId.includes(podcaster._id) ? (
                  <LuBellRing />
                ) : (
                  <IoIosNotifications />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Oops sorry!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className="text-lg font-mono">
              You need to login first to subscribe to your favorite podcaster
            </h1>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Later
            </Button>
            <Button colorScheme="blue" ml={3}>
              <Link to="/login">Login</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OurPodcasters;
