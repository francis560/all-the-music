import { Request, Response } from 'express';
import Music, { MusicInterface } from '../models/music';


class RutaController {

    public home (req: Request, res: Response): void {
        res.render('index');
    }

    public upload (req: Request, res: Response): void {
        res.render('upload');
    }

    public async uploadPost (req: Request, res: Response): Promise<void> {

        const { originalname, path } = req.file;
        const music: MusicInterface = new Music( {originalname, destination: '../' + path} );

        await music.save();

        res.redirect('/');
    }

    public download (req: Request, res: Response): void {
        
        const MusicName = req.params.id;
        res.download('./music/' + MusicName);
    }

    public async search (req: Request, res: Response): Promise<void> {
        
        const originalname = req.params.id;
        const music: MusicInterface[] = await Music.find({$text: {$search: originalname} });

        res.json(music);
    }

}

// encodeURIComponent and decodeURIComponent.


const rutaController = new RutaController();
export default rutaController;