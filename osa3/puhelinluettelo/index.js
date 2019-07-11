const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
  	name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
]

let amount = persons.length

const generateId = () => {
	const newId = Math.floor(Math.random() * 100) + amount
	console.log(newId)
	return newId
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  let date = new Date();
  res.send('<p>Phonebook has info for ' + amount + ' people</p><p>' + date + '</p>')
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
  	response.json(person)
  }
  else {
  	response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
	const body = request.body

	if (!body.name) {
		return response.status(400).json({
			error: 'content missing'
		})
	}

	const person = {
		name: body.name,
		number: body.number,
		id: generateId()

	}

	if (!person.name || !person.number) {
		console.log('name or number missing')
		return response.status(400).json({
			error: 'name or number missing'
		})
	}

	const duplicates = persons.filter(function(i) {
      return i.name === person.name
    })

	if (!duplicates) {
		persons = persons.concat(person)
		response.json(person)
	}
	else {
		console.log('person already added')
		return response.status(400).json({
			error: 'person already added'
		})
	}
	
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})