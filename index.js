const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

let password = 'namasta';
let passwordInput = document.getElementById('exampleInputPassword1');
let btn = document.getElementById('btn'); 
let form_container = document.getElementById('form-container');
let hiddent_content = document.getElementById('hide');

btn.addEventListener('click', function() { 
    let passwordValue = passwordInput.value;
    if (passwordValue === password) {
        console.log(`It's working: ${passwordValue}`);
        let h1 = document.getElementsByTagName('h1')[0];
        h1.textContent = '❤️ Welcome Citlali ❤️'; 
        form_container.remove();
        hiddent_content.style.display = 'block';    
    } else {
        alert('Password is incorrect');

    }
    passwordInput.value = ''; // Clear the input field after checking
});

