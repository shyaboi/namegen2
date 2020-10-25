import React, { useState, useEffect  } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from "@material-ui/core/Chip";
import { DataGrid } from '@material-ui/data-grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={20}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 870,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));


 
export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


//  console.log(getem())
//  const listItems = getem().map((word) => (
//     <Tooltip
//       title={word}
//       enterDelay={800}
//       leaveDelay={200}
//       aria-label="PascalCase"
//     >
//       <Chip label={word} value={word} />
//     </Tooltip>
//   ));
 
  return (
  
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="alphabet"
        className={classes.tabs}
      >
        <Tab label="A" {...a11yProps(0)} />
        <Tab label="B" {...a11yProps(1)} />
        <Tab label="C" {...a11yProps(2)} />
        <Tab label="D" {...a11yProps(3)} />
        <Tab label="E" {...a11yProps(4)} />
        <Tab label="F" {...a11yProps(5)} />
        <Tab label="G" {...a11yProps(6)} />
        <Tab label="H" {...a11yProps(7)} />
        <Tab label="I" {...a11yProps(8)} />
        <Tab label="J" {...a11yProps(9)} />
        <Tab label="K" {...a11yProps(10)} />
        <Tab label="L" {...a11yProps(11)} />
        <Tab label="M" {...a11yProps(12)} />
        <Tab label="N" {...a11yProps(13)} />
        <Tab label="O" {...a11yProps(14)} />
        <Tab label="P" {...a11yProps(15)} />
        <Tab label="Q" {...a11yProps(16)} />
        <Tab label="R" {...a11yProps(17)} />
        <Tab label="S" {...a11yProps(18)} />
        <Tab label="T" {...a11yProps(19)} />
        <Tab label="U" {...a11yProps(20)} />
        <Tab label="V" {...a11yProps(21)} />
        <Tab label="W" {...a11yProps(22)} />
        <Tab label="X" {...a11yProps(23)} />
        <Tab label="Y" {...a11yProps(24)} />
        <Tab label="Z" {...a11yProps(25)} />


      </Tabs>
      <TabPanel value={value} index={0}>
          <AWords />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

const AWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    // const handleChange = event => setGreeting(event.target.value);
    useEffect(() => {
        // Run! Like go get some data from an API.
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/a`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <ul>{listItems}</ul>

    );
  };
  