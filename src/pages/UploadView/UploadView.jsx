import { useState } from "react";

const UploadView = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subir archivo</h2>

      <input type="file" onChange={handleChange} />

      {file && (
        <div style={{ marginTop: "10px" }}>
          <p><strong>Nombre:</strong> {file.name}</p>
          <p><strong>Tipo:</strong> {file.type}</p>
          <p><strong>Tamaño:</strong> {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
};

export default UploadView;