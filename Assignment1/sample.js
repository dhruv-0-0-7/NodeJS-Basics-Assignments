const something = {
    a: '1',
    b: '2',
    c: {
        d: 'something',
        f: 'else'
    }
};

const somethingElse = structuredClone(something);

console.log(somethingElse);