Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
}) ;

Webcam.attach("#camera") ;

function tks() 
{
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+">" ;
    });
}

console.log("ml5 version : ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/f0fklaK1M/model.json",modelLoaded) ;

function modelLoaded() 
{
    console.log("Model Loaded !");
}

function speak() 
{
    var synth = window.speechSynthesis ;
    sp1 = "The First Prediction Is " + p1 ;
    sp2 = "The Second Prediction Is " + p2 ;
    var utterThis = SpeechSynthesisUtterance(sp1 + sp2);
    synth.speak(utterThis) ;
}