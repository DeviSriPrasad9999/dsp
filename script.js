document.getElementById("name").innerText = "< DEVI SRI PRASAD >";

var count=0;
function navbar(){
    count = count +1;
    if(count%2!=0){
        document.querySelector("nav").style= 'background:#663399;color:black;';
        let e=document.querySelector(".namediv").style= "margin-top:400px;transition:0.3s;"
    }
    else{
        if(screen.width > 431){
        document.querySelector("nav").style= 'background:default';
        let e=document.querySelector(".namediv").style= "margin-top:15%;transition:0.3s;"
        }
        else if(screen.width <= 430){
            document.querySelector("nav").style= 'background:default';
            let e=document.querySelector(".namediv").style= "position:default;transition:0.3s;"
        }
    }   
}

function myfunc(){
    var preloader = document.getElementById("loader");
    setTimeout(function(){
        preloader.style.display="none";
    },3000);
    
}

function home(){
    var home = document.getElementById("namediv");
    home.scrollIntoView({behavior:"smooth",block:"center"});
}

function about(){
    var about = document.getElementById("about");
    about.scrollIntoView({behavior:"smooth",block:"center"});
}

function skills(){
    var skills = document.getElementById("skills");
    skills.scrollIntoView({behavior:"smooth",block:"center"});
}

function contact(){
    var contact = document.getElementById("contactme");
    contact.scrollIntoView({behavior:"smooth",block:"center"});
}

function sendEmail(){
    let name = document.getElementById("contactname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("textarea").value;
    Email.send({
        
        SecureToken:"9a422217-1721-4b4d-8615-0aaf35151f36",
        To : 'devisriprasad7989@gmail.com',
        From :name,
        Subject : subject,
        Body : msg 
    }).then(
      message => alert("message")
    );
}
