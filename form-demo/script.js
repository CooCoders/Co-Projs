const labels = document.querySelectorAll('.form-control label')
/*
  label 标签中本身只有文本(innerText) 首先获取文本 
  然后将 split 得到的字母插入到 span 标签中
  让每个 span 的动画执行依次延迟50ms
*/
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})