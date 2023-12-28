'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '@/app/firebase/config';

// type Image = {
//     imageUrl: string,
//     tags: object,
// }
const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let unsubscribe:() => void;
        const getData = async () => {
            try {
                const q = query(collection(db, collectionName));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: any = [];
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data)
                        const imageUrl = doc.data().imageUrl
                        // convert tags into an array, makes it easier to filter
                        const tags = [doc.data().tags.tag1, doc.data().tags.tag2, doc.data().tags.tag3]
                        images.push({imageUrl, tags});
                        
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
