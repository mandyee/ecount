﻿$(document).ready(function () {
    loadData();
});

function loadData() {
    $.ajax(
        {
            url: "/Home/List",
            type: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                 console.log(result);
                let html = "";
              //{EmployeeID: 1, Name: '11', Age: 22, State: '33', Country: '44'}
                $.each(result, function (index, item) {
                    html += "<tr>";
                    html += "<td>" + item.EmployeeID + "</td>";
                    html += "<td>" + item.Name + "</td>";
                    html += "<td>" + item.Age + "</td>";
                    html += "<td>" + item.State + "</td>";
                    html += "<td>" + item.Country + "</td>";
                    html += '<td><a href="#" onclick="return getbyID(' + item.EmployeeID + ')">Edit</a> | <a href="#" onclick="Delete(' + item.EmployeeID + ')">Delete</a></td>';
                    html += "</tr>";
                });
                $('.tbody').html(html);
            },
            error: function (errmsg) {
                alert(errmsg.responseText);
            }
        }

    );
}


function getbyID(EmpID) {
    $.ajax(
        {
            url: "/Home/GetbyID/" + EmpID,  //Home/GetByID/1   >>  url: "{controller}/{action}/{id}"
            type: "GET",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                //console.log(result);
                $('#EmployeeID').val(result.EmployeeID);
                $('#Name').val(result.Name);
                $('#Age').val(result.Age);
                $('#State').val(result.State);
                $('#Country').val(result.Country);

                $('#myModal').modal('show');
                $('#btnUpdate').show();
                $('#btnAdd').hide();
            },
            error: function (errmsg) {
                alert(errmsg.responseText);
            }
        }

    );
}


function Add() {

    let res = validate();
    if (res == false) {
        return false;
    }

    let empobj = {
        employeeid: $('#EmployeeID').val(),
        name: $('#Name').val(),
        age: $('#Age').val(),
        state: $('#State').val(),
        country: $('#Country').val()
    };
    console.log(empobj);
    $.ajax(
        {
            url: "/Home/Add",
            data: JSON.stringify(empobj),
            type: 'POST',  //전송 방식 POST  변경 
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                loadData(); //비동기 조회 함수 호출 (갱신)
                //console.log(result);
                $('#myModal').modal('hide');
            },
            error: function (errmsg) {
                alert(errmsg.responseText);
            }

        }
    );
}

function Update() {
    let res = validate();
    if (res == false) {
        return false;
    }
    let empobj = {
        employeeid: $('#EmployeeID').val(),
        name: $('#Name').val(),
        age: $('#Age').val(),
        state: $('#State').val(),
        country: $('#Country').val()
    };

    $.ajax(
        {
            url: "/Home/Update",
            data: JSON.stringify(empobj),
            type: 'POST',  //전송 방식 POST  변경 
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                loadData(); //비동기 조회 함수 호출 (갱신)
                //console.log(result);
                $('#myModal').modal('hide');
                $('#EmployeeID').val("");
                $('#Name').val("");
                $('#Age').val("");
                $('#State').val("");
                $('#Country').val("");
            },
            error: function (errmsg) {
                alert(errmsg.responseText);
            }

        }
    );
}

function Delete(ID) {
    let answer = confirm("정말 삭제하시겠습니까");
    if (answer) {
        $.ajax(
            {
                url: "/Home/Delete/" + ID,  ///Home/Delete/3  
                type: 'POST',  //전송 방식 POST  변경 
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (result) {
                    loadData(); //비동기 조회 함수 호출 (갱신)
        
                },
                error: function (errmsg) {
                    alert(errmsg.responseText);
                }

            }
        );
    }
    
}

function clearTextBox() {
    $('#EmployeeID').val("");
    $('#Name').val("");
    $('#Age').val("");
    $('#State').val("");
    $('#Country').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Name').css('border-color', 'lightgrey');
    $('#Age').css('border-color', 'lightgrey');
    $('#State').css('border-color', 'lightgrey');
    $('#Country').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#Name').val().trim() == "") {
        $('#Name').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#Age').val().trim() == "") {
        $('#Age').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'lightgrey');
    }
    if ($('#State').val().trim() == "") {
        $('#State').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#State').css('border-color', 'lightgrey');
    }
    if ($('#Country').val().trim() == "") {
        $('#Country').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Country').css('border-color', 'lightgrey');
    }
    return isValid;
}