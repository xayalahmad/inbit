import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from './project.module.css'
import data from "./project.json";
import { minWidth } from "@mui/system";
export default function Project() {
  return (
    <div className={styles.projectcontainer1}>
      <div className={styles.projectcontainer2}>
      <Typography gutterBottom variant="h5" component="div">
        <div style={{ marginBottom: 30 }}>“İNBİT” MMC olaraq 1C proqram təminatı üzrə müxtəlif dövlət qurumları ilə uğurlu tərəfdaşlıq edirik. </div>
                  </Typography>
        <div className={styles.projectcontainer3}>
          {data.map((q, i) => (
            <Card className={styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={q.image}
                  alt={q.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {q.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {q.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
