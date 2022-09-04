function blink(elements, timeOn, duration, flashTime, timeOff) {

    var sumTimes = parseInt(timeOn + duration + flashTime + timeOff);
    var timeOutAfterOn = parseInt(duration + flashTime + timeOff);
    var timeOutAfterblink = parseInt(timeOn + duration + flashTime);
    var timeOutAfterOff = parseInt(timeOn + duration + flashTime + timeOff );
    //turn on elements
    for (var i = 0; i < elements.length; ++i) {
        elements[i].classList.toggle('onYellow');
        elements[i].classList.toggle('st1');

    }
   setTimeout(() =>{
    setInterval(function () {
       
        let threshold = Math.ceil(duration / flashTime);
            for (let i = 1; i < threshold; i++) {
                //blinking
                setInterval(() => {
                    if (i % 2 === 0) {
                        for (let i = 0; i < elements.length; i++) {
                            elements[i].classList.toggle('onOff');
                            elements[i].classList.toggle('onYellow');
                        }
                    } else {
                        for (let i = 0; i < elements.length; ++i) {
                            elements[i].classList.toggle('onOff');
                            elements[i].classList.toggle('onYellow');
                        }
                    }

                }, flashTime);

            }
            //turn off
            setTimeout(() => {

                for (var i = 0; i < elements.length; ++i) {
                    elements[i].classList.toggle('onOff');
                    elements[i].classList.toggle('st1');

                }

            }, timeOutAfterblink);

        //turn on 
        setTimeout(() => {
            for (let i = 0; i < elements.length; ++i) {
                elements[i].classList.toggle('onYellow');
                elements[i].classList.toggle('st1');
            }
        }, timeOutAfterOff);

    }, sumTimes);
   },timeOn);
}

blink(document.querySelectorAll('.st1'), 5000, 8000, 200, 5000);