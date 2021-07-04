const {connection} = require('../db');
const tablename = 'categories';

module.exports = {
    async all(req, res) {
        console.log("I am reached!");
        connection.query(`SELECT * FROM ${tablename}`, function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            console.log("yup");
            console.log(results);
            return res.status(200).send({ message: "Successfully fetched all categories!", categories: results });
        });
    },
    async new(req, res) {

    },
    async create(req, res) {
        // Form validation
        var category = req.body.category;
        console.log(category);
        var query = connection.query("INSERT INTO "+ tablename + " SET ?", category, function(error, results, fields) {
            console.log("I work!");
            if (error) throw error;
            console.log("Inserted "+ results.affectedRows + ' rows');
        });
        console.log(query.sql);
        return res.status(200).send({ message: "Successfully inserted category!" });
    },
    async show(req, res) {
        // Get validation first
        const id = req.body.id;
        connection.query(`SELECT * FROM ${tablename} WHERE id=?`, [id], function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            console.log(results);
            return res.status(200).send({ message: "Successfully fetched the category!", category: results[0] });
        });
    },
    async update(req, res) {
         // Get validation first
         const id = req.body.id;
         connection.query(`UPDATE ${tablename} SET name = ?, color = ? WHERE id=?`, [id], function(error, results, fields) {
             if (err) {
                 console.log(error);
                 return res.status(404).send({errrors: err, message: "Error occurred"});
             }
             console.log(results);
             return res.status(200).send({ message: "Successfully updated the category!", todo: results[0] });
         });
    },
    async destroy(req, res) {
        // Get validation first
        const id = req.body.id;
        connection.query(`DELETE FROM ${tablename} WHERE id=?`, [id], function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            return res.status(200).send({ message: "Successfully deleted the category!" });
        });
    }

}