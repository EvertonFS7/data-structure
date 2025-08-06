function isValid() {
    const stack = []

    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const ch of s) {
        if (mapping[ch]) {
            const topElement = stack.length > 0 ? stack[stack.length - 1] : null
            if (topElement === mapping[ch]) {
                stack.pop()
            } else {
                return false 
            }
        } else {
            stack.push(ch)
        }
    }
    return stack.length === 0
}