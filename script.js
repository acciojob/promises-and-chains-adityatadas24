//your JS code here. If required.
let buttons = document.getElementById("btn");

buttons.addEventListener("click", (event)  =>{
	event.preventDefault();
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;

	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			if(age > 18) {
				
				resolve(
					alert(`Welcome, ${name}.You can vote`)
				)
				
			}
			else {
				reject(
					alert(`oh sorry ${name}.You aren't old enough`)
				)
			}
		},4000)
	})
})


