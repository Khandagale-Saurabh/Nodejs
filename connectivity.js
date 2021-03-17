const { createPool } = require('mysql')
let pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "khandagale",
    connectionLimit: 10

});
pool.query("select * from employee ", (err, result, fields) => {
    if (err) {
        return console.log(err);
    } else {
        let aa = new Array()
        aa = result
        return console.log(aa[0].fname)
    }

});