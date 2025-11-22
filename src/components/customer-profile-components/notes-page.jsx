import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Notes() {
    const customersInfo = JSON.parse(localStorage.getItem("customerInfo")) || [];

    const location = useLocation();
    const navigate = useNavigate();

    //  LOAD NOTE ON FIRST RENDER
    const currentCustomer = customersInfo.find(
        (el) => el.name === location.state
    );

    const [note, setNote] = useState(currentCustomer?.notes || "");

   
    function back() {
        navigate(-1);
    }

    //  SAVE NOTE FUNCTION
    function saveNote() {
        const updated = customersInfo.map((el) => {
            if (el.name === location.state) {
                return { ...el, notes: note };
            }
            return el;
        });

        localStorage.setItem("customerInfo", JSON.stringify(updated));

        console.log("Saved:", updated);
    }

    return (
        <>
            <header className="p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300">
                <button
                    className="bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl hover:bg-slate-200"
                    onClick={back}
                ></button>
                <p className="text-xl font-bold"> Notes </p>
                <p></p>
            </header>

            
            <div>
                <textarea
                    className="w-full h-[80vh] border border-slate-200 rounded-lg p-[20px]"
                    placeholder="Enter your note..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </div>

            <button
                onClick={saveNote}
                className="text-lg p-[18px_20px] text-white bg-[#2563EB] shadow rounded-[10px] fixed bottom-[20px] left-[10px] right-[10px]"
            >
                <p className="text-center">Save Note</p>
            </button>
        </>
    );
}
