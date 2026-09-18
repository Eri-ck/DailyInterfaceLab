import { useRef, useState, useEffect } from "react";

export default function ToneVisualizer() {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const oscillatorRef = useRef(null);
  const animationRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(440);

  function startTone() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;

    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    gain.connect(analyser);
    analyser.connect(ctx.destination);
    gain.gain.value = 0.15;

    oscillator.start();

    audioContextRef.current = ctx;
    oscillatorRef.current = oscillator;
    analyserRef.current = analyser;
    setIsPlaying(true);
    drawWaveform();
  }

  function stopTone() {
    oscillatorRef.current?.stop();
    audioContextRef.current?.close();
    cancelAnimationFrame(animationRef.current);
    setIsPlaying(false);

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  function drawWaveform() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const analyser = analyserRef.current;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    function render() {
      analyser.getByteTimeDomainData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#111";
      ctx.beginPath();

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }

      ctx.stroke();
      animationRef.current = requestAnimationFrame(render);
    }

    render();
  }

  useEffect(() => {
    if (isPlaying && oscillatorRef.current) {
      oscillatorRef.current.frequency.value = frequency;
    }
  }, [frequency, isPlaying]);

  useEffect(() => {
    return () => {
      oscillatorRef.current?.stop();
      audioContextRef.current?.close();
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e5e5",
        borderRadius: "24px",
        padding: "24px",
        maxWidth: "420px",
      }}
    >
      <canvas
        ref={canvasRef}
        width={360}
        height={100}
        style={{
          width: "100%",
          background: "#f9fafb",
          borderRadius: "10px",
          marginBottom: "16px",
        }}
      />

      <label
        style={{
          display: "block",
          fontSize: "12px",
          color: "#666",
          marginBottom: "16px",
        }}
      >
        Frequency: {frequency} Hz
        <input
          type="range"
          min="100"
          max="1000"
          value={frequency}
          onChange={(e) => setFrequency(Number(e.target.value))}
          style={{ width: "100%", marginTop: "6px" }}
        />
      </label>

      <button
        onClick={isPlaying ? stopTone : startTone}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: isPlaying ? "#dc2626" : "#111",
          color: "#fff",
          fontWeight: 600,
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "⏹ Stop tone" : "▶ Play tone"}
      </button>
    </div>
  );
}
