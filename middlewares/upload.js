import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({dest: 'uploads/'}) //storage engine is created locally

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/uploads/*'
    }),
    preservePath: true
})