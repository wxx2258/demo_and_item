// 引入所需要的第三方包
const superagent = require('superagent');
const cheerio = require('cheerio');
// const charset = require('superagent-charset');
let pageSize = 25;

const cookie = 'douban-fav-remind=1; __utmv=30149280.1131; douban-profile-remind=1; _ga=GA1.2.663478481.1590041878; ll="118282"; _vwo_uuid_v2=D5A6B88A177DB4B079765C33399D8E1F8|61165e24ec470481d44601ba9cf9be7e; gr_user_id=0b02dc77-361d-4b24-acda-7ae93ae87c5c; bid=CJIYHWZ3pBQ; viewed="30231515_3354490_26860156"; __utmc=30149280; __utmz=30149280.1625104279.129.33.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); _pk_ref.100001.8cb4=%5B%22%22%2C%22%22%2C1625214446%2C%22https%3A%2F%2Fwww.google.com.hk%2F%22%5D; _pk_ses.100001.8cb4=*; ap_v=0,6.0; __utma=30149280.663478481.1590041878.1625125497.1625214446.131; dbcl2="11315967:sPnfHlZ8Kqc"; ck=0mgI; push_noty_num=0; push_doumail_num=0; __utmt=1; _pk_id.100001.8cb4=78ac3c589a41fc10.1590041877.120.1625215303.1625125496.; __utmb=30149280.115.5.1625215302723';
// charset(superagent); //设置字符
let mockHeader = {
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  // 'Accept-Encoding': ' deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Cookie': cookie,
  Host: 'www.douban.com',
  Pragma: 'no-cache',
  Referer: 'https://www.douban.com/group/nanshanzufang/discussion?start=50',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': ' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
}
let mockHeaderKeyArr = Object.keys(mockHeader);
let getHotNews = (res) => {
  let result = [];
  // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。

  /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
     以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
   */

  let $ = cheerio.load(res.text);

  // 找到目标数据所在的页面元素，获取数据
  $('.olt tr .title a').each((idx, ele) => {
  // $('.olt tr .title').each((idx, ele) => {
    // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
    // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
    // console.log('$(ele).attr: ', $(ele).attr('title').indexOf('深大'));
    if ($(ele).attr('title').indexOf('海滨小区') > -1  
        || $(ele).attr('title').indexOf('阳光粤海') > -1  
        // || $(ele).attr('title').indexOf('两室') > -1  
        // || $(ele).attr('title').indexOf('厚德品园') > -1  
        // || $(ele).attr('title').indexOf('学林雅院') > -1  
        // || $(ele).attr('title').indexOf('锦隆花园') > -1  
        // || $(ele).attr('title').indexOf('海文花园') > -1  
        // || $(ele).attr('title').indexOf('宏观苑') > -1 
        // || $(ele).attr('title').indexOf('南山书城') > -1
        // || $(ele).attr('title').indexOf('南油') > -1
        // || $(ele).attr('title').indexOf('南油西') > -1
        // || $(ele).attr('title').indexOf('荔林') > -1
        // || $(ele).attr('title').indexOf('9号线') > -1
        // || $(ele).attr('title').indexOf('深大南') > -1
        // || $(ele).attr('title').indexOf('粤海门') > -1
        // || $(ele).attr('title').indexOf('红树湾') > -1
        // || $(ele).attr('title').indexOf('阳光科创') > -1
        // || $(ele).attr('title').indexOf('桃园') > -1
        // || $(ele).attr('title').indexOf('大新') > -1
      ) {
    // if($(ele).attr('title').indexOf('前海枫叶大厦') > -1 ){

      let news = {
        title: $(ele).attr('title'), // 获取新闻标题
        href: $(ele).attr('href') // 获取新闻网页链接
      };
      result.push(news) // 存入最终结果数组
    }

  });

  return result;
};

function getData(url, index) {
  console.log('url: ', url);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      superagent.get(url)
        .set(mockHeaderKeyArr[0], mockHeader[mockHeaderKeyArr[0]])
        .set(mockHeaderKeyArr[1], mockHeader[mockHeaderKeyArr[1]])
        .set(mockHeaderKeyArr[2], mockHeader[mockHeaderKeyArr[2]])
        .set(mockHeaderKeyArr[3], mockHeader[mockHeaderKeyArr[3]])
        .set(mockHeaderKeyArr[4], mockHeader[mockHeaderKeyArr[4]])
        .set(mockHeaderKeyArr[5], mockHeader[mockHeaderKeyArr[5]])
        .set(mockHeaderKeyArr[6], mockHeader[mockHeaderKeyArr[6]])
        .set(mockHeaderKeyArr[7], mockHeader[mockHeaderKeyArr[7]])
        .set(mockHeaderKeyArr[8], mockHeader[mockHeaderKeyArr[8]])
        .set(mockHeaderKeyArr[9], mockHeader[mockHeaderKeyArr[9]])
        .set(mockHeaderKeyArr[10], mockHeader[mockHeaderKeyArr[10]])
        .set(mockHeaderKeyArr[11], mockHeader[mockHeaderKeyArr[11]])
        .set(mockHeaderKeyArr[12], mockHeader[mockHeaderKeyArr[12]])
        .set(mockHeaderKeyArr[13], mockHeader[mockHeaderKeyArr[13]])
        // .set(mockHeaderKeyArr[14], mockHeader[mockHeaderKeyArr[14]])
        // .charset('gbk')
        .end((err, res) => {
          if (err) {
            // 如果访问失败或者出错，会这行这里
            // reject({
            //   msg: `热点新闻抓取失败 - ${err}`
            // })
            resolve([{
              message: `page ${index / pageSize} 页获取失败 ${err.toString()}`
            }])
          } else {
            // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
            // 抓取热点新闻数据
            resolve(getHotNews(res));
          }
        });
    }, 100);

  })
}

async function getDatas(params = {
  pagenum: 1,
  count: 10
}) {
  pageSize = 50;
  const {pagenum, count} = params;
  console.log('pagenum, count: ', pagenum, count);
  // const groupId = '498004';  // 深圳南山租房团
  // const groupId = '598241'; // 深圳南山租房

  const groupId = '637638'; // 圳租房-南山租房★深圳南山租房
  // const groupId = 'nanshanzufang';
  let url = `https://www.douban.com/group/${groupId}/discussion?start=`;
  // let url = `https://www.douban.com/group/?start=`;
  let start = pagenum * pageSize;
  let result = [];
  for (let index = 0; index < count; index++) {
    const temp = await getData(`${url}${start + index * pageSize}`, pagenum + index);
    // console.log('index: ', index, count,temp);
    result = result.concat(temp);
  }
  return result;
}

module.exports = getDatas;