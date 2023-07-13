const tButton = $('.tab-button');
const tContent = $('.tab-content');
let numOfTabs = $('.tab-button').length;

//for loop로 클래스 제거 및 부착
//그렇지만 event listener쓸때마다 RAM 용량을 차지하기때문에, event bubbling을 활용해 event listener하나만 사용하는게 효과적이다
// for(let i = 0; i < numOfTabs; i++){
//     tButton.eq(i).on('click', function(){
//         openTab(i)
//     })
// }


//html에 자료 몰래 저장하는방법:
//data-자료이름자유롭게작명="값"
//몰래 저장된 자료값 불러오는 법:
//셀렉터.dataset.자료이름

$(".list").click(function(e){
    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     openTab(0);
    // }
    openTab(e.target.dataset.id)
})


function openTab(i){
    tButton.removeClass('orange');
        tButton.eq(i).addClass('orange');
        tContent.removeClass('show');
        tContent.eq(i).addClass('show');
}