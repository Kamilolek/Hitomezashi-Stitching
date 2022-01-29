import React from 'react';
import ReactDOM from 'react-dom';
import Area from './Area';
import lang from './lang';
import languages from './languages.json'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lang: languages.English,
            word1: "",
            word2: ""
        };
        this.updateLang = this.updateLang.bind(this);
        this.updateLangState = this.updateLangState.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.generateArray = this.generateArray.bind(this);
    }
    updateLangState(lang){
        switch(lang){
            case "en":
                this.setState({lang: languages.English})
                break;
            case "pl":
                this.setState({lang: languages.Polish})
                break;
            case "01":
                this.setState({lang: languages.Binary})
                break;

        }
    }
    updateLang(event){
        lang.setLang(event.target.value);
        this.updateLangState(lang.getLang());
        ReactDOM.render(
            <React.StrictMode>
                <div className='main'>
                    <Form />
                </div>
            </React.StrictMode>,
            document.getElementById('root')
          );
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });

      }
    generateArray(event){
        var arrayX = [];
        var arrayY = [];
        const word1 = this.state.word1.toLowerCase();
        const word2 = this.state.word2.toLowerCase();
        for (let i = 0; i < word2.length; i++) {
            arrayX[i] = [];
        }
        for (let i = 0; i < word2.length; i++) {
            arrayY[i] = [];
        }
        for (let i = 0; i < word1.length; i++) {
            var isVowel = false;
            for (let k = 0; k < this.state.lang.vowels.length; k++) {
                if(word1[i] === this.state.lang.vowels[k]){
                    isVowel = true;
                }
            }
            for (let j = 0; j < word2.length; j++) {
                if(j%2 === 0){
                    arrayX[j][i] = isVowel
                }else{
                    arrayX[j][i] = !isVowel
                }
                
            }
            
        }
        for (let i = 0; i < word2.length; i++) {
            isVowel = false;
            for (let k = 0; k < this.state.lang.vowels.length; k++) {
                if(word2[i] === this.state.lang.vowels[k]){
                    isVowel = true;
                }
            }
            for (let j = 0; j < word1.length; j++) {
                if(j%2 === 0){
                    arrayY[i][j] = isVowel
                }else{
                    arrayY[i][j] = !isVowel
                }
                
            }
            
        }
        console.log(arrayY);
        console.log(arrayX);
        ReactDOM.render(
            <React.StrictMode>
                <div className='main'>
                    <Form />
                    <Area arrayX={arrayX} arrayY={arrayY} tabLengthX={word1.length} tabLengthY={word2.length}/>
                </div>
            </React.StrictMode>,
            document.getElementById('root')
          );
    }

    render(){
        
        return(
            <div>
                <table>
                    <tr>
                        <td><label>{this.state.lang.formLang}: </label></td><td><select onChange={this.updateLang}>
                    <option value='en'>English</option>
                    <option value='pl'>Polish</option>
                    <option value='01'>Binary</option>
                </select></td>
                    </tr>
                    <tr>
                        <td><label>{this.state.lang.form1txt}: </label></td><td><input type='text' name='word1' onChange={this.handleInputChange}></input></td>
                    </tr>
                    <tr>
                        <td><label>{this.state.lang.form2txt}: </label></td><td><input type='text' name='word2' onChange={this.handleInputChange}></input></td>
                    </tr>
                </table>
                <button onClick={this.generateArray}>{this.state.lang.formSubmit}</button>
            </div>
        );
    }
}
export default Form;