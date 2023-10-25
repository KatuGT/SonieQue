import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

export const uploadImages = async (files: FileList) => {
  
  const uploadPromises = Array.from(files).map((file) => {

    const newName = new Date().getTime() + "-image";
    
    const storageRef = ref(storage, newName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              resolve(downloadURL);
            })
            .catch((error) => {
              reject(error);
            });
        }
      );
    });
  });

  try {
    const uploadedImageURLs = await Promise.all(uploadPromises);
    console.log("All files uploaded:", uploadedImageURLs);
    return uploadedImageURLs;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};
