import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer;
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;