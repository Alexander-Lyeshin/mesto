const openPopUp = document.getElementById('open__popup')
const closePopUp = document.getElementById('close__popup')
const popup = document.getElementById('popup')
let formElement = document.querySelector('.popup__form')// Воспользуйтесь методом querySelector()
let nameInput = document.querySelector('.popup__input-username')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input-job')// Воспользуйтесь инструментом .querySelector()
let ProfileUserName = document.querySelector('.profile__user-name')
let ProfileUserDescription = document.querySelector('.profile__user-description')

/*openPopUp.addEventListener('click', function PopupOpen(){
    popup.classList.add('open')
    nameInput.value = ProfileUserName.textContent
    jobInput.value = ProfileUserDescription.textContent
})

closePopUp.addEventListener('click', function PopupOpen(){
    popup.classList.remove('open')
})*/

function PopupOpen(){
    popup.classList.toggle('open');
    nameInput.value = ProfileUserName.textContent;
    jobInput.value = ProfileUserDescription.textContent;
}

openPopUp.addEventListener('click', PopupOpen);
closePopUp.addEventListener('click', PopupOpen);

function formSubmitHandler (evt) {
    evt.preventDefault();                          
    ProfileUserName.textContent = nameInput.value;
    ProfileUserDescription.textContent = jobInput.value;
    PopupOpen();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

