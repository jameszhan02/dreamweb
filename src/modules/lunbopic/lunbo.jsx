var style = require('./lunbo.less');
var ReactDOM = require('react-dom');
var React = require('react');
var data = require('./data.json');
var createClass = require('create-react-class');
var PropTypes = require('prop-types');
var LunBoControl = createClass({
    propsTypes : {
        defaultActiveIndex:PropTypes.number,
        interval:PropTypes.number,
        direction:PropTypes.oneOf['right','left','top','bottom'],
        number:PropTypes.number,
        boxStyle:PropTypes.string,
        imgWidth:PropTypes.number.isRequired,
        imgHeight:PropTypes.number.isRequired
    },
    getDefaultProps: function(){
        return {
            direction:'right',
            interval: 1000,
            boxStyle:'content'
        };
    },
    getInitialState : function(){
        return{
            activeIndex:1,
            offsetDistance:this.props.direction == 'right' || this.props.direction == 'left' ? -this.props.imgWidth : -this.props.imgHeight,
            pause:false,
            flag:true
        };
    },
    componentWillMount : function(){
        this.direction = this.props.direction === 'left' || this.props.direction === 'right'? 'x' : 'y';
    },
    componentDidMount : function(){
        this.autoPlay();
    },
    componentWillUnmount : function(){
        clearTimeout(this.timeOuter);
        clearInterval(this.timer);
    },
    autoPlay : function(){
        switch(this.props.direction){
        case 'right' : 
            this.timerOuter=setTimeout(this.playRight,this.props.interval);
            this.direction='x';
            break;
        case 'left'  : 
            this.timerOuter=setTimeout(this.playLeft,this.props.interval);
            this.direction='x';
            break;
        case 'top'   : 
            this.timerOuter=setTimeout(this.playLeft,this.props.interval);
            this.direction='y';
            break;
        case 'bottom': 
            this.timerOuter=setTimeout(this.playRight,this.props.interval);
            this.direction='y';
            break;
        };
    },
    directionHandle : function(){
        if(this.direction === 'y'){
            return {top : this.state.offsetDistance+'px',width : this.props.imgWidth,height : this.props.imgHeight*(this.props.number+2)};
        }else {
            return {left : this.state.offsetDistance+'px',width : this.props.imgWidth*(this.props.number+2),height : this.props.imgHeight};
        }
    },
    mouseHandle : function(e){
        if(e.type === 'mouseover'){
            this.setState({pause : true});
        }else if(e.type === 'mouseleave'){
            this.setState({pause : false});
            this.autoPlay();
        }
    },
    checkDots : function(index){
        var activeIndex;
        if(this.state.activeIndex === this.props.number+1){
            activeIndex = 1;
        }else if(this.state.activeIndex === 0){
            activeIndex = this.props.number;
        }else {
            activeIndex = this.state.activeIndex;
        }
        return index+1 === activeIndex? 'dots active' : 'dots';
    },
    dotsHover : function(index){
        clearInterval(this.timer);
        this.setState({activeIndex:index+1});
        this.position();
    },
    playRight: function(indexIn){
        if(this.state.flag){
            var index=indexIn?indexIn:this.state.activeIndex+1;
            this.setState({activeIndex:index});
            this.position();
        }
    },
    playLeft: function(indexIn){
        if(this.state.flag){
            var index=indexIn?indexIn:this.state.activeIndex-1;
            this.setState({activeIndex:index});
            this.position();
        }
    },
    position: function(){
        this.setState({flag:false});
        this.timer = setInterval(function(){
            if(this.direction === 'x'){
                var boxDistance = this.props.imgWidth;
            }else {
                var boxDistance = this.props.imgHeight;
            }
            var offsetDistance = this.state.offsetDistance;
            if(Math.abs(offsetDistance-(-boxDistance*this.state.activeIndex)) <= 0.09){
                offsetDistance = -boxDistance*this.state.activeIndex;
                clearInterval(this.timer);
                this.setState({flag:true});
                if(this.state.activeIndex > this.props.number){
                    offsetDistance = -boxDistance;
                    this.setState({activeIndex : 1});
                }else if(this.state.activeIndex === 0){
                    offsetDistance = -boxDistance*this.props.number;
                    this.setState({activeIndex : this.props.number});
                }
                this.setState({offsetDistance:offsetDistance});
                if(!this.state.pause){
                    this.autoPlay();
                }
            }else{
                offsetDistance = offsetDistance-(boxDistance*this.state.activeIndex-Math.abs(offsetDistance))/30;
                this.setState({offsetDistance:offsetDistance});
            }
        }.bind(this),10);
    },
    left: function(){
        var oldIndex=this.state.activeIndex;
        this.playLeft(oldIndex-1);
    },
    right: function(){
        var oldIndex=this.state.activeIndex;
        this.playRight(oldIndex+1);
    },
    render : function(){
        var _this = this;
        return (<div className={this.props.boxStyle} style={{width:this.props.imgWidth, height:this.props.imgHeight}} onMouseOver={this.mouseHandle} onMouseLeave={this.mouseHandle}>
            <span className="leftIcon" onClick={this.left}></span>
            <span className="rightIcon" onClick={this.right}></span>
            <div className="dots-wrap">
                {   
                    React.Children.map(this.props.children,function(elem,index){
                        return (<span className={_this.checkDots(index)} onMouseOver={_this.dotsHover.bind(_this,index)}></span>);
                    })
                }
            </div>
            <ul style={this.directionHandle()}>
                {this.props.children[this.props.number-1]}
                {this.props.children}
                {this.props.children[0]}
            </ul>
        </div>);
    }
});
var LunBoComponent = createClass({
    propsTypes : {
        lunboObject : PropTypes.object.isRequired,
        imgArray : PropTypes.array.isRequired,
        linkArray : PropTypes.array
    },
    render : function(){
        return (
                <LunBoControl interval={this.props.lunboObject.interval} number={this.props.lunboObject.number} boxStyle={this.props.lunboObject.boxStyle} imgWidth={this.props.lunboObject.imgWidth} imgHeight={this.props.lunboObject.imgHeight} direction={this.props.lunboObject.direction}>
                    {    
                        this.props.imgArray.map(function(item,index){
                            return <li key={index}><a href={this.props.linkArray[index]}><img width={this.props.lunboObject.imgWidth} height={this.props.lunboObject.imgHeight} src={item}/></a></li>;
                        }.bind(this))
                    }
                </LunBoControl>
        );
    }
});
module.exports = LunBoComponent;