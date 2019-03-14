// --**Data**--//
const skillData = {
    'HTML':{
        'skillItemimg' : './images/html-logo.png',
        'proficiency' : 'master',
        'percentage': '60%',
        'percentagePhone' : '80%',
        'profiWord' : 'HTML / HTML5<br>( 擅長 )',
        'explain' : '能有效率的使用語意化標籤。'
    },
    'CSS':{
        'skillItemimg' : './images/css-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '50%',
        'percentagePhone' :'70%',
        'profiWord' : 'CSS 3 / SCSS<br>( 熟悉 )',
        'explain' : '能撰寫語意化標籤、排版、flexbox。' 
    },
    'RWD':{
        'skillItemimg' : './images/rwd-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '50%',
        'percentagePhone' :'70%',
        'profiWord' : 'RWD<br>( 熟悉 )',
        'explain' : '能手刻出自適應網頁設計。' 
    },
    'JavaScript':{
        'skillItemimg' : './images/javascript-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '50%',
        'percentagePhone' :'70%',
        'profiWord' : 'JavaScript<br>( 熟悉 )',
        'explain' : '熟悉DOM模組、 this 、閉包、 AJAX等概念。' 
    },
    'Vue.js':{
        'skillItemimg' : './images/vue-logo.png',
        'proficiency' : 'common',
        'percentage' : '20%',
        'percentagePhone' :'50%',
        'profiWord' : 'Vue.js<br>( 略懂 )',
        'explain' : '初步學習  v-model、v-on等。' 
    },
}
const workData = {
    'kaohsiungTraveling':{
        'name' : '高雄旅遊資訊',
        'github' : 'https://github.com/wenyo/kaohsiungTraveling',
        'web' : 'https://wenyo.github.io/kaohsiungTraveling/',
        'img' : './images/kaohsiungTraveling.png',
        'imgHover' : './images/kaohsiungTraveling-hover.png',
    },
    'BMI':{
        'name' : '身體質量指數計算',
        'github' : 'https://github.com/wenyo/BMI-website',
        'web' : 'https://wenyo.github.io/BMI-website/',
        'img' : './images/BMI.png',
        'imgHover' : './images/BMI-hover.png',
    },
    'RWD-HomeWork':{
        'name' : '六角西餐廳',
        'github' : 'https://github.com/wenyo/RWD-HomeWork',
        'web' : 'https://wenyo.github.io/RWD-HomeWork/',
        'img' : './images/RWD-HomeWork.png',
        'imgHover' : './images/RWD-HomeWork-hover.png',
    }
};

//--** Header CSS Start **--//
const banner = document.querySelector('.header .content');
banner.style.height =  (document.documentElement.clientHeight) + 'px';

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
        <div class="proficiency">${profiWord}</div>
        <div class="explain">${explain}</div>
    </li>`;

    const proficiencyClazz = document.querySelectorAll('.proficiency');
    const explainClazz = document.querySelectorAll('.explain');

    if(document.documentElement.clientWidth > 700){
        for(let i = 0 ; i < proficiencyClazz.length ; i++ ){
            proficiencyClazz[i].style.width += skillData[key].percentage;
            explainClazz[i].style.left += skillData[key].percentage;
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
            thisProficiency.parentElement.className='skillActive';
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
            thisProficiency.parentElement.classList ='skillActive';
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
    const imgHover = workData[key].imgHover

    workExample.innerHTML += `
    <li class=${key}>
        <div class="illustrate">
            <h4><a href="${web}">${name}</a></h4>
            <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>
            <a href="${web}" target="_blank"><i class="fas fa-link"></i></a>
        </div>
        <img class="imgOrg" src="${img}" alt="">
        <img class="imgHover" src="${imgHover}" alt="">
    </li>`;
};

// AddEventListener
const workExampleLi = workExample.querySelectorAll('li');
for(let i = 0; i < workExampleLi.length; i++){
    const imgOrg = document.querySelectorAll('.imgOrg');
    const imgHover = document.querySelectorAll('.imgHover');
    const illustrate = document.querySelectorAll('.illustrate');

    //該節點，開啟Hover
    workExampleLi[i].addEventListener('mouseenter',function(e){
        imgOrg[i].style.display = 'none';
        imgHover[i].style.display = 'inline';
        illustrate[i].style.display = 'inline';
    },false);

    // 離開節點，取消Hover
    workExampleLi[i].addEventListener('mouseleave',function(e){
        for(let j = 0; j < workExampleLi.length; j++){
            imgOrg[j].style.display = 'inline';
            imgHover[j].style.display = 'none';
            illustrate[j].style.display = 'none';
        }
    },false);
}