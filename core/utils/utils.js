const initializeValues = (initValues, fields, defaults) => {
    fields.map((key) => {
        if(fields.hasOwnProperty(key)){
            if(initValues.hasOwnProperty(key)) {
                fields[key] = toSet[key]
            } else {
                fields[key] = defaults[key]
            }
        }
    })
    return fields
}

export {initializeValues}