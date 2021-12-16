import { AppBar,InputBase,Toolbar} from "@material-ui/core"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { height } from '@mui/system';
import {Button } from '@mui/material';
import {Link} from 'react-router-dom';

function SearchBar() {
    const handleClick = () => {
    };
    
    const food = [
    { label: '青醬義大利麵'},
    { label: '肉醬義大利麵'},
    { label: '白醬義大利麵'},
    { label: '咖哩拌飯'},
    { label: '咖哩便當'},
    { label: '咖哩麵'},
    { label: '咖哩給給'},
    ];
    return (
        <div className="recipeSearchBar">
            <AppBar className='appBar'>
                <Toolbar className='toolBar'>
                    <Button><Link to='/'><ArrowBackIosIcon className='iconBar'/></Link></Button>
                    <Autocomplete
                    disablePortal
                    options={food}
                    sx={{ width: 400 ,marginTop:4,borderRadius:12}}
                    renderInput={(params) => <TextField {...params} label="你想煮甚麼呢...?" />}
                    />
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





