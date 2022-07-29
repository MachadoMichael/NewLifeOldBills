const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()
const Bills = require('./models/BillSchema')
const cors = require('cors')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

let db = mongoose.connection

db.once('open', () => {
    console.log('DB carregado')
})

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@clustercostcalc.urg3z.mongodb.net/NLOB`)

app.post('/addBill', express.urlencoded({ extended: true }), async (req, res) => {
    let bill = new Bills(req.body)
    try {
        let doc = await bill.save()
    } catch (error) {
        console.log(error)
    }
})

let atualizandoMonthSchema = {}
let monthSchema = new mongoose.Schema()
const Months = mongoose.model('Month', monthSchema)

app.post('/stateMonth', express.json(), async (req, res) => {

    Object.keys(req.body).map((item, index) => {

        if (item === 'Name') {
            atualizandoMonthSchema[item] = 'String'
        } else {
            atualizandoMonthSchema[item] = 'Number'
        }
    })

    monthSchema.add(atualizandoMonthSchema);

    let month = new Months(req.body)

    try {
        let doc = await month.save()
        res.send(doc)
    } catch (error) {
        console.log(error)
    }
})


app.get('/statebills', async (req, res) => {
    let docs = await Bills.find({})
    res.send(docs)
})

app.get('/stateMonths', async (req, res) => {
    let docs = await Months.find({})
    res.send(docs)
})

app.listen(process.env.PORT || 3000)


