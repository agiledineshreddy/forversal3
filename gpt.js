function Display(value) {
	// Append the button value to the display
	document.getElementById("display").value += value;
}
function calculate() {
	// Evaluate the expression in the display
	
	// Display the result
	document.getElementById("display").value = eval(display.value);
}
function dd() {
	document.getElementById("display").value= '';//display.value.slice(0,-1);

}
function del() {
	document.getElementById("display").value= display.value.slice(0,-1);

}
omg.onclick = function() {
  img.src = "https://lh3.googleusercontent.com/pw/AMWts8DzH3llRH0NlXZ5z-sUoQz-WRwx6LKfwpRGYsqX2xcZj6wXTR14X0W6yHNr3RlsSfIEqL98JGG1TOh7mgs22jq1z_8RHZNPTbEEGblQjTK2n1DeReh4XX_H15XUXulaxlzEeAxf2ecsu2u-E9so58OyYyJSF9KIJdexUvYIIfGDBrxsGNEb6IMWjgczs3NLRf3rKHI0TB2SHZsMIeESCblIr5NGCXVZfkwg59JXP_0-Z54M4FvGK316njQMQp5jIY_Fb_WJbgJg11Qj8Av2PqmjZJebraMW0KtEru4qz6WeCjWZTqfE2vS3JO1LynOowHwOV-2rkq36xLal7BIuRezgR1fYTWh9n9dsxLq7oZ36FjTZM-Wpqn3gFvIiX6EVnZK6uSuAnXF9asy8yC-ak88os9RgxU7f292m69rfYMaOiOEACvOdL1VIhNk3PtVyuZeVKGkuT8Sh_bjxT5R1Z18feby_cr3xvMGFi9vkjspzhygD_IGzYMVVPJyPr0DotbmVDl0VDz3odkfV7uRNeKaywUQJ4A1OdyhDbVSE3MJb3kh2iTP5jXf6oTxxKo4f-1gTR-RYFdT8rcnV1wu0GqlDkIRvA1aPOJliKwuMWeLFSlNk9RJ4ad2GEhJfLBT4lInSYYuZ2vg7EEiuoOaBNsYxoVWfQ4813tdLYQuibW73UcqWDfpYvFlPKsWd9de7Ab2iKW7a2w3FArDiGPbmwy6Jd016SvNYqi7rYrX8oecm0ufVatrOeup_olckzBQHOqfV4r0gJ7VgW2RaPWIVeZq5nbuN3UGXLyJGS1Hq6UOjkYpmE6TKSc-Qh_Q5zdcJxGj17GP3Id8ShjBqKx0veH7JFH-gSUsNjaTfJMxk2uN4NwAlvNpcX86EdQt09SuiNe_BwfNwb3Nfe823M3i51WaiQo5s05WFFxaeBAi07bxSn2TKi17MIdJ8zCDy0A=w452-h902-s-no?authuser=0g";
};

