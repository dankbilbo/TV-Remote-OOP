class Remote{
    constructor(id) {
        this.id = id;
    }
    turnOnOff(tv){
        if(tv.status == true){
            tv.status = false;
            alert("off");
        }else{
            tv.status = true;
            alert("on");
        }
    }
    changeChannel(tv, channel){
        tv.channel = channel;
        document.getElementById("channel").innerHTML = `Channel : ${tv.channel}`;
    }
    changeVolumeUp(tv){
        tv.volumeUp();
        document.getElementById("volume").innerHTML = tv.volume;
    }
    changeVolumeDown(tv){
        tv.volumeDown();
        document.getElementById("volume").innerHTML = tv.volume;
    }
}
let remote = new Remote();