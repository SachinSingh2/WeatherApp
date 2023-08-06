let day = document.getElementById('Day')
let date = document.getElementById('Date')
let search = document.getElementById('Search')
let submitBtn  = document.getElementById('SubmitButton')
let CityCountry = document.getElementById("CityCountry")
let Temp = document.getElementById('Temp')


// document.body.style.backgroundColor = 'red'
    // Declaring day and Time Data
    const Time = new Date().toDateString()
    let daysArr = ['Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat']
    let MonthArr = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']


     day.innerHTML = daysArr[new Date().getDay()]

     date.innerHTML = `${MonthArr[new Date().getMonth()] } ${new Date().getDate()}`


    //  Function to fetch the data

const info = async (event)=>{
    console.log("worjubg")
    event.preventDefault()



    // Taking input value and passing it to the link.
    let SearchValue = search.value
    console.log(SearchValue)

    // Fetching Data
    if(search.value === ''){
        alert("Please enter a value")
    }else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=55dd602fa157e10315d0d25f3f933bb4`
        const res  =  await fetch(url)
        const data = await res.json()
        console.log(data)

        CityCountry.innerHTML = `${data.name} , IN`
        Temp.innerHTML = `${data.main.temp}°C`

    }

    search.value = ''

    // Putting data


}



submitBtn.addEventListener('click' , info)