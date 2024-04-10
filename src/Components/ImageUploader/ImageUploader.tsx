import { Dispatch } from "react";
import ImageScheme from "src/Schemas/Image";
import "./ImageUploader.css"

type props = { 
    images: ImageScheme[], 
    setImages: Dispatch<ImageScheme[]>
    elementHeight?: string | undefined, 
    elementWidth?: string | undefined,  
    elementBgColor?: string | undefined, 
}

const ImageUploaderComponent: React.FC<props> = (props: props) => { 
    return ( 
        <div className="root-imageuploader">
            <p>Ожидай!!!</p>
        </div>
    )
}

export default ImageUploaderComponent; 