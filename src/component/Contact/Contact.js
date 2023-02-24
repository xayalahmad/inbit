import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './contact.module.css'
// export const Footer: FC = (): ReactElement => {

export default function Contact() {

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#F8F7F2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div className={styles.contactContainer}>

        <div className={styles.grid} item   spacing={2}>
          <div className={styles.gridItem} item>
            <Typography className={styles.contactRow} color="" variant="">
                <LocalPhoneIcon className={styles.contactIcon}/> <div className={styles.contactTitle}>Telefonlar</div>
            </Typography>
                <div className={styles.contactDescription}> Tel.: (+994 12) 464-82-14</div>
                <div className={styles.contactDescription}> Mob.: (+994 55) 220-42-45</div>
          </div>
          <div className={styles.gridItem} item >
            <Typography className={styles.contactRow} color="" variant="">
                <EmailIcon className={styles.contactIcon}/> <div className={styles.contactTitle}>E-mail</div>
            </Typography>
                <div className={styles.contactDescription}> info@inbit.az</div>
          </div>
          </div>
        <div className={styles.grid} item  container spacing={2}>
          <div className={styles.gridItem} item >
            <Typography className={styles.contactRow} color="" variant="">
                <WatchLaterIcon className={styles.contactIcon}/> <div className={styles.contactTitle}>İş cədvəli</div>
            </Typography>
                <div className={styles.contactDescription}>10:00 - 19:00
(bazar ertəsi - cümə)
İstirahət günləri: şənbə, bazar</div>
          </div>
          <div className={styles.gridItem} item >
            <Typography className={styles.contactRow} color="" variant="">
                <GroupsIcon className={styles.contactIcon}/> <div className={styles.contactTitle}>Biz burada</div>
            </Typography>
                <FacebookIcon className={styles.facebookIcon} style={{ fontSize: 35 , transition: "all 0.2s"}} />
                <InstagramIcon className={styles.Instagramcon} style={{ fontSize: 35 , transition: "all 0.2s"}} />
                <LinkedInIcon className={styles.linkedInIcon} style={{ fontSize: 35 , transition: "all 0.2s"}} />
                <WhatsAppIcon className={styles.whatsAppIcon} style={{ fontSize: 35 , transition: "all 0.2s"}} />  
          </div>
          </div>
        <div className={styles.grid} item  container spacing={2}>

          <div className={styles.gridItem} item >
            <Typography className={styles.contactRow} color="" variant="">
                <LocationOnIcon className={styles.contactIcon}/> <div className={styles.contactTitle}>Ünvan</div>
            </Typography>
                <div className={styles.contactDescription}> Tbilisi ave. 35, Az1122, ASK Plaza 2th floor, room 211, Baku, Azerbaijan</div>
          </div>
          </div>

      </div>
    </Box>
  );
};
