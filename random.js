const chance = require('chance').Chance()

const n = chance.natural({ min: 2, max: 10 })
const payloads = []
const payload = {}

const a = [...Array(n)].map((value, index) => {
  payloads.push({
    name: chance.word({ syllables: chance.natural({ min: 2, max: 8 }) }),
    text: chance.sentence(),
    owner: chance.name(),
  })
})

// let tstamp_pre, tstamp_post

// tstamp_pre = +new Date()
// console.info(tstamp_pre)

// const aa = [...Array(n)].map((value, index) => {
//   // console.info(`1:${index}`)
// })

// tstamp_post = +new Date()
// console.info(tstamp_post)
// console.info(tstamp_post - tstamp_pre)

// tstamp_pre = +new Date()
// console.info(tstamp_pre)

// const ak = [...Array(n).keys()].map((value, index) => {
//   // console.info(`2:${index}`)
// })

// tstamp_post = +new Date()
// console.info(tstamp_post)
// console.info(tstamp_post - tstamp_pre)

console.info(JSON.stringify(payloads, null, 4))
