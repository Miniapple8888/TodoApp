const {connection} = require('../db');
const tablename = 'todos';

module.exports = {
    async all(req, res) {
        conn.query(`SELECT * FROM ${tablename}`, function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            console.log(results);
            return res.status(200).send({ message: "Successfully fetched all todos!", todos: results });
        });
    },
    async new(req, res) {
    },
    async create(req, res) {
        // Form validation
        const todo = req.body.todo;
        conn.query(`INSERT INTO ${tablename} SET ?`, todo, function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            return res.status(200).send({ message: "Successfully inserted todo!" });
        });
    },
    async show(req, res) {
        // Get validation first
        const id = req.body.id;
        conn.query(`SELECT * FROM ${tablename} WHERE id=?`, [id], function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            console.log(results);
            return res.status(200).send({ message: "Successfully fetched the todo!", todo: results[0] });
        });
    },
    async update(req, res) {
        // Get validation first
        const id = req.body.id;
        conn.query(`UPDATE ${tablename} SET desc = ?, deadline = ?, priority = ?, category_id = ?, updated_at = ? WHERE id=?`, [id], function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            console.log(results);
            return res.status(200).send({ message: "Successfully updated the todo!", todo: results[0] });
        });
    },
    async destroy(req, res) {
        // Get validation first
        const id = req.body.id;
        conn.query(`DELETE FROM ${tablename} WHERE id=?`, [id], function(error, results, fields) {
            if (err) {
                console.log(error);
                return res.status(404).send({errrors: err, message: "Error occurred"});
            }
            return res.status(200).send({ message: "Successfully deleted the todo!" });
        });
    }

}