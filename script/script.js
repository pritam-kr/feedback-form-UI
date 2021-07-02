const formConatiner = document.querySelector(".form-container");
const btnSend = document.querySelector(".send-feedback");
const yourName = document.querySelector(".name");
const yourMessage = document.querySelector(".message");
const emojiContainer = document.querySelector('.emoji-container');
const feedForm = document.querySelector('#form');

const allEmoji = document.querySelectorAll('.emoji')

var selectedText = "😀";
var custoName = "Dear Customer";
var custoMessage = '';

formConatiner.addEventListener("click", (e) => {
  if(e.target.classList.contains("emoji")){
     selectedText = e.target.innerText;
     removeActiveEmoji()
     e.target.parentNode.classList.add('active')
  }
  yourName.addEventListener('input', (e) =>{
      custoName = e.target.value;
  })
  yourMessage.addEventListener('input', (el) =>{
      custoMessage = el.target.value;
    //   console.log(custoMessage);
  })
});

btnSend.addEventListener('click', (el) =>{
    formConatiner.innerHTML = `
    
    <div style="text-align: center;">
    <header>
                <h3>BinaryInc.</h3>
                <strong>Your feedback, will help us to improve our customer supports!</strong>
            </header>
   <main style="padding: 20px;">
   <p style="font-size: 1.3rem; color: red; display: block; margin: 10px 0 ;">🙏</p>
   <strong>Thank you!  ${custoName} for your feedback! </strong>
   <h4 style="margin: 10px 0">We'll use your feedback to improve our customers support.</h4>
   </main>
    </div>

    `
})


// remove active emoji

function removeActiveEmoji(){
    for(i=0; i < allEmoji.length; i++){
        allEmoji[i].classList.remove('active')
    }
}
