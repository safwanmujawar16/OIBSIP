let string=" ";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=> {
    if(e.target.innerHTML== 'Ans'){
      string=eval(string)
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='sqrt'){
      let y=Math.sqrt(string)
      document.querySelector('input').value=y;
      string=document.querySelector('input').value;
    }
    else if(e.target.innerHTML=='Clear'){
      string=" ";
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='Del'){
      string= string.substring(0,string.length-1);
      document.querySelector('input').value=string;
    }
    else{
      console.log(e.target)
      string=string+e.target.innerHTML;
      document.querySelector('input').value=string;
    }
    
  })
})


