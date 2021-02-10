import { Component } from 'react';

class Toc extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log("call shouldComponentUpdate render");
    return !(this.props.data === newProps.data);
  }
    render(){
      console.log('Toc render');
      var lists=[];
      var data = this.props.data;
      var i=0;
     while(i < data.length){
         lists.push(
           <li key={data[i].id}>
             {/* e.target.dataset */}
             <a href={"/content/"+data[i].id} 
             data-id={data[i].id} 
             onClick={function(e){
               e.preventDefault();
               this.props.onChangePage(e.target.dataset.id);
               }.bind(this)}>
                 {data[i].title}
              </a>
              {/* bindの引数でidを渡す、bindから渡す引数は第1引数になる */}
             {/* <a href={"/content/"+data[i].id+".html"} data-id={data[i].id} onClick={function(id, e){
               e.preventDefault();
               this.props.onChangePage(id);
              }.bind(this, data[i].id)}>{data[i].title}
           </a> */}
           </li>
         );
         i = i +1;
     }

      return (
        <nav>
              <ul>
                 {lists}
              </ul>
        </nav>
      );
    }
  }

  export default Toc;