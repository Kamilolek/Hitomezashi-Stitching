import React from "react";
import './index.css';
class Area extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var styles = {width: 40*this.props.tabLengthX+"px"}
        var board = [];
        var nr = 0;
        for (let i = 0; i < this.props.tabLengthY; i++) {
            for (let j = 0; j < this.props.tabLengthX; j++) {
                if (this.props.arrayX[i][j] === false && this.props.arrayY[i][j] === false) {
                    board[nr] = <div className="box1"></div>
                }else{
                    if (this.props.arrayX[i][j] === true && this.props.arrayY[i][j] === false) {
                        board[nr] = <div className="box3"></div>
                    }else{
                        if (this.props.arrayX[i][j] === false && this.props.arrayY[i][j] === true) {
                            board[nr] = <div className="box2"></div>
                        }else{
                            if (this.props.arrayX[i][j] === true && this.props.arrayY[i][j] === true) {
                                board[nr] = <div className="box4"></div>
                            }
                        }
                    }
                }
                nr++;
            }      
        }
        return(
            <div id="container" style={styles}>
                {board}
            </div>
        );
    }
}
export default Area;