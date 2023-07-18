import { ItemsType } from "components/SinglePage"

type ArmsType = {
    categories: string[]
    items: ItemsType[]
}

export function sortCategories({ categories, items }: ArmsType) {
    const i = categories.map((category) => {
        const filteredCategory = items.filter((item) => item.name === category)
        // console.log(filteredCategory)
        const filteredValue = filteredCategory.map((value) => value.value)
        let sum = filteredValue.reduce((a, b) => a + b, 0)
        const sortedCategory = {
            name: category,
            value: sum
        }
        return sortedCategory
    })
    return i
}

export function sumAllCategories(items: ItemsType[]) {
    const allValueExpenses = items.map((item) => item.value)
    let sumAll = allValueExpenses.reduce((a, b) => a + b)
    const allItems = {
        name: "Итого",
        value: sumAll
    }
    return allItems
}
