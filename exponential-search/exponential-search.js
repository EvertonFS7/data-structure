function binarySearch(nums, n, lo = 0, hi = null) {
    // Define o limite superior como o último índice se não fornecido
    if (hi === null) {
        hi = nums.length - 1;
    }
    // Enquanto o intervalo for válido
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2); // Calcula o índice do meio
        if (nums[mid] === n) {
            return mid;
        } else if (nums[mid] < n) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    // Verifica o último elemento do intervalo
    if (lo < nums.length && nums[lo] === n) {
        return lo;
    }
    return -1; // Retorna -1 se o elemento não for encontrado
}

function exponentialSearch(arr, target) {
    // Verifica se o primeiro elemento é o alvo
    if (arr[0] === target) {
        return 0;
    }
    let n = arr.length;
    // Encontra o intervalo com saltos exponenciais
    let i = 1;
    while (i < n && arr[i] < target) {
        i *= 2;
    }
    // Verifica se o elemento no índice i é o alvo
    if (i < n && arr[i] === target) {
        return i;
    }
    // Chama a busca binária no intervalo [i/2, min(i, n-1)]
    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}