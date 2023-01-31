// SECTION 2: All elements under  <div class="statistics-container"></div> 

// assigning essential HTML elements to variables
var countryName = document.querySelector(".statistics-container .country-name"),    // country_name_element
    confirmedCases = document.querySelector(".c-cases-container .value"),           // total_cases_element
    newConfirmedCases = document.querySelector(".c-cases-container .new-value"),    // new_cases_element      
    recoveredCases = document.querySelector(".r-cases-container .value"),           // recovered_element
    newRecoveredCases = document.querySelector(".r-cases-container .new-value"),    // new_recovered_element
    totalDeaths = document.querySelector(".d-container .value"),                    // deaths_element
    newDeaths = document.querySelector(".d-container .new-value");                  // new_deaths_element

    // activeCases = document.querySelector(".a-cases-container .value"),          
    // newActiveCases = document.querySelector(".a-cases-container .new-value"),  


// APP VARIABLES
let appData = [],           // app_data
    confirmedList = [],     // cases_list
    recoveredList = [],     // recovered_list
    deathsList = [],        // deaths_list
    deaths = [],            // deaths
    formatedDates = [];


// gets user's country code

function geoplugin_countryCode(code){
    return code
}


let countryCode = geoplugin_countryCode("PH"); //Ayaw tanggala ang PH sumbagon nako ang mutanggal ana     // country_code
console.log(countryCode)
let userCountry;                                // user_country

countries.forEach((country) => {
  if (country.code == countryCode) {
    userCountry = country.name;
  }
});


/* --- fetch API ---*/
function fetchData(country) {
    userCountry = country;
    countryName.innerHTML = "Loading...";

    (confirmedList = []),
    (recoveredList = []),
    (deathsList = []),
    (dates = []),
    (formatedDates = []);

    var requestOptions = {method: "GET", redirect: "follow"};

    const api_fetch = async (country) => {
        await fetch(
            "https://api.covid19api.com/total/country/" + country + "/status/confirmed", requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.forEach((entry) => {
                dates.push(entry.Date);
                confirmedList.push(entry.Cases);
            });
        });

        await fetch(
            "https://api.covid19api.com/total/country/" + country + "/status/recovered", requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.forEach((entry) => {
                recoveredList.push(entry.Cases);
            });
        });

        await fetch(
            "https://api.covid19api.com/total/country/" + country + "/status/deaths", requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.forEach((entry) => {
                deathsList.push(entry.Cases);
            });
        });

    updateUI();
  };

  api_fetch(country);
}

fetchData(userCountry);



// updates UI function
function updateUI() {
    updateData();
}
  
function updateData() {
    var updConfirmedCases = confirmedList[confirmedList.length - 1],
        updNewConfirmedCases = updConfirmedCases - confirmedList[confirmedList.length - 2],
        updRecoveredCases = recoveredList[recoveredList.length - 1],
        updNewRecoveredCases = updRecoveredCases - recoveredList[recoveredList.length - 2],
        updTotalDeaths = deathsList[deathsList.length - 1],
        updNewTotalDeaths = updTotalDeaths - deathsList[deathsList.length - 2];

    countryName.innerHTML = userCountry;
    confirmedCases.innerHTML = "Total: " + updConfirmedCases;
    newConfirmedCases.innerHTML = "New: " + `${updNewConfirmedCases}`;
    recoveredCases.innerHTML = "Total: " + updRecoveredCases;
    newRecoveredCases.innerHTML = "New: " + `${updNewRecoveredCases}`;
    totalDeaths.innerHTML = "Total: " + updTotalDeaths;
    newDeaths.innerHTML = "New: " + `${updNewTotalDeaths}`;
}