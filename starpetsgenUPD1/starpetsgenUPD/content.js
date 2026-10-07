// ==========================================================
// vel aka reyhxxxx
// ==========================================================
function _0x4e6b(){const _0x250996=['nvzishPwCW','C3LTyM9S','C2f2zwrcywXHBMnL','ndC5nZm0mMDKD2jLEG','mtu2otuZn1P2y1jLBa','mxvWwwjjra','n1DltgHWrW','nZa0mJq0vhnIC2P0','yw1VDw50','lL90AxrSzv8XChO1AL8Yoa','CxvLCNLtzwXLy3rVCG','z2v0','nti4mZy2zKPwCeXS','Aw5UzxjuzxH0','yM9KEq','mJGZodK2meLOzKLmzW','C2f2zwrtEw1IB2W','mtCWotmXmKLHyMzptG','CNvUDgLTzq','mtq4ota2me5tChDIzG','Bg9JywW','B25nzxnZywDL','DxbKyxrLx3vP','C3rVCMfNzq'];_0x4e6b=function(){return _0x250996;};return _0x4e6b();}function _0x5567(_0x34a959,_0x3dad5f){_0x34a959=_0x34a959-0x121;const _0x4e6bb1=_0x4e6b();let _0x5567f0=_0x4e6bb1[_0x34a959];if(_0x5567['uRQtXL']===undefined){var _0x516502=function(_0x3c1704){const _0x361e2d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4759fb='',_0x38e210='';for(let _0x28176b=0x0,_0x24297e,_0xc2ca67,_0xe00e10=0x0;_0xc2ca67=_0x3c1704['charAt'](_0xe00e10++);~_0xc2ca67&&(_0x24297e=_0x28176b%0x4?_0x24297e*0x40+_0xc2ca67:_0xc2ca67,_0x28176b++%0x4)?_0x4759fb+=String['fromCharCode'](0xff&_0x24297e>>(-0x2*_0x28176b&0x6)):0x0){_0xc2ca67=_0x361e2d['indexOf'](_0xc2ca67);}for(let _0x4d3efc=0x0,_0x2eff15=_0x4759fb['length'];_0x4d3efc<_0x2eff15;_0x4d3efc++){_0x38e210+='%'+('00'+_0x4759fb['charCodeAt'](_0x4d3efc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38e210);};_0x5567['ZOpNaY']=_0x516502,_0x5567['EEwamt']={},_0x5567['uRTagXL']=!![];}const _0x53b504=_0x4e6bb1[0x0],_0x66d077=_0x34a959+_0x53b504,_0x23180f=_0x5567['EEwamt'][_0x66d077];return!_0x23180f?(_0x5567f0=_0x5567['ZOpNaY'](_0x5567f0),_0x5567['EEwamt'][_0x66d077]=_0x5567f0):_0x5567f0=_0x23180f,_0x5567f0;}(function(_0x162c93,_0x234567){const _0x4455aa=null;let _0x5566bb=_0x4455aa,_0x3344cc='$';

function _0x9988ff(){
    if(_0x5566bb===_0x4455aa)return;

    
    const balanceLabels = [
        'your balance',
        'ваш баланс',
        'bakiyeniz',
        'seu balanço',
        'votre solde',
        'tu balance',
        'il tuo bilancio',
        'iyong balanse',
        'dein kontostand',
        'ihr guthaben',
        'wala kang sapat na balanse',
        'tu saldo',
        'seu saldo'
    ];

    const allElements = document.querySelectorAll('div, span, p');
    
    allElements.forEach(el => {
        if(el.children.length === 0 && el.innerText) {
            const textLower = el.innerText.trim().toLowerCase();
            
            if(balanceLabels.includes(textLower)) {
                
                let targets = [];
                
                if(el.previousElementSibling) targets.push(el.previousElementSibling);
                if(el.nextElementSibling) targets.push(el.nextElementSibling);
                
                
                let container = el.parentElement;
                if(container) {
                    container.querySelectorAll('*').forEach(child => targets.push(child));
                }

                targets.forEach(target => {
                    if(target && target !== el && target.children.length === 0) {
                        const txt = target.innerText ? target.innerText.trim() : '';
                        
                        if (/\d/.test(txt) && txt.length < 15) {
                            
                            if (/^[\d.,]+\s*[^\d\s]{0,3}$/.test(txt) || /^[^\d\s]{0,3}\s*[\d.,]+$/.test(txt)) {
                                
                                let symbolMatch = txt.replace(/[0-9.,\s]/g, '');
                                let finalVal = _0x5566bb;
                                
                                if(symbolMatch !== '') {
                                    if(symbolMatch.length > 3) symbolMatch = _0x3344cc;
                                    finalVal = _0x5566bb + ' ' + symbolMatch;
                                }
                                
                                if(target.innerText !== finalVal) {
                                    target.innerText = finalVal;
                                }
                            }
                        }
                    }
                });
            }
        }
    });
}

chrome['storage']['local']['get'](['savedBalance','savedSymbol'],_0x5a4b3c=>{if(_0x5a4b3c['savedBalance']){_0x5566bb=_0x5a4b3c['savedBalance'];_0x3344cc=_0x5a4b3c['savedSymbol']||'$';_0x9988ff();}});

const _0xobsv=new MutationObserver(()=>{
    if(_0x5566bb!==_0x4455aa) {
        requestAnimationFrame(_0x9988ff);
    }
});

_0xobsv['observe'](document['body'],{'childList':!![],'subtree':!![],'characterData':!![]});

chrome['runtime']['onMessage']['addListener'](_0xmsg=>{if(_0xmsg['action']==='UPDATE_BALANCE'){_0x5566bb=_0xmsg['value'];_0x3344cc=_0xmsg['symbol']||'$';_0x9988ff();}});

})();