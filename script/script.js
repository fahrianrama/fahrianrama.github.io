module.exports= {
  setNav : function setNav(req){
    const fullUrl = req.originalUrl;
    let current = "";
    switch(fullUrl){
      case "/":
        current = "beranda";
        break;
      case "/jobdesk":
        current = "jobdesk";
        break;
      case "/kegiatan":
        current = "kegiatan";
        break;
      case "/tentang":
        current = "tentang";
        break;
    }
    return current;
  }
}
