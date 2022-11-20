class User {
  id
  name
  workHours = []
  somePayload = []

  constructor(user) {
    this.id = user.id
    this.name = user.name

    for (let i = 1; i < 100; i++) {
      this.workHours.push(+Math.ceil((user.id * user.id) / i).toString().slice(0, 3))
    }

    this.somePayload = Array(1e6) // add 7 MB
  }
}

module.exports = {
  User
}