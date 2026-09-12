export const getInitials = (name: string) => {
    const names = name.replace('Dr.', '').split(' ');
    const initials = names.map((n) => n.charAt(0).toUpperCase()).join('');
    return initials;
};
