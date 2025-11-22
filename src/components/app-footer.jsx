import { useNavigate, useLocation } from "react-router-dom";

export default function AppFooter() {
    const navigate = useNavigate();
    const location = useLocation();

    function viewAllStaffs() {
        navigate("/view-staffs");
    }

    function goTodashboard() {
        navigate("/");
    }

    function goToMore() {
        navigate("/more");
    }

    // Function to check if path is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-[20px] shadow shadow-[0_0_8px_0_rgba(0,0,0,0.2)]">
            
            {/* Dashboard */}
            <button
                onClick={goTodashboard}
                className={`flex flex-col items-center ${
                    isActive("/") ? "text-blue-600" : "text-slate-500"
                }`}
            >
                <p className="text-3xl material-symbols-outlined">import_contacts</p>
                <p className="text-sm font-bold">Dashboard</p>
            </button>

            {/* View Staffs */}
            <button
                onClick={viewAllStaffs}
                className={`flex flex-col items-center ${
                    isActive("/view-staffs") ? "text-blue-600" : "text-slate-500"
                }`}
            >
                <p className="text-3xl material-symbols-outlined">group</p>
                <p className="text-sm font-bold">View Staffs</p>
            </button>

            {/* More */}
            <button
                
                className={`flex flex-col items-center ${
                    isActive("/more") ? "text-blue-600" : "text-slate-500"
                }`}
            >
                <p className="text-3xl material-symbols-outlined">apps</p>
                <p className="text-sm font-bold">More</p>
            </button>
        </div>
    );
}
