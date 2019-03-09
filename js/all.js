// --**Data**--//
const skillData = {
    'HTML':{
        'skillItemimg' : './images/html-logo.png',
        'proficiency' : 'master',
        'percentage' : '70%',
        'profiWord' : 'HTML / HTML5 ( 擅長 )',
        'explain' : '能有效率的使用語意化標籤。'
    },
    'CSS':{
        'skillItemimg' : './images/css-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '60%',
        'profiWord' : 'CSS 3 / SCSS ( 熟悉 )',
        'explain' : '能撰寫語意化標籤、排版、flexbox。' 
    },
    'RWD':{
        'skillItemimg' : './images/rwd-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '60%',
        'profiWord' : 'Responsive Web Design ( 熟悉 )',
        'explain' : '能手刻出自適應網頁設計。' 
    },
    'JavaScript':{
        'skillItemimg' : './images/javascript-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '60%',
        'profiWord' : 'JavaScript ( 熟悉 )',
        'explain' : '熟悉DOM模組、 this 、閉包、 AJAX等概念。' 
    },
    'Vue.js':{
        'skillItemimg' : './images/vue-logo.png',
        'proficiency' : 'common',
        'percentage' : '30%',
        'profiWord' : 'Vue.js ( 略懂 )',
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
banner.style.height =  (window.screen.height - 200) + 'px';

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

    for(let i = 0 ; i < proficiencyClazz.length ; i++ ){
        proficiencyClazz[i].style.width += skillData[key].percentage;
    }

    for(let i = 0 ; i < explainClazz.length ; i++ ){
        explainClazz[i].style.left += skillData[key].percentage;
    }
}

// AddEventListener 
const skillTreeLi = document.querySelectorAll('.skillTree>ul>li');
const allProficiency = document.querySelectorAll('.proficiency');

for(let i = 0; i < skillTreeLi.length; i++){
    const thisProficiency = skillTreeLi[i].querySelector('.proficiency');

    //該節點，開啟Hover & CSS
    thisProficiency.addEventListener('mouseenter',function(e){
        this.parentNode.lastElementChild.style.display = 'inline';
        this.style.boxShadow = "2px 2px 6px #8e8e8e";
    },false);

    // 兄弟節點，取消Hover & CSS
    thisProficiency.addEventListener('mouseleave',function(e){
        for(let j = 0; j < skillTreeLi.length; j++){
            skillTreeLi[j].lastElementChild.style.display = 'none';
            allProficiency[j].style.boxShadow = "2px 2px 6px #ededed";
        }
    },false);
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
            <a href="${github}" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="${web}" target="_blank">
                <i class="fas fa-link"></i>
            </a>
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

    // 兄弟節點，取消Hover
    workExampleLi[i].addEventListener('mouseleave',function(e){
        for(let j = 0; j < workExampleLi.length; j++){
            imgOrg[j].style.display = 'inline';
            imgHover[j].style.display = 'none';
            illustrate[j].style.display = 'none';
        }
    },false);
}