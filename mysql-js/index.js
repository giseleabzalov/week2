import { createConnection } from 'mysql2'; //import library of mysql tools
import { dbConnection } from "./secrets.js";

    const db = createConnection(dbConnection); //connect and call connection "db"
    


console.log('We are connected...');

db.query('UPDATE users SET first_name = "Mar" WHERE first_name = "Marya"', (err) => {
    if (err) console.log("UPDATE ERROR ->", err);
    else console.log('UPDATE DONE!');
});

db.query("SELECT * FROM users", (err, results) => {
    if(err) console.log('ERROR -> ', err);
    console.table(results);
});

db.end();

console.log("The End.")