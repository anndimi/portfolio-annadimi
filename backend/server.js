import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())
dotenv.config()

//Connection URI for mongodb
const { MongoClient } = require('mongodb')

async function main() {
  const connectionUri = 'mongodb://127.0.0.1:27017/'
  const client = new MongoClient(connectionUri)
  await client.connect()
  const databases = await client.db().admin().listDatabases()
  console.log(databases)
}

async function fetchGithubReposAndLanguages() {
  const repos = await fetch('https://api.github.com/users/anndimi/repos', {
    headers: {
      Authorization: 'token ' + process.env.GITHUB_TOKEN,
      'User-Agent': 'anndimi',
    },
  })
    .then((res) => res.json())
    .then((data) =>
      data
        .filter((repo) => repo.private === false)
        .map((repo) => {
          return {
            name: repo.name,
            htmlUrl: repo.html_url,
            description: repo.description,
            homepage: repo.homepage,
            languagesUrl: repo.languages_url,
            topics: repo.topics,
            createdAt: repo.created_at,
            pushedAt: repo.pushed_at,
            updatedAt: repo.updated_at,
          }
        })
    )
  const languages = await Promise.all(
    repos.map((repo) => fetchGithubReposLanguages(repo.languagesUrl, repo.name))
  )

  //Iterating over data from repo fetch and taking out the name of the repo
  repos.map((repo) => {
    //Get the repo name
    repo.name
    //Find the corresponding langs
    const codingLanguages = languages.filter((lang) => lang.name === repo.name)
    //Combine the repo and langs
    repo.codingLanguages = codingLanguages

    return repo
  })

  return repos
}

//Gets language objects and populates with repo name
async function fetchGithubReposLanguages(languages_url, name) {
  const languageObject = await fetch(languages_url, {
    headers: {
      Authorization: 'token ' + process.env.GITHUB_TOKEN,
      'User-Agent': 'anndimi',
    },
  }).then((res) => res.json())

  languageObject.name = name

  return languageObject
}

async function fetchSingleGithubRepo(name) {
  const singleRepo = await fetch(
    `https://api.github.com/repos/anndimi/${name}`,
    {
      headers: {
        Authorization: 'token ' + process.env.GITHUB_TOKEN,
        'User-Agent': 'anndimi',
      },
    }
  ).then((res) => res.json())

  singleRepo.name = name

  return singleRepo
}

async function fetchDatabaseProjects() {
  const connectionUri = 'mongodb://127.0.0.1:27017/'
  const client = new MongoClient(connectionUri)
  await client.connect()

  const findDatabaseProjects = client
    .db('portfoliodb')
    .collection('github_projects')
    .find()

  let projectsArr = []

  await findDatabaseProjects.forEach((project) => projectsArr.push(project))

  return projectsArr
}

async function fetchSingleDatabaseProject(name) {
  const connectionUri = 'mongodb://127.0.0.1:27017/'
  const client = new MongoClient(connectionUri)
  await client.connect()

  const query = { name: name }

  const findSingleDatabaseProject = await client
    .db('portfoliodb')
    .collection('github_projects')
    .findOne(query)

  return findSingleDatabaseProject
}

async function fetchGithubUser() {
  const user = await fetch('https://api.github.com/users/anndimi', {
    headers: {
      Authorization: 'token ' + process.env.GITHUB_TOKEN,
      'User-Agent': 'anndimi',
    },
  }).then((res) => res.json())

  return user
}

// // Start defining your routes here

app.get('/projects', async (req, res) => {
  const githubRepos = await fetchGithubReposAndLanguages()

  res.send(JSON.stringify(githubRepos))
})

// app.get('/dbprojects', async (req, res) => {
//   const projectInfo = await fetchSingleGithubRepo()

//   res.send(JSON.stringify(projectInfo))
// })

app.get('/projects/:name', async (req, res) => {
  console.log('fuck me sideways')

  const projectInfo = await fetchSingleDatabaseProject(req.params.name)

  const githubInfo = await fetchSingleGithubRepo(req.params.name)

  //Create a new object that combines needed info from both the database and the github api.
  const project = {
    name: req.params.name,
    img: projectInfo.project_img,
    long_description: projectInfo.project_info,
    topics: githubInfo.topics,
    homepage: githubInfo.homepage,
    htmlUrl: githubInfo.html_url,
    createdAt: githubInfo.created_at,
  }

  console.log(project, 'helooooo')

  res.send(JSON.stringify(project))
})

app.get('/user', async (req, res) => {
  const user = await fetchGithubUser()

  res.send(JSON.stringify(user))
})

// // Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
