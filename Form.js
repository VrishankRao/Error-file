class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }
  
    display(){
      //title
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(430, 0);
      
      this.input.position(450, 160);
      this.button.position(500, 200);
  
      //erasing registration form when 'play' is pressed
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        
        //updating players names' and player count into database
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        //greeting player
       
        this.greeting.html("Hello " + player.name )
        this.greeting.position(480, 160)
      });
  
    }
  }
