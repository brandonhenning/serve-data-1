const express = require('express')
const cors = require('cors')

let cohorts = [{
    id: 1,
    CohortName: '17-01-WD-DP',
    CohortCode: 'g100',
    NumberOfStudents: 28
}, {
    id: 2,
    CohortName: '17-01-DS-GT',
    CohortCode: 'g105',
    NumberOfStudents: 24
}, {
    id: 3,
    CohortName: '17-02-WD-PX',
    CohortCode: 'g109',
    NumberOfStudents: 30
}, {
    id: 4,
    CohortName: '17-03-WD-BD',
    CohortCode: 'g110',
    NumberOfStudents: 29
}]

function findById (data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}


const app = express()
app.use(cors())

app.get('/', function (request, response) {
    response.json({data: cohorts})
})

app.get('/:id', function (request, response) {
    let record = findById(cohorts, request.params.id)
    if (!record) {
        response.status = 404
        response.json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
})


app.listen(9000)