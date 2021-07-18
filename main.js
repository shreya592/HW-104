Webcam.set({
    width: 350,
    height: 299,
    image_format: 'png',
    png_quality: 90
    })
    
    camera= document.getElementById("cam");
    Webcam.attach('#cam');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri)
        {
            document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
        });
    
    }
    console.log('m15 version:', m15.version);
    
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
    function modelLoaded()
    {
        console.log('modelLoaded');
    }