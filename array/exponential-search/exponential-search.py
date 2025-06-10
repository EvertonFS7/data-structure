def binary_search(nums, n, lo=0, hi=None):
    # Define o limite superior como o último índice se não fornecido
    if hi is None:
        hi = len(nums) - 1
    # Enquanto o intervalo for válido
    while lo < hi:
        mid = (lo + hi) // 2  # Calcula o índice do meio
        if nums[mid] == n:
            return mid
        elif nums[mid] < n:
            lo = mid + 1
        else:
            hi = mid
    # Verifica o último elemento do intervalo
    if lo < len(nums) and nums[lo] == n:
        return lo
    return -1  # Retorna -1 se o elemento não for encontrado

def exponential_search(arr, target):
    # Verifica se o primeiro elemento é o alvo
    if arr[0] == target:
        return 0
    n = len(arr)
    # Encontra o intervalo com saltos exponenciais
    i = 1
    while i < n and arr[i] < target:
        i *= 2
    # Verifica se o elemento no índice i é o alvo
    if i < n and arr[i] == target:
        return i
    # Chama a busca binária no intervalo [i//2, min(i, n-1)]
    return binary_search(arr, target, i // 2, min(i, n - 1))