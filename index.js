const url=https://grocery-masai.herokuapp.com
/items ;

async function getdata(){
    try{

        res=await fetch(url);
        alldata=await res.json()
        showdata(alldata.data)
        console.log(alldata.data)
    }catch(error){
        console.log("error",error)
    }
}

getdata()


cartdata = JSON.parse(localStorage.getItems("cart")) || {};

async function showdata(data){
    
    items=document.getElementById("items")
    Date.forEach(function(el)){

        div=document.createElement("div")
        img=document.createElement("img")
        img.src=el.image;
        price=document.createElement("h1")
        price.innerText=price :- $(el.price)
        name=document.createElement("h1")
        name.innerText=el.namebtn=document.createElement("h1")
        name.innerText=el.namebtn=document.createElement("button")
        btn.innerText="Add to Cart"
        btn.addEventListener("click", function(){
            AddtoCart(el);
        });
    }
    items.append(div)
})
}

function AddtoCart (el){

    console.log(el);
    cartdata.push(el);
    localStorage.setitems("cart",JSON.stringify(cartData));
    window.location.reload();
    alert("item add to cart");
}