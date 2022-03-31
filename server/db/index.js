import * as mysql from 'mysql';


export const Connection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'chirp',
    password: 'password2',
    database: 'chirper'

});

export const Query = (query, values) => {

    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err); //if(err) throw err; ---will stop the code
            return resolve(results);     //resolve(results);
        });

    });
}

import Chirps from './chirps';
export default {
    Chirps //this object becomes db in chirps.js/routes
}
