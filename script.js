function encrypt() {
    var input = document.getElementById("input").value;
    var output = "";
    
    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input.charCodeAt(i) + 3);
    }
    
    document.getElementById("output").value = output;
  }

  
