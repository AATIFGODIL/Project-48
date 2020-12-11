class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.stime = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  
  
  /*getTime(){
    var startTimeRef = database.ref('startTime');
    startTimeRef.on("value",(data)=>{
     stime = data.val();
    })
    }

    updateTime(count1){
      database.ref('/').update({
        stime: count1
      });
    }*/

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      stime: this.stime
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
