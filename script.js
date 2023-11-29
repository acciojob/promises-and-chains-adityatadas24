//your JS code here. If required.
let buttons = document.getElementById("btn");

buttons.addEventListener("click", (event)  =>{
	event.preventDefault();
	let nameinput = document.getElementById("name").value;
	let ageinput = document.getElementById("age").value;

	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			if(age > 18){
				resolve(
					alert(`Welcome, john.you can vote`)
				)
				
			}
			else {
				reject(
					alert(`oh sorry doe.You aren't old enough`)
				)
			}
		},4000)
	})
})
