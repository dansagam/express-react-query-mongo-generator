import {
   getCustomersFunc,
   getCustomerByIdFunc,
   addCustomerFunc,
} from './customerAsyncFunc'
import MOCK_CUSTOMER_LISTS, {
   newData,
} from '../mockdata/CUSTOMER_LIST_MOCK_DATA'
import MOCK_CUSTOMER_DETAIL from '../mockdata/CUSTOMER_FULL_MOCK_DATA'

//this is the get customer list test component
describe('get Customer List test', () => {
   let actualCustomerList
   describe('mock data flag is set', () => {
      beforeEach(async () => {
         process.env.REACT_APP_MOCK_DATA = 'true'
         actualCustomerList = await getCustomersFunc()
      })
      it('should return the mock customerList', () => {
         expect(actualCustomerList).toEqual(MOCK_CUSTOMER_LISTS)
      })
   })
   describe('mock data flag is string', () => {
      beforeEach(async () => {
         process.env.REACT_APP_MOCK_DATA = 'false'
         actualCustomerList = await getCustomersFunc()
      })
      it('should return the mock customerList', () => {
         expect(actualCustomerList).toEqual(MOCK_CUSTOMER_LISTS)
      })
   })
})

//this is the getCustomerByIdFunc testing component
describe('get the customer details', () => {
   let expectedCustomer
   describe('mock data flag is set', () => {
      beforeEach(async () => {
         process.env.REACT_APP_MOCK_DATA = 'true'
         expectedCustomer = await getCustomerByIdFunc(1)
      })
      it('should return the full detail of the data fetch', () => {
         expect(expectedCustomer).toEqual(MOCK_CUSTOMER_DETAIL)
      })
   })
   describe('mock data flag is string', () => {
      beforeEach(async () => {
         process.env.REACT_APP_MOCK_DATA = 'false'
         expectedCustomer = await getCustomerByIdFunc(1)
      })
      it('should return the full detail of the data fetch', () => {
         expect(expectedCustomer).toEqual(MOCK_CUSTOMER_DETAIL)
      })
   })
})

//this is the addCustomer testing component
describe('test the Add data func', () => {
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   }
   let addedCustomer
   describe('mock data flag is set', () => {
      beforeEach(async () => {
         process.env.REACT_APP_MOCK_DATA = 'true'
         addedCustomer = await addCustomerFunc(newData, config)
      })
      it('should add the new data to the list', () => {
         expect(addedCustomer).toEqual([...MOCK_CUSTOMER_LISTS, newData])
      })
   })
})
