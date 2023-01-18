// import firebase-admin Library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import { service_account } from "./secrets.js";

initializeApp( { credential: cert(service_account)} );

const db = getFirestore();

const animal = {
    type: "dog",
    breed: "GS",
    gender: "f",
    name: "Mesa",
    legs: 4
};

db.collection("zoo")
    .add(animal)
    .then ( doc => console.log("Animal Added", doc.id))
    .catch(console.error);