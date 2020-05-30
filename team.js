

document.getElementsByClassName("teammember").addEventListener("click", teamMemberInfo);

class Member { 
   firstName = "";
   lastName = "";  
   email = "";
   available = ""
constructor(firstName, lastName, email, available) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.email = email;
       this.available = available;
   }
   
   teamMemberInfo() {
       return 'My name is ' + this.firstName + ' ' +this.lastName + 'please contact me from ' + this.available + ' or write me a message ' +this.email; 
   }
   
}

	   var member1 = new Member("Tatiana", "Calderon", "t.calderon@insurance.at", "Mo-Fr");
	   var member1 = new Member("Daniel", "Ricciardo", "d.ricciardo@insurance.at", "Mo-Fr");
	   var member1 = new Member("Simona", "de Silvestro", "s.silvestro@insurance.at", "Mo-Th");
	   var member1 = new Member("Nico", "Hulkenberg", "n.hulkenberg@insurance.at", "Wed-Fr");
	 
	

// function teamMemberInfo () {
	
// 	var whichCountry = document.getElementById("country").value;
// 	var customerName = document.getElementById("name").value;
// 	var customerAge = Number(document.getElementById("age").value);
// 	var customerHorsepower = Number(document.getElementById("horsepower").value);

// if (whichCountry == 'Austria') {	
// //insurance = horse_power x 100 / age   + 50 
// 	var insurance = Math.round(Number(customerHorsepower * 100 / customerAge + 50));
// 	document.getElementById('calculationResult').style.visibility = "visible";
// 	document.getElementById('calculationResult').innerHTML = `Hi ${customerName}, your insurance for ${whichCountry} costs ${insurance} €.`
	
// }
// else if (whichCountry == 'Greece') {
// // insurance = horse_power x 150 / (age+3)  + 50;
// 	var insurance = Math.round(Number(customerHorsepower * 150 / (customerAge + 3) + 50));
// 	document.getElementById('calculationResult').style.visibility = "visible";
// 	document.getElementById('calculationResult').innerHTML = `Hi ${customerName}, your insurance for ${whichCountry} costs ${insurance} €.`
// }
// else if (whichCountry == 'Hungary') {
// // insurance = horse_power x 120 / age  + 100;
// 	var insurance = Math.round(Number(customerHorsepower * 120 / customerAge + 100));
// 	document.getElementById('calculationResult').style.visibility = "visible";
// 	document.getElementById('calculationResult').innerHTML = `Hi ${customerName}, your insurance for ${whichCountry} costs ${insurance} €.`
// }
// else {
// 	document.getElementById('calculationResult').style.visibility = "visible";
// 	document.getElementById('calculationResult').innerHTML = 'Please select a country'
// };
// }





