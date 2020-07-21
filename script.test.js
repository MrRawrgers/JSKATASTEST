const { addition, equalStrings, initials, oddsEvens, totalVandC } = require("./script.js")

describe('array addition', () => {
    test(`should equal 10 when passed [1, 2, 3, 4]`, () => {
        expect(addition([1, 2, 3, 4])).toEqual(10);
    });
    test(`should equal 13 when passed [3, 1, 5, 4]`, () => {
        expect(addition([3, 1, 5, 4])).toEqual(13);
    });
});


describe('equal strings checker', () => {
    test('hello and hello should return true', () => {
        expect(equalStrings("hello", "hello")).toBeTruthy();
    });
    test('hello and longer should return false', () => {
        expect(equalStrings("hello", "longer")).toBeFalsy();
    });
});

describe('initials creator', () => {
    test('Niall William Rogers should return NWR', () => {
        expect(initials("Niall William Rogers")).toEqual(`NWR`);
    });
    test('Ben Maudslay should return BM', () => {
        expect(initials("Ben Maudslay")).toEqual(`BM`);
    });
});

describe('odds and evens counter', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let array2 = [2, 4, 4, 6, 6, 1, 1, 3, 3, 5]
    test('should return evens: [2,4,6,8,10], odds: [1,3,5,7,9] when passed array', () => {
        expect(oddsEvens(array)).toEqual("evens: [2,4,6,8,10], odds: [1,3,5,7,9]")
    });
    test('should return evens: [2,4,4,6,6], odds: [1,1,3,3,5] when passed array2', () => {
        expect(oddsEvens(array2)).toEqual("evens: [2,4,4,6,6], odds: [1,1,3,3,5]")
    });
});

describe('total vowels and consanants counter', () => {
    test('should return total: 18, vowels: 9, consonants: 9 when passed aeiouasdbrwqeqweda', () => {
        expect(totalVandC(`aeiouasdbrwqeqweda`)).toEqual("total: 18, vowels: 9, consonants: 9")
    });
    test('should return total: 23, vowels: 5, consonants: 18 when passed djsuwhaksdlcmflpeoruqns', () => {
        expect(totalVandC(`djsuwhaksdlcmflpeoruqns`)).toEqual("total: 23, vowels: 5, consonants: 18")
    });
});



