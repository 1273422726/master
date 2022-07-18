import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
  search = ()=>{
    // const {value} = this.keyWordElemnt;  //结构赋值 常规
    // const {keyWordElemnt} = this  //结构赋值2
    const {keyWordElemnt:{value:keyWord}} = this //连续结构赋值+ 重命名
    this.props.updateAppState({
      isFinite:false,isLoading:true
    })
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        // console.log('成功请求',response.data);
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error =>{
        console.log({isLoading:false,err:error.message});
      }
    )
  }
  render() {
    return (
      <div>
         <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c=> this.keyWordElemnt = c } type="text" placeholder="输入关键词搜索"/>&nbsp;<button onClick={this.search}>搜索GitHUb用户</button>
          </div>
        </section>
      </div>
    )
  }
}
