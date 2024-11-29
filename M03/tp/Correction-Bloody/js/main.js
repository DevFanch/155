import { 
    emailValidator, 
    passwordValidator, 
    dateValidator, 
    systemValidator,
    numberValidator 
} from './modules/validators.js';
import { saveToLocalStorage } from './modules/storage.js';
import { displayFieldError, clearFieldErrors } from './modules/errorDisplay.js';

function handleSubmit(event) {
    event.preventDefault();
    // Remove Old Errors
    clearFieldErrors();

    // Alternative FormData Object cf. https://developer.mozilla.org/fr/docs/Web/API/FormData
    // Get Datas
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        birthDate: document.getElementById('birthDate').value,
        system: document.getElementById('system').value,
        number: document.getElementById('number').value
    };

    // Track Error
    let hasError = false;

    // Validations Tests
    if (!emailValidator(formData.email)) {
        displayFieldError('email', "Email invalide");
        hasError = true;
    }

    if (!passwordValidator(formData.password)) {
        displayFieldError('password', "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule , un chiffre et un caractère spécial");
        hasError = true;
    }

    if (!dateValidator(formData.birthDate)) {
        displayFieldError('birthDate', "Date de naissance invalide");
        hasError = true;
    }

    if (!systemValidator(formData.system)) {
        displayFieldError('system', "Système d'exploitation invalide");
        hasError = true;
    }

    if (formData.number && !numberValidator(formData.number)) {
        displayFieldError('number', "Numéro fétiche invalide");
        hasError = true;
    }

    // Check Errors match
    if (hasError) {
        return;
    }

    // Save Process
    saveToLocalStorage(formData);
    alert('Inscription réussie !');
    event.currentTarget.reset();
}

document.getElementById('userForm').addEventListener('submit', handleSubmit);