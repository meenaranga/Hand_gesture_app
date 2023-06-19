Webcam.set
({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function Take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("resutl").innerHTML = '<img id="Captured_Image" src="' + data_uri + '"/>';
    });
}
   
console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_t1RC16sp/model.json', modelLoaded);
