import multer from 'multer';


const storage = multer.diskStorage({
   destination: 'music/',
   filename: (req, file, cb) => {
      cb(null, file.originalname);
   }
});

const songs = multer ({ storage });



export default songs;