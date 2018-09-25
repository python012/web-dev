var lis = document.querySelectorAll("li");

for (const li of lis) {
    li.addEventListener("mouseover", function(){
        this.style.color = "green";
    });

    li.addEventListener("mouseout", function(){
        this.style.color = "black";
    });    
}