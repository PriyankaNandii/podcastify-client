import { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = "7ff77a961dac45babe0ad7f5231a0b86";
const BASE_URL = "http://localhost:5000";

const Podcaster = ({ channelName, photoURL }) => {
    const [isBroadcasting, setIsBroadcasting] = useState(false);
    const [localAudioTrack, setLocalAudioTrack] = useState(null);
    const client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    const [broadcastUid, setBroadcastUid] = useState(null);

    useEffect(() => {
        return () => {
            if (isBroadcasting) {
                stopBroadcast();
            }
        };
    }, [isBroadcasting]);

    const startBroadcast = async () => {
        if (isBroadcasting) return;

        try {
            const uid = Math.floor(Math.random() * 10000);
            setBroadcastUid(uid);
            const response = await fetch(`${BASE_URL}/generate-token?channelName=${channelName}&uid=${uid}&role=publisher`);
            const data = await response.json();
            const token = data.token;
            // Join the Agora channel
            await client.join(APP_ID, channelName, token, uid);
            // **Set user role to host**
            await client.setClientRole("host");

            // Create microphone audio track and publish it
            const localTrack = await AgoraRTC.createMicrophoneAudioTrack();
            setLocalAudioTrack(localTrack);
            await client.publish([localTrack]);

            setIsBroadcasting(true);
            console.log("Broadcasting started");
            console.log('Start Client:', client);

            console.log('Start Channel:', channelName, uid);

            await fetch(`${BASE_URL}/start-broadcast`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ channelName, uid }),
            });

        } catch (error) {
            console.error("Error starting broadcast:", error);
            alert("Failed to start the broadcast. Please try again.");
        }
    };

    const stopBroadcast = async () => {
        if (!isBroadcasting) return;
        const uid = broadcastUid;

        if (localAudioTrack) {
            localAudioTrack.stop();
            localAudioTrack.close();
        }
        await client.leave();
        setIsBroadcasting(false);
        console.log("Broadcasting stopped");
        console.log('FFF:', channelName, uid);

        await fetch(`${BASE_URL}/stop-broadcast`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ channelName, uid }),
        });
    };

    return (
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg mx-auto text-white">
            <div className="flex justify-center mb-4">
                <img
                    src={photoURL}
                    alt="Podcast Audio"
                    className="w-24 h-24 object-cover rounded-full shadow-md"
                />
            </div>
            {!isBroadcasting ? (
                <div className="text-center">
                    <p className="text-xl font-semibold mb-4">You are not broadcasting yet.</p>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
                        onClick={startBroadcast}
                    >
                        Start Broadcasting
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-xl font-semibold mb-4">
                        Broadcasting on channel: <span className="text-yellow-300">{channelName}</span>
                    </p>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
                        onClick={stopBroadcast}
                    >
                        Stop Broadcasting
                    </button>
                </div>
            )}
        </div>
    );
};

export default Podcaster;
