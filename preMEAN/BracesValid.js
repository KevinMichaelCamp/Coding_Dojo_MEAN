function bracesValid(str){
  let stack = []
  let open = ['(', '{', '[']
  let close = [')', '}', ']']

  for (var i = 0; i < str.length; i ++) {
    if (open.includes(str[i])) {
      stack.push(str[i])
    }
    else if (close.includes(str[i])) {
      let pos = close.indexOf(str[i])
      if (stack.length > 0 && open[pos] == stack[stack.length -1]){
        stack.pop()
      }
      else {
        return false
      }
    }
  }
  if(stack.length == 0){
    return true
  }
  return false
}

console.log(bracesValid("{{()}}[]"))
console.log(bracesValid("{(})"));
console.log(bracesValid("W(a{t}s[o(n{ c}o)m] ) h[e{r}e]!"));
