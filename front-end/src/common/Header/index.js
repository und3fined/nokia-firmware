import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SearchBar from '../SearchBar';

import './style.css';
import logo from '../../static/Nokia-Logo-white.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={12} className="App-header" justify="center">
                    <Grid item xs={12}>
                        <img src={logo} className="App-logo" alt="Nokia Logo" />
                        <h1 className="App-title">Firmware</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <SearchBar />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Header);