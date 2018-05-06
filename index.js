let store = {customers = [], meals = [], deliveries = [], employers = []}

let customerId = 0
class Customer {
  constructor(name, employer) {
    this.id = ++customerId
    this.name = name
    this.employerId = employer.id
    store.customers.push(this)
  }
  meals() {
    return store.meals.filter(meal => {
      return meal.customerId === this.id
    })
  }
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id
    })
  }
  let total = 0
  totalSpent() {
    this.meals().forEach(function(meal){
      total += meal.price
    })
    return total
  }
}

let mealId = 0
class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    store.meals.push(this)
  }
}
