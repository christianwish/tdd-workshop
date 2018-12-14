import './index.css';
import $ from 'jquery';
import { isAnagram } from './is-anagram';

const $form = $('form');
const $inputs = $form.find('input');

const setForm = (status) => {
    $form.attr('class', '');
    setTimeout(() => $form.addClass(status), 0);
};

$inputs.on('keydown', () => setForm(''));

$form.on('submit', (event) => {
    event.preventDefault();
    const data = $form
        .serializeArray()
        .filter(x => x.name !== 'email')
        .map(x => x.value);

    if (isAnagram(data)) {
        setForm('valid');
        return undefined;
    }

    setForm('invalid');
    return undefined;
});
