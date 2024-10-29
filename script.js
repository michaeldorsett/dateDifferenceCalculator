function calculateDays() {
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);

    // Validate input dates
    if (!startDate || !endDate) {
        document.getElementById("result").textContent = "Please select both dates.";
        return;
    }
    if (startDate > endDate) {
        document.getElementById("result").textContent = "Start date must be before end date.";
        return;
    }

    // Calculate the difference in days
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    // Display the result
    document.getElementById("result").textContent = `Number of days between dates: ${differenceInDays} days`;
}
