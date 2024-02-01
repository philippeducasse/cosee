'use client'

import { useState, useEffect } from 'react'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '@/app/firebase/config';

type Image = {
    createdAt: string
    imageUrl: string,
    tags: [string, string, string],
}
const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let unsubscribe:() => void;
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: any = [];
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data)
                        const imageUrl = doc.data().imageUrl
                        const createdAt = doc.data().createdAt
                        // convert tags into an array, makes it easier to filter
                        const tags = [doc.data().tags.tag1, doc.data().tags.tag2, doc.data().tags.tag3]
                        images.push({imageUrl, createdAt, tags});
                        
                    });
                    console.log(images);
                    setDocs(images)
                    setIsLoading(false)
                });
            } catch (error) {
                console.error(error)
                setIsLoading(false)
            }
        }
        getData();
        return () => unsubscribe && unsubscribe();
    }, [collectionName]);

    return {
        docs, isLoading
    }  
}

export default useFirestore
