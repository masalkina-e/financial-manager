import { ItemsType } from "components/SinglePage"
import { format } from "date-fns"
import { ru } from "date-fns/locale"

type Props = {
    values: ItemsType[]
    currentCategory: string
    sing: string
}

function List({ values, currentCategory, sing }: Props) {
    if (currentCategory === "Итого") {
        return (
            <div className="flex flex-col w-full py-10">
                {values.map((value, index) => {
                    return (
                        <div
                            key={value.name + index}
                            className="flex flex-row px-5 py-2 border-b last:border-none"
                        >
                            <div className="w-1/2 flex flex-col gap-1">
                                <div className="text-xs bg-blue-100 text-blue-500 w-28 text-center rounded-xl">
                                    {format(
                                        new Date(value.date),
                                        "dd MMMM yyyy",
                                        { locale: ru }
                                    )}
                                </div>
                                <div>{value.name}</div>
                            </div>
                            <div className="w-1/2 flex justify-end items-end">
                                {sing}
                                {value.value} ₽
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        const filteredCategories = values.filter((value) => {
            return value.name === currentCategory
        })
        return (
            <div className="flex flex-col w-full py-10">
                {filteredCategories.map((value, index) => {
                    return (
                        <div
                            key={value.name + index}
                            className="flex flex-row px-5 py-2 border-b last:border-none"
                        >
                            <div className="w-1/2">
                                <div className="text-xs bg-blue-100 text-blue-500 w-28 text-center rounded-xl">
                                    {format(
                                        new Date(value.date),
                                        "dd MMMM yyyy",
                                        { locale: ru }
                                    )}
                                </div>
                                <div>{value.name}</div>
                            </div>
                            <div className="w-1/2 text-end">
                                - {value.value} ₽
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default List
