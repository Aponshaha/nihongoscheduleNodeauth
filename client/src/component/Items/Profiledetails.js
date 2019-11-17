import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button,
    TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {}
}));

const AccountDetails = props => {
    const { className, ...rest } = props;
    console.log("Props: ", props)
    const classes = useStyles();

    const [values, setValues] = useState(props.values);

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        console.log('dd')
    };

    const clickSubmit = () =>{
        fetch(`http://localhost:8000/api/user/${props.values._id}?name=${values.name}&stuff_id=${values.stuff_id}&email=${values.email}&role=${values.role}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json()) // OR res.json()
            .then(res => window.location.reload())
    }

    // const states = [
    //     {
    //         value: 'student',
    //         label: 'Student'
    //     },
    //     {
    //         value: 'teacher',
    //         label: 'Teacher'
    //     }
    // ];

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <form
                autoComplete="off"
                noValidate
            >
                <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please specify the name"
                                label="Name"
                                placeholder="Name"
                                margin="dense"
                                name="name"
                                onChange={handleChange}
                                required
                                value={values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Stuff ID"
                                placeholder="Stuff ID"
                                margin="dense"
                                name="stuff_id"
                                onChange={handleChange}
                                required
                                value={values.stuff_id}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Email Address"
                                placeholder="Email Address"
                                margin="dense"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                disabled fullWidth
                                id = "outlined-disabled"
                                label = "Role"
                                placeholder="Role"
                                margin="dense"
                                name="role"
                                onChange={handleChange}
                                required
                                value={values.role}
                                variant="outlined"
                            />
                            
                        </Grid>
                        {/* <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Role"
                                placeholder="Role"
                                margin="dense"
                                name="role"
                                onChange={handleChange}
                                required
                                select
                                // eslint-disable-next-line react/jsx-sort-props
                                SelectProps={{ native: true }}
                                value={values.state}
                                variant="outlined"
                            >
                                {states.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid> */}
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick = {clickSubmit}
                    >
                        Save details
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};



export default AccountDetails;