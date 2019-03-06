//--** SkillTree Start**--//

// Data
const skillData = {
    'HTML':{
        'skillItemimg' : '../../images/html-logo.png',
        'proficiency' : 'master',
        'percentage' : '60%',
        'profiWord' : 'HTML / HTML5 ( 擅長 )',
        'explain' : '能有效率的使用語意化標籤。'
    },
    'CSS':{
        'skillItemimg' : '../../images/css-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '50%',
        'profiWord' : 'CSS 3 / SCSS ( 熟悉 )',
        'explain' : '能撰寫語意化標籤、排版、flexbox。' 
    },
    'RWD':{
        'skillItemimg' : '../../images/rwd-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '50%',
        'profiWord' : 'Responsive Web Design ( 熟悉 )',
        'explain' : '能手刻出自適應網頁設計。' 
    },
    'JavaScript':{
        'skillItemimg' : '../../images/javascript-logo.png',
        'proficiency' : 'familiar',
        'percentage' : '50%',
        'profiWord' : 'JavaScript ( 熟悉 )',
        'explain' : '熟悉DOM模組、 this 、閉包、 AJAX等概念。' 
    },
    'Vue.js':{
        'skillItemimg' : '../../images/vue-logo.png',
        'proficiency' : 'common',
        'percentage' : '20%',
        'profiWord' : 'Vue.js ( 略懂 )',
        'explain' : '初步學習  v-model、v-on等。' 
    },
}

// DOM
const skillTreeUL = document.querySelector('.skillTree>ul');

// Bulid SkillTree
for(const key in skillData){
    const img = skillData[key]['skillItemimg'];
    const profiWord = skillData[key]['profiWord'];
    const explain = skillData[key]['explain'];
    
    skillTreeUL.innerHTML +=`
    <li>
        <div class="skillItem ${key}">
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

for(let i = 0; i < skillTreeLi.length; i++){
    const liProficiency = skillTreeLi[i].querySelector('.proficiency');

    liProficiency.addEventListener('mouseenter',function(e){
        // 兄弟節點，取消Hover
        const otherLi = this.parentNode.parentNode.children;
        for(let i = 0; i < otherLi.length; i++){
            otherLi[i].lastElementChild.style.display = 'none';
        }
        //該節點，開啟Hover
        this.parentNode.lastElementChild.style.display = 'inline';
    },false)
};

//--** SkillTree End **--//