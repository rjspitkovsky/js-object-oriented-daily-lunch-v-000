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
      return total 
    })
  }
}
