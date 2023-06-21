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
        document.getElementById("result").innerHTML = '<img id="Captured_Image" src="' + data_uri + '"/>';
    });
}
   
console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_t1RC16sp/model.json'), modelLoaded();

function modelLoaded()
{
    console.log('Model Loaded');
}

function Check()
{
     img = document.getElementById('Captured_Image');
     classifier.classify(img , gotResult);

}

function gotResult(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("Hand_gesture_name").innerHTML = results[0].label;

        Guess = results[0].label;
        speak();

        if(results[0].label = "amazing")
        {
            document.getElementById("Hand_gesture_icon").innerHTML = "&#128076;";
        }
        if(results[0].label = "good")
        {
            document.getElementById("Hand_gesture_icon").innerHTML = "&#128077;";
        }
        if(results[0].label = "rocking")
        {
            document.getElementById("Hand_gesture_icon").innerHTML = "&#128304;";
        }
        if(results[0].label = "fight")
        {
            document.getElementById("Hand_gesture_icon").innerHTML = "&#9994";
        }
        if(results[0].label = "clap")
        {
            document.getElementById("Hand_gesture_icon").innerHTML = "&#128079;";
        }
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The hand gesture is " + Guess;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
