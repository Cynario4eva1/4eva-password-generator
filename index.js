const passwordBox = document.getElementById('pass');
const copyImage = document.getElementById('img');
const button = document.getElementById('btn');

const length = 15;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '01234567890';
const symbol = '!"£$%^&*()_+=-}{[]@~><\?|';

const allCharacters = upperCase +  lowerCase + number + symbol;

const createPassword = ()=>{
  let password = '';
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length ){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  passwordBox.value = password;
}

button.addEventListener('click',(e)=> e.target = createPassword()
);

copyImage.addEventListener('click',(e)=>{
  e.target = alert('copied successfully') + copyPassword()
})

const copyPassword =()=>{
  passwordBox.select();
  document.execCommand('copy')
}

fetch(" http://api.open-notify.org/astros.json").then((res)=>{res.json}).then(console.log());
