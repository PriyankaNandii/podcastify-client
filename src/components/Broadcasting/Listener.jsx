import { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = "7ff77a961dac45babe0ad7f5231a0b86";
const BASE_URL = "http://localhost:5000";

const Listener = () => {
  const [client, setClient] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [audioTracks, setAudioTracks] = useState([]);
  const [broadcasters, setBroadcasters] = useState([]);
  const [selectedBroadcaster, setSelectedBroadcaster] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const agoraClient = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    setClient(agoraClient);

    // Connect to WebSocket
    const websocket = new WebSocket("ws://localhost:5000");
    websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "live-podcasters") {
        setBroadcasters(message.livePodcasters);
      } else if (message.type === "new-broadcaster") {
        setBroadcasters((prev) => [
          ...prev,
          { channelName: message.channelName, uid: message.uid },
        ]);
      } else if (message.type === "remove-broadcaster") {
        setBroadcasters((prev) =>
          prev.filter((broadcaster) => broadcaster.uid !== message.uid)
        );

        // Automatically stop listening if the currently selected broadcaster stops broadcasting
        if (selectedBroadcaster && selectedBroadcaster.uid === message.uid) {
          stopListening();
        }
      }
    };

    setWs(websocket);
    return () => {
      websocket.close();
    };
  }, [broadcasters, selectedBroadcaster]);

  const startListening = async (broadcaster) => {
    try {
      const uid = Math.floor(Math.random() * 10000);
      const response = await fetch(
        `${BASE_URL}/generate-token?channelName=${broadcaster.channelName}&uid=${uid}&role=subscriber`
      );
      const data = await response.json();

      await client.join(APP_ID, broadcaster.channelName, data.token, uid);

      client.on("user-published", async (user, mediaType) => {
        if (mediaType === "audio") {
          await client.subscribe(user, mediaType);
          const audioTrack = user.audioTrack;
          audioTrack.play();
          setAudioTracks((prev) => [...prev, audioTrack]);
        }
      });

      setSelectedBroadcaster(broadcaster);
      setIsListening(true);
    } catch (error) {
      console.error("Error listening to broadcaster:", error);
    }
  };

  const stopListening = async () => {
    if (!isListening) return;

    audioTracks.forEach((track) => {
      track.stop();
      track.close();
    });
    await client.leave();

    setIsListening(false);
    setSelectedBroadcaster(null);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg max-w-lg mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Live Podcasters</h2>

      <ul className="space-y-4">
        {broadcasters && broadcasters.length === 0 ? (
          <div className="text-center text-lg font-semibold text-gray-100 bg-gray-700 p-4 rounded-lg">
            No live podcasters available.
          </div>
        ) : (
          broadcasters.map((broadcaster) => (
            <li
              key={broadcaster.uid}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md text-gray-800"
            >
              <span className="text-lg font-semibold">
                {broadcaster.channelName}
              </span>
              <button
                onClick={() => startListening(broadcaster)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg"
              >
                Listen
              </button>
            </li>
          ))
        )}
      </ul>

      {isListening && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Currently listening to:{" "}
            <span className="text-indigo-600">
              {selectedBroadcaster.channelName}
            </span>
          </p>
          <button
            onClick={stopListening}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg"
          >
            Stop Listening
          </button>
        </div>
      )}
    </div>
  );
};
export default Listener;
