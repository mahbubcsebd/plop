module.exports = function (plop) {
    plop.setGenerator('resource', {
        description: 'Generate a new CRUD resource (Controller, Route, Model)',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message:
                    'Enter the resource name (e.g. course, user, category)',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'controllers/{{name}}Controller.js',
                templateFile: 'plop-templates/controller.hbs',
            },
            {
                type: 'add',
                path: 'models/{{name}}Model.js',
                templateFile: 'plop-templates/model.hbs',
            },
            {
                type: 'add',
                path: 'routes/{{name}}Route.js',
                templateFile: 'plop-templates/route.hbs',
            },
            {
                type: 'modify',
                path: 'app.js',
                pattern: /(\/\/ Plop will add new routes here)/g,
                template:
                    "const {{name}}Router = require('./routes/{{name}}Route');\n$1",
            },
            {
                type: 'modify',
                path: 'app.js',
                pattern: /(\/\/ Middleware & Routes)/g,
                template: "app.use('/api/{{name}}s', {{name}}Router);\n$1",
            },
        ],
    });
};
