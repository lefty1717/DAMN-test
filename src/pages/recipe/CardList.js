import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlatwareIcon from '@mui/icons-material/Flatware';
import noodle1 from './images/noodle1.jpg'
import noodle2 from './images/noodle2.jpg'
import noodle3 from './images/noodle3.jpg'
import noodle4 from './images/noodle4.jpg'

function CardList() {
    return (
        <div>
            <Card sx={{ maxWidth: 500}}>
                <CardContent className='block'></CardContent>
                <CardActionArea className='area'>
                    <img src={noodle1} alt="" className='img'/>
                    <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="div" className='words'>肉醬義大利麵</Typography> 
                    <Typography variant="h6"><ThumbUpIcon  color="primary" className='icon'/>30k</Typography>
                    <Typography variant="h6"><FlatwareIcon  color="error" className='icon'/>medium</Typography>
                    <Typography variant="h6"><AccessTimeIcon color="primary" className='icon'/>20min</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className='area'>
                    <img src={noodle2} alt="" className='img'/>
                    <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="div" className='words'>青醬義大利麵</Typography> 
                    <Typography variant="h6"><ThumbUpIcon color="primary" className='icon'/>10k</Typography>
                    <Typography variant="h6"><FlatwareIcon  color="error" className='icon'/>medium</Typography>
                    <Typography variant="h6"><AccessTimeIcon color="primary" className='icon'/>30min</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className='area'>
                    <img src={noodle3} alt="" className='img'/>
                    <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="div" className='words'>白醬義大利麵</Typography> 
                    <Typography variant="h6"><ThumbUpIcon color="primary" className='icon'/>22k</Typography>
                    <Typography variant="h6"><FlatwareIcon  color="error" className='icon'/>medium</Typography>
                    <Typography variant="h6"><AccessTimeIcon color="primary" className='icon'/>20min</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className='area'>
                    <img src={noodle4} alt="" className='img'/>
                    <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="div" className='words'>海鮮義大利麵</Typography> 
                    <Typography variant="h6"><ThumbUpIcon color="primary" className='icon'/>90k</Typography>
                    <Typography variant="h6"><FlatwareIcon  color="error" className='icon'/>hard</Typography>
                    <Typography variant="h6"><AccessTimeIcon color="primary" className='icon'/>40min</Typography>
                    </CardContent>
                    {/* s */}
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardList
