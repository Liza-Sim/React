function validator(ifError, type, text) {
    if (type === 'text') {
        let str = text;
        const pattern = /^([A-Z,a-z]{1,}|[A-Z,a-z]{1,}\s[A-Z,a-z]{1,})$/
        const result = str.match(pattern);
        if (!result) {
            error(ifError)
        }
        return result
    } else {
        let str = text;
        const pattern = /^(\d{3}-\d{3}-\d{2}-\d{2}|\d{10})$/;
        const result = str.match(pattern);
        if (!result) {
            error(ifError)
        }
        return result
    }
}
function error(ifError) {
    alert('Incorrect ' + ifError)
}
export default validator;