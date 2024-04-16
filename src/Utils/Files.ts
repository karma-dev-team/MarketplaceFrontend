import { CreateFileDto } from "restclient";
import ImageScheme from "src/Schemas/Image";

export function ConvertUploadedToCreate(files: ImageScheme[]): CreateFileDto[] { 
    let images: CreateFileDto[] = []

    files.forEach(element => {
        images.push({
            fileId: element.id, 
            mimeType: element.MimeType, 
            name: element.fileName, 
        })
    });

    return images; 
}