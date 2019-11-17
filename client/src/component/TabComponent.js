import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {ScheduleComponent1} from './Scheduler';
import {ViewComponent} from './ViewSchedule';
import MaterialTableDemo from './ViewStudens';
import  DeleteTable  from "./delete";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Make Schedule"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="View Class Schedule" {...a11yProps('two')} />
          <Tab value="three" label="View Studens" {...a11yProps('three')} />
          <Tab value="four" label="Delete Schedule" {...a11yProps('four')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <ScheduleComponent1 />
      </TabPanel>
      <TabPanel value={value} index="two">
        <ViewComponent />
      </TabPanel>
      <TabPanel value={value} index="three">
        <MaterialTableDemo />
      </TabPanel>
      <TabPanel value={value} index="four">
        <DeleteTable />
      </TabPanel>
    </div>
  );
}