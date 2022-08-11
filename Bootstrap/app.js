let togglemain=document.getElementById("toggleMain")
let toggleadd=document.getElementById("toggleadd")
let togglemainx=document.getElementById("toggleMainX")


togglemain.addEventListener("click",()=>{
   
   toggleadd.classList.add("addblock")
   togglemainx.classList.add("addblock")
   togglemain.classList.add("noneblock")

})
togglemainx.addEventListener("click",()=>{

toggleadd.classList.remove("addblock")
togglemainx.classList.remove("addblock")
togglemain.classList.remove("noneblock")
 
})





let arry=[
   {
       id:1,
      img:"https://z-ul.com/pictures/product/middle/8868_middle.jpg",
      ceqment:"47",
      name:'Narodnaya seriya',
       info:'Lorem  quos veritatis, vel harum sequi? nostrum autem ad nostrum autem ad ducimus fugiat soluta.'

   },
   {
       id:2,
      img:"https://z-ul.com/pictures/product/middle/8868_middle.jpg",
      ceqment:"119",
      name:'Narodnaya seriya',
       info:'Lorem  quos veritatis, vel harum sequi? nostrum autem ad nostrum autem ad ducimus fugiat soluta.'

   },
   { id:3,
       img:"https://z-ul.com/pictures/product/middle/8868_middle.jpg",
       ceqment:"68",
       name:'Narodnaya seriya',
        info:'Lorem  quos veritatis, vel harum sequi? nostrum autem ad nostrum autem ad ducimus fugiat soluta.'
 
      },
      {
       id:4,
       img:"https://z-ul.com/pictures/product/middle/8868_middle.jpg",
       ceqment:"17",
       name:'Narodnaya seriya',
        info:'Lorem  quos veritatis, vel harum sequi? nostrum autem ad nostrum autem ad ducimus fugiat soluta.'
 
      },
      {
       id:5,
       img:"https://z-ul.com/pictures/product/middle/8868_middle.jpg",
       ceqment:"8",
       name:'Narodnaya seriya',
        info:'Lorem  quos veritatis, vel harum sequi? nostrum autem ad nostrum autem ad ducimus fugiat soluta.'
 
      },
      {
       id:6,
       img:"https://z-ul.com/pictures/product/middle/8868_middle.jpg",
       ceqment:"104",
       name:'Narodnaya seriya',
        info:'Lorem  quos veritatis, vel harum sequi? nostrum autem ad nostrum autem ad ducimus fugiat soluta.'
 
      },
   

 ]
 let card=document.getElementById("card")
 arry.map(index=>{
    
     card.innerHTML +=`
     <div class="products_div">
     <div class="products_div1">
       <p class="seqment">ceqment ekonom</p>
       <span class="seqment_ekonom">${index.ceqment}<br/> <p>ceqment<br/> ekonom</p></span>

     </div>
     <div class="products_div2">
     <img src='${index.img}'/>

     </div>
     <div class="products_div3">
       <h5>${index.name}</h5>
       <p>${index.info}</p>
<button>podrobnee</button>
     </div>

   </div>
 
   `


 })
