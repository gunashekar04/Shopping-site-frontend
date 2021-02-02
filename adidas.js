let products = [
    {
      id: 1,
      name: "Adidas Continental 80",
      size: "9",
      color: "White",
      price: 7500,
      image: "continental.jpg",
      description: "Old skool retro look of classic tennis styles of the 80s",
    },
    {
      id: 2,
      name: "Adidas printed hoodie",
      size: "M",
      color: "Black",
      price: 5000,
      image: "hoodie.jpg",
      description: "This graphic hoodie features a Trefoil logo set against a bitmap palm print",
    },
  
    {
      id: 3,
      name: "Adidas Originals T-shirt",
      size: "L",
      color: "Blue",
      price: 2500,
      image: "tshirt.jpeg",
      description: "Cotton T-shirt,  the material is absorbent , skin-friendly and does not scratch",
    },
  
    {
      id: 4,
      name: "Adidas Predator 19.1",
      size: "8",
      color: "White/Bold Blue",
      price: 8000,
      image: "predator.jpg",
      description: "Trainers Football shoes",
    },
  
    {
      id: 5,
      name: "Adidas Jacket",
      size: "M",
      color: "Black",
      price: 4000,
      image:"camo.jpg",
      description: "BAPE X adidas ABC Camo Track Jacket",
    },
    {
      id: 6,
      name: "Adidas Jersey",
      size: "M",
      color: "black/White",
      price: 2500,
      image:"skate.jpg",
      description: "Adidas Skateboarding Club Jersey",
    },
    {
      id: 7,
      name: "Adidas Sneaker",
      size: "M",
      color: "White",
      price: 8000,
      image:"rivalry.jpg",
      description: "Rivalry Low edition",
    },
    {
      id: 8,
      name: "Adidas Bag",
      size: "ONESIZE",
      color: "Black",
      price: 2000,
      image:"bag.jpg",
      description: "Laptop Bag",
    },
    {
      id: 9,
      name: "Adidas Tracksuit",
      size: "L",
      color: "Black",
      price: 600,
      image: "track.jpg",
      description: "Tracksuit for sports with quick-dry technology",
    },
    {
      id: 10,
      name: "Adidas Originals Superstar",
      size: "9",
      color: "White",
      price: 8000,
      image: "superstar.jpg",
      description: "Low-Top leather basketball shoe",
    },
    {
      id: 11,
      name: "Adidas Sweatshirt",
      size: "M",
      color: "Black",
      price: 4000,
      image:"sweatshirt.jpg",
      description: "Essential crewneck sweatshirt",
    },
    {
      id: 12,
      name: "Adidas T-shirt",
      size: "M",
      color: "Black",
      price: 2000,
      image:"tshirt1.jpg",
      description: "Classic printed t-shirt",
    },
];


//function to display products
let cart=[];
let count=0;
function displayProducts(productsData, who="main", where="item") {
    let current = "";
    let total="";
    productsData.forEach(function (product, index) {
        if(who=="main"){
            current = ` <div class="background">
            <div class="image">
              <img src="images/${product.image}" width="100%" />
            </div>
            <div>
            <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${product.name}</h3>
            <p>Size : ${product.size}</p>
            <p>Color : ${product.color}</p>
            <p>price : ${product.price}</p>
            <h5 style="font-family : Arial; font-size: 15px; padding-left : 10px ;padding-top : 10px">${product.description}</h5>
            <p style="padding-top: 10px">
              <button class="buttonbg" onclick="addToCart(${product.id})">Add to Cart</button>
            </p>
            </div>
            </div>`;

            total += current;
        }
          
        if(who=="cartdisplay"){
            current = ` <div class="background">
            <div class="image">
              <img src="images/${product.image}" width="100%" />
            </div>
            <div>
            <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${product.name}</h3>
            <p>Size : ${product.size}</p>
            <p>Color : ${product.color}</p>
            <p>price : ${product.price}</p>
            <h5 style="font-family : Arial; font-size: 15px; padding-left : 10px ;padding-top : 10px">${product.description}</h5>
            <p style="padding-top: 5px">
              <button class="buttonbg" onclick="deleteproducts(${product.id})">Remove</button>
            </p>
            </div>
            </div>`;
            
            total += current;    
        }
    });
      
    document.getElementById(where).innerHTML = total;      
}


//function to search products
function search(){
    let str= document.getElementById("searchstr").value;
    let items = products.filter(function(product) {
        return product.name.toUpperCase().indexOf(str.toUpperCase())!=-1;
    });
    displayProducts(items);
}


//function to filter price
function filter(){
    let minvalue = document.getElementById("min").value;
    let maxvalue = document.getElementById("max").value;
    let items = products.filter(function(product){
        return product.price>=minvalue && product.price<=maxvalue;
    })
    displayProducts(items);
    document.getElementById("min").value="";
    document.getElementById("max").value="";
}
  

 //function to get a product based on id from a particular array 
function getProductByID(productArray, id) {
    return productArray.find(function (product) {
        return product.id == id;
    });
}


//function to add product to cart
let flag = false;
function addToCart(id) {
    flag = false;
    let item = getProductByID(products, id);
    cart.forEach(function(product){
        if(product.id==item.id){
            flag = true;  
        }
    });

    if (flag) {
        alert("The product is already in cart");
        return 0;
    }

    cart.push(item);
    count += 1;
    document.getElementById("count").innerText=count;
    let who = "cartdisplay";
    let where = "cartitem";
    displayProducts(cart, who, where);  
}


//function to delete product from cart
function deleteproducts(id){
    let item = getProductByID(products, id);
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    cart.splice(index, 1);
    count -= 1;
    document.getElementById("count").innerText = count;
    let who = "cartdisplay";
    let where = "cartitem";
    displayProducts(cart, who, where);
}
 

displayProducts(products);