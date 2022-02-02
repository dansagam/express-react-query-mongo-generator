import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles'

const AppProvider = (props) => {
   return <div></div>;
};

AppProvider.propTypes = {
   children: PropTypes.node.isRequired
};

export default AppProvider;
