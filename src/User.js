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

    this.somePayload = this.createUnnecessaryPayload(1e6) // 30 MB
    // this.somePayload = Array(1e6) // 7MB
  }

  createUnnecessaryPayload = (num) => {
    const arr = []
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    return arr
  }
}

module.exports = {
  User
}