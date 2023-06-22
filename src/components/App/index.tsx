import "components/App/App.css"
import Header from "components/Header"
import SinglePage from "components/SinglePage"
import { useState } from "react"

export enum TabTypes {
    expenses,
    incomes,
    balance
}

export type TabType = TabTypes.expenses | TabTypes.incomes | TabTypes.balance

function App() {
    const [currentPage, setCurrentPage] = useState<TabType>(TabTypes.expenses)
    console.log(currentPage)

    return (
        <div className="mx-auto my-28 w-11/12 bg-slate-50 lg:w-2/4">
            <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <SinglePage currentPage={currentPage} />
        </div>
    )
}

export default App
