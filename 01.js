function fibonacci(limit) {
    let fibSeq = [0, 1];

    while (true) {
        let nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        if (nextFib > limit) break;
        fibSeq.push(nextFib);
    }

    return fibSeq;
}

function isInFibonacci(num) {
    const fibSeq = fibonacci(num);
    if (fibSeq.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

let number = 22;
isInFibonacci(number);
