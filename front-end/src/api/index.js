// this file takes care of the post, delete, and get requests made to the mongoDB server.

import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:5000/api'
})

export const sendMessage = async (payload) => {
	console.log("payload: ", payload)
	const result = await api.post('/message', payload)
	console.log(result)
}

const apis = {
	sendMessage
}

export default apis


