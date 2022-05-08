import React,{ useState } from 'react';
import { Grid,Button,Paper,Typography,Container } from '@material-ui/core'
import UserCard from '../UserCard/UserCard';
import { Link } from 'react-router-dom'
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import useStyles from './styles'


const Profile = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.container}  alignItems="center" justifyContent="center" container spacing={3}>
            <Grid  item lg={12}>
                <Button className={classes.inviteButton} variant="contained" component={Link} to="/profile">Invite</Button>
            </Grid>
            <Grid item lg={4} xs={12}></Grid> {/* space fill */}
            <Grid item lg={4} xs={12}>
                <UserCard/>
            </Grid>
            <Grid item lg={4} xs={12}></Grid> {/* space fill */}
            <Grid item lg={2} xs={12}></Grid> {/* space fill */}
            <Grid item lg={4} xs={12}>
                <UserCard/>
            </Grid>    
            <Grid item lg={4} xs={12}>
                <UserCard/>
            </Grid>       
            <Grid item lg={2} xs={12}></Grid> {/* space fill */}
            <Grid item lg={3} xs={12}>
                <UserCard/>
            </Grid> 
            <Grid item lg={3} xs={12}>
                <UserCard/>
            </Grid> 
            <Grid item lg={3} xs={12}>
                <UserCard/>
            </Grid> 
            <Grid item lg={3} xs={12}>
                <UserCard/>
            </Grid> 
        </Grid>
    );
};

export default Profile;