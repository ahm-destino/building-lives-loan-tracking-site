import { useState, useMemo } from "react";
import CustomerListcard from "./customer-list-card";

export default function CustomersList({ prop }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [showOnlyDebtors, setShowOnlyDebtors] = useState(false);

    // FILTER LOGIC
    const filteredCustomers = useMemo(() => {
        return prop.filter((customer) => {
            const matchesSearch = customer.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());


            return matchesSearch;
        });
    }, [searchTerm, prop]);

    return (
        <div>
            <header className="flex justify-between">
                <h2 className="text-xl font-bold">Customers</h2>
            </header>

            <div className="flex p-[20px_0]">
               
                <div className="relative flex-grow">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">
                        search
                    </span>

                    <input
                        className="w-full pl-10 pr-4 py-3 bg-surface-light border rounded-lg"
                        placeholder="Search"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

               
                <button className="p-3 bg-primary/10 text-[#2563EB] rounded-lg ml-2">
                    <span className="material-symbols-outlined">tune</span>
                </button>

                <button className="p-3 bg-primary/10 text-[#2563EB] rounded-lg ml-2">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                </button>
            </div>

            
            <CustomerListcard prop={filteredCustomers} />
        </div>
    );
}
