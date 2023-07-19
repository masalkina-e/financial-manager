import Statictics from "components/Statictics"
import Form from "components/Form"
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
            date: new Date(2023, 4, 1),
            name: "Продукты",
            value: 3000
        },
        {
            date: new Date(2023, 4, 1),
            name: "Развлечения",
            value: 10000
        },
        {
            date: new Date(2023, 4, 5),
            name: "Шопинг",
            value: 12000
        },
        {
            date: new Date(2023, 4, 7),
            name: "Рестораны",
            value: 8000
        },
        {
            date: new Date(2023, 4, 11),
            name: "Путешествия",
            value: 23000
        },
        {
            date: new Date(2023, 4, 11),
            name: "Путешествия",
            value: 32000
        }
    ]

    const defaultIncomes: ItemsType[] = [
        {
            date: new Date(2023, 5, 20),
            name: "Зарплата",
            value: 70000
        },
        {
            date: new Date(2023, 6, 20),
            name: "Зарплата",
            value: 70000
        }
    ]

    const [expenses, setExpenses] = useState<ItemsType[]>(
        localStorage.getItem("expenses")
            ? JSON.parse(localStorage.getItem("expenses")!)
            : defaultExpenses
    )

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    const [incomes, setIncomes] = useState<ItemsType[]>(
        localStorage.getItem("incomes")
            ? JSON.parse(localStorage.getItem("incomes")!)
            : defaultIncomes
    )

    useEffect(() => {
        localStorage.setItem("incomes", JSON.stringify(incomes))
    }, [incomes])

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

    function addNewExpense(newValue: number, newText: string, startDate: Date) {
        if (newValue === 0) {
            alert("Введите число больше 0")
        } else {
            const newExpense: ItemsType = {
                date: startDate,
                name: newText,
                value: newValue
            }
            const newExpenses = [...expenses, newExpense]
            setExpenses(newExpenses)
        }
    }

    function addNewIncomes(newValue: number, newText: string, startDate: Date) {
        if (newValue === 0) {
            alert("Введите число больше 0")
        } else {
            const newIncome: ItemsType = {
                date: startDate,
                name: newText,
                value: newValue
            }
            const newIncomes = [...incomes, newIncome]
            setIncomes(newIncomes)
        }
    }

    const items = expenses.concat(incomes)

    return (
        <div>
            {currentPage === TabTypes.expenses && (
                <div>
                    <Form
                        allCategories={allCategoriesExpenses}
                        onSubmit={addNewExpense}
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
                        sing="- "
                    />
                </div>
            )}
            {currentPage === TabTypes.incomes && (
                <div>
                    <Form
                        allCategories={allCategoriesIncomes}
                        onSubmit={addNewIncomes}
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
                        sing="+ "
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
