import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";

export default function MakeAnnouncement() {
  const toast = useToast();
  const axiosPublic = useAxiosPublic();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    try {
      await axiosPublic.post("/make-announcement", values);
      toast({
        title: "Announcement successful",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      return;
    } catch (error) {
      toast({
        title: "Failed!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
  }

  return (
    <div className="flex items-center justify-center py-5 flex-col bg-gradient-to-l  from-[#2a3d53] from-15% via-[#2f2a61] via-50% to-[#2a3d53] to-80% text-white h-full lg:min-h-screen">
      <Helmet>
        <title>Podcastify | dashboard | make-announcement</title>
      </Helmet>
      <Heading>Make announcement</Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 p-2 space-y-5">
        <FormControl isInvalid={errors.title}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Title"
            {...register("title", {
              required: "Title is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.title}>
          <FormLabel htmlFor="email">Targeted Email</FormLabel>
          <Input
            id="email"
            title="Enter targeted email"
            placeholder="email"
            {...register("email")}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            placeholder="Here is a sample placeholder"
            {...register("description")}
          />
        </FormControl>
        <Button
          className="float-right"
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
