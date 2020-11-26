var totalCases = document.getElementById("total-cases-count");
var totalDeaths = document.getElementById("total-deaths-count");
var totalRecoverd = document.getElementById("total-recovered-count");
var countriesData = document.getElementById("dataList");
var table = document.getElementById("table");

var globalUrl = "https://coronavirus-19-api.herokuapp.com/all";
var countriesUrl = "https://coronavirus-19-api.herokuapp.com/Countries";

setInterval(function () {
	fetch(globalUrl)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			totalCases.innerHTML = data.cases;
			totalDeaths.innerHTML = data.deaths;
			totalRecoverd.innerHTML = data.recovered;
		});
}, 1000);

fetch(countriesUrl)
	.then(function (res) {
		return res.json();
	})
	.then(function (data) {
		for (var i = 1; i < data.length; i++) {
			let row = table.insertRow(i);
			let country_name = row.insertCell(0);
			let total_cases = row.insertCell(1);
			let total_deaths = row.insertCell(2);
			let recovered_cases = row.insertCell(3);
			let today_cases = row.insertCell(4);
			let today_deaths = row.insertCell(5);
			let active_cases = row.insertCell(6);
			let critical_cases = row.insertCell(7);
			let total_tests = row.insertCell(8);
		
			country_name.innerHTML = data[i].country;
			total_cases.innerHTML = data[i].cases;
			total_deaths.innerHTML = data[i].deaths;
			recovered_cases.innerHTML = data[i].recovered;
			today_cases.innerHTML = data[i].todayCases;
			today_deaths.innerHTML = data[i].todayDeaths;
			active_cases.innerHTML = data[i].active;
			critical_cases.innerHTML = data[i].critical;
			total_tests.innerHTML = data[i].totalTests;
		}
	});
