// TODO

const nameField = document.getElementById("first-name")

const lastField = document.getElementById("last-name")

let emailField = document.getElementById("email")

//let mailFormat = [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$;

// emailField validated in html document

const form = document.getElementById("connect-form")

const selector = document.getElementById("contact-kind")



const selectOption = () =>{
    const selection = selector.value;
    //const bizFields = document.getElementById('biz-name')

    if (selection==="business"){
        const bizFields = document.getElementById('biz-name')
        bizFields.classList.remove('hidden')

        //.show is presenting an error
        //Uncaught TypeError: bizFields.classList.show is not a function
        //changed to .add
        bizFields.classList.add('show')

        //bizFields.classList.show('show')
    } else{
        const bizFields = document.getElementById('biz-name')
        bizFields.classList.add('hidden')
    }
}



const checkValidation = (e) =>{

    e.preventDefault()


}

form.addEventListener("submit", checkValidation)

selector.addEventListener("change", selectOption)