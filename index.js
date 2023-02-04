$(".main-notes").click(function(){ playSound($(this).text())});

$(document).keydown(function() {playSound(event.key)});
function playSound(keyOrBtn)
{
switch(keyOrBtn)
{
    case "c":
        var c=new Audio("sounds/c.wav");
        c.play();
        break;
    case "d":
        var d=new Audio("sounds/d.wav");
        d.play();
        break;
    case "e":
        var e=new Audio("sounds/e.wav");
        e.play();
        break;
    case "f":
        var f=new Audio("sounds/f.wav");
        f.play();
        break;
    case "g":
        var g=new Audio("sounds/g.wav");
        g.play();
        break;
    case "a":
        var a=new Audio("sounds/a.wav");
        a.play();
        break;
    case "b":
        var b=new Audio("sounds/b.wav");
        b.play();
        break;
    case "G sharp:p":
        var gs=new Audio("sounds/gs.wav");
        gs.play();
        break;
    case "C sharp:y":
        var cs=new Audio("sounds/cs.wav");
        cs.play();
        break;
    case "Bb sharp:u":
        var bb=new Audio("sounds/bb.wav");
        bb.play();
        break;
    case "Eb sharp:i":
        var eb=new Audio("sounds/eb.wav");
        eb.play();
        break;   
    case "F sharp:o":
        var fs=new Audio("sounds/fs.wav");
        fs.play();
        break;
    case "p":
        var gs=new Audio("sounds/gs.wav");
        gs.play();
        break;
    case "y":
        var cs=new Audio("sounds/cs.wav");
        cs.play();
        break;
    case "u":
        var bb=new Audio("sounds/bb.wav");
        bb.play();
        break;
    case "i":
        var eb=new Audio("sounds/eb.wav");
        eb.play();
        break;   
    case "o":
        var fs=new Audio("sounds/fs.wav");
        fs.play();
        break;          
    default:
        console.log(keyOrBtn);
    
}
}