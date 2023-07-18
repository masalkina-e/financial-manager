import Statictics from "components/Statictics"
import FormExpenses from "components/FormExpenses"
import FormIncomes from "components/FormIncomes"
import List from "components/List"
import Balance from "components/Balance"
import ListBalance from "components/ListBalance"
import Diagram from "components/Diagram"

import { TabType, TabTypes } from "components/App"
import { sortCategories, sumAllCategories } from "scripts/scripts"
import { useEffect, useState } from "react"

export type ItemsType = {
    date: Date
    name: string
    value: number
}

export type SortedItemsType = {
    name: string
    value: number
}

export type SummedAllItemsType = {
    name: string
    value: number
}

type Props = {
    currentPage: TabType
}

function SinglePage({ currentPage }: Props) {
    const defaultExpenses: ItemsType[] = [
        {
            date: "01 апреля 2023",
            name: "Продукты",
            value: 3000
        },
        {
            date: "01 апреля 2023",
            name: "Развлечения",
            value: 10000
        },
        {
            date: "05 апреля 2023",
            name: "Шопинг",
            value: 12000
        },
        {
            date: "09 апреля 2023",
            name: "Рестораны",
            value: 8000
        },
        {
            date: "11 апреля 2023",
            name: "Путешествия",
            value: 23000
        },
        {
            date: "11 апреля 2023",
            name: "Путешествия",
            value: 32000
        }
    ]

    const [incomes, setIncomes] = useState<ItemsType[]>([
        {
            date: "20 июня 2023",
            name: "Зарплата",
            value: 70000
        },
        {
            date: "20 июля 2023",
            name: "Зарплата",
            value: 70000
        }
    ])

    const [expenses, setExpenses] = useState<ItemsType[]>(
        localStorage.getItem("expenses")
            ? JSON.parse(localStorage.getItem("expenses")!)
            : defaultExpenses
    )

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    const allCategoriesExpenses = [
        "Продукты",
        "Развлечения",
        "Шопинг",
        "Путешествия",
        "Рестораны"
    ]
    const allCategoriesIncomes = [
        "Зарплата",
        "Пособие",
        "Кэшбэк",
        "Аренда",
        "Прочие доходы"
    ]

    const sortedExpenses = sortCategories({
        categories: allCategoriesExpenses,
        items: expenses
    })
    const sortedIncomes = sortCategories({
        categories: allCategoriesIncomes,
        items: incomes
    })

    const [currentExpenseCategory, setCurrentExpenseCategory] =
        useState<string>("Итого")
    const [currentIncomesCategory, setCurrentIncomesCategory] =
        useState<string>("Итого")

    const summedAllExpenses = sumAllCategories(expenses)
    const summedAllIncomes = sumAllCategories(incomes)

    function addNewExpense(newExpense: ItemsType) {
        const newExpenses = [...expenses, newExpense]
        setExpenses(newExpenses)
    }

    function addNewIncomes(newIncome: ItemsType) {
        const newIncomes = [...incomes, newIncome]
        setIncomes(newIncomes)
    }

    const items = expenses.concat(incomes)

    return (
        <div>
            {currentPage === TabTypes.expenses && (
                <div>
                    <FormExpenses
                        allCategories={allCategoriesExpenses}
                        addNewExpense={addNewExpense}
                    />
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-1/2 flex flex-row justify-center m-auto sm:m-0">
                            <Diagram sortedCategories={sortedExpenses} />
                        </div>
                        <Statictics
                            sortedCategories={sortedExpenses}
                            summedAllCategories={summedAllExpenses}
                            setCurrentCategory={setCurrentExpenseCategory}
                            currentCategory={currentExpenseCategory}
                        />
                    </div>

                    <List
                        values={expenses}
                        currentCategory={currentExpenseCategory}
                    />
                </div>
            )}
            {currentPage === TabTypes.incomes && (
                <div>
                    <FormIncomes
                        allCategoriesIncomes={allCategoriesIncomes}
                        addNewIncomes={addNewIncomes}
                    />
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-1/2 flex flex-row justify-center m-auto sm:m-0">
                            <Diagram sortedCategories={sortedIncomes} />
                        </div>
                        <Statictics
                            sortedCategories={sortedIncomes}
                            summedAllCategories={summedAllIncomes}
                            setCurrentCategory={setCurrentIncomesCategory}
                            currentCategory={currentIncomesCategory}
                        />
                    </div>
                    <List
                        values={incomes}
                        currentCategory={currentIncomesCategory}
                    />
                </div>
            )}
            {currentPage === TabTypes.balance && (
                <div>
                    <Balance
                        summedAllExpenses={summedAllExpenses}
                        summedAllIncomes={summedAllIncomes}
                    />
                    <ListBalance items={items} />
                </div>
            )}
        </div>
    )
}
export default SinglePage
