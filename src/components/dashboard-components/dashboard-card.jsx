import react from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboardcard({transactionHistory}){
    const navigate = useNavigate()
   
    // This bock of code is for calculating the total money recieved by the admin
    const totalRecieved = [];

    transactionHistory.map((el)=>{
        const filteredMoneyRecieved = el.filter(element => {
            return element.id === 'I Recieved'            
        });
        const totalAmount = filteredMoneyRecieved.map((el)=>{
            totalRecieved.push(parseInt(el.amount))       
        })
    })

    //This is the final total money recieved
    const totalMoneyRecieved = totalRecieved.reduce((a,b)=>{
        return a+ b
    },0)


    // This bock of code is for calculating the total money Given out by the admin
    const totalGiven = [];

    transactionHistory.map((el)=>{
        const filteredMoneyGiven = el.filter(element => {
            return element.id === 'I gave Out'            
        });
        const totalAmount = filteredMoneyGiven.map((el)=>{
            totalGiven.push(parseInt(el.amount))       
        })
    })

    // This is the final total money given out
    const totalMoneyGiven = totalGiven.reduce((a,b)=>{
        return a+ b
    },0)


    function goToDashBoardReport(){
        navigate('/dashboard-reports')
    }

    

    return(
        <div className="flex flex-row justify-even p-[30px_20px] m-[100px_0px_40px]  rounded-[20px] bg-white shadow-[0px_0px_8px_0_rgba(0,0,0,0.1)]  ">
            <div className="flex flex-col justify-center ml-[20px] space-y-5">
                <span>
                    <p className="text-sm  text-slate-500 font-medium">Total I got </p>
                    <h2 className="text-3xl font-bold text-green-500"> ₦{totalMoneyRecieved}</h2>
                </span>
                <span>
                    <p className="text-sm text-slate-500 font-medium">Total I gave</p>
                    <h2 className="text-3xl font-bold text-red-500"> ₦{totalMoneyGiven}</h2>
                </span>
            </div>
            <div className="ml-auto flex items-center gap-[20px]  p-[20px]">
                <button className="flex flex-col" >
                    <p className="material-symbols-outlined text-2xl p-[15px_20px] bg-blue-200/30 text-center text-[#2563EB] rounded-[12px]"> notifications_active </p>
                    <p className=" text-[12px] text-slate-500 font-medium text-center">Reminder </p>
                </button>
                
                <button className="flex flex-col" onClick={goToDashBoardReport}>
                    <p className="material-symbols-outlined text-2xl p-[15px_20px] bg-blue-200/30 text-center text-[#2563EB] rounded-[12px]"> bar_chart </p>
                    <p className=" text-[12px] text-slate-500 font-medium text-center">Reports </p>
                </button>
            </div>
        </div>
    )

}