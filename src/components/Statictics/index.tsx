import classNames from "classnames"
import {
    SortedExpensesType,
    SummedAllExpensesType,
    SortedIncomesType,
    SummedAllIncomesType
} from "components/SinglePage"
import { TabType, TabTypes } from "components/App"
import DiagramExpenses from "components/DiagramExpenses"
import DiagramIncomes from "components/DiagramIncomes"

type Props = {
    sortedExpenses: SortedExpensesType[]
    setCurrentCategory: (currentCategory: string) => void
    currentCategory: string
    summedAllExpenses: SummedAllExpensesType
    currentPage: TabType
    sortedIncomes: SortedIncomesType[]
    setCurrentIncomesCategory: (currentIncomesCategory: string) => void
    currentIncomesCategory: string
    summedAllIncomes: SummedAllIncomesType
}

function Statictics({
    sortedExpenses,
    setCurrentCategory,
    currentCategory,
    summedAllExpenses,
    currentPage,
    sortedIncomes,
    setCurrentIncomesCategory,
    currentIncomesCategory,
    summedAllIncomes
}: Props) {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-1/2 flex flex-row justify-center m-auto sm:m-0">
                {currentPage === TabTypes.expenses && (
                    <DiagramExpenses sortedExpenses={sortedExpenses} />
                )}
                {currentPage === TabTypes.incomes && (
                    <DiagramIncomes sortedIncomes={sortedIncomes} />
                )}
            </div>
            <div>
                {currentPage === TabTypes.expenses && (
                    <div className="flex flex-col gap-2 px-2.5 sm:px-0">
                        {sortedExpenses.map((category) => {
                            return (
                                <div
                                    key={category.name}
                                    onClick={() =>
                                        setCurrentCategory(category.name)
                                    }
                                    className={classNames(
                                        "cursor-pointer px-4 py-0.5",
                                        {
                                            "bg-orange-200 rounded-2xl":
                                                currentCategory ===
                                                category.name
                                        }
                                    )}
                                >
                                    {category.name} - {category.value}
                                </div>
                            )
                        })}
                        <div
                            onClick={() =>
                                setCurrentCategory(summedAllExpenses.name)
                            }
                            className="cursor-pointer bg-slate-200 px-4 py-0.5 rounded-2xl"
                        >
                            {summedAllExpenses.name} - {summedAllExpenses.value}
                        </div>
                    </div>
                )}

                {currentPage === TabTypes.incomes && (
                    <div className="flex flex-col gap-2 px-2.5 sm:px-0">
                        {sortedIncomes.map((category) => {
                            return (
                                <div
                                    key={category.name}
                                    onClick={() =>
                                        setCurrentIncomesCategory(category.name)
                                    }
                                    className={classNames(
                                        "cursor-pointer px-4 py-0.5",
                                        {
                                            "bg-orange-200 rounded-2xl":
                                                currentIncomesCategory ===
                                                category.name
                                        }
                                    )}
                                >
                                    {category.name} - {category.value}
                                </div>
                            )
                        })}
                        <div
                            onClick={() =>
                                setCurrentIncomesCategory(summedAllIncomes.name)
                            }
                            className="cursor-pointer bg-slate-200 px-4 py-0.5 rounded-2xl"
                        >
                            {summedAllIncomes.name} - {summedAllIncomes.value}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Statictics
