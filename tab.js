const tButton = $('.tab-button');
const tContent = $('.tab-content');
let numOfTabs = $('.tab-button').length;

for(let i = 0; i < numOfTabs; i++){
    tButton.eq(i).on('click', function(){
        tButton.removeClass('orange');
        tButton.eq(i).addClass('orange');
        tContent.removeClass('show');
        tContent.eq(i).addClass('show');
    })
}
