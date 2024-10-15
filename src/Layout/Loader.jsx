import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center p-4">
      <FadeLoader size={80} color="#36d7b7" />
    </div>
  );
};

export default Loader;
