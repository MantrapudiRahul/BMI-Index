function convert(){
    let cm = document.getElementById('cm')
    let m = cm.value*100;
   let result= "converted value :"+m +'cm';
   document.getElementById('result').innerText = result;
    
}




function checkbmi(){
    let height = document.getElementById('height')
    let weight = document.getElementById('weight')

    let result = weight.value /(height.value*height.value);
    if(result<18.5)
    {
        document.getElementById('result').innerText = 'Underweight😥'
    }
    else if (result>18.5 && result < 24.9){
        document.getElementById('result').innerText = 'Normal💪'
    }
    else if (result>25 && result < 29.9){
        document.getElementById('result').innerText = 'Overweigh🫢t'
    }
    else if (result>30 && result < 34.9){
        document.getElementById('result').innerText = 'obesity🤯'
    }
    else{
        document.getElementById('result').innerText = 'severe obesity😵'
    }

    //height.value='';
   // weight.value='';


}