
const username = document.getElementById("username");

username.addEventListener('change', () => {
 console.log(username.value)
 if (username.value === "Maicol") {
    console.log("ES MAICOL")
   } else {
    console.log("NO ACCEDE")
   }
})

