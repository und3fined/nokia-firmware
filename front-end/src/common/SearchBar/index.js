import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
        textAlign: 'center'
    },
});


class SearchBar extends Component {
    render() {
        const { classes } = this.props; 

        return (
            <div className="Search-Bar">
                <Input
                    placeholder="Find your device (eg: B2N, TA-1046)"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                    fullWidth={true}
                    helperText="How to find a code name or brand code?"
                />
            </div>
        )
    }
}

export default withStyles(styles)(SearchBar);