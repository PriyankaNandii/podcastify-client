import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import logo from "../../../assets/images/newlogo.png";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";

export default function AddVideo() {
  const axiosPublic = useAxiosPublic();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleUpload = async (values) => {
    const file = values.videoFile[0];
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axiosPublic.post("/video-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 p-4 min-h-screen h-full brightness-75">
      <img src={logo} alt="" className="h-9 rounded-lg" />
      <div className="container mx-auto flex flex-col items-center px-4 py-5 text-center md:py-10 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Welcome to podcastify{" "}
          <span className="dark:text-violet-600">Upload video</span> to present
          your creativity
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">
            Learn more
          </button>
          <button
            onClick={onOpen}
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 dark:text-gray-50">
            Add video
          </button>
        </div>
      </div>
      <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add video</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form
                action=""
                onSubmit={handleSubmit(handleUpload)}
                className="space-y-6">
                <FormControl>
                  <FormLabel>Or choose a file form local folder</FormLabel>
                  <input
                    type="file"
                    name="file"
                    accept="video/*"
                    {...register("videoFile")}
                  />
                </FormControl>
                <ModalFooter>
                  <Button variant="ghost" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    mr={3}>
                    Publish
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </section>
  );
}
