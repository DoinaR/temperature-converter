//  temperature converter

const fahrenheit = document.getElementById('fahrenheit')
const celsius = document.getElementById('celsius')
const kelvin = document.getElementById('kelvin')
// const btn = document.getElementById('btn');
const inputs = document.getElementsByClassName('input')

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i]
  // console.log(inputs[i])

  input.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value)

    switch (e.target.name) {
      case 'celsius':
        fahrenheit.value = value * 1.8 + 32
        kelvin.value = value + 273.15
        break
      case 'fahrenheit':
        celsius.value = (value - 32) / 1.8
        kelvin.value = (value - 32) / 1.8 + 273.15
        break
      case 'kelvin':
        celsius.value = value - 273.15
        fahrenheit.value = (value - 273.15) * 1.8 + 32
    }
  })
}
