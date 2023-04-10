fetch('/sidebar.json')
.then((response) => response.json())
.then((sidebarJson) => {
    sidebarJson.sidebar.forEach(element => {
        if(element.subcats){
            var subcatlinks = "";
            element.subcats.forEach(element => {
                subcatlinks += `<a href="${element.path}">${element.title}</a>
                `;
            });

            $(".sidenav").append(`
                <a href="#" class="dropdown-btn">${element.title} 
                    <i class="fa fa-caret-down"></i>
                </a>
                <div class="dropdown-container">
                    ${subcatlinks}
                </div>
            `)
        }
        else{
            $(".sidenav").append(`
                <a href="${element.path}">${element.title}</a>
            `);
        }
    });
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    });
    }
});