import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import { useForm } from "react-hook-form";
import { Button, useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const handleSendMessage = async (values) => {
    try {
      const response = await axiosPublic.post("/contact-message", values);
      if (response?.data?.insertedId) {
        toast({
          title: "Message send successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        reset();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something wrong please try again",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <div>
      <section className="bg-[#171717] dark:bg-gray-900 py-24">
        <div className="container px-6  mx-auto">
          <div className="text-center mb-10">
            <p className="font-medium text-lg text-red-800 dark:text-red-800">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-white md:text-5xl dark:text-white">
              Contact to our friendly team
            </h1>

            {/* <p class="mt-3 text-[#dededecc] text-xl dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p> */}
          </div>

          <div className="grid grid-cols-1 gap-12 mt-14 lg:grid-cols-2 md:px-20 px-5">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-white rounded-full bg-red-800 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-[#dededecc]">
                  Email
                </h2>
                <p className="mt-2 text-sm text-white dark:text-gray-400">
                  Our friendly team is here to talk.
                </p>
                <p className="mt-2 text-sm text-[#dededecc]">
                  hello@merakiui.com
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-white rounded-full bg-red-800 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-[#dededecc] dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-white dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-[#dededecc]">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-black dark:bg-gray-800 md:p-8">
              <form onSubmit={handleSubmit(handleSendMessage)}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 
                            bg-[#171717] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#171717] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#171717] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#171717] border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"></textarea>
                </div>

                <Button
                  type="submit"
                  colorScheme="red"
                  isLoading={isSubmitting}
                  float="right"
                  mt={5}>
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
