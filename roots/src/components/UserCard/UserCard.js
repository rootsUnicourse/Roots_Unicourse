import React, {useState} from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import useStyles from './styles'

const UserCard = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={user.result.imageUrl} />
            <div className={classes.overlay}>
                <Typography variant="h6">{user.result.name}</Typography>
            </div>
            <div className={classes.details}>
                <Typography className={classes.title} gutterBottom variant="h5">500$ :יתרה</Typography>
            </div>
            <Button variant="contained" size="small" color="primary" onClick={()=>{}}>קח את הכסף</Button>
        </Card>
    );
};

export default UserCard;