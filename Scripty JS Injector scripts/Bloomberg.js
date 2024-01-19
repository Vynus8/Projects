//Extract title element from Bloomberg(Bb) and assign to variable
var title = "None available";
var titleElement = document.querySelector('head title');
if (titleElement) {
    title = titleElement.textContent.trim();
};

// Extract phone, website, address from Bb and assign to variables
var scripts = document.getElementsByTagName('script');
var scriptArray = [...scripts];
var found = false;

scriptArray.forEach((script) => {
    if (!found && script.textContent.includes('"telephone":')) {
        var phone = "None available";
        var website = "None available";
        var address = "None available";
        var match = script.textContent.match(/(?:"telephone":")([\d\s-]*)"/);
        if (match && match.length >= 2 && match[1].length > 0) {
            phone = match[1];
        }
        match = script.textContent.match(/(?:"url":")([\w.\/\:-]*)"/);
        if (match && match.length >= 2 && match[1].length > 0) {
            website = match[1];
        }
        match = script.textContent.match(/(?:"address":")([\w./:-\s, \\]*)"/);
        if (match && match.length >= 2 && match[1].length > 0) {
            address = match[1];
        };

        // Create an array of objects storing country code info
        const countryCodes = [
            { "name": "Afghanistan", "dial_code": "+93", "code": "AF" },
            { "name": "Aland Islands", "dial_code": "+358", "code": "AX" },
            { "name": "Albania", "dial_code": "+355", "code": "AL" },
            { "name": "Algeria", "dial_code": "+213", "code": "DZ" },
            { "name": "AmericanSamoa", "dial_code": "+1684", "code": "AS" },
            { "name": "Andorra", "dial_code": "+376", "code": "AD" },
            { "name": "Angola", "dial_code": "+244", "code": "AO" },
            { "name": "Anguilla", "dial_code": "+1264", "code": "AI" },
            { "name": "Antarctica", "dial_code": "+672", "code": "AQ" },
            { "name": "Antigua and Barbuda", "dial_code": "+1268", "code": "AG" },
            { "name": "Argentina", "dial_code": "+54", "code": "AR" },
            { "name": "Armenia", "dial_code": "+374", "code": "AM" },
            { "name": "Aruba", "dial_code": "+297", "code": "AW" },
            { "name": "Australia", "dial_code": "+61", "code": "AU" },
            { "name": "Austria", "dial_code": "+43", "code": "AT" },
            { "name": "Azerbaijan", "dial_code": "+994", "code": "AZ" },
            { "name": "Bahamas", "dial_code": "+1242", "code": "BS" },
            { "name": "Bahrain", "dial_code": "+973", "code": "BH" },
            { "name": "Bangladesh", "dial_code": "+880", "code": "BD" },
            { "name": "Barbados", "dial_code": "+1246", "code": "BB" },
            { "name": "Belarus", "dial_code": "+375", "code": "BY" },
            { "name": "Belgium", "dial_code": "+32", "code": "BE" },
            { "name": "Belize", "dial_code": "+501", "code": "BZ" },
            { "name": "Benin", "dial_code": "+229", "code": "BJ" },
            { "name": "Bermuda", "dial_code": "+1441", "code": "BM" },
            { "name": "Bhutan", "dial_code": "+975", "code": "BT" },
            { "name": "Bolivia, Plurinational State of", "dial_code": "+591", "code": "BO" },
            { "name": "Bosnia and Herzegovina", "dial_code": "+387", "code": "BA" },
            { "name": "Botswana", "dial_code": "+267", "code": "BW" },
            { "name": "Brazil", "dial_code": "+55", "code": "BR" },
            { "name": "British Indian Ocean Territory", "dial_code": "+246", "code": "IO" },
            { "name": "Brunei Darussalam", "dial_code": "+673", "code": "BN" },
            { "name": "Bulgaria", "dial_code": "+359", "code": "BG" },
            { "name": "Burkina Faso", "dial_code": "+226", "code": "BF" },
            { "name": "Burundi", "dial_code": "+257", "code": "BI" },
            { "name": "Cambodia", "dial_code": "+855", "code": "KH" },
            { "name": "Cameroon", "dial_code": "+237", "code": "CM" },
            { "name": "Canada", "dial_code": "+1", "code": "CA" },
            { "name": "Cape Verde", "dial_code": "+238", "code": "CV" },
            { "name": "Cayman Islands", "dial_code": "+ 345", "code": "KY" },
            { "name": "Central African Republic", "dial_code": "+236", "code": "CF" },
            { "name": "Chad", "dial_code": "+235", "code": "TD" },
            { "name": "Chile", "dial_code": "+56", "code": "CL" },
            { "name": "China", "dial_code": "+86", "code": "CN" },
            { "name": "Christmas Island", "dial_code": "+61", "code": "CX" },
            { "name": "Cocos (Keeling) Islands", "dial_code": "+61", "code": "CC" },
            { "name": "Colombia", "dial_code": "+57", "code": "CO" },
            { "name": "Comoros", "dial_code": "+269", "code": "KM" },
            { "name": "Congo", "dial_code": "+242", "code": "CG" },
            { "name": "Congo, The Democratic Republic of the Congo", "dial_code": "+243", "code": "CD" },
            { "name": "Cook Islands", "dial_code": "+682", "code": "CK" },
            { "name": "Costa Rica", "dial_code": "+506", "code": "CR" },
            { "name": "Cote d'Ivoire", "dial_code": "+225", "code": "CI" },
            { "name": "Croatia", "dial_code": "+385", "code": "HR" },
            { "name": "Cuba", "dial_code": "+53", "code": "CU" },
            { "name": "Cyprus", "dial_code": "+357", "code": "CY" },
            { "name": "Czech Republic", "dial_code": "+420", "code": "CZ" },
            { "name": "Denmark", "dial_code": "+45", "code": "DK" },
            { "name": "Djibouti", "dial_code": "+253", "code": "DJ" },
            { "name": "Dominica", "dial_code": "+1767", "code": "DM" },
            { "name": "Dominican Republic", "dial_code": "+1849", "code": "DO" },
            { "name": "Ecuador", "dial_code": "+593", "code": "EC" },
            { "name": "Egypt", "dial_code": "+20", "code": "EG" },
            { "name": "El Salvador", "dial_code": "+503", "code": "SV" },
            { "name": "Equatorial Guinea", "dial_code": "+240", "code": "GQ" },
            { "name": "Eritrea", "dial_code": "+291", "code": "ER" },
            { "name": "Estonia", "dial_code": "+372", "code": "EE" },
            { "name": "Ethiopia", "dial_code": "+251", "code": "ET" },
            { "name": "Falkland Islands (Malvinas)", "dial_code": "+500", "code": "FK" },
            { "name": "Faroe Islands", "dial_code": "+298", "code": "FO" },
            { "name": "Fiji", "dial_code": "+679", "code": "FJ" },
            { "name": "Finland", "dial_code": "+358", "code": "FI" },
            { "name": "France", "dial_code": "+33", "code": "FR" },
            { "name": "French Guiana", "dial_code": "+594", "code": "GF" },
            { "name": "French Polynesia", "dial_code": "+689", "code": "PF" },
            { "name": "Gabon", "dial_code": "+241", "code": "GA" },
            { "name": "Gambia", "dial_code": "+220", "code": "GM" },
            { "name": "Georgia", "dial_code": "+995", "code": "GE" },
            { "name": "Germany", "dial_code": "+49", "code": "DE" },
            { "name": "Ghana", "dial_code": "+233", "code": "GH" },
            { "name": "Gibraltar", "dial_code": "+350", "code": "GI" },
            { "name": "Greece", "dial_code": "+30", "code": "GR" },
            { "name": "Greenland", "dial_code": "+299", "code": "GL" },
            { "name": "Grenada", "dial_code": "+1473", "code": "GD" },
            { "name": "Guadeloupe", "dial_code": "+590", "code": "GP" },
            { "name": "Guam", "dial_code": "+1671", "code": "GU" },
            { "name": "Guatemala", "dial_code": "+502", "code": "GT" },
            //{ "name": "Guernsey", "dial_code": "+44", "code": "GG" },
            { "name": "Guinea", "dial_code": "+224", "code": "GN" },
            { "name": "Guinea-Bissau", "dial_code": "+245", "code": "GW" },
            { "name": "Guyana", "dial_code": "+595", "code": "GY" },
            { "name": "Haiti", "dial_code": "+509", "code": "HT" },
            { "name": "Holy See (Vatican City State)", "dial_code": "+379", "code": "VA" },
            { "name": "Honduras", "dial_code": "+504", "code": "HN" },
            { "name": "Hong Kong", "dial_code": "+852", "code": "HK" },
            { "name": "Hungary", "dial_code": "+36", "code": "HU" },
            { "name": "Iceland", "dial_code": "+354", "code": "IS" },
            { "name": "India", "dial_code": "+91", "code": "IN" },
            { "name": "Indonesia", "dial_code": "+62", "code": "ID" },
            { "name": "Iran, Islamic Republic of Persian Gulf", "dial_code": "+98", "code": "IR" },
            { "name": "Iraq", "dial_code": "+964", "code": "IQ" },
            { "name": "Ireland", "dial_code": "+353", "code": "IE" },
            //{ "name": "Isle of Man", "dial_code": "+44", "code": "IM" },
            { "name": "Israel", "dial_code": "+972", "code": "IL" },
            { "name": "Italy", "dial_code": "+39", "code": "IT" },
            { "name": "Jamaica", "dial_code": "+1876", "code": "JM" },
            { "name": "Japan", "dial_code": "+81", "code": "JP" },
            //{ "name": "Jersey", "dial_code": "+44", "code": "JE" },
            { "name": "Jordan", "dial_code": "+962", "code": "JO" },
            { "name": "Kazakhstan", "dial_code": "+77", "code": "KZ" },
            { "name": "Kenya", "dial_code": "+254", "code": "KE" },
            { "name": "Kiribati", "dial_code": "+686", "code": "KI" },
            { "name": "Korea, Democratic People's Republic of Korea", "dial_code": "+850", "code": "KP" },
            { "name": "Korea, Republic of South Korea", "dial_code": "+82", "code": "KR" },
            { "name": "Kuwait", "dial_code": "+965", "code": "KW" },
            { "name": "Kyrgyzstan", "dial_code": "+996", "code": "KG" },
            { "name": "Laos", "dial_code": "+856", "code": "LA" },
            { "name": "Latvia", "dial_code": "+371", "code": "LV" },
            { "name": "Lebanon", "dial_code": "+961", "code": "LB" },
            { "name": "Lesotho", "dial_code": "+266", "code": "LS" },
            { "name": "Liberia", "dial_code": "+231", "code": "LR" },
            { "name": "Libyan Arab Jamahiriya", "dial_code": "+218", "code": "LY" },
            { "name": "Liechtenstein", "dial_code": "+423", "code": "LI" },
            { "name": "Lithuania", "dial_code": "+370", "code": "LT" },
            { "name": "Luxembourg", "dial_code": "+352", "code": "LU" },
            { "name": "Macao", "dial_code": "+853", "code": "MO" },
            { "name": "Macedonia", "dial_code": "+389", "code": "MK" },
            { "name": "Madagascar", "dial_code": "+261", "code": "MG" },
            { "name": "Malawi", "dial_code": "+265", "code": "MW" },
            { "name": "Malaysia", "dial_code": "+60", "code": "MY" },
            { "name": "Maldives", "dial_code": "+960", "code": "MV" },
            { "name": "Mali", "dial_code": "+223", "code": "ML" },
            { "name": "Malta", "dial_code": "+356", "code": "MT" },
            { "name": "Marshall Islands", "dial_code": "+692", "code": "MH" },
            { "name": "Martinique", "dial_code": "+596", "code": "MQ" },
            { "name": "Mauritania", "dial_code": "+222", "code": "MR" },
            { "name": "Mauritius", "dial_code": "+230", "code": "MU" },
            { "name": "Mayotte", "dial_code": "+262", "code": "YT" },
            { "name": "Mexico", "dial_code": "+52", "code": "MX" },
            { "name": "Micronesia, Federated States of Micronesia", "dial_code": "+691", "code": "FM" },
            { "name": "Moldova", "dial_code": "+373", "code": "MD" },
            { "name": "Monaco", "dial_code": "+377", "code": "MC" },
            { "name": "Mongolia", "dial_code": "+976", "code": "MN" },
            { "name": "Montenegro", "dial_code": "+382", "code": "ME" },
            { "name": "Montserrat", "dial_code": "+1664", "code": "MS" },
            { "name": "Morocco", "dial_code": "+212", "code": "MA" },
            { "name": "Mozambique", "dial_code": "+258", "code": "MZ" },
            { "name": "Myanmar", "dial_code": "+95", "code": "MM" },
            { "name": "Namibia", "dial_code": "+264", "code": "NA" },
            { "name": "Nauru", "dial_code": "+674", "code": "NR" },
            { "name": "Nepal", "dial_code": "+977", "code": "NP" },
            { "name": "Netherlands", "dial_code": "+31", "code": "NL" },
            { "name": "Netherlands Antilles", "dial_code": "+599", "code": "AN" },
            { "name": "New Caledonia", "dial_code": "+687", "code": "NC" },
            { "name": "New Zealand", "dial_code": "+64", "code": "NZ" },
            { "name": "Nicaragua", "dial_code": "+505", "code": "NI" },
            { "name": "Niger", "dial_code": "+227", "code": "NE" },
            { "name": "Nigeria", "dial_code": "+234", "code": "NG" },
            { "name": "Niue", "dial_code": "+683", "code": "NU" },
            { "name": "Norfolk Island", "dial_code": "+672", "code": "NF" },
            { "name": "Northern Mariana Islands", "dial_code": "+1670", "code": "MP" },
            { "name": "Norway", "dial_code": "+47", "code": "NO" },
            { "name": "Oman", "dial_code": "+968", "code": "OM" },
            { "name": "Pakistan", "dial_code": "+92", "code": "PK" },
            { "name": "Palau", "dial_code": "+680", "code": "PW" },
            { "name": "Palestinian Territory, Occupied", "dial_code": "+970", "code": "PS" },
            { "name": "Panama", "dial_code": "+507", "code": "PA" },
            { "name": "Papua New Guinea", "dial_code": "+675", "code": "PG" },
            { "name": "Paraguay", "dial_code": "+595", "code": "PY" },
            { "name": "Peru", "dial_code": "+51", "code": "PE" },
            { "name": "Philippines", "dial_code": "+63", "code": "PH" },
            { "name": "Pitcairn", "dial_code": "+872", "code": "PN" },
            { "name": "Poland", "dial_code": "+48", "code": "PL" },
            { "name": "Portugal", "dial_code": "+351", "code": "PT" },
            { "name": "Puerto Rico", "dial_code": "+1939", "code": "PR" },
            { "name": "Qatar", "dial_code": "+974", "code": "QA" },
            { "name": "Romania", "dial_code": "+40", "code": "RO" },
            { "name": "Russia", "dial_code": "+7", "code": "RU" },
            { "name": "Rwanda", "dial_code": "+250", "code": "RW" },
            { "name": "Reunion", "dial_code": "+262", "code": "RE" },
            { "name": "Saint Barthelemy", "dial_code": "+590", "code": "BL" },
            { "name": "Saint Helena, Ascension and Tristan Da Cunha", "dial_code": "+290", "code": "SH" },
            { "name": "Saint Kitts and Nevis", "dial_code": "+1869", "code": "KN" },
            { "name": "Saint Lucia", "dial_code": "+1758", "code": "LC" },
            { "name": "Saint Martin", "dial_code": "+590", "code": "MF" },
            { "name": "Saint Pierre and Miquelon", "dial_code": "+508", "code": "PM" },
            { "name": "Saint Vincent and the Grenadines", "dial_code": "+1784", "code": "VC" },
            { "name": "Samoa", "dial_code": "+685", "code": "WS" },
            { "name": "San Marino", "dial_code": "+378", "code": "SM" },
            { "name": "Sao Tome and Principe", "dial_code": "+239", "code": "ST" },
            { "name": "Saudi Arabia", "dial_code": "+966", "code": "SA" },
            { "name": "Senegal", "dial_code": "+221", "code": "SN" },
            { "name": "Serbia", "dial_code": "+381", "code": "RS" },
            { "name": "Seychelles", "dial_code": "+248", "code": "SC" },
            { "name": "Sierra Leone", "dial_code": "+232", "code": "SL" },
            { "name": "Singapore", "dial_code": "+65", "code": "SG" },
            { "name": "Slovakia", "dial_code": "+421", "code": "SK" },
            { "name": "Slovenia", "dial_code": "+386", "code": "SI" },
            { "name": "Solomon Islands", "dial_code": "+677", "code": "SB" },
            { "name": "Somalia", "dial_code": "+252", "code": "SO" },
            { "name": "South Africa", "dial_code": "+27", "code": "ZA" },
            { "name": "South Sudan", "dial_code": "+211", "code": "SS" },
            { "name": "South Georgia and the South Sandwich Islands", "dial_code": "+500", "code": "GS" },
            { "name": "Spain", "dial_code": "+34", "code": "ES" },
            { "name": "Sri Lanka", "dial_code": "+94", "code": "LK" },
            { "name": "Sudan", "dial_code": "+249", "code": "SD" },
            { "name": "Suriname", "dial_code": "+597", "code": "SR" },
            { "name": "Svalbard and Jan Mayen", "dial_code": "+47", "code": "SJ" },
            { "name": "Swaziland", "dial_code": "+268", "code": "SZ" },
            { "name": "Sweden", "dial_code": "+46", "code": "SE" },
            { "name": "Switzerland", "dial_code": "+41", "code": "CH" },
            { "name": "Syrian Arab Republic", "dial_code": "+963", "code": "SY" },
            { "name": "Taiwan", "dial_code": "+886", "code": "TW" },
            { "name": "Tajikistan", "dial_code": "+992", "code": "TJ" },
            { "name": "Tanzania, United Republic of Tanzania", "dial_code": "+255", "code": "TZ" },
            { "name": "Thailand", "dial_code": "+66", "code": "TH" },
            { "name": "Timor-Leste", "dial_code": "+670", "code": "TL" },
            { "name": "Togo", "dial_code": "+228", "code": "TG" },
            { "name": "Tokelau", "dial_code": "+690", "code": "TK" },
            { "name": "Tonga", "dial_code": "+676", "code": "TO" },
            { "name": "Trinidad and Tobago", "dial_code": "+1868", "code": "TT" },
            { "name": "Tunisia", "dial_code": "+216", "code": "TN" },
            { "name": "Turkey", "dial_code": "+90", "code": "TR" },
            { "name": "Turkmenistan", "dial_code": "+993", "code": "TM" },
            { "name": "Turks and Caicos Islands", "dial_code": "+1649", "code": "TC" },
            { "name": "Tuvalu", "dial_code": "+688", "code": "TV" },
            { "name": "Uganda", "dial_code": "+256", "code": "UG" },
            { "name": "Ukraine", "dial_code": "+380", "code": "UA" },
            { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" },
            { "name": "United Kingdom", "dial_code": "+44", "code": "GB" },
            { "name": "United States", "dial_code": "+1", "code": "US" },
            { "name": "Uruguay", "dial_code": "+598", "code": "UY" },
            { "name": "Uzbekistan", "dial_code": "+998", "code": "UZ" },
            { "name": "Vanuatu", "dial_code": "+678", "code": "VU" },
            { "name": "Venezuela, Bolivarian Republic of Venezuela", "dial_code": "+58", "code": "VE" },
            { "name": "Vietnam", "dial_code": "+84", "code": "VN" },
            { "name": "Virgin Islands, British", "dial_code": "+1284", "code": "VG" },
            { "name": "Virgin Islands, U.S.", "dial_code": "+1340", "code": "VI" },
            { "name": "Wallis and Futuna", "dial_code": "+681", "code": "WF" },
            { "name": "Yemen", "dial_code": "+967", "code": "YE" },
            { "name": "Zambia", "dial_code": "+260", "code": "ZM" },
            { "name": "Zimbabwe", "dial_code": "+263", "code": "ZW" }
        ]; // Guernsey, Isle of Man and Jersey skipped

        // Function to return country from phone number country code
        function getCountryName(phone) {
            let cleanedPhone = phone.replace(/\D/g, '');
            let country = countryCodes.find(c => cleanedPhone.startsWith(c.dial_code.substr(1)));
            return country ? country.name : 'Unknown Country';
        };

        // Arrays of area codes for Canada and United States
        const usAreaCodes = ["228", "601", "662", "769", "670", "405", "539", "580", "918", "302", "218", "320", "507", "612", "651", "763", "952", "217", "224", "309", "312", "331", "618", "630", "708", "773", "779", "815", "847", "872", "479", "501", "870", "505", "575", "219", "260", "317", "574", "765", "812", "240", "301", "410", "443", "667", "225", "318", "337", "504", "985", "208", "307", "423", "615", "731", "865", "901", "931", "480", "520", "602", "623", "928", "319", "515", "563", "641", "712", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "947", "989", "316", "620", "785", "913", "385", "435", "801", "684", "458", "503", "541", "971", "203", "475", "860", "406", "209", "213", "310", "323", "408", "415", "424", "442", "510", "530", "559", "562", "619", "626", "650", "657", "661", "669", "707", "714", "747", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "339", "351", "413", "508", "617", "774", "781", "857", "978", "803", "843", "864", "603", "262", "414", "534", "608", "715", "920", "802", "229", "404", "470", "478", "678", "706", "762", "770", "912", "701", "215", "267", "272", "412", "484", "570", "610", "717", "724", "814", "878", "304", "681", "239", "305", "321", "352", "386", "407", "561", "727", "754", "772", "786", "813", "850", "863", "904", "941", "954", "808", "270", "502", "606", "859", "907", "308", "402", "531", "314", "417", "573", "636", "660", "816", "216", "234", "330", "419", "440", "513", "567", "614", "740", "937", "205", "251", "256", "334", "938", "401", "202", "340", "605", "303", "719", "720", "970", "201", "551", "609", "732", "848", "856", "862", "908", "973", "276", "434", "540", "571", "703", "757", "804", "671", "206", "253", "360", "425", "509", "252", "336", "704", "828", "910", "919", "980", "984", "212", "315", "347", "516", "518", "585", "607", "631", "646", "716", "718", "845", "914", "917", "929", "210", "214", "254", "281", "325", "346", "361", "409", "430", "432", "469", "512", "682", "713", "737", "806", "817", "830", "832", "903", "915", "936", "940", "956", "972", "979", "702", "725", "775", "207"];
        const canadianAreaCodes = ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "403", "416", "418", "431", "437", "438", "450", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "888", "902", "905"];
        const tollFreeUsCa = ["800", "888", "877", "866", "855", "844", "833"];

        // Function to return correct countries based on area codes to fix issues with +1 area code being overused
        function getArea(phone) {
            let cleanedPhone = phone.replace(/\D/g, '');
            let areaCode = cleanedPhone.substr(1, 3);

            if (canadianAreaCodes.includes(areaCode)) {
                return "Canada - " + areaCode;
            } else if (usAreaCodes.includes(areaCode)) {
                return "United States - " + areaCode;
            } else if (tollFreeUsCa.includes(areaCode)) {
                return "TollFree US/CA - " + areaCode;
            } else if (areaCode === "787" || areaCode === "939") {
                return "Puerto Rico - " + areaCode;
            }
            return "Unknown Area";
        };

        // Logic that ensure getArea is only used when country is Canada because thats the default value for any +1 country code and requires further iteration.
        getCountryName(phone);
        getArea(phone);
        let finalCountry = getCountryName(phone);
        if (finalCountry === 'Canada') {
            finalCountry = getArea(phone);
        };

        // Opening new tab and building website to display information (head and styles)
        var newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>Company Info</title>');
        newWindow.document.write('<style>');
        newWindow.document.write('body { background: linear-gradient(to bottom, #87CEEB, #1E90FF); }');
        newWindow.document.write('.info-heading { text-align: center; background-image: url(https://c4.wallpaperflare.com/wallpaper/836/566/354/space-cosmo-hd-wallpaper-preview.jpg); background-size: cover; color: azure; border: 2px solid azure; padding: 10px; border-radius: 100px; width: 350px; margin: auto; margin-top: 10px; margin-bottom:10px; display: inline-block; }');
        newWindow.document.write('.info { text-align: center; width: 350px; margin: auto; cursor: pointer; font-size: 25px; color: #25258e; } .info:hover { color: aqua; }');
        newWindow.document.write('.copy-button { cursor: pointer; }');
        newWindow.document.write('.copy-icon::before { content: "\\1F4CC"; font-size: 20px; }');
        newWindow.document.write('#logo { width: 200px; height: auto; }')
        newWindow.document.write('nav { margin-bottom: 20px }')
        newWindow.document.write('div { font-family: cursive; text-align: center; position: relative; }');
        newWindow.document.write('.title { display: inline-block; font-family: cursive; position: relative; left: 150px; border-top: 2px solid azure; border-bottom: 2px solid azure; }');
        newWindow.document.write('</style></head><body>');

        // <Body>
        newWindow.document.write('<nav><img id="logo" src="https://infusemedia.com/wp-content/uploads/2019/07/Logo-new.svg"><h1 class="title">' + title + '</h3></nav>');

        newWindow.document.write('<div>');
        newWindow.document.write('<h1 class="info-heading"; >Phone Country Code</h1>' + '<h1 class="info">' + finalCountry + '</h1>');
        newWindow.document.write('<h1 class="info-heading">Phone <span class="copy-button copy-icon" onclick="copyToClipboard(\'' + phone + '\')"></span></h1><h1 class="info" onclick="searchGoogle(\'' + phone + '\')">' + '+' + phone + '</h1>');
        newWindow.document.write('<h1 class="info-heading">Website <span class="copy-button copy-icon" onclick="copyToClipboard(\'' + website + '\')"></span></h1><h1 class="info" onclick="openUrl(\'' + website + '\')">' + website + '</h1>');
        newWindow.document.write('<h1 class="info-heading">Address <span class="copy-button copy-icon" onclick="copyToClipboard(\'' + address + '\')"></span></h1><h1 class="info" style="width: 700px !important" onclick="searchGoogle(\'' + address + '\')">' + address + '</h1>');

        newWindow.document.write('</div></body></html>');

        // <scripts> that add functionality to the pseudo website
        newWindow.document.write('<script>');
        newWindow.document.write('function searchGoogle(text) {');
        newWindow.document.write('var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(text);');
        newWindow.document.write('window.open(searchUrl, "_blank");');
        newWindow.document.write('}');
        newWindow.document.write('function openUrl(content) { var a = "https://" + encodeURIComponent(content); window.open(a, "_black"); };');
        newWindow.document.write('function copyToClipboard(text) {');
        newWindow.document.write('var tempInput = document.createElement("input");');
        newWindow.document.write('tempInput.value = text;');
        newWindow.document.write('document.body.appendChild(tempInput);');
        newWindow.document.write('tempInput.select();');
        newWindow.document.write('document.execCommand("copy");');
        newWindow.document.write('document.body.removeChild(tempInput);');
        newWindow.document.write('}');
        newWindow.document.write('</script>');

        found = true;
    }
});

/* 
 When used with "Scripty - JavaScript Injector";
 Set Run script if: URL - Contains - bloomberg.com; 
 Trigger: Automatically - Before page load.
*/
