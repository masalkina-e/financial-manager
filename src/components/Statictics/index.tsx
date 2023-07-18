import classNames from "classnames"
import { SortedItemsType, SummedAllItemsType } from "components/SinglePage"

type Props = {
    sortedCategories: SortedItemsType[]
    setCurrentCategory: (currentCategory: string) => void
    currentCategory: string
    summedAllCategories: SummedAllItemsType
}

function Statictics({
    sortedCategories,
    setCurrentCategory,
    currentCategory,
    summedAllCategories
}: Props) {
    return (
        <div>
            <div>
                <div className="flex flex-col gap-2 px-2.5 sm:px-0">
                    {sortedCategories.map((category) => {
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
                                            currentCategory === category.name
                                    }
                                )}
                            >
                                {category.name} - {category.value}
                            </div>
                        )
                    })}
                    <div
                        onClick={() =>
                            setCurrentCategory(summedAllCategories.name)
                        }
                        className="cursor-pointer bg-slate-200 px-4 py-0.5 rounded-2xl"
                    >
                        {summedAllCategories.name} - {summedAllCategories.value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statictics
