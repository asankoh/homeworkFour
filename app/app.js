import * as MODEL from "./model.js";

function initListeners() {
    $("nav a").click((e) => {
        let btnID = e.currentTarget.id;
    }); 

    
} 

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if(pageID == ""){
        MODEL.changePage("home");
    } else{
        MODEL.changePage(pageID)
    }
}


function initApp(){
    $(window).on("hashchange", route);
    route();
    } 

    function init(){
        $("#submit").on("click", function (e){
            let un = $("#uName").val()
            let pw = $("#passWord").val()
        
        
        if(un != "" && pw != ""){
            alert("Log-in Process Successful!")
        } else{
            alert("Enter either your username or password.")
        }
        })
    }


$(document).ready(function () {
 initApp()
init();
initListeners();
});