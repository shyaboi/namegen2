import React, { useState, useEffect  } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        <BWords />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CWords />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <DWords />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <EWords />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <FWords />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <GWords />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <HWords />
      </TabPanel>
      <TabPanel value={value} index={8}>
      <IWords />
      </TabPanel>
      <TabPanel value={value} index={9}>
      <JWords />
      </TabPanel>
      <TabPanel value={value} index={10}>
      <KWords />
      </TabPanel>
      <TabPanel value={value} index={11}>
      <LWords />
      </TabPanel>
      <TabPanel value={value} index={12}>
      <MWords />
      </TabPanel>
      <TabPanel value={value} index={13}>
      <NWords />
      </TabPanel>
      <TabPanel value={value} index={14}>
      <OWords />
      </TabPanel>
      <TabPanel value={value} index={15}>
      <PWords />
      </TabPanel>
      <TabPanel value={value} index={16}>
      <QWords />
      </TabPanel>
      <TabPanel value={value} index={17}>
      <RWords />
      </TabPanel>
      <TabPanel value={value} index={18}>
      <SWords />
      </TabPanel>
      <TabPanel value={value} index={19}>
      <TWords />
      </TabPanel>
      <TabPanel value={value} index={20}>
      <UWords />
      </TabPanel>
      <TabPanel value={value} index={21}>
      <VWords />
      </TabPanel>
      <TabPanel value={value} index={22}>
      <WWords />
      </TabPanel>
      <TabPanel value={value} index={23}>
      <XWords />
      </TabPanel>
      <TabPanel value={value} index={24}>
      <YWords />
      </TabPanel>
      <TabPanel value={value} index={25}>
      <ZWords />
      </TabPanel>
    </div>
  );
}

const AWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
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
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
  const BWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/b`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with C
  const CWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/c`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with D
  const DWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/d`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with 
  const EWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/e`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with F
  const FWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/f`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with G
  const GWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/g`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with H
  const HWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/h`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with I
  const IWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/i`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
//   words that start with J
  const JWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/j`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

//   words that start with K
  const KWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/k`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
  
  //   words that start with L
  const LWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/l`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
  //   words that start with M
  const MWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/m`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
  //   words that start with N
  const NWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/n`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };
  //   words that start with O
  const OWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/o`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with p
  const PWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/p`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with Q
  const QWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/q`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with R
  const RWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/r`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with S
  const SWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/s`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with T
  const TWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/t`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with U
  const UWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/u`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with V
  const VWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/v`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with W
  const WWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/w`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with X
  const XWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/x`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with Y
  const YWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/y`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

  //   words that start with Z
  const ZWords = () => {
    const [words, setWords] = useState(
      'Loading...'
    );
    useEffect(() => {
     const doThing = ()=> {
        async function fetchMoviesJSON() {
            const response = await fetch(`https://namegenserver.herokuapp.com/alpha/z`);
            var apes = await response.json();
            console.log(apes)
        setWords(apes)
        }
        fetchMoviesJSON()
    }
    doThing()
}, []);
const wordCount = Object.values(words).length
const listItems = Object.values(words).map((word) => (
      <li>{word}</li>))
//   ));
    return (
        <Box>
            <h1>
                Amount of Words
            </h1>
        <h2>{wordCount}</h2>
        <ul>{listItems}</ul>
        </Box>
    );
  };

