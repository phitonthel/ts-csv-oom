const { test } = require('./test')
const {
  checkMemory,
  calculateTotalWh
} = require('./utils')

const { User } = require('./User') // models

checkMemory()

// const users = User.findAll({where: ...})
// const whs = getAssociatedWhs(users)
// const totalHours = calculateWhs(whs)

// code starts here
const generateCsv = () => {
  const data = require('./users.json')
    .map(user => new User(user))
    .map(user => `${user.name},${calculateTotalWh(user.workHours)}`)
    .join('\n')

  const csv = `user,totalWh\n` + data

  return csv
}

const csv = generateCsv()

test(csv)

checkMemory()