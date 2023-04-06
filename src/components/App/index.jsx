import 'components/App/App.css';
import Expenses from 'components/Expenses';
import Header from 'components/Header';
import Statictics from 'components/Statictics';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState(
    [
      {
        name: 'Продукты',
        value: 600
      },
      {
        name: 'Развлечения',
        value: 10000,
      },
      {
        name: 'Шоппинг',
        value: 12000
      },
      {
        name: 'Рестораны',
        value: 8000
      },
      {
        name: "Путешествия",
        value: 75000
      },
      {
        name: "Путешествия",
        value: 25000
      }, 
      {
        name: 'Рестораны',
        value: 1000
      }
    ]
  )

  // const [sortedExpenses, setSortedExpenses] = useState ([])

  const [categoryTravel, setCategoryFood] = useState("Путешествия")

  function sortCategories() {
    
    const filteredTravel = expenses.filter((expense) => expense.name === "Путешествия")
    const filteredValueTravel = filteredTravel.map((value) => value.value)
    let sumTravel = 0
    for (let i = 0; i < filteredValueTravel.length; i++) {
      sumTravel += filteredValueTravel[i]
    }
    const sortedCategoryTravel = {
      name: "Путешествия",
      value: sumTravel
    } 
    setCategoryFood(sortedCategoryTravel)
    console.log(categoryTravel)

    // const filteredRest = expenses.filter((expense) => expense.name === "Рестораны")
    // const filteredValueRest = filteredRest.map((value) => value.value)
    // let sumRest = 0
    // for (let i = 0; i < filteredValueRest.length; i++) {
    //   sumRest += filteredValueRest[i]
    // }
    // const categoryRest = {
    //   name: "Рестораны",
    //   value: sumRest
    // } 
    
    // const filteredFun = expenses.filter((expense) => expense.name === "Развлечения")
    // const filteredValueFun = filteredFun.map((value) => value.value)
    // let sumFun = 0
    // for (let i = 0; i < filteredValueFun.length; i++) {
    //   sumFun += filteredValueFun[i]
    // }
    // const categoryFun = {
    //   name: "Развлечения",
    //   value: sumFun
    // } 

    // const filteredFood = expenses.filter((expense) => expense.name === "Продукты")
    // const filteredValueFood = filteredFood.map((value) => value.value)
    // let sumFood = 0
    // for (let i = 0; i < filteredValueFood.length; i++) {
    //   sumFood += filteredValueFood[i]
    // }
    // const categoryFood = {
    //   name: "Продукты",
    //   value: sumFood
    // } 

    // const sortedCategories = [categoryTravel, categoryRest, categoryFun, categoryFood]
    // setSortedExpenses(sortedCategories)
  }

  function addNewExpense(newExpense) {
    const newExpenses = [...expenses, newExpense]
    setExpenses(newExpenses)
  }

  return (
    <div className='mx-auto my-28 w-1/2 px-5 bg-slate-50'>
      <Header expenses={expenses} addNewExpense={addNewExpense}/>
      <Statictics categoryTravel={categoryTravel}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;