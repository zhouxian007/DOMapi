window.dom = {
    create(string){
         let container = document.createElement('template')
         container.innerHTML = string.trim();
         return container.content.firstChild;
    },//用于创建节点

    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling);
    },//用于创建弟弟节点

    before(node,node2){
        node.parentNode.insertBefore(node2,node);
    },//用于创建哥哥节点

    append(parent,node){
        parent.appendChild(node)
    },//用于创建子节点

    wrap(node,parent){
        dom.before(node,parent);
        dom.append(parent,node);
    },//用于新增父节点

    remove(node){
        node.parentNode.removeChild(node)
        return node
    },//用于删除节点

    empty(node){
        let array=[]
        let x=node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x=node.firstChild
        }
        return array
    },//用于删除自己意外下面的所有子节点

    attr(node,name,value){    //重载
        if(arguments.length===3){
            node.setAttribute(name,value)

        }else{

        return  node.getAttribute(name)
        }
        
    },
    text(node,string){
        if(arguments.length===2){
            if('innerText' in node){  //判断浏览器有没有
            node.innerText=string  //ie
            }else{
                node.textContent = string  //firefox或者chrome
            }  
        }else if(arguments.length===1){
                return node.innerText
        }else{
                return node.textContent
        }
        
    },
    html(node,string){
        if(arguments.length===2){
            node.innerHTML=string
        }else if(arguments.length===1){
           return node.innerHTML=string
        }
        
    },
    style(node,name,value){
        if(arguments.length===3){
            //dom.style(div,'color','red')
            node.style[name]=value
        }else if(arguments.length===2){
            if(typeof name ==='string'){
                //dom.style(div,'color')
               return node.style[name]
            }else if(name instanceof Object){
                //dom.style(div,{color:'red'})
               const object = name
                for(let key in object){
                //key: border/color
                //node.style.border=...
                //node.style.color=...
                node.style[key]= object[key]
                }
           }
        }
    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node, className){
          return  node.classList.contains(className)
        }
    },
    on(node, eventName,fn){
        node.addEventListener(eventName,fn)
    },//添加函数事件监听
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },//删除函数事件监听

    find(selector, scope){
        return (document || scope).querySelectorAll(selector)
    },//用于获取标签和标签们

    parent(node){
        return node.parentNode
    },//获取父元素

    children(node){
        return node.children

    },//获取子元素

    siblings(node){
    return  Array.from(node.parentNode.children).filter(n=>n!==node)
    },//获取兄弟姐妹元素

    next(node){
        let x = node.nextSibling
        while(x && x.nodeType===3){
            x = x.nextSibling
        }
        return x
    },//获取下一个（弟弟）元素

    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType===3){
            x = x.previousSibling
        }
        return x
    },//获取上一个（哥哥）元素

    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i = 0; i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i
    },

};
