var linkName = document.getElementById('linkName');
var linkUrl = document.getElementById('linkUrl');
var btn = document.getElementById('btn');

var tableBody = document.getElementById('tableBody');

linkName.addEventListener('focus',function(){
    linkName.classList.add()
});

var arr = [];

(function(){
    if(localStorage.getItem('links') != null){
        arr = JSON.parse(localStorage.getItem('links'));
        dispaly(arr)
    }
})();

linkName.addEventListener('input',function(){

})

btn.addEventListener('click', function () {
    addLink();    
    dispaly(arr)
    


});
function resetForm(){
        linkName.value='';
        linkUrl.value='';
    }

function addLink() {

    if(validateLinkName() == true && validatelinkUrl() == true ){
        if(checkLinkName()==1){
            alert('Link is exists');
        }
        else{
            var obj = {
                name: (linkName.value).toLowerCase(),
                linkUrl: linkUrl.value
            };
            arr.push(obj);
            localStorage.setItem("links", JSON.stringify(arr));
        
            resetForm();
            }  
        }
        
    else
    {
        alert(`- link name or url inValid.
               - Name Must Be Greater than 3. 
               - mail must look like this https://www.google.com.
        `);
    }
    
}




function dispaly(list) {
    var box = '';

    for (var i = 0; i < list.length; i++) {
        box +=
            `
                    <tr>
                        <td>${i+1}</td>
                        <td>${list[i].name}</td>
                        <td>
                            <a href="${list[i].linkUrl}" id="visitLink" target="_blank" class="btn btn-success">
                              <i class="fa-solid fa-eye pe-2"></i> Visit
                            </a>
                          </td>
                          <td>
                            <button onclick='deleteUrl(${i})' id="deleteLink" class="btn btn-danger pe-2">
                              <i class="fa-solid fa-trash-can"></i>
                              Delete
                            </button>
                          </td>
                        
                        
                    </tr>
        `
    }

    tableBody.innerHTML=box;
}


function deleteUrl(linkIndex){
    arr.splice(linkIndex , 1);
    localStorage.setItem('links', JSON.stringify(arr));
    dispaly(arr);
}

function checkLinkName(){
    var checkflag = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i].name == (linkName.value).toLowerCase())
        {
            checkflag++
        }

    }
    return checkflag;
}


function validateLinkName(){
    var regex =/^[a-zA-Z]{3,}$/;
    return regex.test(linkName.value)
     
}
function validatelinkUrl(){
    var regex =/^(https?:\/\/)(www.){1}[\w]{2,}\.(com)(\/)?$/;
    return regex.test(linkUrl.value)
}







