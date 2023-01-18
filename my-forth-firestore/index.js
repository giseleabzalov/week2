import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "./secrets.js";

initializeApp( {credential: cert(service_account)});

const db = getFirestore();

const drink = {
    drinkName: "Matcha Latte",
    type: "tea",
    addIngredient: "milk",
    size: "8 oz"
};

db.collection("drinks")
.add(drink)
.then( doc => console.log("Drink Added", doc.id))
.catch(console.error)