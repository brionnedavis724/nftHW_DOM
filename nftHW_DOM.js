/*
Take the following object and use the DOM to change the elements with the values from the dog object below in the comments


The final result should look similar to the picture attached below


DOG OBJECT:
let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600&quot;,
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c&quot;,
    }
}


HINT:
What DOM methods would you use to get the elements you want?

Can I give my elements in my HTML an ID or a class to help select them?

How do I access the values in the NESTED object (Ex: Owner)?
*/

// let newNFT = {
//     bgColor: "red",
//     name: "DOG",
//     owner: "King"
// }
// document.getElementById('owner').innerText = newNFT.name;
// document.body.style.backgroundColor = newNFT.bgColor;

let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    // nft: "./images/image-equilibrium.jpg",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600&quot;",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c&quot;",
    }
}

console.log(dog.otherData.owner)
document.getElementById('name').innerText = dog.name;
document.getElementById('price').innerText = dog.price;
document.getElementById('description').innerText = dog.description;
// document.getElementById('NFT').src="dog.nft";
// document.getElementById('NFT').src="./images/image-equilibrium.jpg";
document.body.style.backgroundColor = dog.backgroundColor;
document.getElementById('cardColor').style.backgroundColor = dog.cardColor;
document.getElementById('owner').innerText = dog.otherData.owner;
document.getElementById('daysLeft').innerText = dog.otherData.daysLeft;
document.getElementById('profileImg').src="https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c&quot;";

