import NextCors from 'nextjs-cors'
export default async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const profiles = [
    { name: 'gabriel', email: 'gabriel@gmail.com' },
    { name: 'zanin', email: 'zanin@gmail.com' },
    { name: 'oliveira', email: 'oliveira@gmail.com' },
    { name: 'maria', email: 'maria@gmail.com' },
    { name: 'carla', email: 'carla@gmail.com' },
    { name: 'joao', email: 'joao@gmail.com' },
    { name: 'pedro', email: 'pedro@gmail.com' }
  ]

  // Rest of the API logic
  res.json(profiles)
}
