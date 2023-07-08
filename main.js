const b = document.querySelector('#btn')
const div = document.querySelector('.mblactive')

b.addEventListener('click',()=>{
   let open= div.style.display='block'
   let cls = b.style.display='none'
})


const btnExit = document.querySelector('.menuexit')

btnExit.addEventListener('click',()=>{
    div.style.display='none'
    b.style.display='block'
})


    


// form js
var frmbtn = document.querySelector('.submit')


   
    
   








frmbtn.addEventListener('click',(e)=>{
    e.preventDefault()

    for(i=0;i<1;i++){


        var name = document.querySelector('#name').value
        var number = document.querySelector('#number').value
        var email = document.querySelector('#email').value

        var all = document.querySelectorAll('input').value
        
        
        
       if(name.length<5){
        let err = document.querySelector('.error').style.visibility='visible'
        
       }

       if(number.length<5){
        let err = document.querySelector('.error').style.visibility='visible'
       }

       if(email.length<10){
        let err = document.querySelector('.error').style.visibility='visible'
       }

      

       else{
        document.querySelector('.succ').style.visibility='visible'
        document.querySelector('.error').style.visibility='hidden'
        document.querySelector('.congratulation').style.display='block'
       }
    }
    }
   



)


