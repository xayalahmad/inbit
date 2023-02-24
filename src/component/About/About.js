import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import about from "../../img/about.png"
import styles from "../About/about.module.css"
import Contact from '../Contact/Contact';

export default function BasicTextFields() {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.aboutContainer2}>
      
      <div className={styles.aboutText}>
      “İNBİT” MMC 12 mart 2020-ci il tarixində dövlət qeydiyyatına alınaraq fəaliyyətə başlamışdır. <br/>
Şirkətin fəaliyyət predmeti və məqsədi informasiya – kommunikasiya infrastrukturu, 1C proqram təminatının təkmilləşdirilməsi və inkişafına dəstək verməkdir. Həmçinin şirkətimizin məqsədi, informasiya – kommunikasiya infrastrukturu, 1C proqram təminatının inkişafı sahəsində mövcud problemləri təhlil edərək müvafiq təkliflərin hazırlanmasında köməklik etmək və ölkəmizdə keçirilən proqramlara, layihələrə dəstək olmaqdan ibarətdir. 
<br/> Sadalanan fəaliyyəti həyata keçirmək üçün şirkətimizin müvafiq kadr və maddi-texniki bazası mövcuddur. Kadr heyətimiz peşəkarlardan formalaşmışdır. Əməkdaşlarımızın 1C profesionallıq və mütəxəsis sertifikatları və sahələrinə uyğun digər sertifikatları mövcuddur. 
<br/> Bunlarla yanaşı, bizim 1C rəsmi Franchisee, Bitrix24 CRM rəsmi Distributor, Kint rəsmi partnyor, Hive Taxi rəsmi nümayəndə, “Fərdi məlumatların informasiya ehtiyyatlarının formalaşdırılması və informasiya sistemlərinin yaradılması, onlara xidmət göstərilməsi” Lisenziyası, kodlaşdırılması üzrə əqli mülkiyyət hesab edilən 10-dan çox proqram təminatı kimi mövcud üstünlüklərimiz vardır.

      </div>
      <img  className={styles.aboutImg} src={about}/>
    </div>
    <Contact/>
    </div>
  );
}