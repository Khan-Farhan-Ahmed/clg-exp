let phone_img = 'https://images.pexels.com/photos/30466739/pexels-photo-30466739.jpeg';
let phone_name = 'Samsung Galaxy S25 Ultra Pro';
let phone_desc = 'The ultimate Samsung flagship smartphone with advanced Snapdragon 8 Gen 3 processor, 200MP camera, and 6.9-inch Dynamic AMOLED display.';
let phone_price = '₹1,25,000';
let laptop_img = 'https://images.pexels.com/photos/16150336/pexels-photo-16150336.jpeg';
let laptop_name = 'Dell XPS 15';
let laptop_desc = 'Powerful performance laptop with Intel i9, 32GB RAM, 1TB SSD, and stunning 4K display for creators and professionals.';
let laptop_price = '₹2,45,999';
let watch_img = 'https://images.pexels.com/photos/9561403/pexels-photo-9561403.jpeg';
let watch_name = 'Graff Diamonds Hallucination'
let watch_desc = 'Luxury watch adorned with 110 carats of rare colored diamonds. Most expensive wristwatch in the world.';
let watch_price = '₹458 crore';

let image = document.getElementById('product-image');
let name = document.getElementById('product-name');
let price = document.getElementById('product-price');
let description = document.getElementById('product-desc');
let productBtn = document.getElementById('product-btn');
let options = document.getElementById('product-select');

let currentDesc = "";

options.addEventListener('change' ,(e) => {
    if(e.target.value === 'phone') runPhone();
    else if (e.target.value === 'laptop') runLaptop();
    else if (e.target.value === 'watch') runWatch();
    else if (e.target.value === 'none') chooseNothing();
})

let runPhone = () => {
    image.src = phone_img;
    name.innerHTML = phone_name;
    price.innerHTML = phone_price;
    description.innerHTML = phone_desc;
    productBtn.style.display = "none";
}
let runLaptop = () => {
    image.src = laptop_img;
    name.innerHTML = laptop_name;
    price.innerHTML = laptop_price;
    description.innerHTML = laptop_desc;
    productBtn.style.display = "none";
}
let runWatch = () => {
    image.src = watch_img;
    name.innerHTML = watch_name;
    price.innerHTML = watch_price;
    description.innerHTML = watch_desc;
    productBtn.style.display = "none";
}
let chooseNothing = () => {
    image.src = "";
    name.innerHTML = "";
    price.innerHTML = "";
    description.innerHTML = "";
    productBtn.style.display = "block";
}


$("#toggleBtn").click(function(){
    $("#product-desc").toggle();

    if ($("#product-desc").is(":visible")) {
        $("#toggleBtn").text("Hide Description");
    } else {
        $("#toggleBtn").text("Show Description");
    }
});