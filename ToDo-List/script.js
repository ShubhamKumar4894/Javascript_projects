const button= document.getElementById('icon');
const listItem=document.getElementById('listItem');

button.addEventListener('click',function(){
    const inputText= document.getElementById('inputField').value;
    if(inputText===''){
        alert("Enter a Valid Task");
    }
    else{
        const list= document.createElement('li');
        list.innerHTML=`${inputText}`;
        listItem.appendChild(list);
        document.getElementById('inputField').value='';
        list.addEventListener('click', function(event) {
            // Calculate the click position to determine if the user clicked near the icon
            const clickedPosition = event.offsetX;
            //console.log(clickedPosition);

            // If the click is within the first 45px (where the ::before icon is), toggle the check state
            if (clickedPosition <= 45) {
                list.classList.toggle('checked');
            }
        });
      
    }
    
})

