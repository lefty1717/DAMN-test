import SpeechRecognition from "react-speech-recognition";
const synth = window.speechSynthesis; // init 合成音 API
const handleSpeak = (text, rate = 0.7, pitch = 0.8) => {
  if (synth.speaking) {
    console.log("already speaking");
  }

  const speakText = new SpeechSynthesisUtterance(text);
  // 說話開始
  speakText.onstart = (e) => {
    console.log("speak start");
    // 停止語音辨識監聽
    SpeechRecognition.stopListening();
  };
  // 說話結束
  speakText.onend = (e) => {
    console.log("speak end");
    // 清除 印出的文字
    // resetTranscript();
    // 開始語音辨識監聽
    SpeechRecognition.startListening({ continuous: true });
  };

  speakText.onerror = (e) => {
    console.log(e.error);
    console.log("sth go wrong");
  };
  // select voice
  // speakText.voice = { name: "Mei-Jia", lang: "zh-TW" };
  // 速率
  speakText.rate = rate;
  // 聲音尖銳度
  speakText.pitch = pitch;

  synth.speak(speakText);
};

export default handleSpeak;
