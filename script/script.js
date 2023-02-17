const vm = new Vue({
    el:'#app',
    data:{
        segundo:0,
        minuto:0,
        horas:0,
        tempo:3
    },
    methods:{
        time(){
           
            setInterval(()=>{
                if(this.tempo > this.segundo ){
                    this.segundo += 1
                }
                 if(this.segundo == 3 ){
                    this.segundo = 0
                    this.minuto += 1
                } if(this.minuto == 3){
                    this.minuto = 0
                    this.horas += 1
                }
            },1000)
           
        },
      
        
    }
})