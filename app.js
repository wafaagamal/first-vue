new Vue({
    el:'#app',
    data:{
        playerHealth:100,
       monsterHealth:100,
       start:false,
       max:10,
       Smax:30,
       min:0,
       turns:[],

    },
    methods:{
        startGame:function(){
            this.start=true
            this.playerHealth=100
            this.monsterHealth=100
            
        },
      attack:function(){
       
        var damage=Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        this.turns.unshift({text:'you hit monster by '+damage,isPlayer:true})
        this.playerHealth=Math.max(this.playerHealth - damage,this.min)

        if( this.playerHealth <=0){
              alert('You lose')
              this.start=false
              return
        }
        var damage=Math.floor(Math.random() * (this.max - this.min + 1)) + this.min   
        this.turns.unshift({text:'monster hit you by '+damage})
        this.monsterHealth=Math.max(this.monsterHealth - damage,this.min)

         if( this.monsterHealth<=0) {
          alert('You win')
          this.start=false
        }   
      },
      specialAttack:function(){
        var damage=Math.floor(Math.random() * (this.Smax - this.min + 1)) + this.min
        this.turns.unshift({text:'you hit monster by '+damage,isPlayer:true})
        this.playerHealth=Math.max(this.playerHealth - damage,this.min)

        if( this.playerHealth <=0){
              alert('You lose')
              this.start=false
              return
        }
        var damage=Math.floor(Math.random() * (this.Smax - this.min + 1)) + this.min
        this.turns.unshift({text:'monster hit you by '+damage})
        this.monsterHealth=Math.max(this.monsterHealth - damage,this.min)

         if( this.monsterHealth<=0) {
          alert('You win')
          this.start=false
        }
          
      },
      health:function(){
          if(this.playerHealth<=90){
            this.playerHealth=this.playerHealth +10
          }else{
              this.playerHealth=100
          }
      },
      giveUp:function(){
        this.start=false
        this.turns=[]
      }
    },
    computed:{

    }
})