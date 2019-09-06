var survey_controller = require('../controllers/survey_controller');

module.exports = function(app){
  app.get('/', survey_controller.index_function);
  app.post('/result', survey_controller.results_function);
}
