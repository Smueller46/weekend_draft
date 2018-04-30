var student = require('../controllers/student.server.controller');

module.exports = function (app) {

    app.route('/student/home')
    .get(student.renderHome)
    .post(student.saveFile);

    app.route('/student/appInternships')
    .get(student.renderAppInternship);

    app.route('/student/searchInternship')
    .get(student.renderSearchInternship);
}
   