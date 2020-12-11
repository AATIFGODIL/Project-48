class Form {

  constructor() {
    this.input = createInput("Day");
    this.button = createButton('click');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.input1 = createInput("startTime");
    this.input2 = createInput("endTime");
    this.input3 = createInput("Task Title");
    //this.input4 = createInput("Done");
    this.button1 = createButton('Done');


  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.button1.hide();
    
  }

  display(){
    this.title.html("Time Management App");
    this.title.position(displayWidth/2-120, displayHeight/4 - 220)

    this.input.position(displayWidth/2 , 100);
    this.button.position(displayWidth/2 + 55, displayHeight/2 + 100);

    
    this.input1.position(displayWidth/2 - 140 , displayHeight/2 - 220);
    
    this.input2.position(displayWidth/2 + 140 , displayHeight/2 - 220);

    this.input3.position(displayWidth/2 , displayHeight/2 - 100);
    
    this.button1.position(displayWidth/2 + 50, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide()
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     this.greeting.html( "Lets add a reminder for " + player.name)
      this.greeting.position(displayWidth/2 - 110, displayHeight/4-120);
      /*if(playerCount>0){
        this.input1 = createInput("starTime");
    this.input2 = createInput("endTime");
      }*/
    });

    this.button1.mousePressed(()=>{
      this.title.hide();
      this.input3.hide();
      this.button1.hide();
      this.greeting.hide();
        this.input1.hide();
        this.input2.hide();
      

    });

  
      
    

  }
}
