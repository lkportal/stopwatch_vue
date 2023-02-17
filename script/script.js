const vm = new Vue({
    el:'#app',
    data:{
        segundo: 0,
        segundoParte2:0,
        minuto:0,
        minutoParte2:0,
        horas:0,
        horasParte2:0,
        tempo:3
    },
    methods:{
        time(){
          const timeSeg = setInterval(()=>{
            if(this.tempo > this.segundo){
                this.segundo++
                if(this.segundo == 3){
                    this.segundo =0
                    this.segundoParte2++
                }
            }
            if(this.segundoParte2 > 3){ 
                this.segundoParte2=0
                 this.minuto += 1
                 if(this.minuto== 3){
                    this.minuto = 0
                    this.minutoParte2 += 1
                 }
            }if(this.minutoParte2 == 3){
                this.minutoParte2 = 0
                this.horas += 1
                if(this.horas == 3){
                    horas=0
                    this.horasParte2 +=1
                    
                }if(this.horasParte2 == 3){
                    this.horasParte2 = 0
                }
            }
            },1000)
        }
      
        
    }
})