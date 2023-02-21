const vm = new Vue({
    el:'#app',
    data:{
        segundo: 0,
        segundoParte1:0,
        minuto:0,
        minutoParte1:0,
        horas:0,
        horasParte1:0,
        tempo:60,
        condicionalTempo:false,
        timeSeg:null
    },
    methods:{
         time(){
            
           this.timeSeg = setInterval(()=>{
            if(this.tempo > this.segundo){
                this.segundo++
                if(this.segundo >= 10){
                    this.segundo =0
                    this.segundoParte1++
                }
            }
            if(this.segundoParte1 >= 6){ 
                this.segundoParte1=0
                 this.minuto += 1
                 if(this.minuto >= 10){
                    this.minuto = 0
                    this.minutoParte1 += 1
                 }
            }if(this.minutoParte1 >=6){
                this.minutoParte1 = 0
                this.horas += 1
                if(this.horas >= 10 ){
                    horas=0
                    this.horasParte1 +=1
                }   
               
            }
           
            },1000)
            
        },
        stop(){
            
          clearInterval(this.timeSeg)
               
         
            }

        
        
      
        
    }
})