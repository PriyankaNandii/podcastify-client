import { useContext } from "react";
import Podcaster from "../../components/Broadcasting/Podcaster";
import { AuthContext } from "../../Providers/AuthProviders";

const LivePodcaster = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const channelName = user?.displayName || "My Channel";
  const photoURL = user?.photoURL;
  return (
    <div>
      <Podcaster channelName={channelName} photoURL={photoURL} />
    </div>
  );
};

export default LivePodcaster;
