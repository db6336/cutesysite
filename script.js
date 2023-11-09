let loveBox = $(".container").hide();

password = prompt("Hold your horses! Who is my Special Guy >:(").toLowerCase();

if (password == "darkphantomlord" || password == "phantomlord" || password == "darkphantom") {
    $("body").addClass("background-romantic");
    loveBox.show();
} else if (password !== "darkphantomlord") {
    $("h3").text("Well that's awkward...")
    $("p").html("You're not my <strong>DPL!</strong> Get outta hereeee")
    loveBox.show();
} 