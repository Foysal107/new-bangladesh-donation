


// card 1 
const cardbtn1 = document.getElementById('donate-now-btn1')
    .addEventListener('click', function () {
     
        const cardbutton1 = parseFloat(document.getElementById('donate-ammout1').value);
        // console.log(cardbutton1)
        const currentammount = parseFloat(document.getElementById('currentAmountnouakhali').innerText);
        // console.log(currentammount)
      const newammount = cardbutton1 + currentammount;
      document.getElementById('currentAmountnouakhali').innerText=newammount; 
      const historyitem =document.createElement('div');
        historyitem.className ="bg-white p-3 rounded-md border-1-2 border-indigo-500";
        historyitem.innerHTML=`
        <p>${new Date().toLocalDateString()}</p>
        <p>$${cardbutton1} taka is donated for donate for flood at noakhali</p>
        `
  const historycontainer = document.getElementById('history-list');
  historycontainer.insertBefore('historyitem',historycontainer.firstChild
  );

    });

// card 2

const cardbtntwo = document.getElementById('donate-now-btn2')
    .addEventListener('click', function () {
        const cardbuttontwo = parseFloat(document.getElementById('ammount2').value);
        console.log(cardbuttontwo);
const currnetammount2 =parseFloat(document.getElementById('currentammountforcard2').innerText);
console.log(currnetammount2);
const card2newblance = cardbuttontwo + currnetammount2;
// console.log(card2newblance)
document.getElementById('currentammountforcard2').innerText=card2newblance;
    });

// card 3

    const cardthree = document.getElementById('donate-now-btn3')
    .addEventListener('click', function () {
        const cardbuttonthree = parseFloat(document.getElementById('donate-ammount3').value);
        // console.log(cardbuttonthree);
        const currnetammount3 =parseFloat (document.getElementById('currentammountforcard3').innerText);
        // console.log(currnetammount3)
        const card3newblance = cardbuttonthree+currnetammount3;
        document.getElementById('currentammountforcard3').innerText=card3newblance;
        
const yourblance = parseFloat(document.getElementById('yourblance').innerText);
const currentblance = cardbuttonthree - yourblance;
document.getElementById('yourblance').innerText=currentblance

    });





// historytab 

// const historytab = document.getElementById('history-tab')
// const donatetab = document.getElementById('donate-tab')
// historytab.addEventListener('click',function(){
//     historytab.classList.add(' text-black',' bg-lime-500' ,'text-black'

//     );
//     donatetab.classList.remove(' text-black',' bg-lime-500' ,'text-black')
// })



const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('donate-now-btn1');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal on button click
openModalBtn.addEventListener('click', function() {
    modalOverlay.style.display = 'flex'; // Display the modal (flex to use centering)
});

// Close modal on button click
closeModalBtn.addEventListener('click', function() {
    modalOverlay.style.display = 'none'; // Hide the modal
});


