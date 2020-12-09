import { format, add } from 'date-fns';

export const formatDate = date => {
    return format(date, 'yyyy-MM-dd');
};

export const addHours = (date, hours) => {
    const result = add(date, { hours: hours })
    return result
}

export const addMinutes = (date, minutes) => {
    const result = add(date, { minutes: minutes })
    return result
}

export const addTime = (date, hours, minutes) => {
    let newDate = addHours(date, hours)
    newDate = addMinutes(newDate, minutes)

    return newDate
}

export const getHoursFromTime = (time) => {
    return parseInt(time.substr(0, 3))
}

export const getMinutesFromTime = (time) => {
    return parseInt(time.substr(3, 5))
}
