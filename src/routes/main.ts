import express , { Router } from 'express';
import * as mainController from '../controllers/mainController';

const router: Router = express.Router();
// Define the route for the main page
router.get('/', mainController.getMainPage);
router.get('/coletivo', mainController.getColetivonPage);
router.get('/usina', mainController.getUsinaPage);
router.get('/projetos', mainController.getProjectsPage);
router.get('/loja', mainController.getLojaPage);
router.get('/eventos', mainController.getEventsPage);
router.get('/blog', mainController.getBlogPage);
router.get('/doar', mainController.getDonationsPage);
router.get('/apoio', mainController.getSupportersPage);
router.get('/contato', mainController.getContactPage);



export default router;