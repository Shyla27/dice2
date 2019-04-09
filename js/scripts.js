//BUSINESS LOGIC

$(document).ready(function () {
    function Player(id, currentScore, totalScore) {
        this.id = id;
        this.totalScore = 0;
    }
    player1 = new Player();
    player2 = new Player();

    //UI LOGIC
    $("button#roll-dice1").on("click", function () {
        Player.prototype.currentScore = Math.floor(Math.random() * 6) + 1;
        player1.totalScore += player1.currentScore;

        if (player1.currentScore === 1) {
            alert("You have scored 1! Next player!");
            $("button#roll-dice1").hide();
            $("butoon#roll-dice2").show();

            $(".result1").html("player 1: 0 and total score is 0");
        } else {
            $(".result1").html("player 1 current scrore: " + player1.currentScore + " total score : " + player1.totalScore);
        }

        if (player1.totalScore === 100) {
            alert("Player 1 wins!!");
        }

        $("button#roll-dice2").on("click", function () {
            Player.prototype.currentScore = Math.floor(Math.random() * 6) + 1;
            player2.totalScore += player2.currentScore;

            if (player2.currentScore === 1) {
                alert("You have scored 1!! Back to player 1!");
                $("button#roll-dice2").hide();
                $("butoon#roll-dice1").show();

                $(".result2").html("player 2: 0 and total score is 0");
            } else {
                $(".result2").html("player 2 current score : " + player2.currentScore +  " total score : " + player2.totalScore);
            }

            if (player2.totalScore === 100) {
                alert("Player 2 wins!!");
            }
        })
    })

    $("button#hold1").click(function () {
        $("button#roll-dice1").hide();
        $("button#roll-dice2").show();
        $(".result1").html("player 1 current score : " + player1.currentScore + " total score : " + player1.totalScore);

    })
    $("button#hold2").click(function () {
        $("button#roll-dice2").hide();
        $("button#roll-dice1").show();
        $(".result2").html("player 2 current score : " + player2.currentScore + "total score :" + player2.totalSore);
    })
    $("button#start").click(function () {
        $(".container").slideToggle();

})
})
