import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import CustomerTable from '../CustomerTable/CustomerTable'

const CustomerRoutes = () => {
   const history = useNavigate()
   return (
      <div>
         <CustomerTable history={history} />
         <Outlet />
      </div>
   )
}

export default CustomerRoutes
