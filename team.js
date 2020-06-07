


class Person { 
  identif = "";
  firstName = "";
  lastName = "";
  email = "";
  available = "";

constructor(identif, firstName, lastName, email, available) {
       this.identif = identif;
       this.firstName = firstName;
       this.lastName = lastName;
       this.email = email;
       this.available = available;
   }
   
 teamMemberInfo() {
    
       document.getElementById("memberContact").innerHTML = `Hi, my name is ${this.firstName} ${this.lastName}, please contact me from  ${this.available} or write me an email under ${this.email}`;    
     
};
 };


     let member1 = new Person("tc", "Tatiana", "Calderon", "t.calderon@insurance.at", "Mo-Fr");
     let member2 = new Person("dr", "Daniel", "Ricciardo", "d.ricciardo@insurance.at", "Mo-Fr");
     let member3 = new Person("sDs", "Simona", "de Silvestro", "s.silvestro@insurance.at", "Mo-Th");
     let member4 = new Person("nh", "Nico", "Hulkenberg", "n.hulkenberg@insurance.at", "Wed-Fr");
   

   //  let allTeamMember = [member1, member2, member3, member4];

   // for(let member of allTeamMember) {
   //    document.getElementById("memberContact").innerHTML += member;
   // }
 
  document.getElementById("tc").addEventListener("click", tatianaInfo);
   
   function tatianaInfo() {
    member1.teamMemberInfo();
    document.getElementById("tc").style.color = 'red';
    
  }


   document.getElementById("dr").addEventListener("click", danielInfo);
   function danielInfo() {
    member2.teamMemberInfo();
    document.getElementById("dr").style.color = 'red'; 
  } 

   document.getElementById("sDs").addEventListener("click", simonaInfo);
   
   function simonaInfo() {
    member3.teamMemberInfo();
    document.getElementById("sDs").style.color = 'red';
  }
   document.getElementById("nh").addEventListener("click", nicoInfo);
   
   function nicoInfo() {
    member4.teamMemberInfo();
    document.getElementById("nh").style.color = 'red';
  }


//       function giveTC() {
//         console.log(teamMemberInfovar);
// }
//   
//     giveTC();
     // document.getElementById("memberContact").innerHTML = `${member[0]}`;
     //  if(member.identif == document.getElementById("tc"))
        // console.log("hallo")member.teamMemberInfo();
 
      // console.log(teamMemberInfo());
    //   if (allTeamMember[i][0] == document.getElementById().value)
    
    
   
    
    // for (i = 0; i < allTeamMember.length; i++) {
    //   if (allTeamMember[0] == document.getElementById().value) {
    //     document.getElementById('memberContact').innerHTML = ${allTeamMember[i][0]} ${allTeamMember[i][1]} 
    //   }

    // }


// zweite Methode
// document.getElementsByClassName("teammember").addEventListener("click", giveMeTeamMember);


// var teamMembers = [["Tatiana", "Calderon", "t.calderon@insurance.at", "Mo-Fr"],
//                    ["Daniel", "Ricciardo", "d.ricciardo@insurance.at", "Mo-Fr"],
//                    ["Simona", "de Silvestro", "s.silvestro@insurance.at", "Mo-Th"],
//                    ["Nico", "Hulkenberg", "n.hulkenberg@insurance.at", "Wed-Fr"]]

// let i;
// for ( i=0; i<teamMembers.length; i++ ) {
//     if (teamMembers[1] == "Calderon") {
//         for (let j=0; j<teamMembers[i].length; j++) {
//       document.getElementById('memberContact').innerHTML = teamMembers[j][0] + ' '+ teamMembers[j][1] + teamMembers[j][2] + ' ' + 'available ' + teamMembers[j][3];
//    }
//   }
    // else if () {

    // }
    // else if () {

    // }
    // else () {

    // }
// }





