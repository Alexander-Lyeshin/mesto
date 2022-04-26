// кнопки открытия закрытия попапов
const buttonOpenPopup = document.querySelector('.profile__edit-button')
const buttonClosePopup = document.querySelector('.popup__close')
const buttonOpenAddImage = document.querySelector('.profile__add-button')
const buttonCloseAddImage = document.querySelector('.popup__close_image')
const popupFullscreenClose = document.querySelector('.popup__fullscreen-close')

//попапы
const popup = document.querySelector('.popup')
const popupAddImage = document.querySelector('.popup_add-image')
const popupFullscreen = document.querySelector('.popup_fullscreen-image')


const popupFullscreeImage = document.querySelector('.popup__big-picture')
const popupFullscreenTitle = document.querySelector('.popup__fullscreen-title')


// форма
const formElement = document.querySelector('.popup__form')
const formAddimage = document.querySelector('.popup__form-add-image')

//поля ввода инф
const nameInput = document.querySelector('#username')
const jobInput = document.querySelector('#input-job')
const placeNameInput = document.querySelector('#input-place-name')
const linkPictureInput = document.querySelector('#input-link-picture')

const profileUserName = document.querySelector('.profile__user-name')
const profileUserDescription = document.querySelector('.profile__user-description')

//template
const templateCard = document.querySelector('#temlate-card').content;

//карточки
const elementsCard = document.querySelector('.elements')

//функция добавление карточек
function createCard(card) {
    const cloneCardElement = templateCard.cloneNode(true);
    cloneCardElement.querySelector('.card__title').textContent = card.name;
    const cardElementImage = cloneCardElement.querySelector('.card__image');
    cardElementImage.src = card.link;
    cardElementImage.alt = card.name;

    //Лайки карточек
    cloneCardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-button_active')
    })

    //fullscreen
    cardElementImage.addEventListener('click', () => {
        popupFullscreeImage.src = card.link;
        popupFullscreenTitle.textContent = card.name;
        popupFullscreeImage.alt = card.name;
        openPopup(popupFullscreen);
    })

    //удаление
    const deleteCard = cloneCardElement.querySelector('.card')
    const basket = cloneCardElement.querySelector('.card__delete')
    basket.addEventListener('click', function (evt) {
        deleteCard.remove();
    })

    return (cloneCardElement);
}

//fullscreen close
popupFullscreenClose.addEventListener('click', () => {
    closePopup(popupFullscreen);
});


// coхранить карточку
function addCard(evt) {
    evt.preventDefault();

    const cardElement = createCard({
        name: placeNameInput.value,
        link: linkPictureInput.value,
    });
    elementsCard.prepend(cardElement);

    closePopup(popupAddImage);
}


// Функции, открытия профиля
function profileOpen() {
    openPopup(popup);
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserDescription.textContent;
}

// Функции, редактирование профиля
function handleSubmitFormProfile(evt) {
    evt.preventDefault();
    profileUserName.textContent = nameInput.value;
    profileUserDescription.textContent = jobInput.value;
    closePopup(popup);
}

// Функции, открытие попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

// Функции, закрытие попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// слушатели открытия/закр профиля и отправки формы
buttonOpenPopup.addEventListener('click', profileOpen);
buttonClosePopup.addEventListener('click', function () {
    closePopup(popup)
});
formElement.addEventListener('submit', handleSubmitFormProfile);

//  слушатель открытия Окна доб.карточки
buttonOpenAddImage.addEventListener('click', function () {
    openPopup(popupAddImage);
});

// слушатель закрытия Окна доб.карточки
buttonCloseAddImage.addEventListener('click', function () {
    closePopup(popupAddImage);
});

// слушатель сохранения карточки   
formAddimage.addEventListener("submit", addCard);

initialCards.forEach((element) => {
    const cardElement = createCard(element);
    elementsCard.append(cardElement);
});
