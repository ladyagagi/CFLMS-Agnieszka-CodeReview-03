

document.getElementById("calculation-button").addEventListener("click", calculateInsurance);

function calculateInsurance () {
	
	var whichCountry = document.getElementById("country").value;
	var customerName = document.getElementById("name").value;
	var customerAge = Number(document.getElementById("age").value);
	var customerHorsepower = Number(document.getElementById("horsepower").value);

if (whichCountry == 'Austria') {	
//insurance = horse_power x 100 / age   + 50 
	var insurance = Math.round(Number(customerHorsepower * 100 / customerAge + 50));
	document.getElementById('calculationResult').innerHTML = `Hi ${customerName}, your insurance for ${whichCountry} costs ${insurance} €.`
	
}
else if (whichCountry == 'Greece') {
// insurance = horse_power x 150 / (age+3)  + 50;
	var insurance = Math.round(Number(customerHorsepower * 150 / (customerAge + 3) + 50));
	document.getElementById('calculationResult').innerHTML = `Hi ${customerName}, your insurance for ${whichCountry} costs ${insurance} €.`
}
else if (whichCountry == 'Hungary') {
// insurance = horse_power x 120 / age  + 100;
	var insurance = Math.round(Number(customerHorsepower * 120 / customerAge + 100));
	document.getElementById('calculationResult').innerHTML = `Hi ${customerName}, your insurance for ${whichCountry} costs ${insurance} €.`
}
else {
	document.getElementById('calculationResult').innerHTML = 'Please select a country'
};
}





