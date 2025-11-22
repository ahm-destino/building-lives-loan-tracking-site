import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import DashboardLayout from './pages/dashboard-layout.jsx'
import CustomerProfile from './pages/view-customer-profile-layout.jsx'
import AddTransaction from './components/add-transaction-page.jsx'
import AddNewCustomerPageLayout from './pages/add-new-customer-page-layout.jsx'
import CreateNewCustomer from './components/add-new-customer-components/create-new-customer-page.jsx'
import ViewStaffLayout from './pages/view-staff-Layout.jsx'
import AddNewStaff from './pages/add-new-staff-page.jsx'
import DashboardReport from './pages/dashboard-report-page.jsx'
import ReportPageLayout from './components/dashboard-report-components/dashboard-report-action-page/report-action-page-layout.jsx'
import UserProfileReport from './pages/user-profile-report-page.jsx'
import Notes from './components/customer-profile-components/notes-page.jsx'
import StaffProfile from './pages/view-staff-profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  
  // const customersInfo = [
  //   {
  //     name : 'Emmanuel Chukwuma',
  //     phone_number : '+23490394950',
  //     address: 'City of favour road',
  //     loanOfficer: 'Oluwagbenga Emmanuel',
  //     notes: '',
  //     transaction_history:[
  //       {
  //         id: 'I gave Out',
  //         amount: '90000',
  //         timestamp : new Date().toLocaleString( 'en-US', {
  //           day: '2-digit',
  //           month: '2-digit',
  //           year: 'numeric',
  //           hour12: true,
  //           hour: '2-digit',
  //           minute: '2-digit',
  //           second: '2-digit'
  //         })
  //       },
  //       {
  //         id: 'I Recieved',
  //         amount: '190000',
  //         timestamp : new Date().toLocaleString( 'en-US', {
  //           day: '2-digit',
  //           month: '2-digit',
  //           year: 'numeric',
  //           hour12: true,
  //           hour: '2-digit',
  //           minute: '2-digit',
  //           second: '2-digit'
  //         })
  //       }
  //     ]
  //   },
  //   {
  //     name : 'Okoro Ijeoma',
  //     phone_number : '+2348009394950',
  //     address: 'City of favour road',
  //     loanOfficer: 'Oluwagbenga Emmanuel',
  //     notes: '',
  //     transaction_history:[
  //       {
  //         id: 'I Recieved',
  //         amount: '120000',
  //         timestamp : new Date().toLocaleString( 'en-US', {
  //           day: '2-digit',
  //           month: '2-digit',
  //           year: 'numeric',
  //           hour12: true,
  //           hour: '2-digit',
  //           minute: '2-digit',
  //           second: '2-digit'
  //         })
  //       },
  //       {
  //         id: 'I Recieved',
  //         amount: '300000',
  //         timestamp : new Date().toLocaleString( 'en-US', {
  //           day: '2-digit',
  //           month: '2-digit',
  //           year: 'numeric',
  //           hour12: true,
  //           hour: '2-digit',
  //           minute: '2-digit',
  //           second: '2-digit'
  //         })
  //       }
  //     ]
  //   }
  // ]


  
  // localStorage.setItem('customerInfo', JSON.stringify(customersInfo)) 

  // const staffInfo = [
  //   {
  //     name: 'Oluwasegun Daniel',
  //     phone_number: '+2349869850097',
  //     address: 'Ikorodu, Lagos, State',
  //   },
  //   {
  //     name: 'Oluwagbenga Emmanuel',
  //     phone_number: '+234909870870',
  //     address: 'Ikorodu, Lagos, State',
  //   },
  //   {
  //     name: 'Christaina Joseph',
  //     phone_number: '+234909870870',
  //     address: 'Ikorodu, Lagos, State',
  //   },
  // ]

  // localStorage.setItem('staffInfo', JSON.stringify(staffInfo)) 


   const customersInfo = JSON.parse(localStorage.getItem('customerInfo')) || []
   const staffInfo = JSON.parse(localStorage.getItem('staffInfo')) || []

  // console.log(customersInfo);
  
  // This block of code is to check the number of customers a staff has brought
  function getNumberOfStaffCustomers(staffName){

      let customerCount = 0;
      const count = customersInfo.map(element => {
        if(element.loanOfficer === staffName){
          customerCount += 1
          return staffName
        }
        else{
          return 
        }
      });
     
      return customerCount;
  }

  
  //This block of code is to get the total amount given out by a particular staff
function getTotalAmountGivenByStaff(staffName) {

  const filteredMoneyGiven = []
  customersInfo.map((el)=>{

    if(el.loanOfficer === staffName){

      el.transaction_history.map((el) => {
        if(el.id === 'I gave out'){
          console.log(el.amount);
          filteredMoneyGiven.push(el.amount)
        }
      })
      
    }
    
  })
  const totalAmountGiven = filteredMoneyGiven.reduce((a,b)=>{
    return a+b
  },0)
  console.log(totalAmountGiven);
  return totalAmountGiven

}



// This function is to get the total amount recieved by a particular staff
function getTotalAmountRecievedByStaff(staffName) {

  const filteredMoneyRecieved = []

  customersInfo.map((el)=>{

    if(el.loanOfficer === staffName){

      el.transaction_history.map((el) => {
        if(el.id === 'I Recieved'){
          console.log(el.amount);
          filteredMoneyRecieved.push(el.amount)
        }
      })
      
    }
    
  })
  const totalAmountGiven = filteredMoneyRecieved.reduce((a,b)=>{
    return a+b
  },0)
  console.log(totalAmountGiven);
  return totalAmountGiven

}


  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element ={<DashboardLayout prop={customersInfo} />}>

        </Route>
        <Route >
          <Route path='/view-profile' element={<CustomerProfile />} />
        </Route>

        <Route>
          <Route path='/add-transaction' element={<AddTransaction prop={customersInfo}  />} />
          <Route path='/create-customer-page' element={<CreateNewCustomer prop={{customersInfo : customersInfo, staffInfo: staffInfo}} />} />
          <Route path='/add-new-customer' element={<AddNewCustomerPageLayout />} />
          <Route path='/view-staffs' element={<ViewStaffLayout />} />
          <Route path='/add-new-staff' element={<AddNewStaff prop={staffInfo} />} />
          <Route path='/dashboard-reports' element ={ <DashboardReport prop ={customersInfo} />} />
          <Route path='/report-action' element ={ <ReportPageLayout prop ={customersInfo} />} />
          <Route path='/user-profile-report' element={<UserProfileReport />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/view-staff-profile' element={<StaffProfile />} />
         
        </Route>


      </Routes>
    </BrowserRouter>
    
  )
}

export default App
