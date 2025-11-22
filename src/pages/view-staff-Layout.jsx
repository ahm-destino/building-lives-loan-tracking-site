import StaffOverview from "../components/view-staff-components/staff-profile-card"
import AddStaffBtn from "../components/view-staff-components/add-staff-btn"
import AppFooter from "../components/app-footer"
import { useNavigate } from "react-router-dom"

export default function ViewStaffLayout() {
    

    const navigate = useNavigate()
    function back() {
        navigate(-1)
    }


    return(
        <>
            <header className=' p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300'>
                <button className='bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 ' onClick={back} ></button>
                <p className='text-xl font-bold'> Staffs Overview</p>
                <p></p> 
            </header>

            <StaffOverview />
            <AddStaffBtn />
            <AppFooter />
        </>
        
    )
}