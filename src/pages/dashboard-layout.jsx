import Dashboardcard  from  '../components/dashboard-components/dashboard-card.jsx'
import CustomersList from '../components/dashboard-components/customers-list.jsx'
import AddCustomerBtn from '../components/dashboard-components/add-customer-btn.jsx'
import AppFooter from '../components/app-footer.jsx'
import { useState } from 'react'
export default function DashboardLayout({prop}){
    
    
    return(
    
        <div className=' text-slate-800'>
            <header className='p-[30px] bg-white flex items-center border-b border-gray-300 fixed right-[0px] left-[0px] top-[5px] rounded-t-[30px]'>
                <p className='text-xl font-bold'> Daniel Microfinance Bank</p>
                <p className="ml-auto material-symbols-outlined text-3xl"> notifications_unread </p>
            </header>
            <Dashboardcard transactionHistory={prop.map(el => {
                return el.transaction_history
            })} />
            
            <CustomersList prop ={prop}/>
            <AddCustomerBtn />
            <AppFooter />
        </div>
    )
}