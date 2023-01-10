const APIURL = 'https://api.github.com/users/'

const main = document.querySelector('.main')
const form = document.querySelector('#form')
const search = document.querySelector('#iptSearch')

/*
  异步函数 调用 github 的接口取得用户信息
*/
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with this username')
    }
  }
}

/*
  异步函数 调用接口 获取所有的仓库
*/
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    addUserCard(data)
  } catch (err) {
    createErrorCard("Can't get the repos with this username")
  }
}


// 创建用户卡片
function createUserCard(user) {
  const userID = user.login || user.name
  const userBio = user.bio ? '<p>user.bio</p>' : ''
  const cardHTML = `
    <div class='card'>
      <div>
        <img src='${user.avatar_url}' alt='${user.name}' class='avatar'>
      </div>
      <div class='user-info'>
        <h2>${userID}</h2>
        <ul>
          <li>${user.followers} <strong>followers</strong></li>
          <li>${user.following} <strong>followings</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>       
        </ul>
        <div id='repos'></div>
      </div> 
    </div>
  `
  main.innerHTML = cardHTML
}

// 向 card 追加 repo 信息
function addUserCard(repos) {
  const reposEl = document.getElementById('repos')
  repos.forEach((item) => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = item.html_url
    repoEl.innerText = item.name
    reposEl.appendChild(repoEl)
  })
}



// 创建错误卡片
function createErrorCard(msg) {
  const cardHTML = `
    <div class='card'>
    <h2>${msg}</h2>
    </div>
  `
  main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = search.value
  if (username) {
    getUser(username)
  } else {
    createErrorCard("Can't get information with this username")
  }
})