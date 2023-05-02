const addToDb = id => {
    let orderedMeal;

    // get the shopping cart
    const getMeals = localStorage.getItem('ordered_meals')
    if (getMeals) {
        orderedMeal = JSON.parse(getMeals)
    }
    else {
        orderedMeal = {};
    }

    // add quantity
    const quantity = orderedMeal[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        orderedMeal[id] = newQuantity;
    }
    else {
        orderedMeal[id] = 1;
    }
    localStorage.setItem('ordered_meals', JSON.stringify(orderedMeal))
};

const removeMeal = id => {
    const getMeals = JSON.parse(localStorage.getItem('ordered_meals'))
    delete getMeals[id]
    console.log(getMeals)
    localStorage.setItem('ordered_meals', JSON.stringify(getMeals));
}

const increaseQuantity = id => {
    const getMeals = JSON.parse(localStorage.getItem('ordered_meals'))
    const getQuantity = getMeals[id]
    const newQuantity = getQuantity + 1;
    getMeals[id] = newQuantity;
    localStorage.setItem('ordered_meals', JSON.stringify(getMeals))
}

const decreaseQuantity = id => {
    const getMeals = JSON.parse(localStorage.getItem('ordered_meals'))
    const getQuantity = getMeals[id]
    if (getQuantity > 1) {
        const newQuantity = getQuantity - 1;
        getMeals[id] = newQuantity;
        localStorage.setItem('ordered_meals', JSON.stringify(getMeals))
    }
}

export { addToDb, removeMeal, increaseQuantity, decreaseQuantity };