<script type="text/javascript">
 const url = window.location.href;
const locale = url.split("/")[5];
const onlineGreeting, offlineGreeting;

//Specify the languages ​​available in our departments
const deptos = ["es","pt","fr","hi", "pl"];

$zopim(() => {
  $zopim.livechat.departments.filter(deptos)
})

//The code that is repeated is the chat widget script. I will save it in a function to call it later when I need it
const widgetZopim = () => {
  window.$zopim || ((d, s) => {
    var z = $zopim = (c) => {
      z._.push(c)
    }, $ = z.s =
      d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = (o) => {
        z.set.
          _.push(o)
      }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute('charset', 'utf-8');
    $.src = '//v2.zopim.com/?'; z.t = +new Date; $.
      type = 'text/javascript'; e.parentNode.insertBefore($, e)
  })(document, 'script');
}


//In the next section, I will change the remaining lines for the new function
if (locale === deptos[0]) {
  widgetZopim()
  onlineGreeting = "Hola, habla con nosotras";
  offlineGreeting = 'En este momento no podemos atenderte, deja tu mensaje y nos pondremos en contacto contigo';
  $zopim(function () {
    $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
    });
  });
}
else if (locale === deptos[1]) {
  widgetZopim()
  onlineGreeting = "Oi, fale com a gente";
  offlineGreeting = 'Neste momento, não podemos ajudá-lo, deixe sua mensagem e entraremos em contato com você';
  $zopim(function () {
    $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
    });
  });
}
else if (locale === deptos[2]) {
  widgetZopim()
  onlineGreeting = "Salut, parlez-nous";
  offlineGreeting = 'Laissez un message';
  $zopim(function () {
    $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
    });
  });
}
else if (locale === deptos[3]) {
  widgetZopim()
  onlineGreeting = "नमस्ते, हमारे साथ चैट करें";
  offlineGreeting = "अब हम आपकी सहायता नहीं कर सकते। कृपया एक संदेश छोड़ें, हम आपसे बाद में संपर्क करेंगे";
  $zopim(function () {
    $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
    });
  });
}
else if (locale === deptos[4]) {
  widgetZopim()
  onlineGreeting = "Cześć, Rozmawiaj z nami";
  offlineGreeting = "Teraz nie możemy ci pomóc. proszę zostawić wiadomość, skontaktujemy się z tobą później";
  $zopim(function () {
    $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
    });
  });
}
else {
  widgetZopim()
  onlineGreeting = "Hi ,chat with us";
  offlineGreeting = "Now we cannot assist you. please leave a message, we will contact you later";
  $zopim(function () {
    $zopim.livechat.setGreetings({
      'online': onlineGreeting,
      'offline': offlineGreeting
    });
  });
}
</script>
