export function average(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

export function count(content, val) {
    let counter = 0;
    for (let v of content) {
        if (v == val) 
            counter++;
    }
    return counter;
}

export function unique(content) {
    for (let v of content) {
        if (count(content, v) == 1) {
            return v;
        }
    }
}

