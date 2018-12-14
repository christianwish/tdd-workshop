import { isAnagram } from './is-anagram';
import testJson from './is-anagram-test.json';

describe('isAnagram(wordArr)', () => {
    it('is a function', () => {
        const actual = typeof isAnagram;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('returns boolean', () => {
        const actual = typeof isAnagram();
        const expected = 'boolean';
        expect(actual).toEqual(expected);
    });

    it('returns false when "wordArr" is undefined', () => {
        const actual = isAnagram();
        const expected = false;
        expect(actual).toEqual(expected);
    });

    it('returns false when "wordArr" is empty', () => {
        const actual = isAnagram();
        const expected = false;
        expect(actual).toEqual(expected);
    });

    it('returns false when "wordArr" contains just one word', () => {
        const actual = isAnagram(['haha']);
        const expected = false;
        expect(actual).toEqual(expected);
    });

    it('returns true when "wordArr" is anagram', () => {
        {
            const actual = isAnagram(['abc', 'acb']);
            const expected = true;
            expect(actual).toEqual(expected);
        }
        {
            const actual = isAnagram(['abc', 'acb', 'cba', 'abc']);
            const expected = true;
            expect(actual).toEqual(expected);
        }
    });

    it('returns false when "wordArr" is not anagram', () => {
        {
            const actual = isAnagram(['abc', 'acc']);
            const expected = false;
            expect(actual).toEqual(expected);
        }
        {
            const actual = isAnagram(['abc', 'acb', 'abb']);
            const expected = false;
            expect(actual).toEqual(expected);
        }
    });

    it('returns false when "wordArr" contains empty strings', () => {
        const actual = isAnagram(['', '']);
        const expected = false;
        expect(actual).toEqual(expected);
    });

    it('returns same output like PHP test', () => {
        const actual = isAnagram(testJson.input);
        const expected = testJson.output;
        expect(actual).toEqual(expected);
    });
});
