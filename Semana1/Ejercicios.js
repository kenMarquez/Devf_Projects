/**
 * Created by Ken on 17/06/16.
 */
function fibonacci(n){
    if (n == 1 || n == 0) return 1 ;
    return fibonacci(n-1) + fibonacci(n-2);
}

fibonacci()