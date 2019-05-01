const isPalindrome = (s: string): boolean => {
    const cleanString = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase();

    if (!cleanString) {
        return true;
    }

    for (let i = 0; i < cleanString.length; i++) {
        const j = cleanString.length - 1 - i;

        if (i > j) {
            break;
        }

        if (cleanString[i] !== cleanString[j]) {
            return false;
        }
    }

    return true;
};
