fetch("https://date-back-87wjznjtk-lprivatleblon-gmailcom.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
