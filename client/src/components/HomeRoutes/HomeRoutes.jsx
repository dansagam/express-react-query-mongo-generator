import { Typography, Card, CardActions, CardMedia, Button, CardContent } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeRoutes = () => {
   const navigate = useNavigate()
   return (
      <div>
         <Card sx={{ maxWidth: 345, textAlign: 'center', mt: 3 }} >
            <CardMedia
               component="img"
               height="350"
               image="/Images/1467853.svg"
               alt="Presentation"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Welcome to the landing page the simple app to get up started on the Express
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Do you want to see the list of Customers?
               </Typography>
            </CardContent>
            <CardActions >
               <Button size="small" disabled>Disabled</Button>
               <Button size="small" onClick={() => navigate('/customers')}>
                  Customer List
               </Button>
            </CardActions>
         </Card>
         <Outlet />
      </div>
   )
}

export default HomeRoutes
