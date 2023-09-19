import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const userService = {
  login,
  signup,
  logout,
  getLoggedinUser,
  getEmptyCredentials,
  saveUser,
  logUserActivity,
}

const KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function login({ username, password }) {
  return storageService.query(KEY).then((users) => {
    const user = users.find((user) => user.username === username && user.password === password)
    if (user) return setLoggedinUser(user)
    else return Promise.reject('Invalid login')
  })
}

function signup({ username, password, fullname }) {
  const user = {
    username,
    password,
    fullname,
    balance: 0,
    activities: [{ txt: 'Added a Todo', at: Date.now() }],
    prefs: { color: 'black', bgColor: 'white' },
  }
  return storageService.post(KEY, user).then(setLoggedinUser)
}

function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  return Promise.resolve()
}

function setLoggedinUser(user) {
  const userToSave = {
    _id: utilService.makeId(),
    fullname: user.fullname,
    balance: user.balance,
    activities: user.activities,
    prefs: user.prefs,
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
  return userToSave
}

function saveUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return Promise.resolve(user)
}

function logUserActivity(activityText, user) {
  if (!user) return
  user.activities.push({ txt: activityText, at: Date.now() })

  return saveUser(user)
}

function getEmptyCredentials() {
  return {
    username: '',
    password: '',
    fullname: '',
  }
}
