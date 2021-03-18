function solution(A, K) {
    var length = A.length;
    if(length === 0) { return A;}
    else {
        for (var i = 0; i < K; i++) {
            A.unshift(parseInt(A.splice(length-1)));
        }
        return A;
    } 
}