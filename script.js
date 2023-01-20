fetch("https://vercel.com/lprivatleblon-gmailcom/exovers/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
