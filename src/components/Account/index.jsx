import React from "react";
import { Link } from 'react-router-dom'

import { logOff } from "../../services/firebase";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

function Account() {

    return (
        <>
            <Typography component="h2" variant="h4">Account</Typography>
            <Link to='/'>
            <Button variant="contained" onClick={() => logOff()}>sign out</Button>
            </Link>
        </>
    )
}

export { Account }