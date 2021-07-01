import { Component } from "react";
import ImageUploader from "react-images-upload";

class UploadPic extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
      }
    
      onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
          pictures: this.state.pictures.concat(pictureFiles)
        });
      }
    
      render() {
        return (
          <ImageUploader
            withIcon={true}
            buttonText="Upload Image"
            label="Max File Size: 5MB, Accepted File Types: jpg and png"
            fileSizeError=": File uploaded is too BIG!"
            fileTypeError=": File uploaded is not a supported file type. Please upload jpg or png only"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".png"]}
            withPreview={true}
            maxFileSize={5242880}
          />
        );
      }
}

export default UploadPic;