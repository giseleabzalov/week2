import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "./secrets.js";

initializeApp({ 
    credential: cert(service_account)});

const db = getFirestore();

const drink = {
    drinkName: "Coffee",
    size: "Grande"
};
// add data 

db.collection("drinks")
.add(drink)
.then(doc => console.log ("smth added", doc.id))
.catch(console.error)

// map data

db.collection("drinks")
    .get()
    .then(collection => {
        const items = collection.docs.map(doc => {
            let item = doc.data()
            item.id = doc.id
            return item
            return { ...doc.data(), id: doc.id }
        })
        console.log(items)    
    })
    .catch(console.error);

    // map data another way

db.collection(collectionName)
    .get()
    .then (collection => {
        const items = collection.docs.map(
            eachItem => {
            let eachID = eachItem.data()
            return eachID
            })
            console.table(items)
    })
    .catch(console.error)