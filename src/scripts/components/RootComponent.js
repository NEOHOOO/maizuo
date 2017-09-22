

import HeadComponent from './HeadComponent'
import FooterComponent from './FooterComponent'

class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          isFromShow:123
        }
    }
    componentWillMount(){
        
    }
    ToggleFrom(){
        this.setState({
            isFromShow:!this.state.isFromShow
        })
    }
    render(){
        let {isFromShow} = this.state
        return (
            <div className="full-height">
                <HeadComponent ToggleFrom={this.ToggleFrom.bind(this)}/>
                {this.props.children}
                <FooterComponent isFromShow={isFromShow}/>
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={

}



export default RootComponent