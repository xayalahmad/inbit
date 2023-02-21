import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import card_cover from '../../img/card_cover.png'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './catalog.module.css'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export function Catalog() {
  return (
    <div className={styles.home_page}>
     <div className={styles.home_page_title} variant="h5" component="div">
     <Typography gutterBottom variant="h5" component="div">
     Kurs kataloqu
          </Typography>
          </div>
    <Card className={styles.card} sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // image={card_cover}
          alt="Python course"
        />
        <CardContent>
          <div className={styles.card_complete}>
          Ödənişsiz
          </div>
          <Typography gutterBottom variant="subtitle2" component="div">
          Python-da ilk addımlar
          </Typography>
          <div className={styles.card_text_container}>
          <Typography  variant="body2" color="text.secondary">
          </Typography>
           <div>
           Python dilini öyrənməklə proqramlaşdırmaya ilk addımlarınızı atın.
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" size="small" endIcon={<CastForEducationIcon fontSize="small" />}>
        <div className={styles.button_text}>
  Kursa keç
        </div>
</Button>
<Button className={styles.button_text} variant="outlined" size="small" endIcon={<RemoveRedEyeIcon />}>
<div className={styles.button_text}>
  Kurs haqqında
</div>
</Button>
      </CardActions>
    </Card>
    </div>
  );
}
