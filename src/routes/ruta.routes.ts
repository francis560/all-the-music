import { Router } from 'express';
import rutaController from '../controllers/ruta.controllers';
import songs from '../middlewares/archivos';
const router: Router = Router();



router.get('/', rutaController.home);

router.get('/upload', rutaController.upload);

router.get('/search/:id', rutaController.search);

router.post('/upload', songs.single('songs') ,rutaController.uploadPost);

router.get('/download/:id', rutaController.download);

// si colocas el metodo array recuerda poner el maximo de canciones en 200
// el error se puede evitar cambiando .array por .single 

export default router;