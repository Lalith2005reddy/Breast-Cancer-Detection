import React, { useState } from "react";
import "./style.css";
import logo from "./srmist-logo.png";
import Lottie from "react-lottie"; // Importing Lottie
import animationData from "./animation.json"; // Import your animation JSON file

function App() {
  const [selectedModality, setSelectedModality] = useState("Mammogram");
  const [printedText, setPrintedText] = useState("");

  const startPrintAnimation = () => {
    const text =
      "Processing...\nData:\n- Patient ID: 12345\n- Diagnosis: Malignant\n- Accuracy: 95%";
    setPrintedText(""); // Clear previous text
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setPrintedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed
  };

  // Lottie options
  const lottieOptions = {
    loop: true,
    autoplay: true, // Play automatically
    animationData: animationData, // The animation JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#20232a",
        color: "#61dafb",
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#61dafb",
          color: "#20232a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div>
          <img src={logo} alt="Logo" style={{ height: "80px" }} />
        </div>
        <h1 style={{ margin: "0", fontSize: "24px" }}>
          Breast Cancer Detection Neural Network
        </h1>
      </header>

      {/* Text Description */}
      <p
        style={{
          padding: "5px 20px",
          textAlign: "center",
          marginTop: "20px",
          color: "#e8e8e8",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        A graphical user interface (GUI) that is used to communicate with the
        Breast Cancer Detection Neural Network. This project aims to classify
        breast cancer histopathology images into two categories: malignant
        (cancerous) and benign (non-cancerous). It uses a powerful ensemble
        approach combining two state-of-the-art convolutional neural networks
        (CNNs): ResNet-18 and DenseNet-121.
      </p>

      {/* Body Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        {/* Image Upload Section */}
        <div
          style={{
            backgroundColor: "#61dafb",
            color: "#20232a",
            padding: "30px",
            borderRadius: "15px",
            width: "45%",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 style={{ color: "#20232a" }}>Select Modality</h2>
          <select
            value={selectedModality}
            onChange={(e) => setSelectedModality(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #20232a",
              fontSize: "16px",
            }}
          >
            <option value="Mammogram">Mammogram</option>
            <option value="Histopathology">Histopathology</option>
          </select>

          <h3 style={{ color: "#20232a" }}>Upload {selectedModality} Image</h3>
          <input
            type="file"
            accept="image/*"
            style={{ marginTop: "10px", width: "100%" }}
          />
          <button
            style={{
              marginTop: "10px",
              display: "block",
              width: "100%",
              backgroundColor: "#20232a",
              border: "none",
              color: "#61dafb",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Upload Image
          </button>
        </div>

        {/* Print Data Section */}
        <div
          style={{
            backgroundColor: "#61dafb",
            color: "#20232a",
            padding: "30px",
            borderRadius: "15px",
            width: "45%",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 style={{ color: "#20232a" }}>Print Data</h2>
          <p style={{ margin: "10px 0", fontSize: "16px", color: "#20232a" }}>
            After uploading your image, click the button below to process and
            print the data.
          </p>

          {/* Lottie Animation */}
          <div style={{ marginBottom: "20px" }}>
            <Lottie options={lottieOptions} height={150} width={150} />
          </div>

          <button
            onClick={startPrintAnimation}
            style={{
              marginTop: "10px",
              display: "block",
              width: "100%",
              backgroundColor: "#20232a",
              border: "none",
              color: "#61dafb",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Print Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
