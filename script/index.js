const openPopUp = document.getElementById('open__popup')
const closePopUp = document.querySelector('.popup__close')
const popup = document.getElementById('popup')
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input_username')
let jobInput = document.querySelector('.popup__input_job')
let ProfileUserName = document.querySelector('.profile__user-name')
let ProfileUserDescription = document.querySelector('.profile__user-description')

function PopupOpenClose() {
    popup.classList.toggle('open');
    nameInput.value = ProfileUserName.textContent;
    jobInput.value = ProfileUserDescription.textContent;
}

openPopUp.addEventListener('click', PopupOpenClose);
closePopUp.addEventListener('click', PopupOpenClose);

function formSubmitHandler(evt) {
    evt.preventDefault();
    ProfileUserName.textContent = nameInput.value;
    ProfileUserDescription.textContent = jobInput.value;
    PopupOpenClose()
}

formElement.addEventListener('submit', formSubmitHandler); 

