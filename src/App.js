import { Component } from 'react';

class Nav extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     list:[]
  //   }
  // }
  
  render(){
    let listTag = [];
    for(let i = 0; i < this.props.list.length; i++){
      let li = this.props.list[i];
      listTag.push(
      <li key={li.id}>
        <a href={li.id} data-id={li.id} onClick={function (e) {
          e.preventDefault();
          console.log("trigger");
          this.props.onClick(e.target.dataset.id);
        }.bind(this)}>
          {li.title}
        </a></li>
      )
    }
    return(
        <nav>
          <ul>
            {listTag}
          </ul>
        </nav>
        )
  }
}

class Article extends Component{
  render(){
    return(
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
    )
  }
}

class NowLoading extends Component{
  render(){
    return(
      <div>Now Loading......</div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:{
        items:[],
        isLoading:false
      },
      article:{
        item:{title:'Welcome', desc:'Hello, React & Ajax'},
        isLoading:false
      }
    }
  }

  componentDidMount(){
    let newList = Object.assign({}, this.state.list, {isLoading:true});
    this.setState({list:newList});
    fetch('list.json')
    .then(function (result) {
      return result.json();      
    })
    .then(function (json) {
      console.log(json);
      this.setState({list:{
        items:json,
        isLoading:false
      }});      
    }.bind(this))
  }
  
  render(){
    let Navtag= null;
    if(this.state.list.isLoading){
      Navtag= <NowLoading></NowLoading>
    }else{
      Navtag=<Nav onClick={function (id) {
        console.log("APP id:",id);
        let newArticle = Object.assign({}, this.state.article, {isLoading:true});
        this.setState({article:newArticle});
        fetch(id+'.json')
        .then(function (result) {
          return result.json();
        })
        .then(function (json) {
          console.log("id.json", json);
          this.setState({article:{
            item:json,
            isLoading:false
          }
          });
        }.bind(this))
        
      }.bind(this)}
      list={this.state.list.items}></Nav>

    }
    let ArticleTag = null;
    if(this.state.article.isLoading){
      ArticleTag = <NowLoading></NowLoading>;
    }else{
      ArticleTag = <Article title={this.state.article.item.title} desc={this.state.article.item.desc}></Article>;
    }
    return(
      <div className="App">
        <h1>WEB</h1>
        {Navtag}
        {ArticleTag}
      </div>
    );
  }
}

export default App;
