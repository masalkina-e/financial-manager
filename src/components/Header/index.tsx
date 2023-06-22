import classNames from "classnames"
import { TabType, TabTypes } from "components/App"

type Props = {
    setCurrentPage: (currentPage: TabType) => void
    currentPage: TabType
}

function Header({ setCurrentPage, currentPage }: Props) {
    return (
        <div>
            <h1 className="pt-20 text-4xl font-semibold text-center">
                Учет расходов и доходов
            </h1>
            <div className="flex flex-row justify-evenly items-center py-10">
                <div
                    className={classNames(
                        "border-2 w-2/6 text-center py-5 px-2.5 cursor-pointer",
                        {
                            "border-2 border-b-0 w-2/6 text-center py-5 px-2.5 cursor-pointer":
                                currentPage === TabTypes.expenses
                        }
                    )}
                    onClick={() => setCurrentPage(TabTypes.expenses)}
                >
                    <p>Расходы</p>
                </div>
                <div
                    className={classNames(
                        "border-y-2 border-x-0 w-2/6 text-center py-5 px-2.5 cursor-pointer",
                        {
                            "border-2 border-b-0 w-2/6 text-center py-5 px-2.5 cursor-pointer":
                                currentPage === TabTypes.incomes
                        }
                    )}
                    onClick={() => setCurrentPage(TabTypes.incomes)}
                >
                    <p>Доходы</p>
                </div>
                <div
                    className={classNames(
                        "border-2 w-2/6 text-center py-5 px-2.5 cursor-pointer",
                        {
                            "border-2 border-b-0 w-2/6 text-center py-5 px-2.5 cursor-pointer":
                                currentPage === TabTypes.balance
                        }
                    )}
                    onClick={() => setCurrentPage(TabTypes.balance)}
                >
                    <p>Баланс</p>
                </div>
            </div>
        </div>
    )
}

export default Header
