function drag(obj, dragPoint) {
    var dragPoint = dragPoint || '',
        oBlock = $('.block-item'),
        checkList = [];

    $(obj).on('mousedown', dragPoint, function(e) {
        var that = this;        
        var sY = e.clientY;
        var pTop = $(this).position().top || 0;
        var tempMoveing = false;
        checkList = $(this).siblings(dragPoint);

        document.onmousemove = function(e) {
            var disY = pTop + e.clientY - sY;
            $(that).css({
                top: disY + 'px'
            });
            if (!tempMoveing) {
                oBlock.show();
                tempMoveing = true;
                $(that).css({
                    position: 'absolute',
                    'z-index': 100,
                    opacity: .5,
                    outline: '2px solid #09f'
                });
            }
             
            var insertTarget = checkPosition(checkList, that);
            
            if (insertTarget !== -1) {
                oBlock.insertBefore(insertTarget);
            } else {
                $(obj).append(oBlock);
            }

        };

        document.onmouseup = function(e) {
            if (that.releaseCapture) {
                that.releaseCapture();
            }
            if (tempMoveing) {
                tempMoveing = false;
                that.style = '';

                $(that).insertBefore(oBlock);
                oBlock.hide();
            }
            document.onmousemove = document.onmouseup = null;
        };
      return false;
    });
}
function checkPosition(list, target) {
    var result;
    $(list).each(function(index) {
        var iTop = $(this).position().top;
        var tTop = $(target).position().top;
        if (tTop <= iTop) {
            result = $(this);            
            return false;
        }
    });
    console.log(result)
    return result || -1;
}

drag('#list', '.drag-item.able');