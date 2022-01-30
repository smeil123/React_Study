import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Avatar from '@material-ui/core/Avatar';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

import getUser from "../../components/user/getUser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default async function Profile(){
    const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    const token = JSON.parse(localStorage.getItem('token'));
    const user = await getUser(localStorage.getItem('email'));

    // const handleMenu = (event) =>{
    //     setAnchorEl(event.cuurentTaget);
    // };

    // const handleClose = () =>{
    //     setAnchorEl(null);
    // }

    // const handleLogout = () =>{
    //     localStorage.removeItem("token");
    //     window.location.href = "/";
    // };

    return(
        <div>
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Profile
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color="inherit">
                            <Avatar src={user.avatar} />
                        </IconButton>
                        <Menu id="menu-appbar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Avatar src={user.avatar} className={classes.large} />
                    <Typography variant="h5">
                        Welcome {user.fname} {user.lname}
                    </Typography>
                </CardContent>
            </Card> */}
            <p>{user.email}</p>
            <p>{user.nickname}</p>
            <p>{user.role}</p>
            <p>{user.city_1}</p>
        </div>
    );
}