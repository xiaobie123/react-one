import { get } from '../get'; 

//热门微博数据
export function getHotWeibo(pageno) {
    const res = get('/api/weibo/hot?pageno='+pageno);
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

//热门微博正文数据
export function getWeiboText(id) {
    const res = get('/api/weibo/text?id='+id);
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
	    	resolve(json.longTextContent);
	    })
	    .catch((e)=>{
	    	reject(e.toString());
	    })
    })
}

//微博评论数据
export function getWeiboComment(id,pageno=1) {
    const res = get('/api/weibo/comment?id='+id+'&pageno='+pageno);
    return new Promise((resolve,reject)=>{
    	res
		.then((res)=>{
			const json = res.json();
			if(res.status===200){
	        	resolve(json);
			}else{
				reject(res.status);
			}
	    })
	    .catch((e)=>{
	    	reject(e.toString());
	    })
    })
}

//微博赞数据
export function getWeiboLike(id,pageno=1) {
    const res = get('/api/weibo/like?id='+id+'&pageno='+pageno);
    return new Promise((resolve,reject)=>{
    	res
		.then((res)=>{
			if(res.status===200){
	        	resolve(res.json());
			}else{
				reject(res.status);
			}
	    })
	    .catch((e)=>{
	    	reject(e.toString());
	    })
    })
}