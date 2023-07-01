var CSPIT = {
  yearOfEstablishment: 1999,
  location: "Charotar University of Science and Technology, Gujarat, India",
  departments: ["CE", "IT", "CS", "EC", "EE", "CL", "ME"],

  getAllDetails: function() {
    console.log("CSPIT Institute Details:");
    console.log("Year of Establishment:", this.yearOfEstablishment);
    console.log("Location:", this.location);
    console.log("Departments:", this.departments);
  }
};

var CE = Object.create(CSPIT);
CE.totalStudents = 250;
CE.totalFaculty = 30;

console.log("CSPIT Institute Details:");
for (var prop in CSPIT) {
  console.log(prop + ": " + CSPIT[prop]);
}

console.log("\nCE Department Details:");
for (var prop in CE) {
  console.log(prop + ": " + CE[prop]);
}