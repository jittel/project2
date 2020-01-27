const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/delw6elgw/upload"
const CLOUDINARY_UPLOAD_PRESET = "r6mprs9r"

var fileUpload = document.getElementById("file-upload");

fileUpload.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log(res)
    }).catch(function(err) {
        console.error(err)
    })
})

// DON'T FORGET THE AXIOS LINK IN THE HANDLEBARS FILE