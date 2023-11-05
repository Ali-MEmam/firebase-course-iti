import { ref as storageRef } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { storage } from "../Config";
import { useState } from "react";

export const UploadFile = () => {
  const [uploadFile, uploading, snapshot] = useUploadFile();
  const ref = storageRef(storage, "file.jpg");
  const [selectedFile, setSelectedFile] = useState();

  const upload = async () => {
    if (selectedFile) {
      await uploadFile(ref, selectedFile, {
        contentType: "image/jpeg",
      });
    }
  };

  return (
    <div>
      <p>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : undefined;
            setSelectedFile(file);
          }}
        />
        <button onClick={upload}>Upload file</button>
      </p>
    </div>
  );
};
