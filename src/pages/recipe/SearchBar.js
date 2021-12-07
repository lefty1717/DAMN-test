import { AppBar,InputBase,Toolbar} from "@material-ui/core"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function SearchBar() {
    const handleClick = () => {
    };
    return (
        <div>
            <AppBar className='appBar'>
                <Toolbar className='toolBar'>
                    <ArrowBackIosIcon className='iconBar'/>
                    <InputBase placeholder='   義大利麵' className='inputBase'/>
                </Toolbar>
                <Stack direction="row" spacing={2.5} className='stack'>
                    <Chip  label="白醬義大利麵" onClick={handleClick} className='chip'/>
                    <Chip  label="青醬義大利麵" onClick={handleClick} className='chip'/>
                    <Chip  label="海鮮義大利麵" onClick={handleClick} className='chip'/>
                    <Chip  label="夏威夷義大利麵" onClick={handleClick} className='chip'/>
                </Stack>
            </AppBar>
        </div>
    )
}

export default SearchBar
