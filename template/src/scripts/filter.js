export function date(value, format) {        //'yyyy-MM-dd HH:mm:ss'
    let date = new Date(value)
    return format
        .replace(/yyyy/g, date.getFullYear())
        .replace(/MM/g, date.getMonth()+1)
        .replace(/dd/g, date.getDate())
        .replace(/HH/g, date.getHours())
        .replace(/mm/g, date.getMinutes())
        .replace(/ss/g, date.getSeconds())
}