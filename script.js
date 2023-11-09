let loveBox = $(".container");
loveBox.hide();

$("title").text("who dis");

password = prompt("Hold your horses! Who goes there >:(").toLowerCase();

if (password == "darkphantomlord" || password == "phantomlord" || password == "darkphantom") {
    $("body").addClass("background-romantic");
    $("title").text("DarkPhantomLord 💌");
    loveBox.show();
} else if (password !== "darkphantomlord") {
    $("title").text("This ain't it");
    $("h3").text("Well that's awkward...")
    $("p").html("Sorry, \"" + password + "\", but uh... no thanks?");
    loveBox.show();
} 
