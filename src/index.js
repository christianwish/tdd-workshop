import './index.css';
import $ from 'jquery';

const $form = $('form');

const setForm = (status) => {
    $form.removeClass(status);
    setTimeout(() => $form.addClass(status), 0);
};

$form.on('submit', (event) => {
    event.preventDefault();
    setForm('invalid');
});
