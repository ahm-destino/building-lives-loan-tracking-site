import { useNavigate } from "react-router-dom"
export default function StaffShortCutcard({prop}){
    console.log(prop.userName);
    
    const navigate =useNavigate()

    function redirectTouserReport(){
        navigate('/user-profile-report', {state: prop})
    }
    function redirectToUserNote(){
        navigate('/notes',{state: prop.userName} )
    }

    return(
        <div className="flex justify-around bg-white m-[20px_0] p-[20px] rounded-[12px] border border-slate-200/80 ">
                <button onClick={redirectToUserNote} className="flex flex-col items-center gap-1">
                    <p className="bi bi-book text-lg text-[#2b8cee] bg-blue-100/50 p-[15px_20px] rounded-[25%]"></p>
                    <p className="text-slate-700 text-[14px] ">Note</p>
                </button>
                <a href="tel:+234 000 0000 000">
                    <button className="flex flex-col items-center gap-1 " href='tel:089079606045'>
                        <p className="bi bi-telephone-fill text-lg text-[#2b8cee] bg-blue-100/50 p-[15px_20px] rounded-[25%]"></p>
                        <p className="text-slate-700 text-[14px] ">Call</p>
                    </button>
                </a>
                <a href="https://wa.me/12025550123">
                    <button className="flex flex-col items-center gap-1 ">
                        <p className="bi bi-share-fill text-lg text-[#2b8cee] bg-blue-100/50 p-[15px_20px] rounded-[25%]"></p>
                        <p className="text-slate-700 text-[14px] ">Share</p>
                    </button>
                </a>
                <button onClick={redirectTouserReport} className="flex flex-col items-center gap-1 ">
                    <p className="bi bi-bar-chart-fill text-lg text-[#2b8cee] bg-blue-100/50 p-[15px_20px] rounded-[25%]"></p>
                    <p className="text-slate-700 text-[14px] ">Reports</p>
                </button>
                
                
        </div>
        
    )
}