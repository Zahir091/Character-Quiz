let counter = 0;
var character = " ";
$(".answer-box, .retry-button").hide();


$(".submit-button").click(function() {
    counter += 1;
    $(".counter-place").text(" This quiz has been taken " + counter + " times ");
    let response1 = Number($(".first-question").val());
    let response2 = $(".second-question").val();
    $(".result-statement").text("On a scale from 1-8, you are feeling a " + response1 + " about your day. You would say your personality is " + response2 + ". You are most likely " + character);
    $(".intro-page, .questions, h5").hide();    
    $(".retry-button").show();  
    
    if (response1 <= 8 && response1 >= 5 && response2 === "Aggressive") {
        $("#gamora").show();
        character = "Gamora";
        $("h6").text("On a scale from 1-8, you are feeling a " + response1 + " about your day. You would say your personality is " + response2 + ". You are most likely " + character);

    }
    else if (response1 <= 4 && response1 > 0 && response2 === "Comedic") {
        $("#star-lord").show();
        character = "Star-Lord";
        $("h6").text("On a scale from 1-8, you are feeling a " + response1 + " about your day. You would say your personality is " + response2 + ". You are most likely " + character);
    }
    else if (response1 <= 4 && response1 > 0 && response2 === "Aggressive") {
        $("#rocket").show();
        character = "Rocket";
        $("h6").text("On a scale from 1-8, you are feeling a " + response1 + " about your day. You would say your personality is " + response2 + ". You are most likely " + character);
    }
    else if (response1 <= 8 && response1 >= 5 && response2 === "Comedic") {
        $("#groot").show();
        character = "Groot";
        $("h6").text("On a scale from 1-8, you are feeling a " + response1 + " about your day. You would say your personality is " + response2 + ". You are most likely " + character);
    }
    else {
       $(".intro-page, .questions").show();
       $(".retry-button").hide();
       alert("Invalid Input");
    }
    
});

$(".retry-button").click(function () {
    $(".intro-page, .questions").show();
    $(".retry-button, .answer-box").hide();
    
});

