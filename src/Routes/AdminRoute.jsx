import PreventUnauthorizedPerson from "../AdminRelated/PreventUnauthorizedPerson";
import useCheckUserRole from "../Hooks/useCheckUserRole";
import Loader from "../Layout/Loader";

export default function AdminRoute({ children }) {
  const { role, isLoading } = useCheckUserRole();
  if (isLoading) {
    return <Loader />;
  }
  if (role === "admin") {
    return children;
  }
  return <PreventUnauthorizedPerson />;
}
