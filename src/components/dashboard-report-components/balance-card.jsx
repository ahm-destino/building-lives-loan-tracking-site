export default function DashBoardReportBalanceCard({transactionHistory}){
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

    const netBalance = totalMoneyRecieved - totalMoneyGiven

    return(
        <div className="flex flex-col justify-between space-y-[20px] p-[30px_20px] m-[100px_0px_40px]  rounded-[20px] bg-white shadow-[0px_0px_8px_0_rgba(0,0,0,0.1)]  ">
            <div className="flex flex-row justify-around items-center ml-[20px] ">
                <span>
                    <p className="text-sm  text-slate-500 font-medium">Total I got </p>
                    <h2 className="text-3xl font-bold text-green-500"> ₦{totalMoneyRecieved}</h2>
                </span>
                <span>
                    <p className="text-sm text-slate-500 font-medium">Total I gave</p>
                    <h2 className="text-3xl font-bold text-red-500"> ₦{totalMoneyGiven}</h2>
                </span>
            </div>
            <div className="flex justify-center items-center space-x-[10px] " > 
                <p className="text-sm  text-blue-500 font-medium">Net Balance:</p>
                <p className="text-lg font-bold text-slate-600"> ₦{netBalance} </p>
            </div>
            
        </div>
    )

}