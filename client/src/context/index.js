import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@mui/material/styles'

const AppProvider = (props) => {
   const { children } = props
   return <div>{children}</div>
}

AppProvider.propTypes = {
   children: PropTypes.node.isRequired,
}

export default AppProvider
