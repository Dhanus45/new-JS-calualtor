const dis= document.getElementById("display")

function append(input){
    dis.value +=input;
}
   


function calul(){
   
        dis.value=eval(dis.value);
        if(dis.value== Infinity )
        {
            dis.value='divide by 0 error';     
           
        }else
        {
         document.getElementById('demo').innerHTML=' ';

        }

        
} 


function clean(){
    dis.value=" ";
    document.getElementById('demo').innerHTML=' ';
}