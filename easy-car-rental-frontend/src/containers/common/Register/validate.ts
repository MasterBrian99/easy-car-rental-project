export function validateUserName(value: string) {
  let error;
  if (!value) {
    error = "username is required";
  } else if (value.indexOf(" ") >= 0) {
    error = "contains spaces";
  }
  return error;
}

export function validateFullName(value: string) {
  let error;
  if (!value) {
    error = "Full Name is required";
  }
  return error;
}

export function validateImage(value: string) {
  let error;
  if (!value) {
    error = "image is required";
  }
  return error;
}

export function validateAddress(value: string) {
  let error;
  if (!value) {
    error = "image is required";
  }
  return error;
}

export function validatePassword(value: string) {
  let error;
  if (!value) {
    error = "image is required";
  }
  return error;
}

/*
var fileObject = $("#file")[0].files[0];//access file object from input field
var fileName = $("#file")[0].files[0].name; //get file name
var data = new FormData(); //setup form data object to send file data
data.append("file", fileObject, fileName); //append data
$.ajax({
    url: 'up',
    method: 'post',
    async: true,
    processData: false, //stop processing data of request body
    contentType: false, // stop setting content type by jQuery
    data: data,
    success: function () {
        alert("File Uploaded");
    }
});


*/
