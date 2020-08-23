const images = () => {

    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');
    // Добавляем класс для отображения картинки
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    // Работаем со стилями отображения изоражения
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
   
    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        // отображаем большое изображение по клику
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";
            // создаем ссылку на большое изображение
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.maxWidth = '50vh';
            bigImg.style.maxHeight = '70vh';
        }
        // делаем зактрые картинки по подложке
        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

};

export default images;