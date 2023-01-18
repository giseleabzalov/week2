import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "./secrets.js";

initializeApp({ //function with object key credential and value cert of service account
    credential: cert(service_account)
});

const db = getFirestore();

const book = {
    title: "Cloud Atlas",
    type: "drama",
    language: "English",
    pages: "a lot"
};

db.collection("library")
.add(book)
.then( doc => console.log("Book Added", doc.id))
.catch(console.error)
