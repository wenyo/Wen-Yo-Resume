//--** Header CSS Start **--//
let iHeightScreen = 0;
const iMinWidth = 900;
let iWidthScreen = 0;
const menu = document.querySelector('.menu')

function changeBannerHeight(){
    iHeightScreen = document.documentElement.clientHeight;
    iWidthScreen = document.documentElement.clientWidth;

    const banner = document.querySelector('.header .content');
    banner.style.height =  iHeightScreen + 'px';
    if( iWidthScreen < iMinWidth ){
        menu.classList.remove('notTop');
    }

}
changeBannerHeight();
checkMenuPos();
window.onresize = changeBannerHeight;

// listener for menu
function checkMenuPos(){
    if( iWidthScreen <= iMinWidth ){
        var iScrollY = window.scrollY;
        const hamberger_top = document.querySelector('.hamberger_top')

        if( !hamberger_top && iScrollY <= iHeightScreen ){
            menu.classList.add('hamberger_top')
        }else if( hamberger_top && iScrollY > iHeightScreen ){
            menu.classList.remove('hamberger_top')
        }
    }else{
        const notTop = document.querySelector('.notTop')
        if(!notTop && window.scrollY >= (iHeightScreen - 86)){
            menu.classList.add('notTop');
        }else if( notTop && window.scrollY < (iHeightScreen - 86)){
            menu.classList.remove('notTop');
        }        
    }


}
window.addEventListener('scroll', checkMenuPos);

// HamburderMenu
const hambergerIcon = document.querySelector('.hambergerIcon');
const menuUl = document.querySelector('.menu ul');
const strokes = document.querySelectorAll('.stroke');

hambergerIcon.addEventListener('click',function(e){
	for (let i = 0; i < strokes.length; i++) {
		let stroke = strokes[i];
        stroke.classList.toggle('open');}
    menuUl.classList.toggle('hamburgerMenu');         
},false)

//--** Header CSS End **--//


//--** SkillTree Start **--//

// Bulid SkillTree 
const skillTreeUL = document.querySelector('.skillTree>ul');
for(const key in skillData){
    const img = skillData[key].skillItemimg;
    const profiWord = skillData[key].profiWord;
    const explain = skillData[key].explain;
    
    skillTreeUL.innerHTML +=`
    <li>
        <div class="skillItem  ${key}">
            <img src="${img}">
        </div>
        <div class="proficiency">
            <span>${profiWord}</span>
            <div class="explain">${explain}</div>
        </div>
    </li>`;

    const proficiencyClazz = document.querySelectorAll('.proficiency');
    const explainClazz = document.querySelectorAll('.explain');

    if(document.documentElement.clientWidth > 700){
        for(let i = 0 ; i < proficiencyClazz.length ; i++ ){
            proficiencyClazz[i].style.width += skillData[key].percentage;
            explainClazz[i].style.left += skillData[key].percentage + 0.2;
        }
    }else{
        for(let i = 0 ; i < proficiencyClazz.length ; i++ ){
            proficiencyClazz[i].style.width += skillData[key].percentagePhone;
        }
    }
}


// AddEventListener 
const skillTreeLi = document.querySelectorAll('.skillTree>ul>li');
const allProficiency = document.querySelectorAll('.proficiency');

for(let i = 0; i < skillTreeLi.length; i++){
    const thisProficiency = skillTreeLi[i].querySelector('.proficiency');

    // clientWidth(500px)
    if(document.documentElement.clientWidth > 700){
        thisProficiency.addEventListener('mouseenter',function(e){
            //該節點，開啟Hover & CSS
            thisProficiency.parentElement.className =' skillActive';
        },false);
        thisProficiency.addEventListener('mouseleave',function(e){
            // 取消全部的 Hover
            for(let j = 0;j < skillTreeLi.length;j++){
                skillTreeLi[j].className = '';
            }
        },false);
    }else{
        thisProficiency.addEventListener('click',function(e){
            // 取消全部的 Hover
            for(let j = 0;j < skillTreeLi.length;j++){
                skillTreeLi[j].className = '';
            }
            //該節點，開啟Hover & CSS
            thisProficiency.parentElement.classList = 'skillActive';
        },false);
    }
};

//--** SkillTree End **--//


//--** Work Start**--//
const workExample = document.querySelector('.workExample');

// Bulid WorkExample 
for(const key in workData){
    const name = workData[key].name;
    const github = workData[key].github;
    const web = workData[key].web;
    const img = workData[key].img;
    const detail = workData[key].detail;
    const vHashtag = workData[key].hashtag;
    const otherDescribe = workData[key].otherDescribe ? workData[key].otherDescribe : '';
    const otherUrl = workData[key].otherUrl ? workData[key].otherUrl : '';
    
    let sHashtag = '';
    vHashtag.forEach( skill => {
        sHashtag += `<span>#${skill}</span>`;
    });

    workExample.innerHTML += `
    <li>
        <a href='${web}' target='_blank'><img src='${img}'></a>
        <div class='workInfo'>
            <div class='workTitle'>
                <div>${name}</div>
                <div class='workLink'>
                    <a href='${github}' target='_blank'><i class='fab fa-github'></i></a>
                    <a href='${web}' target='_blank'><i class='fas fa-link'></i></a>            
                </div>            
            </div>
            <div class='hashtag'>${sHashtag}</div>
            <p>${detail}</p>
            <p class='otherDescribe'><a href='${otherUrl}' target='_blank'>${otherDescribe}</a></p>
        </div>
    </li>`;
};

// nextPage
const sNextPage = document.querySelector('.nextPage i');
sNextPage.addEventListener( 'click', function(){
    window.scrollTo({
        top: iHeightScreen,
        behavior: 'smooth'
      });
});