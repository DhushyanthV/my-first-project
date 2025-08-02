var icecream=[
    {   
        id:'pine',
        img:"assets/images/pine.png",
        name:'Pine Apple Icecream',
        price:20

    },
    {   
        id:'Ball',
        img:"assets/images/ball.png",
        name:'Ball Icecream',
        price:40
    },
    {
        id:'bs',
        img:"assets/images/bs.png",
        name:'ButterScotch Icecream',
        price:30,
    },
    {
        id:'cakeslice',
        img:'assets/images/cake.png',
        name:'cakeslice Icecream',
        price:50,
    },
    {
        id:'choclate',
        img:'assets/images/choclate.png',
        name:'choclate Icecream',
        price:30,
    },
    {
        id:'chocobar',
        img:'assets/images/chocobar.png',
        name:'Chocobar Icecream',
        price:30,
    },
    {
        id:'cone',
        img:'assets/images/cone.png',
        name:'Cone Icecream',
        price:35,
    },
    {
        id:'fp',
        img:'assets/images/fp.png',
        name:'Family Pack',
        price:100,
    },
    {
        id:'fs',
        img:'assets/images/fs.png',
        name:'Fruit salad Icecream',
        price:30,
    },
    {
        id:'kulfi',
        img:'assets/images/kulfi.png',
        name:'Kulfi Icecream',
        price:40,
    },
    {
        id:'bp',
        img:'assets/images/bp.png',
        name:'Blackcurrent Icecream',
        price:30,
    },
    {
        id:'mag',
        img:'assets/images/mag.png',
        name:'Magnuim Icecream',
        price:100,
    },
    {
        id:'mango',
        img:'assets/images/mango.png',
        name:'Mango Icecream',
        price:30,
    },
    {
        id:'milk',
        img:'assets/images/milk.png',
        name:'Milk Icecream',
        price:30,
    },
    {
        id:'oreo',
        img:'assets/images/oreo.png',
        name:'Oreo icecream',
        price:100,
    },
    {
        id:'paan',
        img:'assets/images/paan.png',
        name:'Paan Icecream',
        price:30,
    },
    {
        id:'pistha',
        img:'assets/images/pistha.png',
        name:'Pistacio Icecream',
        price:30,
    },
    {
        id:'pu',
        img:'assets/images/popup.png',
        name:'Popup Icecream',
        price:40,
    },
    {
        id:'sandwich',
        img:'assets/images/sandwich.png',
        name:'Sandwich Icecream',
        price:30,
    },
    {
        id:'strawberry',
        img:'assets/images/strawerry.png',
        name:'Strawberry Icecream',
        price:30,
    },

]
var cardProducts="";
var display_for_frontpage=(ice)=>{
    
ice.map((value) => {
    
    cardProducts +=`
    <div class="col-lg-3 mt-3">
        <div class="card m-5 h-100 frontcard" >
                <img src="${value.img}" alt="" class="card-img-top img-fixed images" >
                <div>
                <i class="fa solid fa-heart hearticon" onclick="addwishes('${value.id}')"></i>
                </div>
                <div class="card-body">

                    <h3 class="ice-names">${value.name}</h3>
                    <h3 class="price">$${value.price}</h3>
                    <p></p>
                    <button class="btn btn-success sbutton" onclick="addtocart('${value.id}')">buy <i class="fa-solid fa-ice-cream"></i></button>
                </div>
        </div>       

    </div>`
    
})
document.getElementById('cards').innerHTML=cardProducts;

}
display_for_frontpage(icecream)

const sub=()=>{
    if (event.key==="Enter"){
        event.preventDefault();

    var user=document.getElementById('usersearch').value.toUpperCase()
    var filters=icecream.filter((value)=> value.name.toUpperCase().includes(user))
    // fun(filters)
    var searching_cardProducts="";


filters.map((value) => {
    searching_cardProducts +=`
    <div class="col-lg-3 mt-3">
        <div class="card m-5 h-100">
                <img src="${value.img}" alt="" class="card-img-top img-fixed">
                <div class="card-body">

                    <h3 class="ice-names">${value.name}</h3>
                    <h3 class="price">$${value.price}</h3>
                    <p></p>
                    <button class="btn btn-success" id="add" onclick="addtocart('${value.id}')">buy <i class="fa-solid fa-ice-cream"></i></button>
                </div>
        </div>       

    </div>`
    
})
document.getElementById('cards1').innerHTML=searching_cardProducts;
    }
    document.getElementById('usersearch').addEventListener('keydown',sub)
}
var whishes=[]
var addwishes=(wishesid)=>{
    document.getElementById("whishes")
    whishes.style.color='red'
    const found=icecream.find((value)=>value.id===wishesid)
    whishes.push(found)
    var whishes_cardProducts="";


whishes.map((value) => {
    whishes_cardProducts +=`
    <div class="col-lg-3 mt-3">
        <div class="card m-5 h-100">
                <img src="${value.img}" alt="" class="card-img-top img-fixed">
                <div class="card-body">

                    <h3 class="ice-names">${value.name}</h3>
                    <h3 class="price">$${value.price}</h3>
                    <p></p>
                    <button class="btn btn-success" onclick="addtocart('${value.id}')">buy <i class="fa-solid fa-ice-cream"></i></button>
                </div>
        </div>       

    </div>`
    
})

document.getElementById('wish').innerHTML=whishes_cardProducts
}

var badge=0
var badgefun=()=>{
    document.getElementById('buyproducts').innerHTML=`${badge}<i class="fa-solid fa-bag-shopping"></i>`;
    document.getElementById('buyproducts').style.display=(badge>0)?'inline':'none'
}
var cart=[]
var total_amount=0;
const addtocart=(productId)=>{
    var cartproduct2 = icecream.find((value)=>value.id===productId)
    var existing_Product=cart.find((value)=>value.id===productId)
    console.log(cartproduct2)
   
    if(existing_Product){
        
        cartproduct2.quantity++
        
        
    }
    else{
        cartproduct2.quantity=1
        cart.push(cartproduct2)
        
    }
        badge++
        badgefun()
    
   total_amount=total_amount+cartproduct2.price
   document.getElementById('ta').innerHTML=`Total:${total_amount}`
    
    display2(cart)
}
var display2=(carddata)=>{
    var cartlist=''
    carddata.map((value)=>{
        cartlist +=`
        <tr>
              <td>${value.name}</th>
              <td>${value.price}</td>
              <td>${value.quantity}</td>
              <td>${value.price*value.quantity}</td>
              <td>
              <button class="btn btn-danger" onclick="removefun('${value.id}')">Remove</button>
              </td>
        </tr>
        `
    })
    document.getElementById('carttable').innerHTML=cartlist


}
const removefun =(productId) => {
    var removeproduct = cart.find((a)=> a.id===productId)
if(removeproduct.quantity>1){
    removeproduct.quantity--;
    total_amount=total_amount-removeproduct.price
    

}
else{
    cart = cart.filter((a)=> a.id!==productId)
    total_amount=total_amount-removeproduct.price
   
}
badge--
badgefun()
    
document.getElementById('ta').innerHTML=total_amount

display2(cart) 

}









