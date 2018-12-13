import './index.css';
import $ from 'jquery';
import { isAnagramArr } from './is-anagram-arr'

const $form = $('form');
const $inputs = $form.find('input');

const setForm = (status) => {
    $form.attr('class', '');
    setTimeout(() => $form.addClass(status), 0);
};

$inputs.on('keydown', () => setForm(''));

$form.on('submit', (event) => {
    event.preventDefault();

    const objArray = $form.serializeArray();
    const valueArray = objArray.map(x => x.value);

    if (isAnagramArr(valueArray)) {
        setForm('valid');
        return undefined;
    }

    setForm('invalid');
    return undefined;
});
