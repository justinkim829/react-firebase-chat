import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.js";
import { v4 } from 'uuid';

async function upload(file) {
  const uniqueRef = v4() + "_" + file.name
  const storageRef = ref(storage, uniqueRef);

  const uploadTask = uploadBytesResumable(storageRef, file);
  return new Promise((res, rej) => {
    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    (err) => {
      rej("Something went wrong! " + err.code);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        res(downloadURL);
      });
    }
  );
  });
}

export default upload
