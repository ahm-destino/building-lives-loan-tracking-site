# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



const customersInfo = [
    {
      name : 'Emmanuel Chukwuma',
      phone_number : '+23490394950',
      time: '77',
      transaction_history:[
        {
          id: 'I gave out',
          amount: '90000'
        },
        {
          id: 'I recieved',
          amount: '190000'
        }
      ]
    },
    {
      name : 'Okoro Ijeoma',
      phone_number : '+2348009394950',
      time: '77',
      transaction_history:[
        {
          id: 'I recieved',
          amount: '120000'
        },
        {
          id: 'I recieved',
          amount: '300000'
        }
      ]
    }
  ]









<div className="flex items-center">
                <p className="material-symbols-outlined flex items-center justify-center text-2xl w-[50px] h-[50px] mr-[20px] bg-blue-200/50  rounded-[50%]">person</p>
                <div>
                    <p className="text-lg font-medium "> John Okafor</p>
                    <p className="text-sm text-slate-600">+234 9056 5678</p>
                    <p className="text-[10px] mt-[2px]"> Today at 12:56pm</p>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-green-500 text-xl font-medium">₦70,000</p>
                    <p className="text-sm text-slate-600">Net Balance</p>
                </div>
            </div>
            <hr />
            <button className="bg-blue-200/30 hover:bg-blue-200/50 text-slate-700 text-[16px] font-medium  p-[10px] rounded-[12px]"> View Profile </button>
</div>