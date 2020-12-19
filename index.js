const data = [
        {
            url: "https://images.unsplash.com/photo-1601758176481-e81a6b713126?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608376156820-56656bddfd10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608321632050-4ad4a4a74ae5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608352283318-e336401eab57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608320921475-9644a18fd827?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608376157229-266b4b68c1c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608315398650-ca10c8b3ff0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1608338082188-67db43f15f48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1602526215099-19d4d14797d6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
]
const renderImage = item => {
    return `
        <div class = "Image-Card">
            <div class = "Image-Branding">
                <h3>CREATIVE LOGO</h3>
                <hr></hr>
                <h4>Branding</h4>
            </div>
            <img src=${item.url}></img>
        </div>
`
}
const displayMobileMenu = () => {
    const menu = document.getElementById("Drop-Down");
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "none";
    }
}
document.getElementById("images").innerHTML = `
    ${data.map(item => renderImage(item)).join('')}
`

/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    document.getElementById("images").innerHTML = `
        <img src="${data[0].url}"></img>
    `;
  }
};
xmlhttp.open("GET", "images.json", true);
xmlhttp.send();*/