const openPopUp = document.getElementById('open__popup')
const closePopUp = document.querySelector('.popup__close')
const popup = document.getElementById('popup')
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('#username')
const jobInput = document.querySelector('#input-job')
const ProfileUserName = document.querySelector('.profile__user-name')
const ProfileUserDescription = document.querySelector('.profile__user-description')

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

