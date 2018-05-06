let store = {employers: [], customers: [], meals: [], deliveries: []}

let customerId = 0

class Customer {
  constructor(name, employer) {
    this.name = name
    this.id = ++customerId
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
  totalSpent() {
    let total = 0
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
    this.id = ++mealId
    store.meals.push(this)
  }
}

let deliveryId = 0
class Delivery {
  constructor(meal, customer) {
    this.mealId = meal.id
    this.customerId = customer.id
    this.id = ++deliveryId
    store.deliveries.push(this)
  }
  meal() {
    return store.meals.find(meal => {
      return meal.id === this.mealId
    })
  }
}
