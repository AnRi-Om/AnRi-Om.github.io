    const options = {
        callback: function (swipedir, options) {
            alert("another " + JSON.stringify(options))
            //swipedir contains either "none", "left", "right", "top", or "down"
            if (swipedir == 'left') {
                options.onLeftEvent();
            }
            else if (swipedir == 'right') {
                options.onRightEvent();
            }
        },
        onLeftEvent:
            function () {
                alert('You just swiped left!' + activatedNumber)

                // TODO: учитывать что бы число было меньше длины 
                // TODO: Получать это с сервера
                //if (activatedNumber < motivatorList.length)
                activatedNumber++;

                //alert(activatedNumber);

            /*    ConstructMotivator(activatedNumber);
            }, onRightEvent:
            function () {
                alert('You just swiped right!' + activatedNumber)

                // -1 - tutorial identifcator, >0 - motivators
                if (activatedNumber > 0) activatedNumber--;

                //alert(activatedNumber);

                ConstructMotivator(activatedNumber);*/
            }
    }
    InitTouchSurface('swipe', options);
    SetFocusOnMotivator();
    RunMotivatorsLogic();

