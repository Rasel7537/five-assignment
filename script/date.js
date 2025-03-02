function showCurrentDate() {
  let today = new Date(); // Get today's date
  let formattedDate = today.toLocaleDateString(); // Format the date
  document.getElementById("currentDate").innerText = formattedDate; // Insert into div
}

// Call the function when the page loads
showCurrentDate();