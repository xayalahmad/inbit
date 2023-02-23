import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from "../../img/logo.png"
import styles from "../About/about.module.css"

export default function BasicTextFields() {
  return (
    <div className={styles.aboutContainer}>
    <div className={styles.aboutContainer2}>
      
      <div className={styles.aboutText}>
      Bildiyiniz kimi, İri, orta və kiçik bizneslərin mühasibat uçotunun avtomatlaşdırılmış uçot sistemləri vasitəsilə aparılması müasir bazarın tələbidir. İNBİT Şirkəti olaraq mütəxəssislərimiz sizə 1C avtomatlaşdırılmış uçot və idarəetmə sisteminin işlənib-hazırlanması, tətbiq edilməsi, aparılması və müşayiət edilməsi habelə şirkətinizə məxsus xüsusi tələblər ilə əlaqədar istənilən xidmətləri, o cümlədən digər təminat məhsulları ilə inteqrasiya üzrə xidmətləri də göstərməyə hazırdırlar. Qabaqcıl texnologiyalardan istifadə və böyük iş təcrübəsi sayəsində fərdi tələblərin nəzərə alınması yolu ilə həyata keçirilmiş şirkət fəaliyyətinin avtomatlaşdırılması personalın saxlanması üçün xərclərinizi ixtisar etməyə imkan yaradacaqdır.
INBIT MMC 1C və Bitrix24 şirkətinin Azərbaycan üzrə rəsmi nümayəndəsidir. Şirkətinizin daha effektiv idarəetmə və mühasibat uçotu sisteminin qurulmasını bizə həvalə edin
      </div>
      <img  className={styles.aboutImg} src={logo}/>
    </div>
    </div>
  );
}