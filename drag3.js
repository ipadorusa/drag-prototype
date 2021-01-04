const log = console.log;


function drag(wrap, item) {
    this.wrap = $(wrap);
    this.item = $(item);


    var iTop = $(this).position().top;
    
    log(this.wrap, this.item)
}


drag('#list', '.drag-item.able');