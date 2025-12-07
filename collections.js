// ./ is mandatory to import files from same folder//
//import {products} from "./products.js";

//selecting the offerbar//
var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",  

function(){
    offerBar.style.display="none"     /*when close button is clicked,offebar will gone*/
}
)
//selecting menubar and sidenavbar//
var sideNavMenu=document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
   
    sidenavbar.style.marginLeft="0px"                 /*shows the sidenavbar*/
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"          /*hides the sidebar*/
})


    
   
//the html box selected by js and stored in container//
//the variable container points to html container(parent of products)//
//selecting (collections.html)products)//
              var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="img/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})                            //do not exist in html initially ,added by js at runtime//
                                         //creating a div in js memory//
                                         // adding class[class=product] ,now this div has the data from the product.//                 
                                        /*the purpose of this var container section is to display the product data in webpage*/



var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }

        
       
    })
})

// var searchInput = document.getElementById("searchInput")
// searchInput.addEventListener("keyup",function(){
//     update()
// })

function update()
{

    

    

    
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}