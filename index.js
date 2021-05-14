class Formatter {
  //add static methods here

  static capitalize(string){
    let newstring = string.split("")
    return newstring[0].toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string){
    return string.replace(/[^A-Z\a-z\- ']/g,'');
  }

  static titleize(string){
    let notOkayArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newArray = []
    let newString = string.split(" ")
    for (const i in newString){
      if (notOkayArray.includes(newString[i]) && i >= 1){
        newArray.push(newString[i])
      } else {
        let cap = this.capitalize(newString[i])
        newArray.push(cap)
      }
    }
    return newArray.join(" ")
  }
}

