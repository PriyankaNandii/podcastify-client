import PreventUnauthorizedPerson from "../AdminRelated/preventUnauthorizedPerson";
import useCheckUserRole from "../Hooks/useCheckUserRole";
import Loader from "../Layout/Loader";

export default function PodcasterRoute({ children }) {
  const { role, isLoading } = useCheckUserRole();
  if (isLoading) {
    return <Loader />;
  }
  if (role === "podcaster") {
    return children;
  }
  return <PreventUnauthorizedPerson />;
}
