export default function StaffCustomerBalanceCard({balance}){
    return(
         <div className=" flex flex-col bg-white border border-slate-100 m-[20px_0] p-[30px] rounded-[12px] shadow">
                <p className="text-[16px] font-medium text-[#2b8cee]"> General Balance</p>
                <p className="text-3xl font-bold text-green-600">₦{balance}</p>
        </div>
    )
}