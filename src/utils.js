export const sortContactsAlphabeticallyByName = (contacts) => {
  return sortArrayByStringPropAscending(contacts, 'name')
}

export const sortArrayByStringPropAscending = (array, propString) => {
  try {
    array.sort(function (a, b) {
      var textA = a[propString]
      var textB = b[propString]
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    return array
  }
  catch {
    return array
  }
}

/*https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript*/
export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}


export const parseBirthdate = birthdate => {
  const getMonthTitle = month => {
    let m = Number(month)
    if (m === 1) return 'January'
    if (m === 2) return 'Feburary'
    if (m === 3) return 'March'
    if (m === 4) return 'April '
    if (m === 5) return 'May '
    if (m === 6) return 'June '
    if (m === 7) return 'July'
    if (m === 8) return 'August'
    if (m === 9) return 'September'
    if (m === 10) return 'October'
    if (m === 11) return 'November'
    if (m === 12) return 'December'
    return "?"
  }
  let parts = birthdate.split('-')
  let year = parts[0]
  let month = parts[1]
  let date = parts[2]
  return `${getMonthTitle(month)} ${Number(date)}, ${year}`
}

export const formatAddress = address => {
  let line1 = address.street
  let line2 = `${address.city}, ${address.state} ${address.zipCode}, ${address.country}`
  return [line1, line2]
}