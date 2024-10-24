import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAuth from "../../../Hooks/useAuth";
import useDataFetcher from "../../../Hooks/useDataFetcher";
import Loader from "../../../Layout/Loader";
import "react-tabs/style/react-tabs.css";

export default function MySubscribers() {
  const { user } = useAuth();
  const { data, isLoading } = useDataFetcher("totalSubscriber");
  if (isLoading) return <Loader />;

  const mySubscribers = data.filter(
    (mySubs) => mySubs?.podcasterUid === user?.uid
  );

  return (
    <div className="flex items-center justify-center pt-5 md:text-xl bg-gradient-to-b from-[#1C144C] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% bg-gray-800 min-h-screen h-full">
      <div className="bg-white p-5 rounded-2xl">
        <Tabs>
          <TabList>
            <Tab>Total subscribers</Tab>
            <Tab>Subscribers email</Tab>
          </TabList>

          <TabPanel>
            <div className="h-64 flex items-center justify-center">
              <h2 className="font-bold text-5xl">{mySubscribers.length}</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="h-64 overflow-y-auto">
              {mySubscribers.map((subs) => (
                <h2>{subs.subscriberEmail}</h2>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
