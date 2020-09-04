import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavTabs = (props) => {
  return (
    <>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        variant='scrollable'
        scrollButtons='on'
        indicatorColor='primary'
        textColor='primary'
        aria-label='scrollable tabs for navigating the site'
      >
        <Tab value='Home' label='Logo Here' />
        <Tab value='Services' label='Services' />
        <Tab value='Gallery' label='Gallery' />
        <Tab value='Contact' label='Contact' />
      </Tabs>
    </>
  );
};

export default NavTabs;
