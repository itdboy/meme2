import React from 'react';

class MemeGernerator  extends React.Component{
 
    constructor(props){
        super(props);

        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  

    }

    componentDidMount(){
        //อ่านค่า api
         //แปลงเป็น json
           //เก็บไว้ใน memes
            //เก็บค่าไว้ใน state
        fetch("https://api.imgflip.com/get_memes") 
        .then(response => response.json()) 
        .then(response => {
            const{memes} = response.data; 
            this.setState({allMemeImgs: memes})
        })
    }
   

    handleChange = (event) => {
        //อ่่านตัวแปลที่รับจากหน้าจอ
        const{name,value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //ทำการอ่านค่าทั้งหมดใน imgs
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        //random url จากค่า random ที่ได้
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        // เปลียนค่า img จากการ random
        this.setState({randomImg: randMemeImg})
    }
 
 
    
 render(){
     return(
         <div>
        
             <form  className="meme-form" onSubmit={this.handleSubmit}>
             {/* ชื่อ topText ต้องตรงกับ state */}
                   <input type="text" name="topText" 
                   placeholder="Top Text"
                   value={this.state.topText}
                   onChange={this.handleChange} /> 
              {/*  ชื่อ bottomText ต้องตรงกับ state */}
                   <input type="text" name="bottomText" 
                   placeholder="Bottom Text"
                   value={this.state.bottomText}
                   onChange={this.handleChange} /> 
                   <button>Go</button>
             </form>
             <div className="meme">
                 <img src={this.state.randomImg}/>
                 <h2 className="top">{this.state.topText}</h2>
                 <h2 className="bottom">{this.state.bottomText}</h2>
             </div>
         </div>

         
     )
 }

}

export default MemeGernerator;