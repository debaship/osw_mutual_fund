var language = {
  ru: {
    appTitle: "WebDGapJS: о нас",
    appdescrip: "Lorem ipsum dolor sit amet, conctetur adipiscing elit. Suspendisse magna ipsum, congue quis augue id, маттис коммодо эрос. Fusce tempus Tortor urna, sit amet lectus molestie rhoncus ut. Никаких батареек, клинический элемент, который мамы, салат Mauris уик-энд смеха, элемент, зарезервированный для стресса. Домашнее задание стресс чили, на гриле инвестировать в футбол у ворот этого утверждения. Стресс - это футбол или телевизор. К сожалению, жизнь в нем от боли. Сед распространяет среди своих членов учебники. Средне-вегетарианский перец чили, вультурируйте у этих ворот, члены «сейчас». Кто хочет разобраться в жизни на разминке. Donec sed иногда бывает кошек, а conquat eros egestas nec. Домашнее задание автомобили волейбол цена газовой подпитки. Свисти массового потребителя, который может быть самой большой пуговицей юбки. Suspendisse Suscipit dui nulla id tempor. Нет набора недвижимости беременным. Средний, белковый футбол можно инвестировать бесплатно. Phasellus ultrices nisi vulputate accumsan не сложны.",
    setflag: "../assets/flags/4x3/es.svg",
    ldwnload: "DESCARGAR",
    ldwnloadwin: "WINDOWS",
    ldwnloadwin32: "WINDOWS 32BIT",
    ldwnloadmac: "MAC",
    ldwnloadlin: "LINUX I832",
    ldwnloadlin64: "LINUX",
    ldwnloadc: "CROMADA",
    ldwnloadce: "EXTENSIÓN CROMADA",
    ldwnloada: "ANDROID",
    ldwnloadjp: "PLUGIN JAVASCRIPT",
    ldonate: "DONAR",
    ldonatepp: "DONAR CON PAYPAL",
    ldonatesc: "DONAR CON SQUARECASH",
    lcontribute: "CONTRIBUIR",
    lstore: "ALMACENAR",
    lrundemo: "Plugin de prueba",
    lgrabplugin: "Descargar Plugin"
  }
};


if (window.location.hash) {
  if (location.hash.substring(1) === "eng") {
    // remove all hash tags and reload page to default text
    window.location.href = window.location.toString().split(/\?|#/)[0];
  }
  else if (location.hash.substring(1) === "ru") {
    $("[data-language=setflag]").attr('src', language.ru.setflag);
    document.title = language.ru.appTitle;
    
    $("meta[name-description]").attr('content', language.ru.appdescrip);
    $("[data-language=appdescrip]").text(language.ru.appdescrip);
    $("[data-language=ldwnload]").text(language.ru.ldwnload);
    $("[data-language=ldwnloadwin]").text(language.ru.ldwnloadwin);
    $("[data-language=ldwnloadwin32]").text(language.ru.ldwnloadwin32);
    $("[data-language=ldwnloadmac]").text(language.ru.ldwnloadmac);
    $("[data-language=ldwnloadlin]").text(language.ru.ldwnloadlin);
    $("[data-language=ldwnloadlin64]").text(language.ru.ldwnloadlin64);
    $("[data-language=ldwnloadc]").text(language.ru.ldwnloadc);
    $("[data-language=ldwnloadce]").text(language.ru.ldwnloadce);
    $("[data-language=ldwnloada]").text(language.ru.ldwnloada);
    $("[data-language=ldwnloadjp]").text(language.ru.ldwnloadjp);
    $("[data-language=ldonate]").text(language.ru.ldonate);
    $("[data-language=ldonatepp]").text(language.ru.ldonatepp);
    $("[data-language=ldonatesc]").text(language.ru.ldonatesc);
    $("[data-language=lcontribute]").text(language.ru.lcontribute);
    $("[data-language=lstore]").text(language.ru.lstore);
    $("[data-language=lrundemo]").text(language.ru.lrundemo);
    $("[data-language=lgrabplugin]").text(language.ru.lgrabplugin);
  }
}

$('[data-callLang]').on('click', function() {
  //change flag to selected language
  $("[data-language=setflag]").attr('src', $(this).find('img').attr('src'));
  
  if ($(this).attr('data-callLang') === "eng") {
    window.location.href = window.location.toString().split(/\?|#/)[0];
    return false;
  }
  
  window.location.hash = $(this).attr('data-callLang')
  location.reload(true);
});
