import React, { useEffect, useState } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Dialog, Slide } from "@mui/material";
import handleSpeak from "../function/handleSpeak";
import image from "../images/animation.gif";
const appId = "8b461380-b198-4740-b55b-3b1456820091";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Assistant = () => {
  const [assistantResponse, setAssistantResponse] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false); // need to set global state
  const commands = [
    {
      command: ["小當家", "小單"],
      callback: () => {
        handleSpeak("什麼事？");
        setAssistantResponse("什麼事？");
        setIsDialogOpen(true);
      },
      isFuzzyMatch: true, // 模糊匹配
      fuzzyMatchingThreshold: 0.8, // 高於 80% 才確定
      bestMatchOnly: true,
    },
    {
      command: ["關閉", "關掉"],
      callback: () => {
        if (isDialogOpen) {
          setIsDialogOpen(false);
        }
      },
    },
  ];

  const {
    transcript,
    // listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ commands });

  console.log(transcript.split(" ").pop());

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Oops!! 瀏覽器不支援</span>;
    }
    if (!isMicrophoneAvailable) {
      return <span>回上一頁</span>;
    }
    if (browserSupportsContinuousListening) {
      // polyfill 只能聽英文 ...
      // SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
      SpeechRecognition.startListening({ continuous: true, language: "zh-TW" });
    } else {
      SpeechRecognition.startListening({ language: "zh-CN" });
    }
  }, []);

  const handleDialogOpen = () => setIsDialogOpen(true ? false : true);

  return (
    <>
      <Dialog
        onClose={handleDialogOpen}
        open={isDialogOpen}
        // open={true}
        fullWidth
        onBackdropClick={handleDialogOpen}
        TransitionComponent={Transition}
      >
        {/* <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}

        <p className="color-text">{transcript.split(" ").pop()}</p>
        <p className="color-primary">{assistantResponse}</p>
        {/* <TextToSpeech text={transcript} /> */}
        <img className="voice-recognition" src={image} alt="..." />
      </Dialog>
    </>
  );
};

export default Assistant;
