import { useState } from "react";

const UploadView = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subir video</h2>

      <input type="file" accept="video/*" onChange={handleChange} />

      {file && (
        <>
          <div style={{ marginTop: "10px" }}>
            <p>
              <strong>Nombre:</strong> {file.name}
            </p>
            <p>
              <strong>Tipo:</strong> video
            </p>
          </div>

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div style={{ marginTop: "10px" }}>
            <h4>Preview JSON:</h4>
            <pre>
              {JSON.stringify(
                {
                  id: "auto",
                  type: "video",
                  title: title,
                  src: `/media/videos/${file.name}`,
                  poster: `/media/portada/${file.name}.jpg`,
                  date: date,
                },
                null,
                2,
              )}
            </pre>
          </div>
        </>
      )}
    </div>
  );
};

export default UploadView;
