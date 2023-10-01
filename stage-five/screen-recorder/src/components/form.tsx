import { Stack, Button, Typography } from "@mui/material";
import { SwitchButton } from "./switch";
import { MicrophoneIcon, VideoCameraIcon } from "../assets";
import { useEffect, useState, useRef } from "react";

const mimeType = "video/webm";

export const Form: React.FC<{}> = () => {
    const mediaRecorder = useRef<MediaRecorder | undefined>(undefined);
    const liveVideoFeed = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState<MediaStream | undefined>();
    const [videoChunks, setVideoChunks] = useState([]);
    const [recordedVideo, setRecordedVideo] = useState<string | null>(null);

    const getMicrophonePermission = async () => {
        setRecordedVideo(null);
        if ("MediaRecorder" in window) {
            try {
                const videoConstraints = {
                    audio: false,
                    video: true,
                };
                const audioConstraints = { audio: true };
                // create audio and video streams separately
                const audioStream = await navigator.mediaDevices.getUserMedia(
                    audioConstraints
                );
                const videoStream = await navigator.mediaDevices.getUserMedia(
                    videoConstraints
                );

                //combine both audio and video streams
                const combinedStream = new MediaStream([
                    ...videoStream.getVideoTracks(),
                    ...audioStream.getAudioTracks(),
                ]);
                setStream(combinedStream);
                //set videostream to live feed player
                if (liveVideoFeed?.current) {
                    (liveVideoFeed.current as HTMLVideoElement).srcObject = videoStream;
                    console.log("I work")
                }
            } catch (err: any) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setRecordingStatus("recording");
        if (stream) {
            const media = new MediaRecorder(stream, { mimeType });
            mediaRecorder.current = media;
            mediaRecorder.current.start();
            let localVideoChunks: any = [];
            mediaRecorder.current.ondataavailable = (event) => {
                if (typeof event.data === "undefined") return;
                if (event.data.size === 0) return;
                localVideoChunks.push(event.data);
            };
            setVideoChunks(localVideoChunks);
        }
    };

    const stopRecording = () => {
        setRecordingStatus("inactive");
        mediaRecorder?.current?.stop();
        if (mediaRecorder?.current) {
            mediaRecorder.current.onstop = () => {
                const videoBlob = new Blob(videoChunks, { type: mimeType });
                const videoUrl = URL.createObjectURL(videoBlob);
                setRecordedVideo(videoUrl);
                setVideoChunks([]);
            };
        }
    };

    useEffect(() => {
        console.log(stream);
        console.log(videoChunks);
    }, [stream, videoChunks]);

    return (
        <Stack
            gap={"2rem"}
        >
            <SwitchButton
                Action="Camera"
                Icon={MicrophoneIcon}
            />
            <SwitchButton
                Action="Audio"
                Icon={VideoCameraIcon}
            />
            <Button
                onClick={getMicrophonePermission}
                sx={{
                    padding: "16px",
                    borderRadius: "var(--Inner-Radius, 12px)",
                    backgroundColor: "var(--primary-main, #120B48)",
                    ":hover": {
                        backgroundColor: "var(--primary-main, #120B48)",
                    }
                }}
            >
                <Typography
                    variant="h6"
                    component={"span"}
                    fontFamily={"Work Sans"}
                    fontWeight={500}
                    fontSize={"16px"}
                    lineHeight={"normal"}
                    color={"#FAFDFF"}
                    textTransform={"capitalize"}
                >
                    Start Recording
                </Typography>
            </Button>
            {/* <Button onClick={startRecording}>Start Recording</Button>
            <Button onClick={stopRecording}>Stop Recording</Button> */}
        </Stack>
    )
}