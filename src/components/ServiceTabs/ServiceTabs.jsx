import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";


const ServiceTabs = props => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };  

  const { tabs } = props;
  return (
    <Grid container justify='center'>
      <Grid container item xs={10} justify='center'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='on'
          indicatorColor='primary'
          textColor='primary'
          aria-label='scrollable tabs for navigating the site'
        >
          {tabs.map(tab => {
            return <Tab label={tab.title} key={tab.title} name={tab.title} />;
          })}
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default ServiceTabs;
