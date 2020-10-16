

function JsonCall(){
    let URL="https://teamrabbil.com/monirul/index.php";


    axios.get(URL)
        .then(function(response){
            let jsonData = response.data;

            let BankJsonArray=jsonData['data']['Bank'];
            let GenderJsonArray=jsonData['data']['Genders'];
            let ListProductsJsonArray=jsonData['data']['ListProducts'];
            let RelationsJsonArray=jsonData['data']['Relations'];

            $('#BankDropDown').empty();
            $('#GenderDropDown').empty();
            $('#ListProductsDropDown').empty();
            $('#RelationsDropDown').empty();

            $.each(BankJsonArray,function (i,item) {
                let OptionItem="<option value='"+item['IndexID']+"'>"+item['BankName']+"</option>";
                $('#BankDropDown').append(OptionItem);
            })

            $.each(GenderJsonArray,function (i,item) {
                let GenderOptionItem="<option value='"+item['GTypeID']+"'>"+item['GTypeName']+"</option>";
                $('#GenderDropDown').append(GenderOptionItem);
            })


            $.each(ListProductsJsonArray,function (i,item) {
                let ListProductsOptionItem="<option value='"+item['DFSProductID']+"'>"+item['DFSProductName']+"</option>";
                $('#ListProductsDropDown').append(ListProductsOptionItem);
            })

            $.each(RelationsJsonArray,function (i,item) {
                let RelationsOptionItem="<option value='"+item['RelationID']+"'>"+item['RelationValue']+"</option>";
                $('#RelationsDropDown').append(RelationsOptionItem);
            })

        })
        .catch(function (error){

        })
}

function getBankData() {
    let URL="https://teamrabbil.com/monirul/index.php";
    axios.get(URL)
        .then(function(response) {
                $('#bankTable').empty();
                let jsonData = response.data;
                let BankJsonArray=jsonData['data']['Bank'];
                $.each(BankJsonArray, function(i, item) {
                    $('<tr>').html(
                        "<td>" + BankJsonArray[i].IndexID + "</td>" +
                        "<td>" + BankJsonArray[i].BankName + " </td>"
                    ).appendTo('#bankTable');
                });
        }).catch(function(error) {

    });
}


function card(){
    let URL="https://teamrabbil.com/monirul/index.php";
    axios.get(URL)
        .then(function(response) {
            $('#fileImgID').empty();
            let jsonData = response.data;
            let ListDocumentsJsonArray=jsonData['data']['ListDocuments'];
            $.each(ListDocumentsJsonArray, function(i, item) {
                let CardItem="";
                if(item['FileType']=="IMG"){
                    CardItem="<div id='fileImgID' class='col-md-3'>" +
                        "<div class='card'>" +
                        "<img class='card-img-top' src='images/file.jpg' alt='Card image cap'>" +
                        "<div class='card-body'>" +
                        "<h5 class='card-title'>Card title</h5>" +
                        "<p class='card-text'>Some quick content.</p>" +
                        "</div>" +
                        "</div>" +
                        "</div>";
                }
                else if(item['FileType']=="PDF"){

                    CardItem="<div id='fileImgID' class='col-md-3'>" +
                        "<div class='card'>" +
                        "<img class='card-img-top' src='images/pdf.jpg' alt='Card image cap'>" +
                        "<div class='card-body'>" +
                        "<h5 class='card-title'>Card title</h5>" +
                        "<p class='card-text'>Some quick content.</p>" +
                        "</div>" +
                        "</div>" +
                        "</div>";
                }
                $('#CardList').append(CardItem);

            });
        }).catch(function(error) {

    });
}



