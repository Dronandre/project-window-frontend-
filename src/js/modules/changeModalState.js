import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img '),
          windowWidth = document.querySelectorAll('#width'),
          windowHeigth = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    // Вызываем функуию валидацию цифр
    checkNumInputs('#width');
    checkNumInputs('#height');
    // Создаем функцию добавления свойств элементов по событиям в state
    function bindActionToElems (event, elem, prop){
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        // Записываем индекс элементов SPAN в state
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        // Проверяем тип инпута
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                // Скрываем checkbox на страницы
                                box.checked = false;
                                if( i == j){
                                    box.checked = true;
                                }
                            });
                        } else {
                            // Записываем значение инпута в state
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        // Записываем значение select в state
                        state[prop] = item.value;
                        break;
                }
                console.log(state);                
            });
        });
    }
    
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeigth, 'heigth');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;