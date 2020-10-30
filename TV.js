class TV{
    constructor(channel, volume, status ) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;

    }
    getChannel(){
        return this.channel;
    }
    volumeUp(){
        if(this.volume == 10){
            return;
        }
        this.volume += 1;
    }
    volumeDown(){
        if(this.volume == 0) {
            return;
        }
        this.volume -= 1;
    }
    changeChannelUp(){
        this.channel += 1;
    }
    changeChannelDown(){
        this.channel -= 1;
    }
    turnOnOff(){
        if(this.status == true){
            this.status = false;
            alert("off");
        }else{
            this.status = true;
            alert("on");
        }
    }
    setChannel(channel){
        this.channel = channel;
    }
    setDefaultStatus(){
        this.status = false;
    }
    setVolume(volume){
        this.volume = volume;
    }
}
let tv = new TV();
tv.setDefaultStatus();
tv.turnOnOff();
tv.setVolume(1);

