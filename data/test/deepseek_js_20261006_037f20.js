/* ★ التعديل 9: ملف سكشن مستقل لكل مادة + Cache لكل مادة */
var secState = {view:'lecture', inst:null, secId:null};
var _secData = null, _secErr = '';
var _secDataBySubject = {};       /* cache: slug → array */
var _secPromisesBySubject = {};

var SEC_MAT = [
  ['file','📄','ملف السكشن','فتح'],
  ['exercises','📝','التمارين','فتح'],
  ['solution','✅','الحل النموذجي','فتح'],
  ['recording','🎥','تسجيل السكشن','مشاهدة']
];
var SEC_STATUS = {soon:'قريبًا', unavailable:'غير متاح', available:'متاح'};

function secEl(t,c,x){ var e = document.createElement(t); if(c) e.className = c; if(x != null) e.textContent = x; return e; }
function secUrl(u){ return (typeof u === 'string' && /^https:\/\/[^\s]+$/i.test(u.trim())) ? u.trim() : null; }

function secFileForSubject(meta){
  if(meta && typeof meta.sectionsFile === 'string' && meta.sectionsFile.trim()) return meta.sectionsFile.trim();
  if(meta && meta.slug) return 'data/sections-' + meta.slug + '.json';
  return 'data/sections.json'; /* fallback قديم */
}

function secLoad(){
  var meta = SUBJECTS_INDEX[currentSubject];
  if(!meta || !meta.slug) return Promise.reject(new Error('NO_SLUG'));
  var slug = meta.slug;

  if(_secDataBySubject[slug]){
    _secData = _secDataBySubject[slug];
    return Promise.resolve(_secData);
  }
  if(_secPromisesBySubject[slug]) return _secPromisesBySubject[slug];

  var path = secFileForSubject(meta);
  _secPromisesBySubject[slug] = fetch(path, {headers:{Accept:'application/json'}})
    .then(function(r){
      if(r.status === 404) throw new Error('NOFILE');
      if(!r.ok) throw new Error('HTTP');
      return r.json();
    })
    .then(function(j){
      if(!j || !Array.isArray(j.sections)) throw new Error('BAD');
      var arr = j.sections.filter(function(x){
        return x && typeof x === 'object' &&
          typeof x.subject === 'string' &&
          (typeof x.lecture === 'string' || typeof x.lectureId === 'string') &&
          typeof x.instructorId === 'string' && x.instructorId &&
          typeof x.instructorName === 'string' && x.instructorName.trim();
      });
      _secDataBySubject[slug] = arr;
      _secData = arr;
      return arr;
    })
    .catch(function(e){
      delete _secPromisesBySubject[slug];
      throw e;
    });

  return _secPromisesBySubject[slug];
}

/* ★ التعديل 9: إعادة تعيين cache العرض عند تغيير المادة */
function secResetForSubject(){
  var meta = SUBJECTS_INDEX[currentSubject];
  if(!meta) return;
  _secData = _secDataBySubject[meta.slug] || null;
  _secErr = '';
  _secFailAt = 0;
}