
const calendar = document.getElementById('calendar');
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

const STORYBLOK_URL =
  'https://api.storyblok.com/v2/cdn/stories?starts_with=events&token=05FxZ90ZwgZiEwX3hAfgIQtt';
let events;
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const loadEvents = async () => {
  const res = await fetch(STORYBLOK_URL);
  const { stories } = await res.json();
  events = stories.reduce((accumulator, event) => {
    const eventTime = new Date(event.content.time);
    const eventDate = new Date(eventTime.toDateString());
    accumulator[eventDate] = event.content;
    return accumulator;
  }, {});
  updateCalendar(currentMonth, currentYear, events);
};

loadEvents();

const drawBlankCalendar = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement('div');
    day.classList.add('day');

    const dayText = document.createElement('span');
    dayText.classList.add('day-text');
    dayText.innerText = days[i % 7];

    const dayNumber = document.createElement('p');
    dayNumber.classList.add('day-number');

    const eventName = document.createElement('small');
    eventName.classList.add('event-name');

    day.appendChild(dayText);
    day.appendChild(dayNumber);
    day.appendChild(eventName);
    console.log(day);
    calendar.appendChild(day);
  }
};

const updateCalendar = (month, year, events) => {
  const dayElements = document.querySelectorAll('.day');

  const theFirst = new Date();
  theFirst.setMonth(month);
  theFirst.setYear(year);

  const theFirstDayOfWeek = theFirst.getDay();




  const monthName = months[month];
  const monthWithYear = `${year} - ${monthName}`;
  monthEl.innerText = monthWithYear;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let dayCounter = 1;
  for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];

    const dayNumber = day.querySelector('.day-number');
    if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth) {
      const thisDate = new Date(year, month, dayCounter);

      const eventName = day.querySelector('.event-name');
      if (events[thisDate]) {
        const event = events[thisDate];
        eventName.innerText = `* ${event.title}`;
      } else {
        eventName.innerText = '';
        // eventName.innerText = ``;
      }
      console.log('this ',thisDate);

      dayNumber.innerText = dayCounter;
      dayCounter++;
    } else {
      dayNumber.innerText = '';
    }
  }
};

const previousMonth = () => {
  if (currentMonth === 0) {
    currentMonth = 12;
    currentYear--;
  }
  updateCalendar(--currentMonth, currentYear, events);
};

const nextMonth = () => {
  if (currentMonth === 11) {
    currentMonth = -1;
    currentYear++;
  }
  updateCalendar(++currentMonth, currentYear, events);
};

const load = async () => {
  drawBlankCalendar();
  updateCalendar(currentMonth, currentYear, {});
  await loadEvents();
};

load();


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

 
function getDaysInMonth() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  }
  
  console.log(getDaysInMonth());