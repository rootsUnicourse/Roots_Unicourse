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
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    return (
        <Grid className={classes.container}  alignItems="center" justifyContent="center" container spacing={3}>

            <Grid  item lg={12} sm={12}>
                <Button className={classes.inviteButton} variant="contained" component={Link} to="/profile">Invite</Button>
            </Grid>

            <Grid item lg={4} sm={4} xs={12}></Grid> {/* space fill */}
            <Grid item lg={4} sm={4} xs={12}>
                <UserCard user={user}/>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}></Grid> {/* space fill */}

            <Grid item lg={2} sm={2} xs={12}></Grid> {/* space fill */}
            <Grid item lg={4} sm={4} xs={12}>
                <UserCard user={user}/>
            </Grid>    
            <Grid item lg={4} sm={4} xs={12}>
                <UserCard user={user}/>
            </Grid>       
            <Grid item lg={2} sm={2} xs={12}></Grid> {/* space fill */}

            <Grid item lg={3} sm={3} xs={12}>
                <UserCard user={user}/>
            </Grid> 
            <Grid item lg={3} sm={3} xs={12}>
                <UserCard user={user}/>
            </Grid> 
            <Grid item lg={3} sm={3} xs={12}>
                <UserCard user={user}/>
            </Grid> 
            <Grid item lg={3} sm={3} xs={12}>
                <UserCard user={user}/>
            </Grid> 
        </Grid>
    );
};

export default Profile;