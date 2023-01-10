const APIURL = 'https://api.github.com/users/'

const main = document.querySelector('.main')
const form = document.querySelector('#form')
const search = document.querySelector('#iptSearch')

// 获取用户信息
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    console.log(data)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with this username')
    }
  }
}

// 获取用户仓库
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    console.log(data)
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
      </div>
    </div>
  `
  main.innerHTML = cardHTML
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
    /*
      查询用户逻辑
    */
    // alert(username)
  }
})