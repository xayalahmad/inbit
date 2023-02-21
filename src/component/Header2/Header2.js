import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from "../Header2/header2.module.css"
import { Link } from "react-router-dom";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
        <div className={styles.header2Container} >
        <Link to="/about"> {" "}

      <Button variant="text">
        <div className={styles.header2ContainerTitle}>Haqqımızda</div>
        </Button>
            {" "} </Link> 
      <Button variant="text">
        <div className={styles.header2ContainerTitle}>Fəaliyyət</div>
        </Button>
      <Button variant="text">
        <div className={styles.header2ContainerTitle}>Tərəfdaşlar</div>
        </Button>
      <Button variant="text">
        <div className={styles.header2ContainerTitle}>Xidmətlər</div>
        </Button>
      <Button variant="text">
        <div className={styles.header2ContainerTitle}>Təlim və Tədris</div>
        </Button>
      <Button variant="text">
        <div className={styles.header2ContainerTitle}>Əlaqə</div>
        </Button>
        </div>
    </Stack>
  );
}