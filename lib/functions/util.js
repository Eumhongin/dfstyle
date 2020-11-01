export function objectToArraysWithKeys(object) {
  const keys = Object.keys(object)
  const values = Object.values(object)

  let resultArr = []

  values.map((item, idx) => {
    const data = {
      key: keys[idx],
      value: item
    }
    resultArr.push(data)
  })


  return resultArr

}

export function customlog(type, message) {
  console.log(`\n[${type}] : ${message}\n`)
}

export function engServerToKoServer(server) {
  switch (server) {
    case 'cain':
      return '카인';
    case 'diregie':
      return '디레지에';
    case 'siroco':
      return '시로코';
    case 'prey':
      return '프레이';
    case 'casillas':
      return '카시야스';
    case 'hilder':
      return '힐더';
    case 'anton':
      return '안톤';
    case 'bakal':
      return '바칼';


    default:
      break;
  }
}