import controllers from '../controllers/appController.js';
import { bookControllers }  from '../controllers/bookController.js';
const routes = (app) => {
  app.route('/').get(controllers.default)
  app.route('/welcome').get(controllers.about);
  app.route('/books').get(bookControllers.getBooks);
}

export default routes;
