import { useRef, useState } from "react";

function ScreenCapture() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  async function startCapture() {
    try {
      const s = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false,
        preferCurrentTab: true,
      });
      videoRef.current.srcObject = s;
      setStream(s);

      // Auto-stop when user clicks "Stop sharing" in browser UI
      s.getTracks()[0].onended = stopCapture;
    } catch (err) {
      console.error("Capture cancelled or denied:", err);
    }
  }

  function stopCapture() {
    stream?.getTracks().forEach((t) => t.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    setStream(null);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
      <h2>Screen Capture</h2>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: 800,
          height: 450,
          background: "#111",
          border: "2px solid #444",
          borderRadius: 8,
          objectFit: "contain",
        }}
      />
      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <button onClick={startCapture} disabled={!!stream}>Start Capture</button>
        <button onClick={stopCapture} disabled={!stream}>Stop</button>
      </div>
    </div>
  );
}


function FullStack1(){
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);

    async function startCapture() {
        try {
        const s = await navigator.mediaDevices.getDisplayMedia({
            video: { cursor: "always" },
            audio: false,
            preferCurrentTab: true,
        });
        videoRef.current.srcObject = s;
        setStream(s);

        // Auto-stop when user clicks "Stop sharing" in browser UI
        s.getTracks()[0].onended = stopCapture;
        } catch (err) {
        console.error("Capture cancelled or denied:", err);
        }
    }

    function stopCapture() {
        stream?.getTracks().forEach((t) => t.stop());
        if (videoRef.current) videoRef.current.srcObject = null;
        setStream(null);
    }


    return(
        <div className="screenCard3">
            <div>
                <br /><br /><br />
                <div className='titleHead'>
                    <h1 className='title'>-- THIS WEBSITE RIGHT HERE! --</h1> <br />
                    <h3>tools used: REACT.js , FIGMA , strawberry milkshake </h3>
                    <h2>a web page displaying past work and accomplishment for self advertisement
                        <br/>not too shabby huh?
                    </h2>
                </div>
                <h2>Screen Capture</h2>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    style={{
                    width: 800,
                    height: 450,
                    background: "#382828",
                    border: "2px solid #444",
                    borderRadius: 8,
                    objectFit: "contain",
                    }}
                />
                <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
                    <button onClick={startCapture} disabled={!!stream}>Start Capture</button>
                    <button onClick={stopCapture} disabled={!stream}>Stop</button>
                </div>
            </div>
        </div>
    )
}
export default FullStack1