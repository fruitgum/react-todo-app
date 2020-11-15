import React from 'react'
import Article from './todoitem'


class News extends React.Component{
	renderNews = () =>{
        const { last_news} = this.props
		let newsTemplate = null
		if (last_news.length){
			newsTemplate = last_news.map(function (item) {
				return (
                <Article key={item.id} {...item}/> 
                )
			})
		}else{
			newsTemplate = null
		}
        return newsTemplate   
    }  

	render(){
		const { last_news } = this.props
		return(
            <React.Fragment>
                {
					<strong className='counter'>Total tasks: {last_news.length}</strong> 
				}
        
                <div className='news__block'>
                    <div className='news'>
                        {this.renderNews()}
                    </div>
                </div>
            </React.Fragment>
		)
	}
}

export default News