class langClass{
    lang = 'en';
    setLang(lang){
        this.lang = lang;
    }
    getLang(){
        return this.lang;
    }
}
var lang = new langClass();
export default lang;