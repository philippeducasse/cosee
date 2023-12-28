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
                        const tag1 = doc.data().tags.tag1
                        const tag2 = doc.data().tags.tag2
                        const tag3 = doc.data().tags.tag3
                        images.push({imageUrl, tag1, tag2, tag3});
                        
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
