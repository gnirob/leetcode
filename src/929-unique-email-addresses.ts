const numUniqueEmails = (emails: string[]): number => {
    const realEmails = toRealEmails(emails);
    return new Set(realEmails).size;
};

const toRealEmails = (emails: string[]) => {
    return emails.map((email) => {
        const [local, domain] = email.split('@');
        const realLocal = local.split('+')[0].replace(/\./g, '');
        return realLocal + '@' + domain;
    });
};
