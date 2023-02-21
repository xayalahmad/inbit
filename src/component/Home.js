import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import card_cover from "../img/card_cover.png";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className={styles.home_page}>
      <div className={styles.home_page_title} variant="h5" component="div">
        <Typography gutterBottom variant="h5" component="div">
          Python-da ilk addımlar
        </Typography>
      </div>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <span className={styles.card_rate}>100%</span>
        <span className={styles.card_complete}>Yekunlaşıb</span>
        <CardActionArea>
          {/* <CardMedia component="img" image={card_cover} alt="Python course" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Python-da ilk addımlar
            </Typography>
            <div className={styles.card_text_container}>
              <Typography variant="body2" color="text.secondary">
                <WatchLaterIcon className={styles.watch_icon} />
              </Typography>
              <div>Başlama vaxtı: 7/18/2022</div>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/course">
            {" "}
            <Button
              size="large"
              color="primary"
              endIcon={<ArrowForwardIosIcon />}
            >
              Kursa keç
            </Button>{" "}
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
