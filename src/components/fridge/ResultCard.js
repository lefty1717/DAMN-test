import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
function ResultCard({data}) {
    return (
        <div className="FridgeCardlist">
            <Card sx={{ maxWidth: 350}}>
                <CardContent className='block'></CardContent>
                {data?.map((item, index) => (
                    <CardActionArea className='area' key={index}>
                    <img src={item?.imageURL} alt="" className='img'/>
                    <CardContent className='content'>
                    <button><CloseIcon/></button>
                    <Typography gutterBottom variant="h5" component="div" className='words'>{item.name}</Typography> 
                    <Typography variant="h6">數量：{item.quantity}</Typography>
                    <Typography variant="h6">到期日：{item.endDate}</Typography>
                    <div className='edit'>
                    <button><CreateIcon/></button>
                    </div>
                    </CardContent>
                </CardActionArea>
                ))}
                
             
            </Card>
        </div>
    )
}

export default ResultCard