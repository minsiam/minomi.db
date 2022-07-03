const fs = require("fs");
minomi = {
  get: (function(item){
    return JSON.parse(fs.readFileSync(`./node_modules/minomi.db/minomi/${item}.json`, "utf8")).data;
  }),
  write: (function(item, data){
    fs.writeFile(`./node_modules/minomi.db/minomi/${item}.json`, `{"data":"${data}"}`, (err) =>{
      if(err) console.log(err);
      else {
        return;
      }
    })
  }),
  delete: (function(item){
    fs.unlinkSync(`./node_modules/minomi.db/minomi/${item}.json`);
  })
}
// Minomi.db All Rights Reserved, before copying contact Discord: minsiam#1793 or Email: minsiamyoongi@gmail.com
