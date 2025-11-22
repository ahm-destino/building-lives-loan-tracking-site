export default function StaffContactInfoCard({staffInfo}){
    console.log(staffInfo.name);
    
    return(
        <div className=" bg-white  p-[30px] m-[20px_0] rounded-[12px] flex items-center space-x-8 shadow">
            <p className="material-symbols-outlined bg-slate-100 p-[20px_20px] rounded-[50%]"> person </p>
            <span className="">
                <p className="text-xl font-bold">{staffInfo.name}</p>
                <p className="text-slate-500 font-">{staffInfo.phone_number}</p>
            </span>
        </div>
    )
}