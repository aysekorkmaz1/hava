// zaman dilimini kullanarak biçimlendirilmiş bir tarih ve saat bilgisini döndüren fonksiyon
function convertTimeStamp(timeStamp, timezone) {
  // zaman dilimini saat cinsinden dönüştürür (saniyeden saate)
  const convertTimezone = timezone / 3600;
  // yeni bir tarih nesnesini oluştur
  const date = new Date(timeStamp * 1000);
  // tarih ve saat bilgisi için seçenekleri belirle
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`, // zaman dilimini belirleme
    hour12: true, // 12 saat formatında gösterilsin mi
  };
  // tarihi ve saati kullanıcıya dost bir formatte döndürür
  return date.toLocaleString("en-US", options);
}
// ülke kodunu ülke adına çeviren fonksiyon
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  // ülke kodunu alına bu "Intl.DisplayNames" örneği kullanarak ülke adına dönderir
  console.log(regionNames.of(country));
  return regionNames.of(country);
}

export { convertTimeStamp, convertCountryCode };
/*
    * Intl.DisplayNames: Javascriptte uluslararası dil ve bölge adlarına 
    * çevirmek için kullanılan bir API'dir

    * Intl:Internationalization
    * DisplayNames
*/