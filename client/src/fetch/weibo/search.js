import { get } from '../get'; 

//热搜摘要数据
export function getHotSearchSummary() {
    const res = get('/api/weibo/hotSearchSummary');
    return new Promise((resolve,reject)=>{
    	res
		.then((res)=>{
			if(res.status===200){
	        	return res.json();
			}else{
				reject(res.status);
			}
	    })
	    .then((json)=>{
	    	resolve(json.cards);
	    })
	    .catch((e)=>{
	    	reject(e.toString());
	    })
    })
}

//热搜榜单数据
export function getHotSearchRanking() {
    const res = get('/api/weibo/hotSearchRanking');
    return new Promise((resolve,reject)=>{
    	res
		.then((res)=>{
			if(res.status===200){
	        	return res.json();
			}else{
				reject(res.status);
			}
	    })
	    .then((json)=>{
	    	resolve(json.cards);
	    })
	    .catch((e)=>{
	    	reject(e.toString());
	    })
    })
}

//搜索结果数据
export function getSearchResult(word) {
    const res = get('/api/weibo/search/result?word='+word);
    return new Promise((resolve,reject)=>{
    	res
		.then((res)=>{
			if(res.status===200){
	        	return res.json();
			}else{
				reject(res.status);
			}
	    })
	    .then((json)=>{
	    	if(json.cards[0].card_type==4){
	    		resolve(json.cards[0].title)
	    	}
	    	json.cards.map((item,index)=>{
	    		if(item.title==='实时热议'){
	    			resolve(item.card_group)
	    		}
	    	})
	    })
	    .catch((e)=>{
	    	reject(e.toString());
	    })
    })
}