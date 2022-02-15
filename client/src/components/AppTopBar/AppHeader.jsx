import { useCallback, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import {
   AppBar,
   Box,
   Toolbar,
   IconButton,
   Typography,
   InputBase,
   Badge,
   MenuItem,
   Menu,
} from '@mui/material'
import {
   Menu as MenuIcon,
   Search as SearchIcon,
   AccountCircle,
   Mail as MailIcon,
   Notifications as NotificationsIcon,
   MoreVert as MoreIcon,
} from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
   },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}))

const AppHeader = () => {
   const navigate = useNavigate()
   const [keyword, setKeyword] = useState('')
   const [anchorEl, setAnchorEl] = useState(null)
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

   const isMenuOpen = Boolean(anchorEl)
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

   const searchHandler = useCallback(
      (e) => {
         e.preventDefault()
         if (keyword.trim()) {
            navigate(`/search/${keyword}`)
         } else {
            navigate('/')
         }
      },
      [keyword, navigate]
   )

   const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null)
   }

   const handleMenuClose = () => {
      setAnchorEl(null)
      handleMobileMenuClose()
   }

   const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget)
   }

   const menuId = 'primary-search-account-menu'
   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         id={menuId}
         keepMounted
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
   )

   const mobileMenuId = 'primary-search-account-menu-mobile'
   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <MenuItem>
            <IconButton
               size="large"
               aria-label="show new mails"
               color="inherit"
            >
               <Badge badgeContent={0} color="error">
                  <MailIcon />
               </Badge>
            </IconButton>
            <p>Messages</p>
         </MenuItem>
         <MenuItem>
            <IconButton
               size="large"
               aria-label="show new notifications"
               color="inherit"
            >
               <Badge badgeContent={0} color="error">
                  <NotificationsIcon />
               </Badge>
            </IconButton>
            <p>Notifications</p>
         </MenuItem>
         <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="primary-search-account-menu"
               aria-haspopup="true"
               color="inherit"
            >
               <AccountCircle />
            </IconButton>
            <p>Profile</p>
         </MenuItem>
      </Menu>
   )

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
               >
                  <NavLink
                     to={'/'}
                     style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                     Customers List
                  </NavLink>
               </Typography>
               <form onSubmit={searchHandler}>
                  <Search>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => setKeyword(e.target.value)}
                     />
                  </Search>
               </form>
               <Box sx={{ flexGrow: 1 }} />
               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <IconButton
                     size="large"
                     aria-label="sho new mails"
                     color="inherit"
                  >
                     <Badge badgeContent={0} color="error">
                        <MailIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     size="large"
                     aria-label="show new notifications"
                     color="inherit"
                  >
                     <Badge badgeContent={0} color="error">
                        <NotificationsIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     size="large"
                     edge="end"
                     aria-label="account of current user"
                     aria-controls={menuId}
                     aria-haspopup="true"
                     onClick={handleProfileMenuOpen}
                     color="inherit"
                  >
                     <AccountCircle />
                  </IconButton>
               </Box>
               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="show more"
                     aria-controls={mobileMenuId}
                     aria-haspopup="true"
                     onClick={handleMobileMenuOpen}
                     color="inherit"
                  >
                     <MoreIcon />
                  </IconButton>
               </Box>
            </Toolbar>
         </AppBar>
         {renderMobileMenu}
         {renderMenu}
      </Box>
   )
}

export default AppHeader
