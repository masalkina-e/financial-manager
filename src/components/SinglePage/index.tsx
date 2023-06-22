import Statictics from "components/Statictics"
import { useEffect, useState } from "react"
import FormExpenses from "components/FormExpenses"
import FormIncomes from "components/FormIncomes"
import { TabType, TabTypes } from "components/App"
import List from "components/List"

export type ExpenseType = {
    date: string
    name: string
    value: number
}

export type IncomesType = {
    date: string
    name: string
    value: number
}

export type SortedExpensesType = {
    name: string
    value: number
}

export type SummedAllExpensesType = {
    name: string
    value: number
}

export type SortedIncomesType = {
    name: string
    value: number
}

export type SummedAllIncomesType = {
    name: string
    value: number
}

type Props = {
    currentPage: TabType
}

function SinglePage({ currentPage }: Props) {
    const defaultExpenses = [
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

    const [incomes, setIncomes] = useState<IncomesType[]>([
        {
            date: "20 июня 2023",
            name: "Зарплата",
            value: 70000
        },
        {
            date: "20 июля 2023",
            name: "Зарплата",
            value: 70000
        },
        {
            date: "30 июля 2023",
            name: "Пособие",
            value: 1000
        },
        {
            date: "30 июля 2023",
            name: "Кэшбэк",
            value: 1000
        },
        {
            date: "30 июля 2023",
            name: "Аренда",
            value: 1000
        },
        {
            date: "30 июля 2023",
            name: "Прочие доходы",
            value: 1000
        }
    ])
    console.log(incomes)

    const [expenses, setExpenses] = useState<ExpenseType[]>(
        localStorage.getItem("expenses")
            ? JSON.parse(localStorage.getItem("expenses")!)
            : defaultExpenses
    )

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    const allCategories = [
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

    function sortCategories() {
        const i = allCategories.map((category) => {
            const filteredCategory = expenses.filter(
                (expense) => expense.name === category
            )
            console.log(filteredCategory)
            const filteredValue = filteredCategory.map((value) => value.value)
            let sum = filteredValue.reduce((a, b) => a + b)
            const sortedCategory = {
                name: category,
                value: sum
            }
            return sortedCategory
        })
        return i
    }
    const sortedExpenses = sortCategories()

    function sortIncomesCategories() {
        const i = allCategoriesIncomes.map((category) => {
            const filteredCategory = incomes.filter(
                (income) => income.name === category
            )
            console.log(filteredCategory)
            const filteredValue = filteredCategory.map((value) => value.value)
            let sum = filteredValue.reduce((a, b) => a + b)
            const sortedCategory = {
                name: category,
                value: sum
            }
            return sortedCategory
        })
        return i
    }
    const sortedIncomes = sortIncomesCategories()

    const [currentCategory, setCurrentCategory] =
        useState<string>("Все расходы")
    const [currentIncomesCategory, setCurrentIncomesCategory] =
        useState<string>("Все доходы")

    function sumAllExpenses() {
        const allValueExpenses = expenses.map((expense) => expense.value)
        let sumAll = allValueExpenses.reduce((a, b) => a + b)
        const allExpenses = {
            name: "Все расходы",
            value: sumAll
        }
        return allExpenses
    }
    const summedAllExpenses = sumAllExpenses()

    function sumAllIncomes() {
        const allValueIncomes = incomes.map((income) => income.value)
        let sumAll = allValueIncomes.reduce((a, b) => a + b)
        const allIncomes = {
            name: "Все доходы",
            value: sumAll
        }
        return allIncomes
    }
    const summedAllIncomes = sumAllIncomes()

    function addNewExpense(newExpense: ExpenseType) {
        const newExpenses = [...expenses, newExpense]
        setExpenses(newExpenses)
    }

    function addNewIncomes(newIncome: IncomesType) {
        const newIncomes = [...incomes, newIncome]
        setIncomes(newIncomes)
    }

    return (
        <div>
            {currentPage === TabTypes.expenses && (
                <FormExpenses
                    allCategories={allCategories}
                    addNewExpense={addNewExpense}
                />
            )}
            {currentPage === TabTypes.incomes && (
                <FormIncomes
                    allCategoriesIncomes={allCategoriesIncomes}
                    addNewIncomes={addNewIncomes}
                />
            )}
            <Statictics
                sortedExpenses={sortedExpenses}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                summedAllExpenses={summedAllExpenses}
                currentPage={currentPage}
                sortedIncomes={sortedIncomes}
                currentIncomesCategory={currentIncomesCategory}
                setCurrentIncomesCategory={setCurrentIncomesCategory}
                summedAllIncomes={summedAllIncomes}
            />
            <List
                expenses={expenses}
                currentCategory={currentCategory}
                incomes={incomes}
                currentIncomesCategory={currentIncomesCategory}
                currentPage={currentPage}
            />
        </div>
    )
}
export default SinglePage
