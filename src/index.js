import './index.css';
import $ from 'jquery';

const $form = $('form');
const $inputs = $form.find('input');

const setForm = (status) => {
    $form.attr('class', '');
    setTimeout(() => $form.addClass(status), 0);
};

$inputs.on('keydown', () => setForm(''));

$form.on('submit', (event) => {
    event.preventDefault();
    const isAnagram = false;

    if (isAnagram) {
        setForm('valid');
        return undefined;
    }

    setForm('invalid');
    return undefined;
});
