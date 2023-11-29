//your JS code here. If required.
// let buttons = document.getElementById("btn");

// buttons.addEventListener("click", (event)  =>{
// 	event.preventDefault();
// 	let name = document.getElementById("name").value;
// 	let age = document.getElementById("age").value;

// 	return new Promise((resolve, reject) => {
// 		setTimeout(()=>{
// 			if(age > 18) {
				
// 				resolve(
// 					alert(`Welcome, John. You can vote.`)
// 				)
				
// 			}
// 			else {
// 				reject(
// 					alert(`Oh sorry Doe. You aren't old enough.`)
// 				)
// 			}
// 		},4000)
// 	})
// })

let formbutton = document.getElementById("btn");
function promiseApi1(name , age)
{
 return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(age > 18)
            {
                resolve(
                    alert(`Welcome, ${name}. You can vote.`)
                    // console.log(`You can vote , ${name}`)
                )
            }
            else
            {
                 alert(`Oh sorry ${name}. You aren't old enough.`)
            }
        } , 4000)
 })
}
formbutton.addEventListener("click" , (event) => {
    event.preventDefault();
    let nameinput = document.getElementById("name").value;
    let ageinput = document.getElementById("age").value;
    if (nameinput == "" && ageinput == "") {
        alert("Please enter valid details")
    }
    else
    {
        promiseApi1(nameinput , ageinput);
    }
})


