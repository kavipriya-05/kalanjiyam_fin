const stateData = {
    "Tamil Nadu": {
        "Chennai": ["T. Nagar", "Velachery", "Adyar","Nungambakkam",
            "T. Nagar",
            "Nungambakkam",
            "Egmore",
            "Kilpauk",
            "Chetpet",
            "Purasawalkam",
            "Triplicane",
            "Royapettah",
            "Mylapore",
            "Adyar",
            "Besant Nagar",
            "Velachery",
            "Guindy",
            "Saidapet",
            "Pallavaram",
            "Chromepet",
            "Tambaram",
            "Medavakkam",
            "Sholinganallur",
            "Perungudi",
            "Thiruvanmiyur",
            "Pallikaranai",
            "Navalur",
            "Siruseri",
            "Thoraipakkam",
            "Karapakkam",
            "Padur",
            "Kelambakkam",
            "Perambur",
            "Anna Nagar",
            "Ayanavaram",
            "Vepery",
            "Tondiarpet",
            "Royapuram",
            "Vadapalani",
            "Koyambedu",
            "Mogappair",
            "Ambattur",
            "Porur"],
        "Theni":[
                "Theni",
                "Bodinayakanur",
                "Periyakulam",
                "Cumbum",
                "Uthamapalayam",
                "Chinnamanur",
                "Andipatti",
                "Kuchanur",
                "Kambam",
                "Vaigaidam",
                "Bodi Mettu",
                "Thevaram",
                "Kadamalaikundu",
                "Gudalur",
                "Varusanadu",
                "Lakshmipuram",
                "Markayankottai",
                "Kombai",
                "Erattaipatti" ],
    "Erode": ["Bhavani", "Gobichettipalayam",
            "Perundurai",
            "Bhavani",
            "Chithode",
            "Modakurichi",
            "Kodumudi",
            "Anthiyur",
            "Sathyamangalam",
            "Kavindapadi",
            "Nambiyur"
          ],
 "Madurai":[
            "Madurai",
            "Thirumangalam",
            "Melur",
            "Vadipatti",
            "Usilampatti",
            "Alanganallur",
            "Sholavandan",
            "Thiruparankundram",
            "Samayanallur",
            "Avaniyapuram",
            "Palanganatham"],
        "Thirunelveli": ["Palayamkottai", "Tirunelveli Junction", "Vannarpettai", "Kokkirakulam", "Melapalayam", "Perumalpuram", "Kailasapuram", "Sankar Nagar", "Reddiarpatti", "Nellaiappar Temple"]
    },
        
    "Kerala": {
                "Thiruvananthapuram": ["Kovalam", "Varkala", "Shangumugham", "Pothencode", "Attingal", "Pappanamcode", "Kazhakoottam", "Nemom", "Peroorkada", "Palayam"],
                "Kochi": ["Fort Kochi", "Mattancherry", "Marine Drive", "Edappally", "Palarivattom", "Kaloor", "Vyttila", "Kakkanad", "Tripunithura", "Aluva"],
                "Kozhikode": ["Mananchira", "Kappad Beach", "Beypore", "Feroke", "Mavoor", "Ramanattukara", "Meenchanda", "West Hill", "Eranhipalam", "Kunnamangalam"],
                "Thrissur": ["Guruvayur", "Chavakkad", "Kodungallur", "Irinjalakuda", "Punkunnam", "Ayyanthole", "Ollur", "Mannuthy", "Kunnamkulam", "Nadathara"],
                "Kollam": ["Ashtamudi", "Paravur", "Karunagappally", "Chavara", "Neendakara", "Perinad", "Kottiyam", "Kundara", "Mayyanad", "Sasthamkotta"],
                "Alappuzha": ["Marari Beach", "Vembanad Lake", "Kumarakom", "Thanneermukkom", "Pathiramanal", "Ambalappuzha", "Haripad", "Cherthala", "Punnamada", "Kayamkulam"],
                "Kannur": ["Payyambalam Beach", "Thalassery", "Muzhappilangad", "Pappinisseri", "Mattannur", "Iritty", "Pazhayangadi", "Chirakkal", "Peralassery", "Valapattanam"],
                "Palakkad": ["Malampuzha", "Ottapalam", "Shoranur", "Chittur", "Mannarkkad", "Kollengode", "Alathur", "Pattambi", "Nemmara", "Parli"],
                "Malappuram": ["Manjeri", "Kottakkal", "Perinthalmanna", "Tirur", "Ponnani", "Nilambur", "Kondotty", "Malappuram Town", "Areekode", "Edappal"],
                "Pathanamthitta": ["Sabarimala", "Thiruvalla", "Pandalam", "Adoor", "Ranni", "Pathanamthitta Town", "Konni", "Mallappally", "Kozhencherry", "Seethathode"]
            },
    
    "Uttar Pradesh": {
        "Lucknow": ["Hazratganj", "Aminabad", "Gomti Nagar", "Chowk", "Indira Nagar", "Alambagh", "Charbagh", "Mahanagar", "Rajajipuram", "Hussainganj"],
        "Kanpur": ["Mall Road", "Pandu Nagar", "Swaroop Nagar", "Kakadeo", "Tilak Nagar", "Govind Nagar", "Shastri Nagar", "Lal Bangla", "Barra", "Sisamau"],
        "Agra": ["Tajganj", "Sadar Bazar", "Rakabganj", "Sikandra", "Dayal Bagh", "Kamla Nagar", "Fatehabad Road", "Shahganj", "Loha Mandi", "Balkeshwar"],
        "Varanasi": ["Godowlia", "Assi Ghat", "Dashashwamedh Ghat", "Bhelupur", "Lanka", "Sigra", "Mahmoorganj", "Chetganj", "Chowk", "Shivpur"],
        "Prayagraj": ["Civil Lines", "Chowk", "Katra", "Lukarganj", "Kareli", "Rajapur", "Dhoomanganj", "Naini", "Mutthiganj", "Allahpur"],
        "Meerut": ["Shastri Nagar", "Begum Bagh", "Abu Lane", "Mangal Pandey Nagar", "Pallavpuram", "Saket", "Jagriti Vihar", "Modipuram", "Railway Road", "Jagrati Vihar"],
        "Ghaziabad": ["Raj Nagar", "Vasundhara", "Indirapuram", "Vaishali", "Kaushambi", "Kavi Nagar", "Shastri Nagar", "Mohan Nagar", "Sanjay Nagar", "Loni"],
        "Bareilly": ["Civil Lines", "Izzatnagar", "Rajendra Nagar", "Sanjay Nagar", "Subhash Nagar", "Nawabganj", "Badaun Road", "Kargaina", "Shamat Ganj", "Koharapeer"],
        "Gorakhpur": ["Golghar", "Railway Colony", "Asuran", "Mohaddipur", "Rustampur", "Shahpur", "Betiahata", "Kushmi", "Alinagar", "Taramandal"],
        "Aligarh": ["Ramghat Road", "Dodhpur", "Tappal", "Civil Lines", "Gular Road", "Surendra Nagar", "Sarsaul", "Mahua Khera", "Banat", "Chherat"]
    },
    "Maharashtra": {
        "Mumbai": ["Colaba", "Bandra", "Andheri", "Dadar", "Worli", "Goregaon", "Juhu", "Mulund", "Vasai", "Powai"],
        "Pune": ["Shivajinagar", "Kothrud", "Hinjewadi", "Baner", "Viman Nagar", "Swargate", "Koregaon Park", "Hadapsar", "Camp", "Kalyani Nagar"],
        "Nagpur": ["Dharampeth", "Sitabuldi", "Sadar", "Jaripatka", "Manewada", "Wardhaman Nagar", "Ajni", "Hudkeshwar", "Mahal", "Gandhibagh"],
        "Thane": ["Ghodbunder Road", "Majiwada", "Vartak Nagar", "Hiranandani Estate", "Wagle Estate", "Kopri", "Balkum", "Kalwa", "Kasarvadavali", "Manpada"],
        "Nashik": ["Panchavati", "Satpur", "Indira Nagar", "Cidco", "Gangapur Road", "Trimbak Road", "Ambad", "Makhmalabad", "Ashok Nagar", "Dwarka"]
    },
    
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Chittoor", "Anantapur"],
        "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat", "Ziro", "Changlang"],
         "Assam":[ "Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Tezpur"],
        "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"],
        "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba", "Bastar"],
        "Goa": ["North Goa", "South Goa"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
         "Haryana": ["Gurugram", "Faridabad", "Karnal", "Rohtak", "Ambala"],
        "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Mandi", "Solan"],
         "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Hazaribagh", "Bokaro"],
         "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Belagavi", "Hubballi-Dharwad"],
        "Kerala" :["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
         "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
         "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
         "Manipur": ["Imphal East", "Imphal West", "Churachandpur", "Thoubal", "Senapati"],
         "Meghalaya": ["East Khasi Hills", "West Khasi Hills", "Ri-Bhoi"],
      

};

window.onload = function () {
    let stateDropdown = document.getElementById("state");
    for (let state in stateData) {
        let option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    }
};

function loadDistricts() {
    let state = document.getElementById("state").value;
    let districtDropdown = document.getElementById("district");
    let cityDropdown = document.getElementById("city");

    districtDropdown.innerHTML = '<option value="">-- Select District --</option>';
    cityDropdown.innerHTML = '<option value="">-- Select City --</option>';
    cityDropdown.disabled = true;

    if (state) {
        for (let district in stateData[state]) {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        }
        districtDropdown.disabled = false;
    } else {
        districtDropdown.disabled = true;
    }
}

function loadCities() {
    let state = document.getElementById("state").value;
    let district = document.getElementById("district").value;
    let cityDropdown = document.getElementById("city");

    cityDropdown.innerHTML = '<option value="">-- Select City --</option>';

    if (state && district) {
        stateData[state][district].forEach(city => {
            let option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
        cityDropdown.disabled = false;
    } else {
        cityDropdown.disabled = true;
    }
}



