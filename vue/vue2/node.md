## 新加文本格式
- 在文件右击 选择edit file template-> + -> 名字和扩展名
- filters
- assign
- vue中哪些事件修饰符
    - 键盘修饰符
    - .stop 阻止冒泡修饰符 e.stopPropagation || cancelBubble = true;
    - .prevent 阻止默认行为 e.preventDefault returnValue = false;
    - .capture 捕获行为 addEventListener('click',fn,true)
    - .self 这个事件只在自己身上触发 e.target || e.srcElement
    - .once 绑定触发一次

- v-bind
    - :class
    - :style
- computed (和data是平级的)
- watch
- method

- h5
- draggable="true"
- e.dataTransfer.setDragImage()
- dragstart
- dragover 阻止dragover 否则不会触发drop
- drop

## ref 引用