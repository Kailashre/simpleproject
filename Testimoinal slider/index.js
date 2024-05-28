const testimonails = [
    {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",

    },
    {
        name:"Rosetta Q",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"apple is the ultimate time saver for small business owners like me." ,
    },
    {
        name:"Constantine",
        photoUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"With apple, we have finally accomplished things that have been waiting forever to get done." ,
    }
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl =  document.querySelector(".username");

let idx = 0;

updateTestimonail();

function updateTestimonail(){
 const {name, photoUrl,text} = testimonails[idx];

 imgEl.src=photoUrl;
 textEl.innerText = text;
 usernameEl.innerText = name;
 idx++

 if(idx === testimonails.length){
  idx = 0;
 }

 setTimeout(()=>{
  updateTestimonail();
 }, 10000);
}

