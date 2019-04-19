const numUniqueEmails = (emails) => {
    const realEmails = toRealEmails(emails);
    return new Set(realEmails).size;
};
const toRealEmails = (emails) => {
    return emails.map((email) => {
        const [local, domain] = email.split('@');
        const realLocal = local.split('+')[0].replace(/\./g, '');
        return realLocal + '@' + domain;
    });
};
