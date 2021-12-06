import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import { styled } from '@mui/system';


const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons() {
  return (
    <div className="upload">
        <div className="upload-container">
            <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <ImageIcon sx={{ color: "#C7E3EE" , width: "100px"
            , height: "100px"}}/>
            </IconButton>
            </label>
        </div>
    </div>
   
  );
}