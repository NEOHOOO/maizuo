class HeadComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            
        }
    }
    
    render(){
        let {ToggleFrom} = this.props
        return (


            <div className="header">
                <div>
                    <span className="iconfont icon-menu" id="s3" onClick={ToggleFrom}></span>
                    <span className="s1">卖座电影</span>
                    <span className="s2">北京<i className="iconfont icon-jiantou-down"></i></span>
                    <span className="iconfont icon-icon-test"></span>
                </div>
            </div>

        )
    }
}
//定义默认属性
HeadComponent.defaultProps={

}



export default HeadComponent