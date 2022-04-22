// кнопки открытия закрытия попапов
const openPopUp = document.querySelector('.profile__edit-button')
const closePopUp = document.querySelector('.popup__close')
const openAddImage = document.querySelector('.profile__add-button')
const closeAddImage = document.querySelector('.popup__close_image')
const popupFullscreenClose = document.querySelector('.popup__fullscreen-close')

//попапы
const popup = document.getElementById('popup')
const popupAddImage = document.querySelector('.popup_add_image')
const popupFullscreen = document.querySelector('.popup_fullscreen_image')


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

// массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//template
const templateCard = document.querySelector('#temlate-card').content;

//карточки
const elementsCard = document.querySelector('.elements')

//функция добавление карточек
function addCards(card) {
    const cloneCardElement = templateCard.cloneNode(true);
    cloneCardElement.querySelector('.card__title').textContent = card.name;
    const cardElementImage = cloneCardElement.querySelector('.card__image');
    cardElementImage.src = card.link;

    //Лайки карточек
    cloneCardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-button_active')
    })

    //fullscreen
    cardElementImage.addEventListener('click', () => {
        popupFullscreeImage.src = card.link;
        popupFullscreenTitle.textContent = card.name;
        OpenPopup(popupFullscreen);
    })

    //fullscreen close
    popupFullscreenClose.addEventListener('click', () => {
        ClosePopup(popupFullscreen);
    })

    //удаление
    const deleteCard = cloneCardElement.querySelector('.card')
    const basket = cloneCardElement.querySelector('.card__delete')
    basket.addEventListener('click', function (evt) {
        deleteCard.remove();
    })

    return (cloneCardElement);
}

initialCards.forEach((element) => {
    const cardElement = addCards(element);
    elementsCard.append(cardElement);
});

// coхранить карточку
function createCard(evt) {
    evt.preventDefault();

    const cardElement = addCards({
        name: placeNameInput.value,
        link: linkPictureInput.value,
    });
    elementsCard.prepend(cardElement);

    ClosePopup(popupAddImage);
}


// Функции, открытие-закр профиля
function profileOpenClose() {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserDescription.textContent;
}

// Функции, редактирование профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileUserName.textContent = nameInput.value;
    profileUserDescription.textContent = jobInput.value;
    profileOpenClose()
}

// Функции, открытие попапов
function OpenPopup(popup) {
    popup.classList.add('popup_opened');
}

// Функции, закрытие попапов
function ClosePopup(popup) {
    popup.classList.remove('popup_opened');
}

// слушатели открытия/закр профиля и отправки формы
openPopUp.addEventListener('click', profileOpenClose);
closePopUp.addEventListener('click', profileOpenClose);
formElement.addEventListener('submit', formSubmitHandler);

//  слушатель открытия Окна доб.карточки
openAddImage.addEventListener('click', function () {
    OpenPopup(popupAddImage);
});

// слушатель закрытия Окна доб.карточки
closeAddImage.addEventListener('click', function () {
    ClosePopup(popupAddImage);
});

// слушатель сохранения карточки   
formAddimage.addEventListener("submit", createCard);
