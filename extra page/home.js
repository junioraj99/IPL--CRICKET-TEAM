$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                  items:1
            },
            600:{
                   items:1
            },
            1000:{
                    items:1
            }
        }
    })
    });


    $("#btn-player").click(function(){
    $("#aside-1").css({
        display:"block",
        width:"40%",

    });
})

$("#btn-teams").click(function(){
    $("#aside-2").css({
        display:"block",
        width:"40%",

    });
})

$(".close").click(function(){
    $("#aside-1").css({
        display:"none",
    });
    $("aside-2").css({
        display:"none",
    });
})

if(localStorage.getItem("teamData")==null){
    localStorage.setItem("teamData" , JSON.stringify(teamData));

}


function createTeam(data){
    var card=$("<div>").attr({
        class:"card-team",
    })
    var img1=$("<img>").atr({
        class:"img-team",
        src:data.teamIcon
    })
    var div1=$("<div>").attr({
        class:"div-team",
    })

    var name1=$("<p>").html('<b>Team:</b> ${data.fullName}--(${data.key})').attr({
        class:"name-team",
    })
    var cham1=$("<p>").html('<b>championshipWon</b> ${data.championshipWon}').attr({
        class:"cham-team",
    })
    var play1=$("<p>").html('<b>No Of Players:</b> ${data.players.length}--(${data.key})').attr({
        class:"play-team",
    })


    $(div1).append(name1,cham1,play1);
    $(card).append(img1,div1)
    card.click(function(){
        localStorage.setItem("team" , JSON.stringify(data));
        
    })
    $("teams-1").append(card);
}
var data =JSON.parse(localStorage.getItem("teamData"));
for(var i=0;i<data.length;i++){
    createTeam(data[i]);
}




