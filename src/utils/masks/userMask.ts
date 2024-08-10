const userMask = (input: string, previousValue: string) => {
  const regex = /^(?!.*[ -’\/`~!#*$@%+=.,^&(){}[\]|;:”<>?\\]).{0,12}$/;
  console.log(input, previousValue, regex.test(input))
  if(regex.test(input) || previousValue!=="") {
    return input;
  }
  return previousValue;
}

export default userMask;