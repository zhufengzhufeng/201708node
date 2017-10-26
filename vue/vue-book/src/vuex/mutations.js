import * as Types from './mutation-types';
export default { // []会将里面的内容作为变量
  [Types.ADD_COLLECT](state,book){ // {id:,book,}
    // 判断当前state中的collects中是否包含id和我要添加的id相同的如果有则取消push
    let flag = state.collects.some(item=>item.id===book.id);
    if(flag) return; //如果存在了则return
    state.collects.push(book);
    localStorage.setItem('c',JSON.stringify(state.collects))
  },
  [Types.REMOVE_COLLECT](state){ // 删除

  }
}
