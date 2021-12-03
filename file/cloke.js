

function set_cloke() {
  

var data=new Date();
var div_time=document.getElementById("div_time");
div_time.innerHTML= data.getHours() +":"+data.getMinutes()+":"+ data.getSeconds();
var div_date =document.getElementById("div_date");
div_date.innerHTML= data.getDate()+"-"+parseInt(data.getMonth()+1)+"-"+ data.getFullYear();

setTimeout(set_cloke, 100)
};

onload=set_cloke();

function set_color() {
    

var color=document.getElementById("color").value
localStorage.setItem("set_color1",color);
document.getElementById("body").style.background=localStorage.getItem("set_color1")

}

function update_color() {
    document.getElementById("color").value=localStorage.getItem("set_color1")
    document.getElementById("body").style.background=localStorage.getItem("set_color1")
    
}
setInterval(update_color(),100);
onload =update_color();

function set_color2() {
    

  var color2=document.getElementById("color2").value
  localStorage.setItem("set_color2",color2);
  document.getElementById("main2").style.background=localStorage.getItem("set_color2")
  
  }
  
  function update_color2() {
      document.getElementById("color2").value=localStorage.getItem("set_color2")
      document.getElementById("main2").style.background=localStorage.getItem("set_color2")
      
  }
  // setInterval(update_color2(),100);
  onload =update_color2();
  












class scrren_navigtor{
  constructor(){
  this.screen_width = document.getElementById("main")
  
 if(screen.width<500){

    
  this.screen_width.style.width=screen.width+"px";
 



    }
    

}
}

onload =new scrren_navigtor();



