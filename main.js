function App(){
    const currentYear = new Date().getFullYear()
    const birthYear = 1997
    const calYear = currentYear - birthYear
    const birthMonth = 4
    const currentMonth = new Date().getMonth()
    const calMonth = currentMonth - birthMonth
    const birthdate = 9
    const currentdate = new Date().getDate()
    const caldate = currentdate - birthdate


    const st1 = {color: 'coral',backgroundColor:'pink' }
    return(
        <div>
        <h1 style={st1}>Name: Alok | Last Name: Sahee  birthDay{birthYear}/{birthMonth}/{birthdate}</h1>
        <p style={st1}>Birth Year: {calYear} Month:{calMonth} Days: {caldate}</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)