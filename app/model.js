export function changePage(pageID){
    $.get(`pages/${pageID}.html`, function (data){
        $("#app").html(data);
    });
}

export function setCurrentPageContent(pageID){
    // pageID refers to the id type of the nav a
    let contentName = pageID + "Content";
    console.log(pageID)
    $("#app").html(eval(contentName));
    // eval takes the string and converts it into a variable. Now allowing homeContent to be displayed on the web browser
}


