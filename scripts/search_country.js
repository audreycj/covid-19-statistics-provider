// SECTION 1: All elements under  <div class="country-container"></div> 

// array containing all country choices
var countries = [       
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Andorra', code: 'AD'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Angola', code: 'AO'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'},
    {name: 'Barbados', code: 'BB'},
    {name: 'Belarus', code: 'BY'},
    {name: 'Belgium', code: 'BE'},
    {name: 'Belize', code: 'BZ'},
    {name: 'Benin', code: 'BJ'},
    {name: 'Bermuda', code: 'BM'},
    {name: 'Bhutan', code: 'BT'},
    {name: 'Bolivia', code: 'BO'},
    {name: 'Bosnia and Herzegovina', code: 'BA'},
    {name: 'Botswana', code: 'BW'},
    {name: 'Brazil', code: 'BR'},
    {name: 'British Virgin Islands', code: 'VG'},
    {name: 'Brunei', code: 'BN'},
    {name: 'Bulgaria', code: 'BG'},
    {name: 'Burkina Faso', code: 'BF'},
    {name: 'Burundi', code: 'BI'},
    {name: 'Cabo Verde', code: 'CV'},
    {name: 'Cambodia', code: 'KH'},
    {name: 'Cameroon', code: 'CM'},
    {name: 'Canada', code: 'CA'},
    {name: 'CAR', code: 'CF'},
    {name: 'Caribbean Netherlands', code: 'BQ'},
    {name: 'Cayman Islands', code: 'KY'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN' },
    {name: 'Colombia', code: 'CO'},
    {name: 'Congo', code: 'CG'},
    {name: 'Costa Rica', code: 'CR'},
    {name: 'Croatia', code: 'HR'},
    {name: 'Cuba', code: 'CU'},
    {name: 'Cyprus', code: 'CY'},
    {name: 'Czechia', code: 'CZ'},
    {name: 'Denmark', code: 'DK'},
    {name: 'Djibouti', code: 'DJ'},
    {name: 'Dominica', code: 'DM'},
    {name: 'Dominican Republic', code: 'DO'},
    {name: 'DRC', code: 'CD'},
    {name: 'Ecuador', code: 'EC'},
    {name: 'Egypt', code: 'EG'},
    {name: 'El Salvador', code: 'SV'},
    {name: 'Equatorial Guinea', code: 'GQ'},
    {name: 'Eritrea', code: 'ER'},
    {name: 'Estonia', code: 'EE'},
    {name: 'Eswatini', code: 'SZ'},
    {name: 'Ethiopia', code: 'ET'},
    {name: 'Falkland Islands', code: 'FK'},
    {name: 'Fiji', code: 'FJ'},
    {name: 'Finland', code: 'FI'},
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'},
    {name: 'French Polynesia', code: 'PF'},
    {name: 'Gabon', code: 'GA'},
    {name: 'Gambia', code: 'GM'},   
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},  
    {name: 'Ghana', code: 'GH'},
    {name: 'Gibraltar', code: 'GI'},
    {name: 'Greece', code: 'GR'},
    {name: 'Greenland', code: 'GL'},
    {name: 'Grenada', code: 'GD'},
    {name: 'Guadeloupe', code: 'GP'},
    {name: 'Guatemala', code: 'GT'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'Indonesia', code: 'ID'},
    {name: 'India', code: 'IN'},
    {name: 'Iran', code: 'IR'},
    {name: 'Iraq', code: 'IQ'},
    {name: 'Ireland', code: 'IE'},    
    {name: 'Isle of Man', code: 'IM'},
    {name: 'Italy', code: 'IT'},
    {name: 'Ivory Coast', code: 'CI'},
    {name: 'Jamaica', code: 'JM'},
    {name: 'Japan', code: 'JP'},
    {name: 'Jordan', code: 'JO'},
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kenya', code: 'KE'},
    {name: 'Kuwait', code: 'KW'},
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Latvia', code: 'LV'},
    {name: 'Lebanon', code: 'LB'},
    {name: 'Liberia', code: 'LR'},
    {name: 'Libya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Lithuania', code: 'LT'},
    {name: 'Luxembourg', code: 'LU'},
    {name: 'New Caledonia', code: 'NC'},
    {name: 'Macao', code: 'MO'},
    {name: 'Madagascar', code: 'MG'},
    {name: 'Malaysia', code: 'MY'},
    {name: 'Malawi', code: 'MW'},
    {name: 'Maldives', code: 'MV'},
    {name: 'Mali', code: 'ML'},    
    {name: 'Malta', code: 'MT'},
    {name: 'Mauritius', code: 'MU'},
    {name: 'Mauritania', code: 'MR'},
    {name: 'Martinique', code: 'MQ'},
    {name: 'Mayotte', code: 'YT'},
    {name: 'Mexico', code: 'MX'},
    {name: 'Moldova', code: 'MD'},
    {name: 'Monaco', code: 'MC'},
    {name: 'Mongolia', code: 'MN'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Montenegro', code: 'ME'},
    {name: 'Morocco', code: 'MA'},
    {name: 'Mozambique', code: 'MZ'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Namibia', code: 'NA'},
    {name: 'Nepal', code: 'NP'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Nicaragua', code: 'NI'},
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Niger', code: 'NE'},
    {name: 'Nigeria', code: 'NG'},
    {name: 'North Macedonia', code: 'MK'},
    {name: 'Norway', code: 'NO'},
    {name: 'Oman', code: 'OM'},
    {name: 'Pakistan', code: 'PK'},
    {name: 'Palestine', code: 'PS'},
    {name: 'Panama', code: 'PA'},
    {name: 'Papua New Guinea', code: 'PG'},
    {name: 'Paraguay', code: 'PY'},
    {name: 'Peru', code: 'PE'},
    {name: 'Philippines', code: 'PH'},
    {name: 'Poland', code: 'PL'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Qatar', code: 'QA'},    
    {name: 'Réunion', code: 'RE'},
    {name: 'Romania', code: 'RO'},
    {name: 'Russia', code: 'RU'},
    {name: 'Rwanda', code: 'RW'},
    {name: 'San Marino', code: 'SM'},
    {name: 'Saint Kitts and Nevis', code: 'KN'},
    {name: 'Saint Lucia', code: 'LC'},
    {name: 'Saint Martin', code: 'MF'},
    {name: 'Saint Pierre Miquelon', code: 'PM'},
    {name: 'Sao Tome and Principe', code: 'ST'},
    {name: 'Saudi Arabia', code: 'SA'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Serbia', code: 'RS'},
    {name: 'Seychelles', code: 'SC'},
    {name: 'Sierra Leone', code: 'SL'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Somalia', code: 'SO'},
    {name: 'South Africa', code: 'ZA'},
    {name: 'South Korea', code: 'KR'},
    {name: 'South Sudan', code: 'SD'},
    {name: 'Spain', code: 'ES'},
    {name: 'Sri Lanka', code: 'LK'},
    {name: 'St. Barth', code: 'BL'},
    {name: 'St. Vincent Grenadines', code: 'VC'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Switzerland', code: 'CH'},
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'},   
    {name: 'Syria', code: 'SY'},
    {name: 'Taiwan', code: 'TW'},
    {name: 'Tanzania', code: 'TZ'},
    {name: 'Thailand', code: 'TH'},
    {name: 'Timor-Leste', code: 'TL'},    
    {name: 'Togo', code: 'TG'},
    {name: 'Trinidad and Tobago', code: 'TT'},
    {name: 'Tunisia', code: 'TN'},
    {name: 'Turkey', code: 'TR'},
    {name: 'Turks and Caicos', code: 'TC'},
    {name: 'UAE', code: 'AE'},
    {name: 'Uganda', code: 'UG'},
    {name: 'UK', code:'UK'},
    {name: 'Ukraine', code: 'UA'},
    {name: 'USA', code: 'US'},
    {name: 'Uruguay', code: 'UY'},  
    {name: 'Uzbekistan', code: 'UZ'},
    {name: 'Vatican City', code: 'VA'},
    {name: 'Venezuela', code: 'VE'},
    {name: 'Vietnam', code: 'VN'},
    {name: 'Yemen', code: 'YE'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'},
]

// assigning variables to essential 'Search Feature' HTML elements
var countryName = document.querySelector(".country-list-container"),         // container for search bar & list
    countryList = document.querySelector(".country-list"),                   // list of country names
    searchCountry = document.querySelector(".search-country"),               
    input = document.getElementById("search-input");                         // user input on country choice


// function for creating the  list of countries
function createCountryList(){
    let totalCountries = countries.length;
    let i = 0, listItemID;

    
    countries.forEach((country, index) => {   
        // divides the countires into x columns                               
        if (index % Math.ceil (totalCountries / totalColumns) == 0){
            listItemID = `list-${i}`;
            countryList.innerHTML += `<ul id='${listItemID}'></ul>`;
            i++;
        }

        document.getElementById(`${listItemID}`).innerHTML += `              
            <li onclick="fetchData('${country.name}')" id="${country.name}">
            ${country.name}
            </li>
        `;
    })
}


let totalColumns = 1;           // setting the number of columns in the list
createCountryList();            // creating the country list



// filters displayed countries according to user input
// input event fires up whenever the value of the input changes
input.addEventListener("input", function(){
    let value = input.value.toUpperCase();

    countries.forEach (country => {
        if(country.name.toUpperCase().startsWith(value)) {
            document.getElementById(country.name).classList.remove("hide");
        } else {
            document.getElementById(country.name).classList.add("hide");
        }
    })
})



