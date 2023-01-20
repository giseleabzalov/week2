import { MongoClient, ObjectID } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.URI);
const db = client.db(process.env.DB_NAME);
const collectionPizza = db.collection(process.env.COLLECTION_NAME_P);
const collectionCustomers = db.collection(process.env.COLLECTION_NAME_C);
const collectionOrders = db.collection(process.env.COLLECTION_NAME_O);

const pizza1 = {
    type: "Cheese",
    slices: 8,
    extraCheese: true
};

const pizza2 = {
    type: "Pepperoni",
    slices: 8,
    extraPepperoni: false
};

const pizza3 = {
    type: "Hawaiian",
    slices: 6,
    extraHam: true
};

const customer1 = {
    firstName: "Adam",
    lastName: "Smith",
    email: "adamsmith@email.com",
    phoneNumber: "561-330-1234"
};
const customer2 = {
    firstName: "Maria",
    lastName: "Garcia",
    email: "mariagarcia@email.com",
    phoneNumber: "561-330-4321"
};

const insertItemP = async thisItem => {
    const result = await collectionPizza.insertOne(thisItem)
    console.log("Item added", thisItem)
};

const insertItemC = async thisItem => {
    const result = await collectionCustomers.insertOne(thisItem)
    console.log("Item added", thisItem)
};

const getListingP = async (queryParam, queryLimit) => {
    const result = await collectionPizza.find(queryParam).limit(queryLimit).toArray()
    console.table(result)
};

const getListingC = async (queryParam, queryLimit) => {
    const result = await collectionCustomers.find(queryParam).limit(queryLimit).toArray()
    console.table(result)
};

// await insertItemP(pizza1);
// await insertItemP(pizza2);
// await insertItemP(pizza3);

// await insertItemC(customer1);
// await insertItemC(customer2);
// await insertItemC(customer3);

await getListingP({}, 10);
await getListingC({}, 10);

client.close()