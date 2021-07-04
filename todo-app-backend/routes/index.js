const todoController = require('../controllers').todo; 
const categoryController = require('../controllers').category;

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        message: 'Welcome to the TODO API!'
    }));
    app.get('/todo/new', todoController.new); 
    app.get('/todo/create', todoController.create); 
    app.get('/todos', todoController.all);
    app.get('/todo/show', todoController.show);
    app.get('/todo/destroy', todoController.destroy);
    app.post('/todo/update', todoController.update);
    app.post('/category/create', categoryController.create);
    app.get('/categories', categoryController.all);
    app.post('/category/update', categoryController.update);
    app.post('/category/destroy', categoryController.destroy);
}