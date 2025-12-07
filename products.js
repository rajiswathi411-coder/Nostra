//declares a constant array called products.holds all product objects //
const products = [
    //first product //
/* id:1-->unique identifier for this product
name-product name displayed on the page
src-image path for this product
price-product price
tags-an array of tags used for filtering("new","blue","summer")*/
/* collections products only displays data it is not html ;it is just a product data information*/
    {
        id:1,
        name:"Floral Summer Shirt",
        src:"images/f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },

    {
        id:2,
        name:"Summer Green",
        src:"images/f2.jpg",
        desc:"",
        price:260,
        tags:["new","green","beach"]
    },

    {
        id:3,
        name:"Party Floral Shirt",
        src:"images/f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },

    {
        id:4,
        name:"Floral Summer Shirt",
        src:"images/f4.jpg",
        desc:"",
        price:399,
        tags:["old","white","beach"]
    },
    {
        id:5,
        name:"Beach Shirt",
        src:"images/f5.jpg",
        desc:"",
        price:579,
        tags:["old","white","beach"]
    }
,
    {
        id:6,
        name:"Shirt Party Red",
        src:"images/f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },

    {
        id:7,
        name:"Party Floral Shirt",
        src:"images/f3.jpg",
        desc:"",
        price:399,
        tags:["old","red","party"]
    },
    {
        id:8,
        name:"Shirt Party Red",
        src:"images/f6.jpg",
        desc:"",
        price:579,
        tags:["old","red","party"]
    },
    {
        id:9,
        name:"Floral Summer Shirt",
        src:"images/f1.jpg",
        desc:"",
        price:220,
        tags:["new","blue","summer"]
    },


]

export {products}                     
//at the end makes it availabe to other js files,like collections.js  