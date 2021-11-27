import React, { Fragment } from 'react'
import {
   Table,
   TableBody,
   TableHead, TableRow, TableCell, TableContainer,
} from '@mui/material'
import CustomerTableItem from '../CustomerTableItem/CustomerTableItem'
import { useSelector } from 'react-redux'

const CustomerTable = ({ history }) => {
   const { customers } = useSelector(state => state.customer)
   return (
      <Fragment>
         <TableContainer>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell />
                     <TableCell>Full Name</TableCell>
                     <TableCell>Mobile Phone  No</TableCell>
                     <TableCell>Registered Date</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {customers.map((customer) => (
                     <CustomerTableItem key={customer._id} customer={customer} history={history} />
                  ))}
               </TableBody>
            </Table>
         </TableContainer>

      </Fragment>
   )
}

export default CustomerTable
