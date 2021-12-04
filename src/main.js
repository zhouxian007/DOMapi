// const div = dom.create("<div>newDiv</div>");
// const div1 = dom.create("<div>newDiv1</div>");
// const div2 = dom.create("<div id='parent'></div>");
// const div3 = dom.empty(window.em);
// console.log(div);
// dom.after(test,div);
// dom.before(test,div1);
// dom.wrap(test,div2);
// console.log(div3);
// dom.attr(test,'title','hi,i am zx')
// const titles = dom.attr(test,'title')
// console.log(`title:${titles}`)

// dom.text(test,'你好，这是新的内容a a a ')
// dom.text(test)

// dom.style(test,{border:'1px red solid',color:'blue'})
// console.log(dom.style(test,'border'))
// dom.style(test,'border','1px solid black')

// dom.class.add(test,'red')
// dom.class.add(test,'blue')
// dom.class.remove(test,'blue')
// console.log(dom.class.has(test,'blue')) 

// const fn = ()=>{
// console.log('点击了')
// }
// dom.on(test,'click' ,fn)
// dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)

const test2 = dom.find('#test2')[0]
console.log(dom.find('.red',test2)[0])

console.log( dom.parent(test))

console.log( dom.children(test))

console.log(dom.siblings(dom.find('#e2')[0]))

console.log(dom.next(dom.find('#e2')[0]))

console.log(dom.previous(dom.find('#e2')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

console.log(dom.index(dom.find('#s2')[0]))