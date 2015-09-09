//Main function
var triangleTracker = function(sideA, sideB, sideC) {
  if (isTriangle(sideA, sideB, sideC)) {
    return triangleType(sideA, sideB, sideC);
  }
  else {
    return "These sides do not make a triangle.";
  }
};

//Determines if the entered side lengths could form a triangle
var isTriangle = function(sideA, sideB, sideC) {
    return sideA < (sideB + sideC) && sideB < (sideA + sideC) && sideC < (sideA + sideB);
}

//Determines what type of triangle it is
var triangleType = function(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    return "Equilateral";
  }
  else if (sideA === sideB || sideB === sideC || sideC === sideA){
    return "Isosceles";
  }
  else if (sideA !== sideB && sideB !== sideC && sideC !== sideA) {
    return "Scalene";
  }
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangleTracker(sideA, sideB, sideC);

    sideA = parseInt($("input#sideA").val(""));
    sideB = parseInt($("input#sideB").val(""));
    sideC = parseInt($("input#sideC").val(""));


    $("#result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
