class FooterComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
            
        this.state={
           
        }
    }
    getClassName(){
        if(this.props.isFromShow===123){
            return 'footer'
        }else if(!this.props.isFromShow){return 'footer show'}else{
            return 'footer hidden'
        }
    }
    render(){
        return (
            
            <div className={this.getClassName()}>
                <ul>
                    <li className="li1"><a href="#/home"><span className="s">首页</span><span className="iconfont icon-you"></span></a></li>
                    <li><a href="#/movie"><span className="s">影片</span><span className="iconfont icon-you"></span></a></li>
                    <li><a href="#/movies"><span className="s">影院</span><span className="iconfont icon-you"></span></a></li>
                    <li><a href="#/store"><span className="s">商城</span><span className="iconfont icon-you"></span></a></li>
                    <li><a href="#/my"><span className="s">我的</span><span className="iconfont icon-you"></span></a></li>
                    <li><a href="#/card"><span className="s">买座卡</span><span className="iconfont icon-you"></span></a></li>
                </ul>
            </div>

        )
    }
}
//定义默认属性
FooterComponent.defaultProps={

}



export default FooterComponent


