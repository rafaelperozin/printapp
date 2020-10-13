export const formatString = name => {
    // ! REMEMBER: add function to replace special characters
    return name.toLocaleLowerCase().split(' ').join('_');
}