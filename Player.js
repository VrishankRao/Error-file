class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
  
    getCount(){
      //playerCount refers and writes value in database using ref and on
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      //updating count
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){
      //updating player names
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();

        })

    }
  }

