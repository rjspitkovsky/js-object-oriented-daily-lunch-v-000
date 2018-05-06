let store = {employers: [], customers: [], meals: [], deliveries: []}

let customerId = 0
let deliveryId = 0
let mealId = 0
let employerId = 0

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
    this.deliveries().forEach(function(meal){
      total += delivery.meal.price
    })
    return total
  }
}


class Meal {
  constructor(title, price) {
    this.title = title
    this.price = price
    this.id = ++mealId
    store.meals.push(this)
  }
}

class Delivery{
  constructor(meal, customer) {
    this.id = ++deliveryId;
    if (meal) {
      this.mealId = meal.id
    }
    if (customer) {
      this.customerId = customer.id
    }
    store.deliveries.push(this)
  }
  meal() {
    return store.meals.find(meal => {
      return meal.id === this.mealId
    })
  }
  customer() {
    return store.customers.find(customer => {
      return customer.id === this.customerId
    })
  }
}

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name
    store.employers.push(this)
  }
}
