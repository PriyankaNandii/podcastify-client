import Statistics from "./Statistics/Statistics";
import useCheckUserRole from "../../Hooks/useCheckUserRole";
import UserDashoard from "./Statistics/UserDashoard";
export default function MiddleNavbar() {
  const { role, isPending } = useCheckUserRole();
  return (
    <>
      {isPending ? (
        <h1 className="text-center text-lg">Please wait...</h1>
      ) : (
        <>
          {role === "admin" && (
            <>
              <Statistics />
            </>
          )}
          {role === "podcaster" && <UserDashoard></UserDashoard>}
          {role === "user" && <UserDashoard></UserDashoard>}
        </>
      )}
    </>
  );
}
