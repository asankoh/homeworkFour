export function changePage(pageID){
    $.get(`pages/${pageID}.html`, function (data){
        $("#app").html(data);
    });
}

