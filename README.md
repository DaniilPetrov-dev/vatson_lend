# vatson_lend

    Все div'ы ограничивающие контент по модульной сетке заканчиваются на __body.
    Есть простая админка (admin.php), чтобы менять содержимое страницы.

## Стили

Имена классов организованы по БЭМ. Структуру БЭМ не стал
использовать - для простого лендинга не имеет смысла.
Браузерные стили, сброшены с помощью reset.css.

## Скритпы

common.js отвечает за ajax обработку формы.

slider.js отвечает за работу слайдера в блоке catering.
Изображения в slidewrapper двигаются с переодичностью 2,5 сек. Движение блокируется
при наведении мыши на viewport. При клике на стрелочки изображения сдвигаются.
На мобильной версии изображения переключаются на позицию, соответсвующую
нажатой кнопке.

menuMobile.js отвечает за выпад меню на мобильной версии.
При клике на header**burger, срабатывает анимация самого элемента,
анимация появления меню и блокируется скролл страницы. При еще одном клике
на header**burger, все вышеперечисленное возвращается в исходное состояние(toggle).
