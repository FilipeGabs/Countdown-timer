const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('seconds')
const formater = (num) => {
  return num<10? (`0${num}`): num;
}
const countdown = () => {
  const currentDate = new Date()
  const birthdayDate = new Date( "13 may 2023" )
  const between = (birthdayDate - currentDate  )
  const days = between/ 86400000
  const hours = (( between % 86400000)/3600000)
  const minutes = ( between % 3600000)/ 60000
  const secs = (between % 60000) / 1000
  daysEl.innerHTML = formater(Math.floor(days))
  hoursEl.innerHTML = formater(Math.floor(hours))
  minsEl.innerHTML = formater(Math.floor(minutes))
  secsEl.innerHTML = formater(Math.floor(secs))
}


setInterval(countdown, 1000)


