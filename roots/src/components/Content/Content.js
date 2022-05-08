import React, { useEffect } from 'react'
import {CardMedia,Typography,Grid,Container,Card} from '@material-ui/core'
import useStyles from './styles'
import tuna from './tona.mp4'
import noga from './noga.mp4'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CompCards from '../CompCards/CompCards'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
    },
    },
}));


const Content = () => {
    const classes = useStyles()
    

    return (
        <Container>
            <CardMedia className={classes.space} component="video" autoPlay controls src={noga}/>
            <Grid container spacing={2} className={classes.gridSpace}>
                <Grid item lg={6}><Card className={classes.longCard}>הסבר</Card></Grid>
                <Grid item lg={6}><Card className={classes.longCard}>עוד משהו</Card></Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridSpace}>
                <Grid item lg={3}><Card className={classes.shortCard}>הסבר</Card></Grid>
                <Grid item lg={3}><Card className={classes.shortCard}>עוד משהו</Card></Grid>
                <Grid item lg={3}><Card className={classes.shortCard}>הסבר</Card></Grid>
                <Grid item lg={3}><Card className={classes.shortCard}>עוד משהו</Card></Grid>
            </Grid>
            <Search className={classes.serchSpace}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
            </Search>
            <CompCards/>
        </Container>
    )
}

export default Content
