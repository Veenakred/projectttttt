function addUser () {
  
  player1_name_input = player1_name_input;
  player2_name_input = player2_name_input;

 localStorage((player1_name_input)(player2_name_input));

  window.location(game_page.html);
}

function send(){
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
}

question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
number1 = document.getElementById("number1").value = "";
number2 = document.getElementById("number2").value = "";
