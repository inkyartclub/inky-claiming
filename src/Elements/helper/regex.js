/**
 * Various Regex
 */

const check = (selected_regex, value) => {
  const regex = new RegExp(selected_regex)

  return regex.test(value)
}

const accountIdRegex = {
  test: (value) => check("^[0-9]{1,}\\.[0-9]{1,}\\.[0-9]{1,}$", value)
}

export {
  accountIdRegex
}
