import { get } from '../get';

export function getWeatherData(city) {
    const result = get('/api/weather/?city='+city);
    return new Promise((resolve,reject)=>{
    	result
    	.then((res)=>{
    		if(res.status===200){
    			return res.json();
    		}else{
    			reject(res.status);
    		}
    	})
    	.then((json)=>{
    		return json.data;
    	})
    	.then((res)=>{
    		let weatherIcon;
            switch (res.forecast[0].type){
                case '多云': weatherIcon = 'icon-tianqi'
                break;
                case '阵雨': weatherIcon = 'icon-xue'
                break;
                case '雷阵雨': weatherIcon = 'icon-tianqi2'
                break;
                case '晴': weatherIcon = 'icon-tianqi1'
                break;
                default: weatherIcon = 'icon-weather'
            }
            resolve({
                temperature:res.wendu,
                weatherIcon:weatherIcon,
             	pm25:res.pm25 || '0',
                quality:res.quality || '',
                type:res.forecast[0].type,
                lowTem:res.forecast[0].low.substring(3),
                highTem:res.forecast[0].high.substring(3),
                wind:res.forecast[0].fx,
                forecast:[
                    res.yesterday,
                    res.forecast[0],
                    res.forecast[1],
                    res.forecast[2],
                    res.forecast[3],
                    res.forecast[4],
                ]
            })
    	})
    	.catch((e)=>{
    		reject(e.toString());
    	})
    })
}
