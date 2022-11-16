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
    var utterThis = new SpeechSynthesisUtterance(sp1 + sp2);
    synth.speak(utterThis) ;
}


function check() 
{
    img = document.getElementById("captured_image") ;
    classifier.classify(img, gotResults) ;
}

function gotResults(error, results) 
{
    if (error) 
    {
        console.log(error);
    }
    else 
    {
        console.log(results);
        
        r = Math.floor(Math.random() * 255) + 1 ;
        g = Math.floor(Math.random() * 255) + 1 ;
        b = Math.floor(Math.random() * 255) + 1 ;
        r1 = Math.floor(Math.random() * 255) + 1 ;
        g1 = Math.floor(Math.random() * 255) + 1 ;
        b1 = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_emotion_name").innerHTML = results[0].label ;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label ;

        document.getElementById("result_emotion_name").style.color = "rgb("+r+","+g+","+b+")" ;
        document.getElementById("result_emotion_name2").style.color = "rgb("+r1+","+g1+","+b1+")" ;

        p1 = results[0].label ;
        p2 = results[1].label ;

        speak() ;

        up = document.getElementById("update_emoji") ;
        up2 = document.getElementById("update_emoji2") ;

        if (results[0].label == "Amazing")
        {
            up.innerHTML = "&#128076" ;
        }
        if (results[0].label == "Best")
        {
            up.innerHTML = "&#128077" ;
        }
        if (results[0].label == "Victory")
        {
            up.innerHTML = "&#9996" ;
        }
        if (results[1].label == "Amazing")
        {
            up2.innerHTML = "&#128076" ;
        }
        if (results[1].label == "Best")
        {
            up2.innerHTML = "&#128077" ;
        }
        if (results[1].label == "Victory")
        {
            up2.innerHTML = "&#9996" ;
        }
        
    }
}