Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("Webcam");
Webcam.attach("Webcam")
function Capture(){
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="res_img" src="'+data_url+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.ImageClassifier('https://teachablemachine.withgoogle.com/models/ga6vnPOA4/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}