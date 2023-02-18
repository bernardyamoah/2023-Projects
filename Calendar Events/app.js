
const calendar= document.getElementById('calendar')
const monthEl = document.getElementById('month');
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



const drawBlankCalendar=()=>{
    for (let index = 0; index < 35; index++) {
        const day=document.createElement('div');
        day.classList.add('day','group');

        const dayText= document.createElement('span');
        dayText.classList.add('day-text');//,'group-hover:bg-purple-300','group-hover:text-purple-600'
        dayText.innerText=days[index%7]

        const dayNumber= document.createElement('p');
        dayNumber.classList.add('day-number');

        const eventName= document.createElement('small')
        eventName.classList.add('event-name')

        day.appendChild(dayText)
        day.appendChild(dayNumber)  
        day.appendChild(eventName)

        console.log(day)
        calendar.appendChild(day)
        
    }
}

const updateCalendar= (month,year,events)=>{
    const dayElements= document.querySelectorAll('.day')
    const theFirst= new Date();
    theFirst.setMonth(month)
    theFirst.setYear(year)

    const theFirstDayOfWeek= theFirst.getDay();
    const monthName=months[month]
    const monthWithYear=   `${year} - ${month}`;
    // days within a month
    const daysInMonth=new Date(year,month+1,0).getDate()
    
    for (let i=0; i<dayElements.length;i++){
        const day=dayElements[i]

        
    }
}


drawBlankCalendar()
updateCalendar()

















async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
    await navigator.clipboard.writeText(link)
    // swal("Good job!","Link has been successfully copied!", "success")

    // // Izi toast
        iziToast.success({
            title: 'Success',
            message: 'Successfully copied!',
        overlay: true,
        
        zindex: 999,
        });

    }
    catch(err){
        iziToast.error({
            title: 'Error',
            message: err,
        });
        // swal ( "Oops" , err,  "error" )
    }
}

 
