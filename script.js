let loveBox = $(".container");
loveBox.hide();

$("title").text("who dis");

password = prompt("Hold your horses! Who is my Special Guy >:(").toLowerCase();

if (password == "darkphantomlord" || password == "phantomlord" || password == "darkphantom") {
    $("body").addClass("background-romantic");
    $("title").text("DarkPhantomLord 💌");
    loveBox.show();
} else if (password !== "darkphantomlord") {
    $("title").text("Nah fam wtf is dis");
    $("h3").text("Well that's awkward...")
    $("p").html("You're not my <strong>DPL!</strong> Get outta hereeee")
    loveBox.show();
} 
