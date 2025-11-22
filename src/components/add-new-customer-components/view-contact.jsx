export default function ViewContacts(){
    return(
        <>
            <div>
                <h2 className="mt-[30px] text-xl font-bold"> Contacts </h2>
                <div class="relative flex-grow">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">search</span>
                    <input class="w-full p-10 pr-4 py-3 bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-300 rounded-lg text-on-surface-light dark:text-on-surface-dark placeholder-muted-light dark:placeholder-muted-dark focus:ring-primary focus:border-primary" placeholder="Search" type="text"/>
                </div>
            </div>
        </>
    )
}