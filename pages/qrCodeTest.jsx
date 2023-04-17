import { useState } from "react";
import QRCode from "qrcode.react";
import QrReader from "react-qr-reader";

export default function QRLogin() {
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [showQRCode, setShowQRCode] = useState(true);
  const [showQRReader, setShowQRReader] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setQRCodeValue(data);
      setShowQRCode(false);
      setShowQRReader(false);
      // Call backend API to authenticate the user
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const toggleQRCodeReader = () => {
    setShowQRReader(!showQRReader);
  };

  return (
    <div>
      {showQRCode && (
        <div>
          <QRCode value="https://example.com/login?token=12345" />
          <button onClick={toggleQRCodeReader}>Scan QR Code</button>
        </div>
      )}
      {showQRReader && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
}
