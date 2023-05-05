// Get the current time
$(document).ready(function(){

  let currentTime = new Date();
  // Loop through each hour slot
  $('[id^=hour]').each(function() {
    // Get the hour represented by this slot
    let hour = parseInt($(this).attr('id').split('-')[1]);
    console.log(hour)
   // Set the background color based on whether the slot is in the past, present, or future
    if (hour < currentTime.getHours()) {
      $(this).addClass('past');
    } else if (hour === currentTime.getHours()) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  
  var saveBtn = $('.btn')
  console.log(saveBtn)
  saveBtn.on('click', function (event) {
  event.preventDefault();
  
  //this is the button
  var getValue = $(this).siblings("textarea").val();
  var getHour = $(this).parent().attr("id");
  console.log(getHour)
  
   localStorage.setItem(getHour, getValue);
  
  });
  
  fillBlocks();
  
  function fillBlocks(){
    console.log('test')
    for(let i =0 ; i <= 9; i++){
      let timeblock = $(".container").children().eq(i);
      let timeID= timeblock.attr("id");
     
      let loadedData = localStorage.getItem(timeID);
      timeblock.children("textarea").text(loadedData);
      console.log(loadedData)
      console.log("Loading content "+timeID+"..."+loadedData);
    }
  }
  
  // get the current date and time and format it
  var formattedDate = dayjs().format('dddd, MMMM, d');
  // set the formatted date and time as the content of the time tag
  $('#currentDay').text(formattedDate);
  
  });