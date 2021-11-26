export const transformDate = (dateString) => {
   const options = { year: 'numeric', month: 'short', day: '2-digit' }
   const date = new Date(dateString)
   return date.toLocaleDateString(undefined, options)
}
export const currentAge = (dateString) => {
   let myDate = new Date(dateString)
   let diffDate = (Date.now() - myDate.getTime())
   return Math.round(diffDate / 31557600000)
}
