document.querySelectorAll(".completed-button").forEach(button => {
  button.addEventListener("click", function() {
      alert("Task marked as completed!");

      // Update navbar count
      let navbarCount = document.querySelector(".navbar-count");
      let currentNavbarCount = parseInt(navbarCount.textContent);
      navbarCount.textContent = currentNavbarCount + 1;

      // Update assigned tasks count
      let assignedCount = document.querySelector(".assigned-count");
      let currentAssignedCount = parseInt(assignedCount.textContent);
      
      if (currentAssignedCount > 0) {
          assignedCount.textContent = currentAssignedCount - 1;
      }

      // Add log entry
      let activityLog = document.querySelector(".activity-log");
      let currentDate = new Date();
      let formattedDate = currentDate.toLocaleString(); // Format date and time

      let newLog = document.createElement("p");
      newLog.textContent = `You have completed the task at ${formattedDate}`;
      
      // Insert at the top of the log section
      activityLog.prepend(newLog);

      // Hide the clicked button
      this.style.display = "none";
  });
});
