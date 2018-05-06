let store = {employers: [], customers: [], meals: [], deliveries: []}

let customerId = 0

class Customer {
  constructor(name, employer) {
    this.name = name
    this.id = ++customerId
    store.customers.push(this)
  }
}
