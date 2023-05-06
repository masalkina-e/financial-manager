import 'components/App/App.css';
import Expenses from 'components/Expenses';
import Header from 'components/Header';
import Statictics from 'components/Statictics';
import { useEffect, useState } from 'react';

export type ExpenseType = {
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

function App() {
  
  const defaultExpenses = [
    {
      date: '01 апреля 2023',
      name: 'Продукты',
      value: 3000
    },
    {
      date: '01 апреля 2023',
      name: 'Развлечения',
      value: 10000,
    },
    {
      date: '05 апреля 2023',
      name: 'Шопинг',
      value: 12000
    },
    {
      date: '09 апреля 2023',
      name: 'Рестораны',
      value: 8000
    },
    {
      date: '11 апреля 2023',
      name: "Путешествия",
      value: 37000
    },
    {
      date: '11 апреля 2023',
      name: "Путешествия",
      value: 25000
    } 
  ]

  const [expenses, setExpenses] = useState<ExpenseType[]>(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')!) : defaultExpenses
  )

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])
  
  const allCategories = ["Продукты", "Развлечения", "Шопинг", "Путешествия", "Рестораны"]

  const [currentCategory, setCurrentCategory] = useState<string>("Все расходы")

  function sortCategories() {
    const filteredTravel = expenses.filter((expense) => expense.name === "Путешествия")
    const filteredValueTravel = filteredTravel.map((value) => value.value)
    let sumTravel = 0
    for (let i = 0; i < filteredValueTravel.length; i++) {
      sumTravel += filteredValueTravel[i]
    }
    const categoryTravel = {
      name: "Путешествия",
      value: sumTravel
    } 

    const filteredRest = expenses.filter((expense) => expense.name === "Рестораны")
    const filteredValueRest = filteredRest.map((value) => value.value)
    let sumRest = 0
    for (let i = 0; i < filteredValueRest.length; i++) {
      sumRest += filteredValueRest[i]
    }
    const categoryRest = {
      name: "Рестораны",
      value: sumRest
    } 
    
    const filteredFun = expenses.filter((expense) => expense.name === "Развлечения")
    const filteredValueFun = filteredFun.map((value) => value.value)
    let sumFun = 0
    for (let i = 0; i < filteredValueFun.length; i++) {
      sumFun += filteredValueFun[i]
    }
    const categoryFun = {
      name: "Развлечения",
      value: sumFun
    } 

    const filteredFood = expenses.filter((expense) => expense.name === "Продукты")
    const filteredValueFood = filteredFood.map((value) => value.value)
    let sumFood = 0
    for (let i = 0; i < filteredValueFood.length; i++) {
      sumFood += filteredValueFood[i]
    }
    const categoryFood = {
      name: "Продукты",
      value: sumFood
    } 

    const filteredShop = expenses.filter((expense) => expense.name === "Шопинг")
    const filteredValueShop = filteredShop.map((value) => value.value)
    let sumShop = 0
    for (let i = 0; i < filteredValueShop.length; i++) {
      sumShop += filteredValueShop[i]
    }
    const categoryShop = {
      name: "Шопинг",
      value: sumShop
    } 

    const sortedCategories = [categoryTravel, categoryRest, categoryFun, categoryFood, categoryShop]
    return sortedCategories
  }
  const sortedExpenses = sortCategories() 

  function sumAllExpenses() {
    const allValueExpenses = expenses.map((expense) => expense.value)
    let sumAll = 0
    for (let i = 0; i < allValueExpenses.length; i++) {
      sumAll += allValueExpenses[i]
    }
    const allExpenses = {
      name: "Все расходы",
      value: sumAll
    }
    return allExpenses
  }
  const summedAllExpenses = sumAllExpenses() 
  
  function addNewExpense(newExpense:ExpenseType) {
    const newExpenses = [...expenses, newExpense]
    setExpenses(newExpenses)
  }

  return (
    <div className='mx-auto my-28 w-11/12 bg-slate-50 lg:w-2/4'>
      <Header allCategories={allCategories} addNewExpense={addNewExpense}/>
      <Statictics sortedExpenses={sortedExpenses} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} summedAllExpenses={summedAllExpenses}/>
      <Expenses expenses={expenses} currentCategory={currentCategory}/>
    </div>
  );
}

export default App;