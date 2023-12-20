import { useState, useEffect } from "react";
import { storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const useStorage = (image: any) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const fetchData = async () => {

            const storageRef = ref(storage, image.name)
            const response = await fetch(image);
            //converts image to Blob format
            const blob = await response.blob();
            //uploads file to cloud storage: takes refference (address to storage image) and blob (converted image) as args
            uploadBytes(storageRef, blob).then(async (snapshot) => {
                console.log('File has been uploaded successfully');
                let percentage = (snapshot.bytesTransferred);
                const imageURL = await getDownloadURL(snapshot.ref);
            });
        }
        fetchData();
    }, [image])
}