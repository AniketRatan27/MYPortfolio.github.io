// let tablinks = document.getElementsByClassName("tab-links");

let tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    // for(let tablink of tablinks){
    //    tablink.classList.remove("active-links");
    // }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab")
}




